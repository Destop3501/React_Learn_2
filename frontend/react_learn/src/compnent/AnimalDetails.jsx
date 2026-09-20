import React from "react";
import PropTypes from "prop-types";

function convertFood(food) {
    switch (food) {
        case 'insects':
            return '🐜';
        case 'meat':
            return '🍖';
        case 'plants':
            return '🌱';
        default:
            return ' ';
    }
}

function AnimalDetails({ diet, scientificName }) {
    return (
        <div>
            <h4>Details</h4>
            <div>
                <i>Scientific Name: {scientificName}</i>
                Diet: {diet.map(food => convertFood(food)).join(' ')}
            </div>
        </div>
    )
}

AnimalDetails.propTypes = {
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    scientificName: PropTypes.string.isRequired
}
export default AnimalDetails