import React from "react";
import "../styles/tnn.css";
import "../index.css";
import "../styles/header.css";
import back from "../pics/back.svg";

export default function TNN({ option, setOption }) {
    const handleStationClick = (value) => {
        setOption(value);
    }

    React.useEffect(() => {
        if (option != 3) {
            setTimeout(function() {document.getElementsByClassName("tnn")[0].style.display = "none"}, 600);
        } else {
            document.getElementsByClassName("tnn")[0].style.display = "block";
        }
    }, [option]);

    return (
        <div className="tnn">
            <div className="header">
                <img src={back} alt="Back" id="back" onClick={() => handleStationClick(0)}></img>
                <img src={back} alt="Back" id="tnn"></img>
            </div>
            <section className="start">
                <h1>TRẠM NGOẠI NGỮ</h1>
            </section>
            <section className="about-us">
                <h2>CHÚNG MÌNH LÀ AI?</h2>
            </section>
        </div>
    );
}