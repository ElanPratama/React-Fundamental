import React from "react";
import "../styles/Footer.css";
import { Button } from "@nextui-org/react";

class Footer extends React.Component {
    
    state = {
        message: "Hello World"
    }

    componentDidMount(){
        this.alertUser();
    }

    componentDidUpdate() {
        alert("DID UPDATE");
        alert(this.state.message)
    }

    componentWillUnmount() {
        alert("Good By");
    }

    alertUser = () => {
        alert("DID MOUNT")
    }
    
    changeMessage = () => {
        this.setState({message : "State Change"})
    }

    render() {
        return (
            <footer className="footer-text">
                <h3>This is footer</h3>
                <p>{this.props.message}</p>
                <p>{this.state.message}</p>
                <Button onClick={this.changeMessage}>Change Message</Button>
            </footer>
        );
    }
}

export default Footer;