import { TBreed } from '../types/doggo';

type DataType = {
  prop: string,
  value: string,
}

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
      prop: 'Name',
      value: breed.name
    },
    {
      prop: 'Origin',
      value: breed.origin,
    },
    {
      prop: 'Weight, kg',
      value: breed.weight.metric
    },
    {
      prop: 'Height, sm',
      value: breed.height.metric
    },
    {
      prop: 'Purpose',
      value: breed.bred_for
    },
    {
      prop: 'Life span',
      value: breed.life_span
    },
    {
      prop: 'Temperament',
      value: breed.temperament
    },
  ];
}