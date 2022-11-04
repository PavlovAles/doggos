import { FC } from 'react';
import Head from 'next/head'
import { GetStaticProps } from 'next';

import { TBreed } from '../types/doggo';
import { getBreeds } from '../utils/api';

import utilStyles from '../styles/utils.module.scss';
import BreedSearch from '../components/BreedSearch/BreedSearch';

interface IBreedsProps {
  breeds: TBreed[]
}

const Breeds: FC<IBreedsProps> = ({ breeds }) => {
  return (
    <>
      <Head>
        <title>Doggos | Breeds</title>
      </Head>
      <section className={utilStyles.section}>
        <h1 className={utilStyles.title}>Find your favorite doggo by breed</h1>
        <BreedSearch breeds={breeds} />
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps<IBreedsProps> = async () => {
  const breeds = await getBreeds();
  return {
    props: {
      breeds: breeds.data,
    },
  };
}

export default Breeds;