import { HeroesList } from "../components/HeroesList"

export const MarvelPages = () => {
  const publisher='Marvel Comics';
  return (
   
<>
    <h1>Marvel Comics</h1>
    <hr />
    <HeroesList publisher={publisher}/>
</>
  )
}
