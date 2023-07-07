import '../main.css'
import avatar1 from '../images/Avatar.png'
import avatar12 from '../images/Avatar(2).png'
import avatar2 from '../images/Avatar(3).png'
import avatar3 from '../images/Avatar(4).png'
import avatar4 from '../images/Avatar(5).png'
import avatar5 from '../images/Avatar(6).png'
import trash from '../images/trash-03.png'
import home from '../images/_Breadcrumbbuttonbase.png'
import next from '../images/chevron-right.png'

import notify from '../images/NavNotify.png'
import search from '../images/NavSearch.png'
import settings from '../images/NavSettings.png'
import drop from '../images/Dropdown.png'

import mail from '../images/mail-01.png'


export default function Main() {

    const usersArr = [
        {
            image: avatar5,
            name: "Olivia Rhye",
            email: "olivia@untitledui.com",
            viewer: ''
        },
        {
            image: avatar2,
            name: "Phoenix Baker",
            email: "phoenix@untitledui.com",
            viewer: 'Viewer'
        },
        {
            image: avatar12,
            name: "Lana Steiner",
            email: "lana@untitledui.com",
            viewer: 'Editor'
        },
        {
            image: avatar4,
            name: "Candice Wu",
            email: "candice@untitledui.com",
            viewer: 'Designer'
        },
        {
            image: avatar1,
            name: "Natalie Krag",
            email: "Natali@untitledui.com",
            viewer: 'Admin'
        },
        {
            image: avatar1,
            name: "Drew Cano",
            email: "Drew@untitledui.com",
            viewer: 'Admin'
        }
    ]

    const RenderItems = () => {
        const items = [];

        for (let i = 0; i < 2; i++) {
            items.push(
                <div className='render'>
                    <div className='renderInfo'>
                        <div>
                            <img src={usersArr[i].image} alt="" />
                        </div>
                        <div >
                            <p>{usersArr[i].name}</p>
                            <p>{usersArr[i].email}</p>
                        </div>
                    </div>

                    <div className='buttonDiv'>
                        <button className='buttonDiv1'>Resend Invite</button>

                        <button className='buttonDiv2'>Revoke Invite</button>
                    </div>
                </div>
            );
        }
        return items;
    };

    return (
        <div className='main'>
            <div className='header_navigation'>
                <div className='header_navigationDiv1'>
                    <img src={home} alt="" />
                    <img src={next} alt="" />
                    <p>Settings</p>
                    <img src={next} alt="" style={{ marginLeft: '16px' }} />
                    <p>Domains</p>
                </div>

                <div className='header_navigationDiv2'>
                    <img src={search} alt="" />
                    <img src={settings} alt="" />
                    <img src={notify} alt="" />
                    <img src={drop} alt="" />
                </div>
            </div>
            <div className='header_section'>
                <p style={{ fontSize: '20px', fontWeight: 'bold' }}>User Management</p>
                <p style={{ marginTop: '-15px' }}>Add or Manage your Domains</p>
            </div>
            <div className='section'>
                <div className='container'>
                    <div className='container_content'>
                        <div className='container_contentdiv1'>
                            <h3 style={{ marginTop: '-8px' }}>Users</h3>
                            <p>Add or remove users and manage their roles and Permissions</p>

                            <button className='buttonP'><img src={mail} alt="" />
                                <p>Invite People</p>
                            </button>
                        </div>
                        <div className='table'>
                            <div className='tableHeading'>
                                <p className='name'>Name</p>

                                <p className='role'>Role</p>
                            </div>
                            {usersArr.map((item) => {
                                return (
                                    <div className='contentDiv'>

                                        <div className='Div'>
                                            <div className='imageDiv'>
                                                <img src={item.image} alt="icon" />
                                            </div>
                                            <div className='infoDiv'>
                                                <p>{item.name}</p>
                                                <p style={{ marginTop: '-10px' }}>{item.email}</p>
                                            </div>
                                        </div>

                                        <div className='selectDiv'>
                                            <select name="" id="">
                                                <option value="viewer">{item.viewer}</option>
                                            </select>
                                        </div>

                                        <div className='trashDiv'>
                                            <img src={trash} alt="" />
                                        </div>

                                    </div>
                                )
                            })}



                        </div>
                    </div>

                    <div className='footerContent'>
                        <div className='container_contentdiv1'>
                            <h3>Pending Invites</h3>
                            <p>Manage the status of user account
                                invitations that have been sent out but
                                have not yet been accepted by the recipients</p>
                        </div>

                        <div className='table footer'>
                            <div className='tableHeading'>
                                <p className='footerName'>Name</p>
                            </div>
                            <RenderItems />
                        </div>

                    </div>

                    {/* <br /><br /><br /><br /><br />
                    <div className='tryingTable'>
                        <table>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Age</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr >
                                    <td>id</td>
                                    <td>item.name</td>
                                    <td>item.age</td>
                                </tr>
                            </tbody>
                        </table>
                    </div> */}
                </div>
            </div>
        </div>
    )
}



