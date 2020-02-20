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

  export const frontOfficeDetails = details =>{
    return fetch("http://localhost:8080/addNewDocs",{
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
        Authorization:`Bearer ${isAuthenticated().token}`
      },
      body:JSON.stringify(details)
    })
    .then(response=>{
      return response.json()
    })
    .catch(err=>{
      console.log(err)
    })
  }

  export const frontOfficeAddDocument = document=>{
    return fetch("http://localhost:8080/finalDocsAdd",{
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
        Authorization:`Bearer ${isAuthenticated().token}`
      },
      body:JSON.stringify(document)
    })
    .then(response=>{
      return response.json()
    })
    .catch(err=>console.log(err))
  }

  export const FileNameExists = file =>{
    return fetch("http://localhost:8080/fileNameExists",{
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
        Authorization:`Bearer ${isAuthenticated().token}`
      },
      body:JSON.stringify(file)
    })
    .then(response=>{
      return response.json()
    })
    .catch(err=>{
      console.log(err)
    })
  }


  export const frontOfficeAddPendingDocument = document=>{
    return fetch("http://localhost:8080/updatePendingDocs",{
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
        Authorization:`Bearer ${isAuthenticated().token}`
      },
      body:JSON.stringify(document)
    })
    .then(response=>{
      return response.json()
    })
    .catch(err=>console.log(err))
  }
