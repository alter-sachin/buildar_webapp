// import React, { useState } from 'react';
// import * as FaIcons from 'react-icons/fa';
import * as AiIcons from "react-icons/ai";
import * as CgIcons from "react-icons/cg";
import * as FaIcons from "react-icons/fa";
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

import React, { Component } from "react";

class SideBar extends Component {
	constructor(props) {
		super(props);

		this.state = {

		};

		this.w3_close = this.w3_close.bind(this);
/*        this.invite_open = this.invite_open.bind(this);
        this.invite_close = this.invite_close.bind(this);
*/	}

    invite_open = ()=>{
        document.getElementById("center_container").style.display = "block";
    }

    invite_close = ()=>{
        document.getElementById("center_container").style.display = "none";
    }


    w3_close = () => {
    	document.getElementById("main").style.marginLeft = "0%";
    	document.getElementById("mySidebar").style.display = "none";
    	document.getElementById("openNav").style.display = "inline-block";
    	document.getElementById("openNav").style.visibility = "visible";
    }
    render() {
    	return (
    		<div>
    			<div className="w3-sidebar w3-bar-block w3-card w3-animate-left" style={{ display: "none" }} id="mySidebar">
    				<button className="w3-bar-item w3-button w3-large"
    					onClick={this.w3_close}><AiIcons.AiOutlineClose /></button>
    				<div className="navigation_logoSection">
    					<div className="navigation_symbol">
    						<span id="small_symbol"></span>
    					</div>
    				</div>
    				<a href="#" className="w3-bar-item w3-button"><span id="text"><strong>Videos</strong></span></a>
    				<a href="/createvideo" className="w3-bar-item w3-button">
    					<span id="icon">
    						<AiIcons.AiOutlineVideoCameraAdd />
    					</span>
    					<span id="text">
                            Create Video
    					</span>
    				</a>
    				<a href="/myvideos" className="w3-bar-item w3-button">
    					<span id="icon">
    						<AiIcons.AiOutlineOrderedList />
    					</span>
    					<span id="text">
                            My Videos
    					</span>
    				</a>
    				<div className="bottom_menu">
    					<a href="#" className="w3-bar-item w3-button"><span id="text"><strong>Settings</strong></span></a>
    					<a href="/profile" className="w3-bar-item w3-button">
    						<span id="icon">
    							<CgIcons.CgProfile />
    						</span>
    						<span id="text">
                                Profile
    						</span>
    					</a>
    					<a href="/billing" className="w3-bar-item w3-button">
    						<span id="icon">
    							<FaIcons.FaFileInvoiceDollar />
    						</span>
    						<span id="text">
                                Billing
    						</span>
    					</a>
    				</div>
    				
    			</div>
    		</div>
    	);
    }
}

export default SideBar;

