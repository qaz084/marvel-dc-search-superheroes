import { heroes } from "../data/heroesData"

export const getHeroById = (id) => heroes.find(hero => hero.id === id);
 

