import React, { Component } from "react";
import emoji from '../assets/emoji.svg';
import './Instruction.css';

class Instruction extends Component {
    render() {
        return (
            <div className="instruction">
                <img src={emoji} alt="emoji" />
                < p > Click on an emoji to view the emoji short name.</p >
            </div>
        )
    }
}

export default Instruction