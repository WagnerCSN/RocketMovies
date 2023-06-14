import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api"

export const AuthContext = createContext({});
    

function AuthProvider({children}){
    const [data, setData] = useState({});

    function signOut(){
        localStorage.removeItem("@rocketmovie:user");
        localStorage.removeItem("@rocketmovie:token");
        setData({});
    }

    async function updateProfile({user, avatarFile}){
        try {
            if(avatarFile){
                const fileUploadForm = new FormData();
                fileUploadForm.append("avatar", avatarFile);

                const response = await api.patch("/users/avatar", fileUploadForm);
                user.avatar = response.data.avatar;
            }
            await api.put("/users", user );
            
            localStorage.setItem("@rocketmovie:user", JSON.stringify(user));
            setData({user, token: data.token});
            alert("Perfil atualizado com sucesso!");
            
        } catch (error) {
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("Não foi possível atualizar o perfil!");
            }
        }
    }
   

    async function signIn({email, password}){
        try{
            const response = await api.post("/session", { email, password});
            const {user, token} = response.data;
            
            localStorage.setItem("@rocketmovie:user", JSON.stringify(user));
            localStorage.setItem("@rocketmovie:token", token);

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            setData({user, token});
        }catch(error){
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("Não foi possível entrar!");
            }
        }
    }

    useEffect(() =>{
        const user = localStorage.getItem("@rocketmovie:user");
        const token = localStorage.getItem("@rocketmovie:token");

        if(user && token){
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            })
        }
    },[])

    return(
        <AuthContext.Provider value={{signIn, updateProfile, user: data.user, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth }
