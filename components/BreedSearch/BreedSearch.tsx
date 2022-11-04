import React, { FC } from 'react';
import { Form, Select } from 'antd';
import { TBreed } from '../../types/doggo';
const { Option } = Select;

import styles from './BreedSearch.module.scss';

interface IBreedSearchProps {
  breeds: TBreed[]
}

const BreedSearch: FC<IBreedSearchProps> = ({ breeds }) => {
  return (
    <div className={styles.container}>
      <Form>
        <Select
          showSearch
          placeholder="Breed"
          optionFilterProp="children"
          defaultValue=''
          // onChange={handleBreedSelect}
          filterOption={(input, option) =>
            (option!.children as unknown as string).toLowerCase().includes(input.toLowerCase())
          }
        >
          <Option value=''>Any</Option>
          {breeds.map(breed => (
            <Option key={breed.id} value={breed.name}>{breed.name}</Option>
          ))}
        </Select>
      </Form>
    </div>
  )
}

export default BreedSearch

