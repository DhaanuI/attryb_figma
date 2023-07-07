import "../sidebar.css"
import header from '../images/Group60.png'
import nav_item_base4 from '../images/_Navitembase4.png'
import nav_item_base3 from '../images/_Navitembase3.png'
import nav_item_base2 from '../images/_Navitembase(2).png'
import pic1 from '../images/user-square.png'
import pic2 from '../images/user-check-01.png'
import pic3 from '../images/layout-grid-01.png'
import pic4 from '../images/users-edit.png'
import pic5 from '../images/users-plus.png'
import navFooter1 from '../images/_Navfooter1.png'
import navFooter2 from '../images/_Navfooter2.png'
import navIcon from '../images/navicon.png'
import Navitemdropdownbase from '../images/_Navitemdropdownbase.png'
import navicon2 from '../images/navIcon2.png'
import navicon3 from '../images/navicon3.png'
import nav from '../images/nav.png'

import globe from '../images/globe-06.png'


export default function Sidebar() {

    const arr = [
        {
            image: pic1,
            name: "Personal Information"
        },
        {
            image: pic2,
            name: "Billing and Payment"
        },
        {
            image: globe,
            name: "Domains"
        },
        {
            image: pic4,
            name: "User Management"
        },
        {
            image: pic2,
            name: "Customer Experience"
        },
        {
            image: pic3,
            name: "Page Structure"
        },
        {
            image: pic5,
            name: "Invite & Referrals"
        },
    ]

    return (
        <div className='mainSidebar'>
            <div className='sidebar' >
                <div className='sidebar_content'>
                    <div className='sidebar_nav'>
                        <div className='sidebar_headericon'>
                            <img src={header} alt="header" />
                        </div>
                        <div className='sidebar_navigation'>
                            <ul style={{ listStyleType: 'none' }}>
                                <li><img src={nav_item_base4} alt="header" /></li>
                                <li><img src={navicon3} alt="header" /></li>
                                <li><img src={nav_item_base3} alt="header" /></li>
                                <li><img src={nav} alt="header" /></li>
                                <li><img src={nav_item_base2} alt="header" /></li>
                                <li><img src={navicon2} alt="header" /></li>
                                <li><img src={navIcon} alt="header" /></li>
                                <li><img src={Navitemdropdownbase} alt="header" /></li>
                            </ul>
                        </div>
                    </div>

                    <br /><br /><br /><br />
                    <div className='sidebar_footer'>
                        <div>
                            <img src={navFooter1} alt="" />
                        </div>

                        <div>
                            <img src={navFooter2} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className='subnav'>
                <div className='content'>
                    <div className='frame'>
                        <p style={{textAlign:'left'}}>Settings</p>
                    </div>
                    <div className='navigation'>
                        {arr.map((item) => {
                            return (
                                <div className='navigation_div'>
                                    <div className='navigation_Imagediv'>
                                        <img src={item.image} alt="" />
                                    </div>
                                    <div className='navigation_Infodiv'>
                                        <p>{item.name}</p>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>

                <div>

                </div>
            </div>

        </div>
    )
}



