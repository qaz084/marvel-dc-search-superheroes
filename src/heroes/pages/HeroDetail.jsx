import { useMemo, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers";

export const HeroDetail = () => {

  const {id}= useParams();

  const heroById= useMemo(()=>getHeroById(id),[id] ); 

  if(!heroById){
    return <Navigate to="/marvel"/>
  }

  let imgHero=`/assets/heroes/${id}.jpg`;

  const navigate= useNavigate();



   
     
  const onBack=(e)=> {
    
    navigate(-1)
  }

  return (
    <div className="row mt-5">
      <div className="col-4">
        <img src={imgHero}
         alt={heroById.superhero}
         className={`img-thumbnail animate__animated animate__fadeInLeft`}
          />
      </div>
      

      <div className="col-8">
        <h1>{heroById.superhero}</h1>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"><b>Alter ego: </b> <i>{heroById.alter_ego}</i></li>
          <li className="list-group-item"><b>Publisher: </b> <i>{heroById.publisher}</i></li>
          <li className="list-group-item"><b>First appearance: </b> <i>{heroById.first_appearance}</i></li>
          <li className="list-group-item"><b>Characters: </b> <i>{heroById.characters}</i></li>
        </ul>
  

        <button 
        className="btn btn-outline-dark mt-4"
        onClick={onBack}
        >Back</button>
      </div>
    </div>
  )
}
