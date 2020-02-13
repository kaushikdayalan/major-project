import {isAuthenticated} from '../componentFunctions/UserFunctions'  

export const list = ()=>{
    return fetch("http://localhost:8080/findConsultant",{
        method:"GET"
    })
    .then(response=>{
        return response.json()  
    })
    .catch(err=>console.log(err));
}   

export const getClientData = client =>{
    return fetch("http://localhost:8080/findClient",{
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
        Authorization:`Bearer ${isAuthenticated().token}`
      },
      body:JSON.stringify(client)
    })
    .then(response=>{
      return response.json()
    })
    .catch(err=>{
      console.log(err)
    })
  }