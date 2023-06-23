import { Routes, Route } from "react-router-dom"
import { SignIn } from "../pages/SignIn"
import { SignUp } from "../pages/SignUp"
// import { Layout } from "../pages/Layout"
export function AuthRoutes(){
    return(
        <Routes>
            {/* <Route path="/" element={<Layout/>}/> */}
            <Route path="/" element={<SignIn/>}/>
            <Route path="/register" element={<SignUp/>}/>
        </Routes>
    )
}