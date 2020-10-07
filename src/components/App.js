import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { incrementCount, decrementCount } from '../redux/actions/commonActions';


class App extends Component {

    state = {
        task: {
            title: 'My first task',
            done: true
        }
    }
  
    incrementCount = () => {
        this.props.incrementCount();
    }

    decrementCount = () => {
        this.props.decrementCount();
    }

    render() {
        return (
            <div>
                <h3>{this.state.task.title}</h3>
                <h1>{this.state.task.done.toString()}</h1>
                <p>{this.props.count}</p>
                <button onClick={this.incrementCount}>+</button>
                <button onClick={this.decrementCount}>-</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const count = state.common.count
    return {
        count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        incrementCount: bindActionCreators(incrementCount, dispatch),
        decrementCount: bindActionCreators(decrementCount, dispatch)
    }
}

const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
export default connectedStateAndProps(App);
