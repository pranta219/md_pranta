import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/pranta.png'

const Navbar = () => {
    return (
        <div className="navbar bg-black h-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/'>Home</Link></li>
                        <li tabindex="0">
                            <Link to='/blogs' className="justify-between">
                                Blogs
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </Link>
                            <ul className="p-2">
                                <li><a>Tecnology</a></li>
                                <li><a>World</a></li>
                            </ul>
                        </li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl"><img className='w-20' alt="" src={logo} /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link className='text-white' to='/home'>Home</Link></li>
                    <li tabindex="0">
                        <Link className='text-white' to='/about'>
                            About Me
                        </Link>
                    </li>
                    <li><Link className='text-white' to='/skills'>Skills</Link></li>
                    <li><Link className='text-white' to='/hire'>Hire Me</Link></li>
                    <li><Link className='text-white' to='/contact'>Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div class="dropdown dropdown-end">
                    <label tabindex="0" class="btn btn-ghost btn-circle avatar">
                        <div class="w-10 rounded-full">
                            <img src="https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-1/284942204_3161340720849000_4557269433563866382_n.jpg?stp=c128.497.1049.1049a_dst-jpg_s160x160&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFkQ8A7l92IJ6nS_kX28HXrgJA6oR1-xISAkDqhHX7EhHxGI1FR6vVCNVcaPv0w3W-OTw03d0CX9LvVc7RyHIgW&_nc_ohc=vzqgPqh_TF8AX8rNEjS&_nc_ht=scontent.fdac24-2.fna&oh=00_AT9VRRQ_Tbix4WpCshIPdM93mXoy88PFuFz4wGodnTkpGA&oe=62A63496" />
                        </div>
                    </label>
                    <ul tabindex="0" class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li><Link to='/login'>Login</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;