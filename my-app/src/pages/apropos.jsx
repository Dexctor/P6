// apropos.js
import React from 'react';
import '../styles/App.scss';
import ImageContainer from '../composant/ImageContainer';
import landscape_about from '../images/landscape_about.svg';
import DropdownMenu from '../composant/menuDropdown';



function apropos() {
  return (
    <div className="App">
     
        <ImageContainer imageUrl={landscape_about} showText={false} style={{ background: "rgba(128, 128, 128, 0.275)" }} />
        <div className=''></div>
        <div className="dropdown-container">
        <DropdownMenu title="Titre 1">
          Contenu du premier menu déroulant
        </DropdownMenu>
        <DropdownMenu title="Titre 2">
          Contenu du deuxième menu déroulant
        </DropdownMenu>
        <DropdownMenu title="Titre 3">
          Contenu du troisième menu déroulant
        </DropdownMenu>
        <DropdownMenu title="Titre 4">
          Contenu du quatrième menu déroulant
        </DropdownMenu>

        </div>
      
    </div>
  );
}


export default apropos;
