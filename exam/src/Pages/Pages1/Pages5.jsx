import React from 'react'
import './Pages5.css'

import { IoIosArrowForward } from "react-icons/io";
import { FiPlus } from "react-icons/fi";
import { TbCloudUpload } from "react-icons/tb";
import { CiPlay1 } from "react-icons/ci";
import { FiShare2 } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { CgCloseO } from "react-icons/cg";
import img1 from "../../assets/avatar-1.webp"
import img2 from "../../assets/avatar-2.webp"
import img3 from "../../assets/avatar-3.webp"
import img5 from "../../assets/avatar-5.webp"
import img6 from "../../assets/cover-21.webp"
import { FaStar } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";
import { HiOutlineXMark } from "react-icons/hi2"
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { LuMessageCircleMore } from "react-icons/lu";
import { CiHeart } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";


function Pages5() {

    const [value, setValue] = useState(72);
    const [activeIcon, setActiveIcon] = useState(0);
    const [active, setActive] = useState(0);
    const [percent, setPercent] = useState(0);
    const [checked, setChecked] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setPercent((prev) => {
                if (prev >= 100) {
                    return 0;
                }
                return prev + 10;
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);







    return (
        <div className='kota'>
            <div className="chap5">
                <h1>INTERFACE STARTER KIT</h1>
                <h2>Flexible components</h2>
                <h3>Pre-set components are easy to customize and use. We collected most popular elements. Menu, sliders, buttons, inputs etc. are all here. Just dive in!</h3>
                <button className='btn'>Browse components
                    <IoIosArrowForward />
                </button>
            </div>
            <div className="ong5">
                <div className="ichi">
                    <button className='cart'>
                        <FiPlus />
                        Add to cart
                    </button>
                    <button className='uploud'>
                        <TbCloudUpload />
                        Upload
                    </button>
                    <button className='play'>
                        <CiPlay1 />
                    </button>
                    <div
                        className="progress"
                        style={{ "--progress": `${percent}%` }}
                    >
                        <span>{percent}%</span>
                    </div>
                </div>
                <div className="ichi2">
                    <h1 className={active === 0 ? "active" : ""}
                        onClick={() => setActive(0)}>Angular</h1>
                    <h1 className={active === 1 ? "active" : ""}
                        onClick={() => setActive(1)}>React</h1>
                    <h1 className={active === 2 ? "active" : ""}
                        onClick={() => setActive(2)}>Vue</h1>


                    <div className="net">
                        <button className={activeIcon === 0 ? "active" : ""}
                            onClick={() => setActiveIcon(0)}><FiShare2 />
                        </button>
                        <button className={activeIcon === 1 ? "active" : ""}
                            onClick={() => setActiveIcon(1)}><CiSearch />
                        </button>
                        <button className={activeIcon === 2 ? "active" : ""}
                            onClick={() => setActiveIcon(2)}><MdOutlineMail />
                        </button>
                    </div>
                    <div className="pamela">
                        <b className='pharf'>P</b>
                        <span>Pamela</span>
                        <CgCloseO className='icon1' />
                    </div>
                </div>
                <div className="ichi3">
                    <div className="avatars">
                        <img src={img1} alt="" />

                        <div className="group">
                            <img src={img2} alt="" />
                            <img src={img3} alt="" />
                            <img src={img5} alt="" />

                            <div className="more">+5</div>
                        </div>
                    </div>
                    <div className="btn1">Hover me</div>
                    <div className="yulduzlar">
                        <FaStar
                            className='yulduz' />
                        <FaStar
                            className='yulduz' />
                        <FaStar
                            className='yulduz' />
                        <FaStar
                            className='yulduz' />
                        <FaStar
                            className='yulduz' />

                    </div>
                </div>
                <div className="ichi4">
                    <div
                        className="sliderBox"
                        style={{ "--value": value }}
                    >
                        <span className="number">{value}</span>

                        <input
                            type="range"
                            min="0"
                            max="100"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />
                    </div>
                    <div className="alert">
                        <BsCheckCircleFill className='galochka' />
                        <h1>This is a <b>success</b>alert</h1>
                        <HiOutlineXMark className='ikis' />
                    </div>
                </div>
                <div className="ichi5">
                    <div className="chap33">
                        <div className="info">
                            <img src={img1} alt="" />
                            <div className="info11">
                                <h1>Jayvion Simon</h1>
                                <h2>California, United States</h2>
                            </div>
                        </div>
                        <img className='image' src={img6} alt="" />
                        <p>Phasellus dolor. Fusce egestas elit eget lorem. Quisque id odio.</p>
                        <div className="iconlar">
                            <CiHeart
                                className='iconpast-yurak' />
                            <div className="share">
                                <FiShare2 className='iconpast' />
                                <LuMessageCircleMore className='iconpast' />

                            </div>
                        </div>
                    </div>
                    <div className="ong33">
                        <div className="form">

                            <label className="row">
                                <div
                                    className={`switch ${checked ? "active" : ""}`}
                                    onClick={() => setChecked(!checked)}
                                >
                                    <div className="circle"></div>
                                </div>
                                <span>Switch</span>
                            </label>

                            <label className="row">
                                <input type="checkbox" />
                                <span>Checkbox</span>
                            </label>

                            <label className="row">
                                <input type="radio" name="radio" defaultChecked />
                                <span>Radio button</span>
                            </label>

                            <div className="field">
                                <small>Full name</small>
                                <input type="text" defaultValue="Pamela Mclellan" />
                            </div>

                            <div className="field">
                                <small>Category</small>

                                <div className="selectBox">
                                    <select defaultValue="Clothes">
                                        <option>Clothes</option>
                                        <option>Shoes</option>
                                        <option>Electronics</option>
                                        <option>Books</option>
                                        <option>Furniture</option>
                                    </select>

                                    <IoChevronDown className="arrow" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pages5;