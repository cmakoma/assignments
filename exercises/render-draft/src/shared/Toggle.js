import { Component } from 'react';

class Toggle extends Component {
    constructor(){
        super ()
        this.state={
            isToggled:false
        }
    }

    toggler = () => {
        this.setState(({isToggled}) => ({isToggled: !isToggled}))
    }
    render() {

        const stuffFromToggle = {
               isToggled: this.state.isToggled,
               toggler: this.toggler 
        }
        return this.props.render(stuffFromToggle); 
    }
}

export default Toggle;