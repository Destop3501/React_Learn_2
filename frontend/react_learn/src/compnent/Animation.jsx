import React from "react";
import './Animation.css';
import PropTypes from 'prop-types';

function AnimationCard(props) {
    PropTypes.checkPropTypes(AnimationCard.propTypes, props, 'prop', 'AnimationCard');

    return (
        <div className="card">
            <h2>Animal Card</h2>
            <h4>{props.name}</h4>
            <p><i>{props.scintificName}</i></p>
            <p>{props.size}kg</p>
            <p>{props.diet.join(", ")}</p>
            <button onClick={() => props.ShowAdditional(props.additional)}>More Info</button>
        </div>
    )
}

AnimationCard.propTypes = {
    name: PropTypes.string.isRequired,
    scintificName: PropTypes.string.isRequired,
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