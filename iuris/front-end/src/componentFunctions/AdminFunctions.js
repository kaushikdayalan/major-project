import {isAuthenticated} from './UserFunctions'


export const getDocuments = frontOfficeId =>{
    return fetch("http://localhost:8080/getDocs",{
        method:"POST",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json",
          Authorization:`Bearer ${isAuthenticated().token}`
        },
        body:JSON.stringify(frontOfficeId)
      })
      .then(response=>{
        return response.json()
      })
      .catch(err=>{
        console.log(err)
    })
}