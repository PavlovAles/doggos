import { FC } from 'react';
import Head from 'next/head'
import { GetStaticProps } from 'next';
import { List, Space } from 'antd';
import BreedSearch from '../../components/BreedSearch/BreedSearch';

import { TBreed, TLink } from '../../types/doggo';
import { getBreeds } from '../../utils/api';

import utilStyles from 'styles/utils.module.scss';
import Link from 'next/link';
import { link } from 'fs';

interface IBreedsProps {
  breeds: TBreed[]
}

const Breeds: FC<IBreedsProps> = ({ breeds }) => {

  const nameAndLinkList: TLink[] = breeds.map(
    item => ({
      name: item.name,
      link: item.name.toLowerCase().replaceAll(' ', '_'),
    })
  );

  return (
    <>
      <Head>
        <title>Doggos | Breeds</title>
      </Head>
      <section className={utilStyles.section}>
        <h1 className={utilStyles.title}>Find your favorite doggo by breed</h1>
        <BreedSearch breeds={nameAndLinkList} />
        <List
          dataSource={nameAndLinkList}
          style={{ width: '100%', maxWidth: '345px' }}
          renderItem={item => (
            <List.Item>
              <Link href={`breeds/${item.link}`}>{item.name}</Link>
            </List.Item>
          )}
        />
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