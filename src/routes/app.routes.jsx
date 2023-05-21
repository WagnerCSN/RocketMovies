import { Routes, Route} from "react-router-dom";
import { Home } from "../pages/Home"
import { MoviePreview } from "../pages/MoviePreview"
import { CreateMovies } from "../pages/CreateMovies"
import { Profile } from "../pages/Profile"

export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/preview" element={<MoviePreview/>}/>
            <Route path="/create" element={<CreateMovies/>}/>
        </Routes>
    )
}