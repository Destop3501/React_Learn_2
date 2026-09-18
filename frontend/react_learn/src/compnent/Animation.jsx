import React from "react";
import './Animation.css';
import PropTypes from 'prop-types';
import AnimalDetails from "./AnimalDetails.jsx";

function AnimationCard({ name, size, additional, ShowAdditional, ...props }) {

    return (
        <div className="card">
            <h2>Animal Card</h2>
            <h4>{name}</h4>
            {/* <p><i>{props.scintificName}</i></p> */}
            <p>{size}kg</p>
            {/* <p>{props.diet.map(food => convertFood(food)).join(' ')}</p> */}
            <br />
            <AnimalDetails {...props} />
            <br />
            <button onClick={() => ShowAdditional(additional)}>More Info</button>
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

AnimationCard.defaultProps = {
    additional: {
        notes: "no additional information"
    }
};

export default AnimationCard;