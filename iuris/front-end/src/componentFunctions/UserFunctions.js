export const isAuthenticated =() =>{
    if(typeof window=="undefined"){
        return false;
    }
    if(localStorage.getItem("jwt")){
        return JSON.parse(localStorage.getItem("jwt"));
    }
    else return false;
}

export const signin = user =>{
    return fetch("http://localhost:8080/login",{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        body: JSON.stringify(user)
    })
    .then(response =>{
        return response.json()
    })
    .catch(err => console.log(err))
};