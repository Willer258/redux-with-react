import React from "react";
import { connect } from "react-redux";
import phone from "../image/image.jpg";
function PhoneComponent(props) {
  return (
    <div className="p-5 text-center">
      <img src={phone} alt="phone" />
      <p className="p-5">
        Dispos: <span>{props.phones}</span>
      </p>
      <button className="p-2 bg-green-200 hover:bg-green-500">Acheter</button>
    </div>
  );
}


//A partir du provider la fonction mapStatetoProps recupere notre state dans le reducer pour nous le livrer en props
const mapStatetoProps = (state)=>{
  return {
    phones: state.phones  }
}
export default  connect(mapStatetoProps)(PhoneComponent);

// export default  connect(mapStatetoProps)(PhoneComponent); permet grace a redux surpasser notre composant


//NB 
// mapStatetoProps permet de recupere notre state dans le reducer

// Un composant d’ordre supérieur (Higher-Order Component ou HOC, NdT)
//  est une technique avancée de React qui permet de réutiliser la logique
//   de composants. 
// Les HOC ne font pas partie de l’API de React à proprement parler,
//  mais découlent de sa nature compositionnelle.

// Concrètement, un composant d’ordre supérieur est une fonction
//  qui accepte un composant et renvoie un nouveau composant.