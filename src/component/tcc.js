import React from "react";
import "../styles/tcc.css";
import "../index.css";
import "../styles/header.css";
import back from "../pics/web/back.svg";

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
                <h2>VỀ DỰ ÁN</h2>
                <h4>TỔNG QUAN DỰ ÁN</h4>
                <div className="tongquan">
                    <div>
                        <h3>Hoạt động chung</h3>
                        <p>...</p>
                    </div>
                    <div>
                        <h3>Sứ mạng</h3>
                        <p>...</p>
                    </div>
                    <div>
                        <h3>Đề tài</h3>
                        <p>Dự án Giáo dục</p>
                    </div>
                </div>
                <h4>CÁC HOẠT ĐỘNG</h4>
                <div className="timelinecont">
                    <div className="timeline">
                        <div>
                            <p>THÁNG 11<span>2024</span></p>
                            <p>SỰ KIỆN:</p>
                            <h3>Workshop "Khắc Chuyển Giao"</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}