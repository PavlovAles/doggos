export type Link = {
  name: string,
  link: string
}


export type TBreed = {
  id: string;
  name: string;
  origin: string;
  bred_for: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  reference_image_id: string;
  weight: {
    imperial: string;
    metric: string;
  };
  height: {
    imperial: string;
    metric: string;
  };
  image: {
    url: string;
  };
};

export type TRandomDoggo = {
  breeds: TBreed[];
  id: string;
  url: string;
  width: number;
  height: number;
};

export type TFavoriteDoggo = {
  id: string;
  user_id: string;
  image_id: string;
  sub_id: string;
  image: {
    id: string;
    url: string;
  };
};

export type TDoggoToPost = {
  image_id: string;
  sub_id: string;
};

export function isFavorite(
  doggo: TRandomDoggo | TFavoriteDoggo
): doggo is TFavoriteDoggo {
  if ('sub_id' in doggo && 'image_id' in doggo && 'image' in doggo) {
    return true;
  }
  return false;
}
