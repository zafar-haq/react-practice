import React from "react";
import { LoginContext } from "../contexts/LoginContext";

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = { date: new Date(), name: "practice" }
    }

    componentDidMount() {
        console.log("timer mounted. ", JSON.stringify(this.state))
        console.log("test", LoginContext);
        setInterval(() => {
            this.tick()
        }, 1000)
    }

    componentDidUpdate() {
        // console.log("timer updated. ", JSON.stringify(this.state))
    }

    componentWillUnmount() {
        console.log("timer going to unmounted. ", JSON.stringify(this.state))
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {

        return (
            <LoginContext.Consumer>
                {value => {
                    return (
                        < div >
                            <h2>{this.state.date.toLocaleTimeString()}</h2>
                            <h5>click button clicked {value.clickCount} times</h5>
                        </div>
                    );
                }
                }

            </LoginContext.Consumer >
        )
    }

}

export default Timer