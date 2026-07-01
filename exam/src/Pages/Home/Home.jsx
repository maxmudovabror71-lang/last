import React from 'react'
import './Home.css'
import { FaChevronRight } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import { HiOutlineXMark } from "react-icons/hi2"
import { GoPlus } from "react-icons/go";
import Pages5 from '../Pages1/Pages5';

// import { LayoutTemplate } from "lucide-react";
// import { PanelsTopLeft } from "lucide-react";
// import { SlidersHorizontal } from "lucide-react";
// import { Square } from "lucide-react";
// import { Moon } from "lucide-react";
// import { ToggleLeft } from "lucide-react";
// import { Type } from "lucide-react";
// import { Figma } from "lucide-react";
// import { TabletSmartphone } from "lucide-react";
// import { Files } from "lucide-react";
// import { FileCode2 } from "lucide-react";
// import { RefreshCcw } from "lucide-react";
// import { Headset } from "lucide-react";
// import { BookText } from "lucide-react";
function Home() {
    return (
        <div className='Home'>
            <div className="section1">
                <div className="left2">
                    <h1>
                        Create your
                        website today with ZONE
                    </h1>
                    <p>The ZONE UI is built on top of MUI, a powerful library that provides flexible, customizable, and easy-to-use components.</p>
                    <div className="figma1">
                        Figma workspace
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--carbon minimal__iconify__root css-eadae1" id="_r_8_" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M26 28H6a2.003 2.003 0 0 1-2-2V6a2.003 2.003 0 0 1 2-2h10v2H6v20h20V16h2v10a2.003 2.003 0 0 1-2 2"></path><path fill="currentColor" d="M20 2v2h6.586L18 12.586L19.414 14L28 5.414V12h2V2z"></path></svg>
                    </div>
                    <div className="avilable">
                        AVILABLE FOR
                        <div className="v46">
                            v4.6.0
                        </div>
                    </div>
                    <div className="svgg">
                        <img src="https://zone-ui.vercel.app/assets/icons/platforms/ic-figma.svg" alt="" />
                        <img src="https://zone-ui.vercel.app/assets/icons/platforms/ic-js.svg" alt="" />
                        <img src="https://zone-ui.vercel.app/assets/icons/platforms/ic-nextjs.svg" alt="" />
                        <img src="https://zone-ui.vercel.app/assets/icons/platforms/ic-ts.svg" alt="" />
                        <img src="https://zone-ui.vercel.app/assets/icons/platforms/ic-vite.svg" alt="" />
                    </div>
                </div>
                <div className="righ2">
                    <img className="img1" src="https://zone-ui.vercel.app/assets/images/home/hero-1.webp" alt="" />
                    <img className="img2" src="https://zone-ui.vercel.app/assets/images/home/hero-2.webp" alt="" />
                    <img className="img3" src="https://zone-ui.vercel.app/assets/images/home/hero-2.webp" alt="" />
                    <img className="img4" src="https://zone-ui.vercel.app/assets/images/home/hero-4.webp" alt="" />
                    <img className="img5" src="https://zone-ui.vercel.app/assets/images/home/hero-5.webp" alt="" />
                    <img className="img6" src="https://zone-ui.vercel.app/assets/images/home/hero-6.webp" alt="" />
                    <img className="img7" src="https://zone-ui.vercel.app/assets/images/home/hero-7.webp" alt="" />
                </div>
            </div>
            <div className="section2">
                <img src="	https://zone-ui.vercel.app/assets/images/home/desktop-mouse-keyboard.webp" alt="" />
                <p>NEW START</p>
                <h1>
                    The ZONE UI Kit
                </h1>
                <p>Modern ui kit to save your time, boost your creativity.Neat and  <br />super stylish layout ready to help with your projects</p>
            </div>
            <Pages5/>
            {/* <div className="section8">
                <div className="left7">
                    <p>Feature highlights</p>
                    <h1>Have everything you need</h1>
                    <p>Let's see what makes our theme super powerful and user-friendly!</p>
                </div>
                <div className="right7">
                    <div className='qatorr1'>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div className='qatorr2'></div>
                    <div className='qatorr3'></div>
                    <div className='qatorr4'></div>
                    <div className='qatorr5'></div>
                </div>
            </div> */}
            <div className="section3">
                <div className="qora">
                    <p>PROFESSIONAL KIT</p>
                    <h1>For designer</h1>
                    <div className="btn3">Checkout workspace <FaChevronRight /> </div>
                </div>
            </div>
            <div className="section6">
                <div className="inf1">
                    <div className="tepa">
                        <p>  Standard</p>
                        <p>$59</p>
                    </div>
                    <div className="orta">
                        <h1>JS</h1>
                        <div className="ota">
                            <h5><TiTick className='icon12' />One end products</h5>
                            <h5><TiTick className='icon12' />12 months updates</h5>
                            <h5><TiTick className='icon12' />6 months of support</h5>
                        </div>
                    </div>
                    <hr />
                    <div className="past">
                        <h5><TiTick className='icon12' />One end products</h5>
                        <h6><HiOutlineXMark />JavaScript version</h6>
                        <h6><HiOutlineXMark />JavaScript version</h6>
                        <h6><HiOutlineXMark />Design resources</h6>
                    </div>
                    <div className="pbtn1">Choose package</div>
                </div>
                <div className="inf2">
                    <div className="tepa">
                        <p>Plus</p>
                        <p>$99</p>
                    </div>
                    <div className="orta">
                        <div className="rrr">
                            <h1>JS </h1>
                            <h2>Ts</h2>
                            <img src="https://zone-ui.vercel.app/assets/icons/platforms/ic-figma.svg" alt="" />
                        </div>
                        <div className="ota">
                            <h5><TiTick className='icon12' />One end products</h5>
                            <h5><TiTick className='icon12' />12 months updates</h5>
                            <h5><TiTick className='icon12' />6 months of support</h5>
                        </div>
                    </div>
                    <hr />
                    <div className="past">
                        <h5><TiTick className='icon12' />One end products</h5>
                        <h5><TiTick className='icon12' />JavaScript version</h5>
                        <h5><TiTick className='icon12' />JavaScript version</h5>
                        <h6><HiOutlineXMark />Design resources</h6>
                    </div>
                    <div className="pbtn2">Choose package</div>
                </div>
                <div className="inf3">
                    <div className="tepa">
                        <p>Extended</p>
                        <p>$249</p>
                    </div>
                    <div className="orta">
                        <div className="rrr">
                            <h1>JS </h1>
                            <h2>Ts</h2>
                            <img src="https://zone-ui.vercel.app/assets/icons/platforms/ic-figma.svg" alt="" />
                        </div>
                        <div className="ota">
                            <h5><TiTick className='icon12' />One end products</h5>
                            <h5><TiTick className='icon12' />12 months updates</h5>
                            <h5><TiTick className='icon12' />6 months of support</h5>
                        </div>
                    </div>
                    <hr />
                    <div className="past">
                        <h5><TiTick className='icon12' />One end products</h5>
                        <h5><TiTick className='icon12' />JavaScript version</h5>
                        <h5><TiTick className='icon12' />JavaScript version</h5>
                        <h5><TiTick className='icon12' />Design resources</h5>
                    </div>
                    <div className="pbtn3">Choose package</div>
                </div>
            </div>
            <div className="section7">
                <div className="asos">
                    <h1 className='fr'>Frequently asked questions</h1>
                    <div className="parcha">
                        <div>
                            <h5>How can I get the update?</h5>
                            <GoPlus />
                        </div>
                        <hr />
                        <div>
                            <h5>Which license is right for you?</h5>
                             <GoPlus />
                        </div>
                        <hr />
                        <div>
                            <h5>How long is my  license vaild for?</h5>
                             <GoPlus />
                        </div>
                        <hr />
                        <div>
                            <h5>Which platforms will the template support?</h5>
                             <GoPlus />
                        </div>
                        <hr />
                        <div>
                            <h5>For what kind  of  project is the standard license intended</h5>
                             <GoPlus />
                        </div>
                        <hr />
                        <div>
                            <h5> Do you  have a free demo to review the code before purchasing?</h5>
                             <GoPlus />
                        </div>
                        <hr />
                    </div>
                        <div className="idish">
                            <h1>Still have questions?</h1>
                            <p>Please describe your case to receive the most accurate advice.</p>
                            <div className="contact">
                                Contact us
                            </div>
                        </div>
                </div>
            </div>
            <div className="section5">
                <div className="left5">
                    <p>LOOKING FOR</p>
                    <h1>Dashboard template?</h1>
                    <p>Minimal UI Kit is a professional dashboard <br />used by many of our clients.</p>
                    <div className="btn5">Visit Minimal Ul <FaChevronRight /></div>
                </div>
                <div className="righ5"></div>
            </div>
            <div className="section4">
                <div className="qora2">
                    <h1>Start now</h1>
                    <h1>create your</h1>
                    <h1>website today</h1>
                    <div className="btn4">Purchase now</div>
                </div>
            </div>
        </div>
    )
}

export default Home