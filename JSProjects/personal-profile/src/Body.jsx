import PropTypes from 'prop-types';
export default function Body(props) { // props is used to pass info to functional components, Kinda like .json files
    return(
        <div className="character">
            <img src={props.image} />
            <strong>{props.name}</strong>
            <hr />
            <strong>Stats</strong>
            <p>Endurance: {props.endurance}</p>
            <p>Speed: {props.speed}</p>
            <p>Melee: {props.melee}</p>
            <p>Firearms: {props.firearms}</p>
        </div>
        
    )
}
Body.defaultProps = {
    image: "https://static.wikia.nocookie.net/streetsofrogue_gamepedia_en/images/2/27/OfficeDrone.png",
    name: "Office Drone",
    endurance: "2",
    speed: "2",
    melee: "2",
    firearms: "2"
}

// Prop types as a function to check the validity of types passed as props
Body.propTypes = {
    name: PropTypes.string,
    endurance: PropTypes.number,
    speed: PropTypes.number,
    melee: PropTypes.number,
    firearms: PropTypes.number
}