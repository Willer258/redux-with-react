import { BUY_PHONE } from "./type"

//definition des actions du composant phone component
export const buyPhone =  (totalPhone)=>{
    return {
        type:BUY_PHONE,
        payload:totalPhone,
    }
}