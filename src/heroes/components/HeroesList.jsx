//PRIMERO IMPORTAMOS ELEMENTOS DE REACT, LUEGO LOS COMPONENTS Y ABAJO LAS FUNCIONES O HELPERS
import { useMemo } from "react";
import { HeroCard } from "./HeroCard";
import { getHeroesByPublisher } from "../helpers";

export const HeroesList = ({publisher}) => {
    const getHeroes= useMemo(()=> getHeroesByPublisher(publisher),[publisher]);

  return (
    <div className="row rows-cols-1 row-cols-md-3 g-3">

        {getHeroes.map(hero=>

          <HeroCard {...hero}
            key={hero.id}
          />
        )}
       
    </div>
  )
}
