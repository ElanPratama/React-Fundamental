import { useEffect, useState } from "react";
import Heading from "./Heading";
import { Button } from "@nextui-org/react";

const Header = () => {

    const [message, setMessage] = useState("HELLO WORLD")

    // bisa disebut componentDidAmount kalau
    useEffect(() => {
    alertUser();

    return() => {
        alert("WILL AMOUNT")
    }
    }, []) // array ny kosong

    //componentsDidUpdate
    useEffect(() => {
        alert("DID UPDATE")
    }, [message])



    // //componentWillAmount
    // useEffect(() => {
    //     return () => {
    //         alert("Will Unmount")
    //     }
    // }, [])

    const alertUser = () => {
        alert("DID AMOUNT");
    }

    const changeMessage = () => {
        setMessage("State Changed")
    }

    return (
        <header style={{
            backgroundColor: "darkgray",
            padding: "8px",
            fontFamily: "sans-serif",
            textAlign: "center"
        }}>
            <Heading text="My Header 123" />
            <p>{message}</p>
            <Button onClick={changeMessage}>Change Message</Button>
        </header>
    )
}

export default Header;