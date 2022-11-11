import React from 'react';
import logo from '../../assets/SVG MODEL 1.svg';

function Header() {
    return (
        <header style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'black', padding:'1rem' }}>
            <img src={logo} width='200' />
            <nav>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'row', columnGap: '1rem', color: 'white' }}>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li> 
                </ul>
            </nav>
        </header>
    )
}

export default Header;