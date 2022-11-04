import React, { FC } from 'react';
import { CloseOutlined, HeartOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { isFavorite, TFavoriteDoggo, TRandomDoggo } from '../../types/doggo';

import style from './DoggoCard.module.scss';
import Image from 'next/image';

export type CardProps = {
  doggo: TRandomDoggo | TFavoriteDoggo;
}

const DoggoCard: FC<CardProps> = ({ doggo }) => {

  const handleLikeClick = () => { }
  //   if (isFavorite(doggo)) {
  //     dispatch(deleteFavoriteDoggo(doggo.id));
  //     return;
  //   }

  //   postDoggo({ image_id: doggo.id, sub_id: 'user-0' });
  // }

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
