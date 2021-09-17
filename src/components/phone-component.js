import React from "react";
import phone from "../image/image.jpg";
function PhoneComponent() {
  return (
    <div className="p-5 text-center">
      <img src={phone} alt="phone" />
      <p className="p-5">
        Dispos: <span></span>
      </p>
      <button class="p-2 bg-green-200 hover:bg-green-500">Acheter</button>
    </div>
  );
}
export default PhoneComponent;
