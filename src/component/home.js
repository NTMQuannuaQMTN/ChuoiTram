import React, { useEffect } from "react";
import "../styles/home.css";
import "../index.css";
import back from "../pics/back.svg";

export default function Home({ option, setOption }) {
    const handleStationClick = (value) => {
        setOption(value);
    }

    React.useEffect(() => {
        console.log(option);
    }, [option]);

    return (
        <div className="home">
            <div className="header">
                <img src={back} alt="Back" id="ttg"></img>
                <img src={back} alt="Back" id="tcc"></img>
                <img src={back} alt="Back" id="tnn"></img>
            </div>
            <section className="start">
                <h1>CHUỖI TRẠM</h1>
            </section>
            <section className="about-us">
                <h2>CHÚNG MÌNH LÀ AI?</h2>
            </section>
            <section className="hyperlinks">
                <h2>CÁC TRẠM</h2>
                <div className="list">
                    <div className="station" onClick={() => handleStationClick(1)}>
                        <img src={back} alt="TTG"></img>
                        <h3>TRẠM THỜI GIAN 09:09</h3>
                    </div>
                    <div className="station" onClick={() => handleStationClick(2)}>
                        <img src={back} alt="TCC"></img>
                        <h3>TRẠM CHUYỂN CẤP 25:28</h3>
                    </div>
                    <div className="station" onClick={() => handleStationClick(3)}>
                        <img src={back} alt="TNN"></img>
                        <h3>TRẠM NGOẠI NGỮ</h3>
                    </div>
                </div>
            </section>
        </div>
    );
}