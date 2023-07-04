import "../sidebar.css"

export default function Sidebar() {
    return (
        <div className='mainSidebar'>
            <div className='sidebar' >
                <div className='sidebar_content'>
                    <div className='sidebar_nav'>
                        <div className='sidebar_headericon'>
                            <img src="" alt="header" />
                        </div>
                        <div className='sidebar_navigation'>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                    </div>
                    <div className='sidebar_footer'></div>
                </div>
            </div>

            <div className='subnav'>
                <div className='content'>
                    <div className='frame'>
                        <h1>Settings</h1>
                    </div>
                    <div className='navigation'>
                        <ul>
                            <li>Personal Information</li>
                            <li>Billing and Payment</li>
                            <li>Domains</li>
                            <li>User Management</li>
                            <li>Customer Experience</li>
                            <li>Page Structure</li>
                            <li>Invite & Referrals</li>
                        </ul>
                    </div>
                </div>

                <div>

                </div>
            </div>

        </div>
    )
}



