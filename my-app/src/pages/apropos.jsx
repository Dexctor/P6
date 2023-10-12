// apropos.js
import React from 'react';
import '../styles/App.scss';
import Banner from '../composant/ImageContainer';
import landscape_about from '../images/landscape_about.svg';
import DropdownMenu from '../composant/Collapse';



function apropos() {
  return (
    <div className="App">
     
        <Banner imageUrl={landscape_about} showText={false} style={{ background: "rgba(128, 128, 128, 0.275)" }} Banner/>
        <div className=''></div>
        <div className="dropdown-container">
        <DropdownMenu title="Fiabilité">
        Les annonces postées sur Kasa garantissent une fiabilité totale. 
        Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
        </DropdownMenu>
        <DropdownMenu title="Respect">
        La bienveillance fait partie des valeurs fondatrices de Kasa. 
        Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
        </DropdownMenu>
        <DropdownMenu title="Service">
        Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
        N'hésitez pas à nous contacter si vous avez la moindre question.
        </DropdownMenu>
        <DropdownMenu title="Sécurité">
        La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
        Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.
        </DropdownMenu>

        </div>
      
    </div>
  );
}


export default apropos;
