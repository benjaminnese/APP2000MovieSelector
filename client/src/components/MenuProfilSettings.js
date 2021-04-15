import React from "react";

// Skal vise profil instillinger, feks brukernavn, konaktemail
// Eneste som har blitt gjort er å fått tak i brukerdata, skal researche mer om funksjon så bruker må sette
// Eget brukernavn

export const MenuProfilSettings = ({userName, userPic}) => {
  return (
    <div>
      <h1>{userName} <img src ={userPic} style={{ width: '50px', height: '50px'}}
      className="rounded-circle"/></h1>
      <h6><a class="waves-effect waves-teal btn-flat">Bytt navn</a> 
      <a class="waves-effect waves-teal btn-flat">Bytt bilde</a></h6>
    </div>
  );
};

export default MenuProfilSettings;
