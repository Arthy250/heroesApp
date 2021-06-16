import {heroes} from '../data/Heroes';

export const getheroesById = (id) => {

  return heroes.find( heroe => heroe.id === id);

}