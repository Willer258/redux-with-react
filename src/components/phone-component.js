import React from "react";
import phone from "../image/image.jpg";
import { buyPhone } from "../redux/phone/actionPhone";
import {useSelector,useDispatch} from 'react-redux'
function PhoneComponent() {


  //Definition du hook use selector
  const phones = useSelector(state => state.phones)

  //Definition du hook useDispatch 
  const dispatch = useDispatch(buyPhone())

  return (
    <div className="p-5 text-center">
      <img src={phone} alt="phone" />
      <p className="p-5">
        Dispos: <span>{phones}</span>
      </p>
      <button
        onClick={()=>dispatch(buyPhone())}
        className="p-2 bg-green-200 hover:bg-green-500"
      >
        Acheter
      </button>
    </div>
  );
}


export default PhoneComponent;


//use Selector est un hook de redux qui permet de recuperer le state conenu dans le reducer
