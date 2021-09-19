import { BUY_PHONE } from "./type"

//definition des actions du composant phone component
export const buyPhone =  (totalPhone)=>{
    return {
        type:BUY_PHONE,
        // le payload unmdes Element a juter sur une fonction
        payload:totalPhone,
    }
}