import { bicycles } from "../data-base/BicycleDataBase";    

export function ArrayMethodSet(){
    const uniqueStatus = [...new Set(bicycles.map( bicycle =>  bicycle.status))]

     

    return (
        
        <div>
        <h3>Array method - set </h3>
        {uniqueStatus.map((unique,index) => (
                    <p key={index}> {unique}</p>

        ))}
        </div>
       
        
        )
    
       
}