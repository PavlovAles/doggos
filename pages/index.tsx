import { FC, useState } from 'react';
import { Button, Spin } from 'antd';
import { GetStaticProps } from 'next';
import Head from 'next/head'
import Slider from '../components/Slider/Slider';

import { TRandomDoggo } from '../types/doggo';
import { getRandomDoggos } from '../utils/api';

import utilStyles from '../styles/utils.module.scss';

interface IHome {
  dailyDoggos: TRandomDoggo[]
}

const Home: FC<IHome> = ({ dailyDoggos }) => {
  const [doggos, setDoggos] = useState<TRandomDoggo[]>(dailyDoggos);
  const [loading, setLoading] = useState<boolean>(false);

  const setNewDoggos = () => {
    setLoading(true);
    getRandomDoggos()
      .then(res => {
        setDoggos(res.data);
        setLoading(false);
      })
  }

  return (
    <>
      <Head>
        <title>Doggos | Home</title>
      </Head>
      <section className={utilStyles.section}>
        <h1 className={utilStyles.title}>Todays random doggos</h1>
        {loading ?
          <Spin size='large' /> :
          <>
            <Slider doggos={doggos} />
            <Button onClick={setNewDoggos} style={{}}>
              Get new random doggos
            </Button>
          </>
        }
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const doggos = await getRandomDoggos();
  return {
    props: {
      dailyDoggos: doggos.data,
    },
  };
}

export default Home;