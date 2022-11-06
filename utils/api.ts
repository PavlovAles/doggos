import fs from 'fs/promises';
import path from 'path';
import axios from 'axios';
import { TBreed, TDoggoToPost, TFavoriteDoggo, TRandomDoggo } from '../types/doggo';

const API_KEY =
  'live_LUURyyogAU5YmTih8fKnVOB2KyF1ABsbspN7u9WSTx0d3LieFcAHZA25AfPtU7mc';
const BASE_URL = 'https://api.thedogapi.com/v1';
const breedsPath = path.join(process.cwd(), 'breeds/breeds.json');

export function getRandomDoggos() {
  return axios<TRandomDoggo[]>({
    url: 'images/search',
    baseURL: BASE_URL,
    headers: {
      'x-api-key': API_KEY,
    },
    params: {
      limit: 10,
      size: 'medium',
      order: 'RANDOM',
    },
  });
}

export function getFavoriteDoggos() {
  return axios<TFavoriteDoggo[]>({
    url: 'favourites',
    baseURL: BASE_URL,
    headers: {
      'x-api-key': API_KEY,
    },
  });
}

export function getBreeds() {
  return axios<TBreed[]>({
    url: 'breeds',
    baseURL: BASE_URL,
    headers: {
      'x-api-key': API_KEY,
    },
  });
}

export const cacheBreeds = async (breeds: TBreed[]) => {
  return await fs.writeFile(
    path.join(process.cwd(), 'breeds.db'),
    JSON.stringify(breeds)
  );
};

export const getCachedBreed = async (
  nameToFind: string
): Promise<TBreed | null | undefined> => {
  const data = await fs.readFile(path.join(process.cwd(), 'breeds.db'));
  const breeds: TBreed[] = JSON.parse(data as unknown as string);

  return breeds.find((breed) => breed.name.toLocaleLowerCase() === nameToFind);
};

export function postDoggo(data: TDoggoToPost) {
  return axios({
    url: 'favourites',
    baseURL: BASE_URL,
    method: 'POST',
    headers: {
      'x-api-key': API_KEY,
    },
    data,
  });
}

export function deleteDoggo(favoriteId: string) {
  return axios({
    url: `favourites/${favoriteId}`,
    baseURL: BASE_URL,
    method: 'DELETE',
    headers: {
      'x-api-key': API_KEY,
    },
  });
}