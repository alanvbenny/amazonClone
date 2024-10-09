import React from 'react'
import './footer.css'
import amazonLogo from '../../Assets/amazonLogo.png'
const Footer = () => {
    return (
        <div className="footer">
            <div className="footerContent">

                <div className="footerCount1">
                    <div className="contentFooterTitle">Get To Know Us</div>
                    <div className="contentFooterSubTitleiv">
                        <div className="contentFooterSubTitleCount">About us</div>
                        <div className="contentFooterSubTitleCount">Careers</div>
                        <div className="contentFooterSubTitleCount">Press Releases</div>
                        <div className="contentFooterSubTitleCount">Amazon Science</div>
                    </div>
                </div>

                <div className="footerCount1">
                    <div className="contentFooterTitle">Coonect with Us</div>
                    <div className="contentFooterSubTitleiv">
                        <div className="contentFooterSubTitleCount">Instagram</div>
                        <div className="contentFooterSubTitleCount">Twitter</div>
                        <div className="contentFooterSubTitleCount">Facebook</div>
                        
                    </div>
                </div>

                <div className="footerCount1">
                    <div className="contentFooterTitle">Make Money with Us</div>
                    <div className="contentFooterSubTitleiv">
                        <div className="contentFooterSubTitleCount">Sell on Amazon</div>
                        <div className="contentFooterSubTitleCount">Sell under Amazon Accelator</div>
                        <div className="contentFooterSubTitleCount">Protect and Build your Brand </div>
                        <div className="contentFooterSubTitleCount">Become an Affilate</div>
                    </div>
                </div>

                <div className="footerCount1">
                    <div className="contentFooterTitle">Let us Help you</div>
                    <div className="contentFooterSubTitleiv">
                        <div className="contentFooterSubTitleCount">COVID-19 and Amazon</div>
                        <div className="contentFooterSubTitleCount">Your Account</div>
                        <div className="contentFooterSubTitleCount">Return  Centre</div>
                    </div>
                </div>

            </div>
            <div className="amazonImg">
                <img className="amazonImgFooter " src={amazonLogo} alt='' />
            </div>
        </div>
    )
}

export default Footer