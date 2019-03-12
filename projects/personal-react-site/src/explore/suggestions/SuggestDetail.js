import React from 'react';

const SuggestDetail = (props) => {
    let {mission} = props
    return (
        <div>
            <h3>flight number: {mission.flight_number}</h3>
            <h3>mission name: {mission.mission_name}</h3>
            <h3>year:  {mission.launch_year}</h3>
            <br></br>
            <img className="img" src={mission.links ? mission.links.mission_patch_small : null} />
            {mission.details ? <p>Details: {mission.details} </p> : null}
            <p>for more info visit:</p> 
            <p>-{mission.links ? mission.links.article_link : null}</p> 
            <p>-{mission.links ? mission.links.wikipedia : null}</p>
        </div>
    );
};

export default SuggestDetail;