import React, { FC } from 'react';
import { Form, Select } from 'antd';
import { TBreed, TLink } from '../../types/doggo';
const { Option } = Select;

import styles from './BreedSearch.module.scss';
import { useRouter } from 'next/router';

interface IBreedSearchProps {
  breeds: TLink[]
}

const BreedSearch: FC<IBreedSearchProps> = ({ breeds }) => {
  const router = useRouter();

  const handleBreedSelect = (value: string) => {
    router.push(`/breeds/${value}`);
  }

  return (
    <div className={styles.container}>
      <Form>
        <Select
          showSearch
          placeholder="Breed"
          optionFilterProp="children"
          defaultValue=''
          onChange={handleBreedSelect}
          filterOption={(input, option) =>
            (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
          }
        >
          {breeds.map(breed => (
            <Option key={breed.link} value={breed.link}>{breed.name}</Option>
          ))}
        </Select>
      </Form>
    </div>
  )
}

export default BreedSearch

