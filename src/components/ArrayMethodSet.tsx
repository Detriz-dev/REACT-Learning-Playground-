import { bicycles } from "../data-base/BicycleDataBase";    

export function ArrayMethodSet(){
    const uniqueStatus = [...new Set(bicycles.map( bicycle =>  bicycle.status))]

     

    return (
        uniqueStatus.map((unique,index) => (

         
            <p key={index}> {unique.status}</p>

        )))
    
       
}