import React, { Component } from 'react';
import "./Suggestions.css"
import {withData} from "./../../DataProvider"
import SuggestDetail from './SuggestDetail';

class Suggestions extends Component {
    // 
    componentDidMount(){
        this.props.getData()
    }

    render() {
        const mappedMissions = this.props.suggestedMissions.map(mission => {
            return <SuggestDetail mission={mission} />
        })
        return (
            <div className="suggestions">
                {mappedMissions}
            </div>
        );
    }
}

export default withData(Suggestions);