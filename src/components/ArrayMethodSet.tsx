import { bicycles } from "../data-base/BicycleDataBase";    

export function ArrayMethodSet(){
    const filtersStatus = [... new Set(bicycles.map(bicycle => bicycle.status))]
    return filtersStatus
       
}