import { Component } from 'react'

 class Toggle extends Component {
    constructor(){
        super()
        this.state = { isToggled: false }
    }

    toggle = () => {
        this.setState(prevState => 
            ({ isToggled: !prevState.isToggled })
        )
    }
    
    render(){
        return this.props.render({
            isToggled: this.state.isToggled,
            toggle: this.toggle
        })
    }
}

export default Toggle