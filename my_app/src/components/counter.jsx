import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class Counter extends Component {
    state = {
        count: 0,
    };

    handleIncrement = (product) => {
        console.log(product);
        this.setState({count: this.state.count + 1});
    }

    evenHandle = () => {
        this.handleIncrement({id: 1})
    }


    render() {
        return (
            <div className="mt-4">
                <span className={this.getBadgeClasses()}>{this.formmatCount()}</span>
                <button onClick={ this.evenHandle} className="btn-secondary btn-sm">Increment</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formmatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;