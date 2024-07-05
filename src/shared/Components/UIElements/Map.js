import React from "react";

import "./Map.css"

const Map= props=>{
    return <div className={`map ${props.className}`} style={props.style}>
        <iframe style={props.style} src="https://maps.google.com/maps?q=Tangesir%20Dates%20Products&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" allowfullscreen></iframe>
    </div>;
}

export default Map;