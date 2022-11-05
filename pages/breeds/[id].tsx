import { FC } from 'react';
import Head from 'next/head'
import { GetStaticPaths, GetStaticProps } from 'next';

import { TBreed } from '../../types/doggo';
import { cacheBreeds, getBreeds, getCachedBreed } from '../../utils/api';

import utilStyles from 'styles/utils.module.scss';
import BreedSearch from '../../components/BreedSearch/BreedSearch';
import BreedInfo from '../../components/BreedInfo/BreedInfo';
import { PHASE_PRODUCTION_BUILD } from 'next/dist/shared/lib/constants';
import Link from 'next/link';

interface IBreedProps {
  breed: TBreed
}

const Breed: FC<IBreedProps> = ({ breed }) => {
  return (
    <>
      <Head>
        <title>Doggos | Breeds</title>
      </Head>
      <section className={utilStyles.section}>
        <h1 className={utilStyles.title}>Find your favorite doggo by breed</h1>
        <Link href='/breeds' legacyBehavior >
          &larr; Back to breeds
        </Link>
        <BreedInfo breed={breed} />
      </section>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const breeds = await getBreeds();

  if (process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD) {
    await cacheBreeds(breeds.data)
  }

  const paths = breeds.data.map((breed) => ({
    params: {
      id: breed.name.toLocaleLowerCase().split(' ').join('_'),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps<IBreedProps, { id: string }> = async ({ params }) => {
  const nameToFind = params?.id.toLocaleLowerCase().split('_').join(' ');
  const breed = await getCachedBreed(nameToFind as string);

  if (!breed) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      breed,
    },
  };
}

export default Breed;