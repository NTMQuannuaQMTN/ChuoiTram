import React, { useEffect } from "react";
import "../styles/ttg.css";
import "../index.css";
import "../styles/header.css";
import back from "../pics/back.svg";

export default function TTG({ option, setOption }) {
    const handleStationClick = (value) => {
        setOption(value);
    }

    React.useEffect(() => {
        if (option !== 1) {
            setTimeout(function() {document.getElementsByClassName("ttg")[0].style.display = "none"}, 600);
        } else {
            document.getElementsByClassName("ttg")[0].style.display = "block";
        }
    }, [option]);

    return (
        <div className="ttg">
            <div className="header">
                <img src={back} alt="Back" id="back" onClick={() => handleStationClick(0)}></img>
                <img src={back} alt="Back" id="ttg"></img>
            </div>
            <section className="start">
                <h1>TRẠM THỜI GIAN 09:09</h1>
            </section>
            <section className="about-us">
                <h2>CHÚNG MÌNH LÀ AI?</h2>
            </section>
        </div>
    );
}