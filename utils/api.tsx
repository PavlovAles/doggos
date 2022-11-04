import axios from 'axios';
import { TBreed, TRandomDoggo } from '../types/doggo';

const API_KEY = 'live_LUURyyogAU5YmTih8fKnVOB2KyF1ABsbspN7u9WSTx0d3LieFcAHZA25AfPtU7mc';
const BASE_URL = 'https://api.thedogapi.com/v1';

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

export function getBreeds() {
  return axios<TBreed[]>({
    url: 'breeds',
    baseURL: BASE_URL,
    headers: {
      'x-api-key': API_KEY,
    },
  });
}
