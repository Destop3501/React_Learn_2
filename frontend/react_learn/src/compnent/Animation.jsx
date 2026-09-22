import React from "react";
import './Animation.css';
import PropTypes from 'prop-types';
import AnimalDetails from "./AnimalDetails.jsx";
import Card from "./Card.jsx"

function AnimationCard({ name, size, additional = { notes: "no additional information" }, ShowAdditional, ...props }) {

    return (
        <div className="card">
            <Card title="Animal">
                <h2>Animal Card</h2>
                <h4>{name}</h4>
                {/* <p><i>{props.scintificName}</i></p> */}
                <p>{size}kg</p>
                {/* <p>{props.diet.map(food => convertFood(food)).join(' ')}</p> */}
                <br />
                <AnimalDetails {...props} />
                <br />
                <button onClick={() => ShowAdditional(additional)}>More Info</button>
            </Card>
            {/* <h2>Animal Card</h2>
            <h4>{name}</h4> */}
            {/* <p><i>{props.scintificName}</i></p> */}
            {/* <p>{size}kg</p> */}
            {/* <p>{props.diet.map(food => convertFood(food)).join(' ')}</p> */}
            {/* <br />
            <AnimalDetails {...props} />
            <br />
            <button onClick={() => ShowAdditional(additional)}>More Info</button> */}
        </div>
    )
}

AnimationCard.propTypes = {
    name: PropTypes.string.isRequired,
    scientificName: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    ShowAdditional: PropTypes.func.isRequired,
    additional: PropTypes.shape({
        notes: PropTypes.string,
        link: PropTypes.string
    })
};
export default AnimationCard;