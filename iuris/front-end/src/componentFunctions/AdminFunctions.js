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

export const getDocumentsFalse = frontOfficeId =>{
  return fetch("http://localhost:8080/getDocsInFalse",{
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


export const updateDocumentsIn = data =>{
    return fetch("http://localhost:8080/updateDocumentIn",{
        method:"POST",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json",
          Authorization:`Bearer ${isAuthenticated().token}`
        },
        body:JSON.stringify(data)
      })
      .then(response=>{
        return response.json()
      })
      .catch(err=>{
        console.log(err)
    })
}

export const updateDocumentsOut = data =>{
    return fetch("http://localhost:8080/updateDocumentOut",{
        method:"POST",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json",
          Authorization:`Bearer ${isAuthenticated().token}`
        },
        body:JSON.stringify(data)
      })
      .then(response=>{
        return response.json()
      })
      .catch(err=>{
        console.log(err)
    })
}
export const approveDocument = data =>{
  return fetch("http://localhost:8080/approveDocument",{
      method:"POST",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
        Authorization:`Bearer ${isAuthenticated().token}`
      },
      body:JSON.stringify(data)
    })
    .then(response=>{
      return response.json()
    })
    .catch(err=>{
      console.log(err)
  })
}

export const rejectDocument = data =>{
  return fetch("http://localhost:8080/deleteDoc",{
      method:"DELETE",
      headers:{
        Accept:"application/json",
        "Content-Type":"application/json",
        Authorization:`Bearer ${isAuthenticated().token}`
      },
      body:JSON.stringify(data)
    })
    .then(response=>{
      return response.json()
    })
    .catch(err=>{
      console.log(err)
  })
}
