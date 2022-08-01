import { Routes, Route, Link, Navigate } from "react-router-dom";
import { Navbar } from "../../ui";
import { DcPage, HeroDetail, HeroSearch, MarvelPages } from "../pages";


export const HeroesRoutes = () => {
  return (
    <>
        <Navbar/>
        <div className="container">
            <Routes>
                <Route path="marvel" element={<MarvelPages />} />
                <Route path="dc" element={<DcPage />} />
                <Route path="heroDetail/:id" element={<HeroDetail/>} />
                <Route path="heroSearch" element={<HeroSearch />} />
                <Route path="/" element={<Navigate to="/marvel" />} />
                {/* <Route path="/*" element={<Navigate to="/marvel" />} /> */}
            

            </Routes>
        </div>
    </>
  )
}
