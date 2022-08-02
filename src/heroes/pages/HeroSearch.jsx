import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForms";
import queryString from 'query-string';
import { getHeroesByName } from "../helpers";
import { HeroCard } from "../components/HeroCard"

export const HeroSearch = () => {

  const navigate= useNavigate();
  const location=useLocation();
  const {q=''}= queryString.parse(location.search)
  const heroes= getHeroesByName(q);
  const showSearch=(q.length===0);
  const showError=(q.length!==0)&&heroes.length===0;
  

  const{onInputChange,searchText}= useForm({
    searchText:q,
   });

  const handleOnSubmit=(e)=>{
      e.preventDefault();
      // if(searchText.trim().length<=1)return;

    navigate(`?q=${searchText}`);

   }

  return (
    <>
       {/* <h1>Search</h1>
       <hr /> */}
       <div className="col ">
       <img className="mt-4 " src="assets/heroes/logologin.png" alt="Logo Marvel-DC" style={{width:200}}/>
         <div className="col-5 mt-5">
          <h4>
            Search:
          </h4>
            <form onSubmit={handleOnSubmit}>
         
              <input type="search"           placeholder="Search a hero..."
                  className="form-control"
                  name="searchText"
                  onChange={onInputChange}
                  value={searchText}
                />
                <button 
                onClick={handleOnSubmit}
                className="btn btn-outline-dark mt-4 mb-4">
                  Search
                </button>
            </form>
         </div>
         <div className="col-7">
              <h4>Results:</h4>

              {/* {
                 ( q==='')
                 ? <div className="alert alert-primary">
                Search a Hero
              </div>
              :(heroes.length===0)
              &&  <div className="alert alert-danger">
                There`s no results for <b>{q}</b>
              </div>

              }
             */}

             
              <div className="alert alert-primary animate__animated animate__headShake"
              style={{display: showSearch?'':'none'}}>
                Search a Hero
              </div>

              <div className="alert alert-danger animate__animated animate__headShake"
              style={{display: showError?'':'none'}}>
                There`s no results for <b>{q}</b>
              </div>
             
             
             
                {
                heroes.map(hero => (
                  <HeroCard 
                  {...hero}
                  key={hero.id} />
                )

              )
                }
              
         </div>
       </div>
    </>
  )
}
