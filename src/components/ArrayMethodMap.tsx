import { bicycles } from "../data-base/BicycleDataBase";    

export function ArrayMethodMap(){
    return (
        <div>
            <ul>
                {bicycles.map((bicycle, index) => (
                    <li key={index}>{bicycle.name}{bicycle.owner}</li>
                ))}
            </ul>
        </div>
    );
}