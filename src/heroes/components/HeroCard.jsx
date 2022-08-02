import { Link } from "react-router-dom";

export const HeroCard = ({superhero,id,alter_ego,characters,first_appearance}) => {

    const heroImageUrl=`../../assets/heroes/${id}.jpg`;

  return (
    <div className="card-container animate__animated animate__fadeIn">
        <div className="card ">
            <div className="row no-gutters">

                <div className="img-container ">
                    <Link to={`/heroDetail/${id}`}>
                        <img className="card-img-top"
                        src={heroImageUrl}
                        alt={superhero}/>
                    </Link>
                </div>

                <div className="col-8">

                    <div className="card-body bg-white ">

                        <h2 className="card-title">
                            {superhero}
                        </h2>
                        <p className="card-text fs-4">
                        {alter_ego}
                        </p>

                        {/* ESTO SE PUEDE HACER IGUAL CREANDO UN COMPONENTE DENTRO DE ESTE ARCHIVO, QUE NO SE EXPORTE. */}
                        {alter_ego !== characters &&  <p className="card-text ">
                        {characters}
                        </p> }

                        <p className="card-text fs-4">
                        <small className="text-muted">{first_appearance}</small>
                        </p>

                        <Link className="fs-5" to={`/heroDetail/${id}`}>
                            Details...
                        </Link>
                       
                    </div>
                </div>
            </div>

        </div>
   
    
    </div>
  )
}
