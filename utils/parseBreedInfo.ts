import { DataType } from '../components/BreedInfo/BreedInfo';
import { TBreed } from '../types/doggo';

export default function parseBreedInfo (breed: TBreed): DataType[] {
  // const res: DataType[] = [];
  // let key: keyof TBreed;
  // for (key in breed) {
  //   if (key === 'weight' || key === 'height') {
  //     res.push({ prop: key, value: breed[key]['metric'] });
  //     continue;
  //   }
  //   res.push({ prop: key, value: breed[key] })
  // }
  //return res;
  return [
    {
      key: 'name',
      prop: 'Name',
      value: breed.name
    },
    {
      key: 'origin',
      prop: 'Origin',
      value: breed.origin,
    },
    {
      key: 'weight',
      prop: 'Weight, kg',
      value: breed.weight.metric
    },
    {
      key: 'height',
      prop: 'Height, sm',
      value: breed.height.metric
    },
    {
      key: 'purpose',
      prop: 'Purpose',
      value: breed.bred_for
    },
    {
      key: 'lifeSpan',
      prop: 'Life span',
      value: breed.life_span
    },
    {
      key: 'temperament',
      prop: 'Temperament',
      value: breed.temperament
    },
  ];
}