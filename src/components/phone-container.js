import React, { useState } from "react";
import { connect } from "react-redux";
import phone from "../image/image2.png";
import { buyPhone } from "../redux/phone/actionPhone";

function PhoneContainer(props) {
  const [totalPhone, setTotalPhone] = useState(1);
  console.log(totalPhone)
  const { phones, buyPhone } = props;
  console.log(props);
  return (
    <div className="p-5 text-center">
      <img src={phone} alt="phone" />
      <p className="p-5">
        Dispos: <span>{phones}</span>
      </p>

      <div className="flex space-y-5 flex-col">
        <input
          type="text" 
          value={totalPhone}
          className='border p-2'
          onChange={(e) => setTotalPhone(e.target.value)}
        />
        <button
          onClick={() => buyPhone(totalPhone)}
          className="p-2 bg-green-200 hover:bg-green-500"
        >
          Acheter
        </button>
      </div>
    </div>
  );
}

//A partir du provider la fonction mapStatetoProps recupere notre state dans le reducer pour nous le livrer en props
const mapStatetoProps = (state) => {
  return {
    phones: state.phone.phones,
  };
};

//fonction pour map tous les dispactch necessaires pour phone component
const mapDispatchProps = (dispatch) => {
  return {
    buyPhone: totalPhone => dispatch(buyPhone(totalPhone)),
    // *ne pas oublier buyPhone est une fonction*
  };
};
export default connect(mapStatetoProps, mapDispatchProps)(PhoneContainer);

// export default  connect(mapStatetoProps)(PhoneComponent); permet grace a redux surpasser notre composant

//NB
// mapStatetoProps permet de recupere notre state dans le reducer
// mapDispatchProps permet de recuperer les action necessaire au composant

// Un composant d’ordre supérieur (Higher-Order Component ou HOC, NdT)
//  est une technique avancée de React qui permet de réutiliser la logique
//   de composants.
// Les HOC ne font pas partie de l’API de React à proprement parler,
//  mais découlent de sa nature compositionnelle.

// Concrètement, un composant d’ordre supérieur est une fonction
//  qui accepte un composant et renvoie un nouveau composant.
