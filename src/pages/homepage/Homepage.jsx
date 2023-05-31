import React from 'react'
import './homepage.style.scss';
import Directory from '../../components/directory/Directory';

const Homepage = () => (
    <div className='homepage'>
        {/* <div className="directory-menu">
            <div className="menu-item">
                <div className="content">
                    <h1 className='title'>HATS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className='title'>JACKETS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className='title'>SNEKERS</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className='title'>WOMEN</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
            <div className="menu-item">
                <div className="content">
                    <h1 className='title'>MEN</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
        </div> */}

        <Directory />
    </div>
)

export default Homepage;