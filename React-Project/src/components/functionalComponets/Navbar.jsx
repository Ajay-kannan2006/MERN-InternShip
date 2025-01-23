import { useState } from 'react';
import '../../css/Navbar.css'
import { Link } from "react-router-dom"

const Navbar = () => {
    var [dropdown, setDrop] = useState(false);
    return (
        <header>
            <nav>
                <ol className='navbar'>
                    <li><Link to='/home' className='link'>Home</Link></li>
                    <li><Link to='/card' className='link'>Card</Link></li>
                    <li><Link to='/about' className='link'>About</Link></li>
                    <li><Link to='/profile' className='link'>Profile</Link></li>
                    <li><Link to='/contact' className='link'>Contact</Link></li>
                    <div >
                        <span onMouseEnter={() => { setDrop(true) }} style={{ color: "white" }}>Hooks</span>
                        {dropdown && <ul onMouseLeave={() => { setDrop(false) }} >
                            <li><Link to="/use-state" className='link'>Use State</Link></li>
                            <li><Link to="/use-effect" className='link'>Use Effect</Link></li>
                            <li><Link to="/use-api" className='link'>Use API</Link></li>
                            <li><Link to="/image-api" className='link'>Image Api</Link></li>
                            <li><Link to="/use-ref" className='link'>Use Ref</Link></li>
                            <li><Link to="/use-memo" className='link'>Use Memo</Link></li>
                        </ul>}
                    </div>
                </ol>
            </nav>
        </header>
    );
};
export default Navbar;

