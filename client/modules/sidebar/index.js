// import React, { useState } from 'react';
// import * as FaIcons from 'react-icons/fa';
// import * as AiIcons from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import { SidebarItem } from './sidebarItem';
// import { IconContext } from 'react-icons';

// function SideNavPage() {
//     const [sidebar, setSidebar] = useState(false);

//     const showSidebar = () => setSidebar(!sidebar);

//     return (
//         <>
//             <IconContext.Provider value={{ color: '#fff' }}>
//                 <div className='sidebar'>
//                     <Link to='#' className='side-menu-bars'>
//                         <FaIcons.FaBars onClick={showSidebar} />
//                     </Link>
//                 </div>
//                 <nav className={sidebar ? 'side-menu active' : 'side-menu'}>
//                     <ul className='side-menu-items' onClick={showSidebar}>
//                         <li className='sidebar-toggle'>
//                             <Link to='#' className='side-menu-bars'>
//                                 <AiIcons.AiOutlineClose />
//                             </Link>
//                         </li>
//                         {SidebarItem.map((item, index) => {
//                             return (
//                                 <li key={index} className={item.cName}>
//                                     <Link to={item.path}>
//                                         {item.icon}
//                                         <span>{item.title}</span>
//                                     </Link>
//                                 </li>
//                             );
//                         })}
//                     </ul>
//                 </nav>
//             </IconContext.Provider>
//         </>
//     );
// }

// export default SideNavPage;

import React, { Component } from 'react'

class SideBar extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }

        this.w3_close = this.w3_close.bind(this);
    }


    w3_close = () => {
        document.getElementById("main").style.marginLeft = "0%";
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("openNav").style.display = "inline-block";
        document.getElementById("openNav").style.visibility = 'visible';
    }
    render() {
        return (
            <div>
                <div className="w3-sidebar w3-bar-block w3-card w3-animate-left" style={{ display: "none" }} id="mySidebar">
                    <button className="w3-bar-item w3-button w3-large"
                        onClick={this.w3_close}>Close &times;</button>
                    <a href="#" className="w3-bar-item w3-button">Link 1</a>
                    <a href="#" className="w3-bar-item w3-button">Link 2</a>
                    <a href="#" className="w3-bar-item w3-button">Link 3</a>
                </div>
            </div>
        )
    }
}

export default SideBar
