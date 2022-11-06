import Head from 'next/head'
import { useEffect, useState } from 'react';
import FavoriteList from '../components/FavoriteList/FavoriteList';
import utilStyles from '../styles/utils.module.scss';
import { TFavoriteDoggo } from '../types/doggo';
import { getFavoriteDoggos } from '../utils/api';

export default function Favorites() {
  const [doggos, setDoggos] = useState<TFavoriteDoggo[]>([]);

  useEffect(() => {
    fetchDoggos();
  }, [])

  const fetchDoggos = async () => {
    const doggos = await getFavoriteDoggos();
    setDoggos(doggos.data);
  }

  const deleteDoggoHandler = (id: string) => {
    const filteredDoggos = doggos.filter(item => item.id !== id);
    setDoggos(filteredDoggos);
  }

  return (
    <>
      <Head>
        <title>Doggos | Favorites</title>
      </Head>
      <section className={utilStyles.section}>
        <h1 className={utilStyles.title}>Your favorite doggos</h1>
        <FavoriteList doggos={doggos} onFavoriteDelete={deleteDoggoHandler} />
      </section>
    </>
  )
}
