import React, { Component } from 'react';
import {withData} from "./../DataProvider"
import "./Search.css"

class Search extends Component {
    constructor(){
        super()
        this.state={
            selectedMission: {}
        }
    }
    componentDidMount(){
        this.props.getData()
    }


    handleChange = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        for(let i=0; i<this.props.missions.length; i++){
            if(e.target.value === this.props.missions[i].mission_name){
               this.setState({
                selectedMission: this.props.missions[i]
               })
            }
        }
    }
    handleDivClick =(url)=> {
        if (this.clicked !== "Button") {
            window.location.href = url;
        }

        this.clicked = "";
    }


    render() {
        const SM = this.state.selectedMission
       const mappedMissions = this.props.missions.map((mission, i) => <option value={mission.mission_name} key={i}>{mission.flight_number}: {mission.mission_name}, {mission.launch_year}</option>)
        return (
            <>
                <div className="selectSearch">
              <select className="select" onChange={this.handleChange}>
              <option>flight number: mission name, launch year</option>
                    {mappedMissions}
              </select>  
              <br></br>
            </div>

            <div className="result">
                <h1>Flight number: {SM.flight_number}</h1>
                <h1>Mission name: {SM.mission_name}</h1>
                <h1>Year: {SM.launch_year} </h1>
                <br></br>
                <img src={SM.links ? SM.links.mission_patch_small : null} />
                <p>Launch success: {SM.launch_success ? "True" : "False"}</p>
                {SM.launch_failure_details ? <p>reason: {SM.launch_failure_details.reason }</p>:null}
                 {SM.details ? <p>Details: {SM.details} </p> : null}

                <iframe 
                    className="iframe"
                    src={`https://www.youtube.com/embed/${SM.links ? SM.links.youtube_id : null}`}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen >
                </iframe>

                <p>for more info visit:</p> 
                {SM.links ? <p onClick={() => this.handleDivClick(SM.links.article_link)}>{SM.links.article_link}</p> : null} 
                {SM.links ? <p onClick={() => this.handleDivClick(SM.links.wikipedia)}>{SM.links.wikipedia}</p> : null}
                


                
            </div>
            </>
        );
    }
}

export default withData(Search);