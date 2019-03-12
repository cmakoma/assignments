import React, { Component } from 'react';
import axios from "axios"
const { Provider, Consumer } = React.createContext()

class DataProvider extends Component {
    constructor() {
        super()
        this.state = {
            missions: [],
            suggestedMissions: [],
            question: "",
            answer:""
        }
    }

    getData = async () => {
        const response = await axios.get("https://api.spacexdata.com/v3/launches")
        this.setState({ missions: response.data,
                        suggestedMissions:[] })

        let num1 = Math.floor(Math.random() * 26)
        let num2 = Math.floor(Math.random() * 26) + 26
        let num3 = Math.floor(Math.random() * 26) + 52
        this.shuffle(num1)
        this.shuffle(num2)
        this.shuffle(num3)
        this.random()

    }

    shuffle = (number) => {
        for (let i = 0; i < this.state.missions.length; i++) {
            if (number === this.state.missions[i].flight_number) {
                this.setState(prevState => ({
                    suggestedMissions: [...prevState.suggestedMissions, this.state.missions[i]]
                }))
            }
        }
    }

    random = () => {
        let num = Math.floor(Math.random() * 71)
        for (let i = 0; i < this.state.missions.length; i++) {
            if (this.state.missions[i].details && num === this.state.missions[i].flight_number) {
                this.setState({
                    question: this.state.missions[i].details,
                    answer: this.state.missions[i].mission_name
                })
            }
        }
    }

    render() {
        return (
            <div>
                <Provider value={{
                    getData: this.getData,
                    ...this.state
                }}>
                    {this.props.children}
                </Provider>
            </div>
        );
    }
}

export default DataProvider;

export function withData(C) {
    return props => <Consumer>
        {value => <C {...value}{...props} />}
    </Consumer>
}