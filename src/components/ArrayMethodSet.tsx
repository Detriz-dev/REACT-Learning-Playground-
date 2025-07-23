import { bicycles } from "../data-base/BicycleDataBase";    

export function ArrayMethodSet(){
     
    return (

        [... new Set(bicycles.map( (bicycle, index) => (

        <div id={index}> {bicycle.status} </div>
            
        )
        )
        )
    ]


    ) 
       
}