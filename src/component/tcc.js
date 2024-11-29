import React from "react";
import "../styles/tcc.css";
import "../index.css";
import "../styles/header.css";
import back from "../pics/back.svg";

export default function TCC({ option, setOption }) {
    const handleStationClick = (value) => {
        setOption(value);
    }

    React.useEffect(() => {
        if (option != 2) {
            setTimeout(function() {document.getElementsByClassName("tcc")[0].style.display = "none"}, 600);
        } else {
            document.getElementsByClassName("tcc")[0].style.display = "block";
        }
    }, [option]);

    return (
        <div className="tcc">
            <div className="header">
                <img src={back} alt="Back" id="back" onClick={() => handleStationClick(0)}></img>
                <img src={back} alt="Back" id="tcc"></img>
            </div>
            <section className="start">
                <h1>TRẠM CHUYỂN CẤP 25:28</h1>
            </section>
            <section className="about-us">
                <h2>CHÚNG MÌNH LÀ AI?</h2>
            </section>
        </div>
    );
}