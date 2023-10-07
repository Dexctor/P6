import React, { useState } from 'react';
import '../styles/logementDetails.scss';
import { useParams } from 'react-router-dom';
import data from '../Data/DataLogement.json';
import MenuDropdown from '../composant/Collapse';
import Tag from '../composant/Tag';
import Rating from '../composant/Rating';
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'font-awesome/css/font-awesome.min.css';


// Composants  chevrons
const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow`}
        style={{ ...style, display: "block", color: "white", position: "absolute", top: "44%", right: "5%", transform: "translate(0, -50%)", zIndex: "1" }}
        onClick={onClick}
      >
        <i className="fa fa-chevron-right" style={{ fontSize: '100px', color: 'white'}}></i>
      </div>
    );
  };
  
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow`}
        style={{ ...style, display: "block", color: "white", position: "absolute", top: "44%", left: "1%", transform: "translate(0, -50%)", zIndex: "1" }}
        onClick={onClick}
      >
        <i className="fa fa-chevron-left" style={{ fontSize: '100px', color: 'white'}}></i>
      </div>
    );
  };

function LogementDetail() {
    const { id } = useParams();
    const logement = data.find(l => l.id === id);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [currentImage, setCurrentImage] = useState('');

    if (!logement) {
        return <>Logement non trouvé</>;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        lazyLoad:'ondemand'
    };

    const handleImageClick = (imageSrc) => {
        setCurrentImage(imageSrc);
        setIsFullscreen(true);
    };

    const closeFullscreen = () => {
        setIsFullscreen(false);
    };
    return (
        <div className="logement_container">
        <div className="image_container">
            <Slider {...settings}>
                {logement.pictures.map((picture, index) => (
                    <div key={index} onClick={() => handleImageClick(picture)}>
                        <img src={picture} alt={`${logement.title} ${index}`} />
                    </div>
                ))}
            </Slider>
        </div>

        {isFullscreen && (
            <div className="fullscreen-modal" onClick={closeFullscreen}>
                <img src={currentImage} alt="Fullscreen view" />
            </div>
        )}
            <div className="info_container">
                <div className="left_info">
                    <h1 className="logement_title">{logement.title}</h1>
                    <p className="logement_location">{logement.location}</p>
                </div>
                <div className="right_info">
                    <p className="host_name">{logement.host.name}</p>
                    <img src={logement.host.picture} alt={logement.host.name} className="host_image"/>
                </div>
            </div>
            <div className="tags_rating_container">
                <div className="tags">
                    {logement.tags.map((tag, index) => (
                        <Tag key={index} label={tag} />
                    ))}
                </div>
                <div className="rating">
                    <Rating value={Number(logement.rating)} />
                </div>
            </div>
            <div className="dropdowns_container">
                <div className="menu-dropdown-container">
                    <MenuDropdown title="Description">
                        <p>{logement.description}</p>
                    </MenuDropdown>
                </div>
                <div className="menu-dropdown-container">
                    <MenuDropdown title="Équipements">
                        <ul className="list_equipement">
                            {logement.equipments.map(equipment => (
                                <li key={equipment}>{equipment}</li>
                            ))}
                        </ul>
                    </MenuDropdown>
                </div>
            </div>
        </div>
    );
}

export default LogementDetail;
