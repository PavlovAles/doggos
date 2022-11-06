import React, { FC } from 'react'
import { TFavoriteDoggo } from '../../types/doggo';
import DoggoCard from '../DoggoCard/DoggoCard';

import styles from './FavoriteList.module.scss';

interface FavoriteListProps {
  doggos: TFavoriteDoggo[];
  onFavoriteDelete: (id: string) => void
}

const FavoriteList: FC<FavoriteListProps> = ({ doggos, onFavoriteDelete }) => (
  <ul className={styles.container}>
    {doggos.map(item => (
      <DoggoCard doggo={item} key={item.id} onFavoriteDelete={onFavoriteDelete} />
    ))}
  </ul>
)

export default FavoriteList;
