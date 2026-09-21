import PropTypes from "prop-types"

function Card({ children, title }) {
    return (
        <div className="Card">
            <h2>{title}</h2>
            <div>
                {children}
            </div>
        </div>
    )
}

Card.propType = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element.isRequired
    ]),
    title: PropTypes.string.isRequired
}

export default Card