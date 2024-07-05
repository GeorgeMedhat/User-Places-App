import React  from "react";
import PlaceList from "../components/PlaceList";


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

const UserPlaces =()=>{
return <PlaceList items={DummyPlaces} />;
};

export default UserPlaces;