import React from 'react';

const SuggestDetail = (props) => {
    let {mission} = props
    return (
        <div>
            <h3>flight number: {mission.flight_number}</h3>
            <h3>mission name: {mission.mission_name}</h3>
            <h3>year:  {mission.launch_year}</h3>
            <br></br>
            <img src={mission.links ? mission.links.mission_patch_small : null} />
            {mission.details ? <p>details: {mission.details} </p> : null}
            <p>for more info visit:</p> 
            <p>-https://www.space.com/3590-spacex-falcon-1-rocket-fails-reach-orbit.html</p> 
            <p>-https://en.wikipedia.org/wiki/DemoSat</p>
        </div>
    );
};

export default SuggestDetail;