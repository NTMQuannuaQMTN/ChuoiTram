import React, { useEffect } from "react";
import "../styles/home.css";
import "../index.css";
import back from "../pics/web/back.svg";

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
                <h1>Hệ sinh thái Dự án <span>“Trạm”</span> (n):</h1>
                <p style={{ fontStyle: "italic" }}>“Một <span>chuỗi dự án</span> được thành lập và điều hành bởi nhóm <span>học sinh - sinh viên</span> với mục tiêu chung là mang lại những giá trị thiết thực và tích cực đến cộng đồng người Việt Nam.”</p>
            </section>
            <section className="about-us">
                <h2>VỀ CHÚNG MÌNH</h2>
                <p>Hệ sinh thái Dự án “Trạm” là một chuỗi dự án phi lợi nhuận, hướng đến tạo ra những giá trị tích cực đến với cộng đồng, xã hội và đồng thời tạo dựng một sân chơi giúp các bạn học sinh và sinh viên trên địa bàn Tổ Quốc phát triển bản thân và tạo ra những kỷ niệm đẹp trong quá trình lan toả những thông điệp tích cực.</p>
                <p>Tính đến ngày 01/01/2025, Hệ sinh thái Dự án “Trạm” đã có sự góp mặt của ba dự án phi lợi nhuận:</p>
                <ul>
                    <li>Trạm Thời Gian 09:09 (01/01/2024)</li>
                    <li>Trạm Chuyển Cấp 25:28 (16/08/2024)</li>
                    <li>Trạm Ngoại Ngữ (01/11/2024)</li>
                </ul>
            </section>
            <section className="bql">
                <h2>BAN QUẢN LÝ CÁC TRẠM</h2>
                <h2 style={{ marginTop: "5px", marginBottom: "10px" }}>NHIỆM KỲ 2024 - 2025</h2>
                <div className="memcontainer">
                    <div className="memlist">
                        <div className="memitem">
                            <div className="per">
                                <img src={back}></img>
                                <div className="nameschool">
                                    <h3>Trần Xuân Gia Bảo</h3>
                                    <p>THPT chuyên Lê Hồng Phong, TPHCM</p>
                                </div>
                            </div>
                            <div className="content">
                                <p>Trạm Thời Gian 09:09 | Chủ nhiệm</p>
                                <p>Trạm Chuyển Cấp 25:28 | Chủ nhiệm</p>
                                <p>Trạm Ngoại Ngữ | Trưởng Khối Chuyên môn</p>
                            </div>
                        </div>
                        <div className="memitem">
                            <div className="per">
                                <img src={back}></img>
                                <div className="nameschool">
                                    <h3>Nguyễn Như Ngọc</h3>
                                    <p>THPT chuyên Lê Hồng Phong, TPHCM</p>
                                </div>
                            </div>
                            <div className="content">
                                <p>Trạm Thời Gian 09:09 | Phó Chủ nhiệm</p>
                            </div>
                        </div>
                        <div className="memitem">
                            <div className="per">
                                <img src={back}></img>
                                <div className="nameschool">
                                    <h3>Thái Nguyễn Thành Phát</h3>
                                    <p>Đại học Kinh tế - Luật</p>
                                </div>
                            </div>
                            <div className="content">
                                <p>Trạm Thời Gian 09:09 | Quản lý Mảng Sự kiện</p>
                            </div>
                        </div>
                        <div className="memitem">
                            <div className="per">
                                <img src={back}></img>
                                <div className="nameschool">
                                    <h3>Nguyễn Trần Hạ Vy</h3>
                                    <p>THPT chuyên Lê Hồng Phong, TPHCM</p>
                                </div>
                            </div>
                            <div className="content">
                                <p>Trạm Thời Gian 09:09 | Quản lý Mảng Truyền thông</p>
                                <p>Trạm Chuyển Cấp 25:28 | Chủ nhiệm, Quản lý Mảng Sự kiện</p>
                                <p>Trạm Ngoại Ngữ | Trưởng Khối Sự kiện</p>
                            </div>
                        </div>
                        <div className="memitem">
                            <div className="per">
                                <img src={back}></img>
                                <div className="nameschool">
                                    <h3>Nguyễn Thành Như Ý</h3>
                                    <p>THPT chuyên Trần Đại Nghĩa, TPHCM</p>
                                </div>
                            </div>
                            <div className="content">
                                <p>Trạm Thời Gian 09:09 | Trưởng Ban Dịch thuật</p>
                                <p>Trạm Chuyển Cấp 25:28 | Quản lý Mảng Truyền thông</p>
                                <p>Trạm Ngoại Ngữ | Trưởng Khối Truyền thông</p>
                            </div>
                        </div>
                        <div className="memitem">
                            <div className="per">
                                <img src={back}></img>
                                <div className="nameschool">
                                    <h3>Đặng Vân Anh</h3>
                                    <p>THPT chuyên Lê Hồng Phong, TPHCM</p>
                                </div>
                            </div>
                            <div className="content">
                                <p>Trạm Thời Gian 09:09 | Quản lý Mảng Hình ảnh</p>
                                <p>Trạm Chuyển Cấp 25:28 | Cố vấn Hình ảnh</p>
                            </div>
                        </div>
                        <div className="memitem">
                            <div className="per">
                                <img src={back}></img>
                                <div className="nameschool">
                                    <h3>Trần Thanh Đức</h3>
                                    <p>Phổ Thông Năng Khiếu - ĐHQG.HCM</p>
                                </div>
                            </div>
                            <div className="content">
                                <p>Trạm Chuyển Cấp 25:28 | Quản lý Mảng Học thuật</p>
                                <p>Trạm Ngoại Ngữ | Trưởng Ban Đối ngoại</p>
                            </div>
                        </div>
                    </div>
                </div>
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