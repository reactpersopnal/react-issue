import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class Position extends Component {

    constructor(props){
        super(props);
        this.state = {
            kindOfPage: 'foo',
            reduxState: {
                value: 20,
                value1: 10
            }
        }
    }

    render () {
        return (
            <div>
                Position
            </div>
        )
    }
}

export default Position;
