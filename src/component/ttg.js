import React, { useEffect } from "react";
import "../styles/ttg.css";
import "../index.css";
import "../styles/header.css";
import back from "../pics/web/back.svg";

export default function TTG({ option, setOption }) {
    const handleStationClick = (value) => {
        setOption(value);
    }

    React.useEffect(() => {
        if (option !== 1) {
            setTimeout(function () { document.getElementsByClassName("ttg")[0].style.display = "none" }, 600);
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
                <h2>VỀ DỰ ÁN</h2>
                <h4>TỔNG QUAN DỰ ÁN</h4>
                <div className="tongquan">
                    <div>
                        <h3>Hoạt động chung</h3>
                        <p>- Tổ chức các hoạt động gây quỹ</p>
                        <p>- Ghé thăm các cơ sở thiện nguyện</p>
                    </div>
                    <div>
                        <h3>Sứ mạng</h3>
                        <p>...</p>
                    </div>
                    <div>
                        <h3>Đề tài</h3>
                        <p>Dự án Thiện nguyện</p>
                    </div>
                </div>
                <h4>CÁC HOẠT ĐỘNG</h4>
                <div className="timelinecont">
                    <div className="timeline">
                        <div>
                            <p>THÁNG 5<span>2024</span></p>
                            <p>SỰ KIỆN:</p>
                            <h3>Đợt bán "Chuyến tàu Mùa Hạ"</h3>
                        </div>
                        <div>
                            <p>THÁNG 6<span>2024</span></p>
                            <p>SỰ KIỆN:</p>
                            <h3>Chuyến đi “Vệt Hạ Xinh”</h3>
                        </div>
                        <div>
                            <p>THÁNG 7<span>2024</span></p>
                            <p>SỰ KIỆN:</p>
                            <h3>Workshop “Hạ Mơ”</h3>
                        </div>
                        <div>
                            <p>THÁNG 11<span>2024</span></p>
                            <p>SỰ KIỆN:</p>
                            <h3>Đợt bán “Thương - Tư”</h3>
                        </div>
                        <div>
                            <p>THÁNG 12<span>2024</span></p>
                            <p>SỰ KIỆN:</p>
                            <h3>Chuyến đi “Ngày Hội Siêu Anh Hùng”</h3>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}