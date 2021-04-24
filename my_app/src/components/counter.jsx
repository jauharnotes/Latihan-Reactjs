import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class Counter extends Component {
    state = {
        count: 0,
    };

    handleIncrement() {
        console.log("Increment Clicked");
    }

    render() {
        return (
            <div className="mt-4">
                <span className={this.getBadgeClasses()}>{this.formmatCount()}</span>
                <button onClick={this.handleIncrement} className="btn-secondary btn-sm">Increment</button>
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