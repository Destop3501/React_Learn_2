import React from "react";

const names = [
    "Gaurav",
    "Abhi",
    "Yash",
    "Satyam",
    "Abhay",
    "Adarsh",
    "Udit"
]

function Map() {
    return (
        <div>
            {names.map(name => <div key={name}> {name}</div>)}
        </div>
    )
}

export default Map