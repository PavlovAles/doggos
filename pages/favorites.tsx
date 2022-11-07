import Head from 'next/head'
import { useEffect, useState } from 'react';
import { useUserContext } from '../context/CurrentUserContext';
import FavoriteList from '../components/FavoriteList/FavoriteList';
import utilStyles from '../styles/utils.module.scss';
import { TFavoriteDoggo } from '../types/doggo';
import { getFavoriteDoggos } from '../utils/api';
import { useRouter } from 'next/router';

export default function Favorites() {
  const [doggos, setDoggos] = useState<TFavoriteDoggo[]>([]);
  const { currentUser, setCurrentUser } = useUserContext();
  const router = useRouter();

  const fetchDoggos = async () => {
    const doggos = await getFavoriteDoggos();
    setDoggos(doggos.data);
  }

  useEffect(() => {
    if (!currentUser) {
      router.push('/login');
    }
    
    fetchDoggos();
  }, [  ])

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
        <h1 className={utilStyles.title}>{`Hey, ${currentUser?.name}! Here are your favorite doggos`}</h1>
        <FavoriteList doggos={doggos} onFavoriteDelete={deleteDoggoHandler} />
      </section>
    </>
  )
}
