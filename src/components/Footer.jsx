import React from 'react';
import Logo from "./Logo";
import Menu from "./Menu";
import copyright from "./copyright2.jpg";

function Footer(props) {
    return (
        <footer>
            <div className ="container">
                <div className='footer-menu'>
                    <Logo/>
                </div>
                <div className='footer-menu'>
                    <Menu menuItems={props.menuItems.menu1} />
                </div>
                <div className='footer-menu'>
                    <Menu menuItems={props.menuItems.menu2} />
                </div>

                    <p>
                        Always genuine brand products <br/>
                        from the original producer/supplier,<br/>
                        satisfaction guaranteed!<br/><br/>
                        <div>
                            <img src={copyright}  width='8%'/>02/11/2020
                        </div>

                    </p>

            </div>
        </footer>
    );
}

export default Footer;
