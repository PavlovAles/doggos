import React, { FC } from 'react';
import Image from 'next/image';
import { CloseOutlined, HeartOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { isFavorite, TFavoriteDoggo, TRandomDoggo } from '../../types/doggo';
import { deleteDoggo, postDoggo } from '../../utils/api';

import style from './DoggoCard.module.scss';

export type CardProps = {
  doggo: TRandomDoggo | TFavoriteDoggo;
  onFavoriteDelete?: (id: string) => void;
}

const DoggoCard: FC<CardProps> = ({ doggo, onFavoriteDelete }) => {

  const handleLikeClick = () => {

    if (isFavorite(doggo) && onFavoriteDelete) {
      deleteDoggo(doggo.id);
      onFavoriteDelete(doggo.id);
      return;
    }

    postDoggo({ image_id: doggo.id, sub_id: 'user-0' });
  }

  return (
    <div className={style.card}>
      <Image
        className={style.image}
        width={250}
        height={450}
        src={isFavorite(doggo) ? doggo.image.url : doggo.url}
        alt='doggo'
      />
      {
        isFavorite(doggo) ?
          <Button icon={<CloseOutlined />} shape='round' size='large' onClick={handleLikeClick} /> :
          <Button icon={<HeartOutlined />} shape='round' size='large' onClick={handleLikeClick} />
      }
    </div>
  )
}

export default DoggoCard;
