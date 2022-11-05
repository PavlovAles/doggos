import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Image from 'next/image';
import React, { FC } from 'react';
import Breeds from '../../pages/breeds';
import { TBreed } from '../../types/doggo';
import parseBreedInfo from '../../utils/parseBreedInfo';

import styles from './BreedInfo.module.scss';

export interface DataType {
  key: string;
  prop: string;
  value: string;
}

const columns: ColumnsType<DataType> = [
  {
    dataIndex: 'prop',
    key: 'prop',
  },
  {
    dataIndex: 'value',
    key: 'value',
  },
];

interface IBreedInfoProps {
  breed: TBreed;
}

const BreedInfo: FC<IBreedInfoProps> = ({ breed }) => (
  <article className={styles.article}>
    <Table
      columns={columns}
      dataSource={parseBreedInfo(breed)}
      pagination={false}
      showHeader={false}
    />
    <div className={styles['image-container']}>
      <Image src={breed.image.url} fill alt='breed representative' />
    </div>
  </article>
);

export default BreedInfo;