import React from "react";
import { useParams } from "react-router-dom";
import Input from "../../shared/Components/FormElements/Input/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/Util/validators";
import Button from "../../shared/Components/FormElements/Button/Button";

import "./PlaceForm.css"

const DummyPlaces = [
    {
        id:'p1',
        title:"Borg khalefa",
        description : "The Burj Khalifa is a skyscraper in Dubai, United Arab Emirates. It is the world's tallest structure",
        imageURL :"https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Burj_Khalifa.jpg/200px-Burj_Khalifa.jpg",
        address:"1 Sheikh Mohammed bin Rashid Boulevard",
        location:{
            lat:25.1972,
            lng:55.2744,
        },
        creator:"u2"
    },
    {
        id:'p1',
        title:"Borg khalefa",
        description : "The Burj Khalifa is a skyscraper in Dubai, United Arab Emirates. It is the world's tallest structure",
        imageURL :"https://upload.wikimedia.org/wikipedia/en/thumb/9/93/Burj_Khalifa.jpg/200px-Burj_Khalifa.jpg",
        address:"1 Sheikh Mohammed bin Rashid Boulevard",
        location:{
            lat:25.1972,
            lng:55.2744,
        },
        creator:"u2"
    }
]


const UpdatePlace = props =>{
    const placeId = useParams().placeId;

    const identifiedPlace = DummyPlaces.find(p=>p.id=== placeId)

    if(!identifiedPlace){
    return <div className="center">
        <h2>UPDATE PLACE</h2>
    </div>
    }

    return <form className="place-form">
        <Input
            id = "title"
            element = "input"
            label="title"
            validators = {[VALIDATOR_REQUIRE(),VALIDATOR_MINLENGTH(5)]}
            onInput = {()=>{}}
            errorText = "please enter a valid title"
            value = {identifiedPlace.title}
            valid={true}

        />
        <Input
            id = "description"
            element = "textarea"
            label="description"
            validators = {[VALIDATOR_REQUIRE(),VALIDATOR_MINLENGTH(5)]}
            onInput = {()=>{}}
            errorText = "please enter a valid description"
            value = {identifiedPlace.description}
            valid={true}

        />
        <Button type ="submit" disabled={true}> UPDATE PLACE</Button>
    </form>
}


export default UpdatePlace;