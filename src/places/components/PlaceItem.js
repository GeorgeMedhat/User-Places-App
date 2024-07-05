import React, { useState } from "react";

import "./PlaceItem.css"
import Card from "../../shared/Components/UIElements/Card";
import Button from "../../shared/Components/FormElements/Button/Button";
import Modal from "../../shared/Components/UIElements/Modal";
import Map from "../../shared/Components/UIElements/Map";

const PlaceItem = (props)=>{

    const[showMap,setShowMap]=useState(false);

    const openMapHandler =()=>setShowMap(true)
    const closeMapHandler =()=>setShowMap(false)


    return <React.Fragment>
        <Modal show = {showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer ={<Button onClick={closeMapHandler}> Close</Button>}
        >
        <div className="map-container">
            <Map/>
        </div>

        </Modal>
        <li className="place-item">
       <Card className="place-item__content">
        <div className="place-item__image">
                <img src ={props.image} alt = {props.title}/>
            </div>
            <div className="place-item__info">
                <h2>{props.title}</h2>
                <h2>{props.address}</h2>
                <h3>{props.description}</h3>
            </div>
            <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}>View On Map</Button>
            <Button to={`/places/${props.id}`}>Edit</Button>
            <Button danger>Delete</Button>

            </div>
       </Card>
    </li>;
    </React.Fragment>
};


export default PlaceItem;