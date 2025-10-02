import React, { use } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Navber = () => {

 const { user, logOut} = use(AuthContext);

 const handlysignOut = () =>{
  logOut()
  .then(()=>{
    console.log("user signOut")
  })
  .catch(error =>{
    console.log(error.user)
  })
 }

    const links = <>

<li><NavLink to="/">Home</NavLink></li>
    </>
    return (
       <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                   {links}          
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">JobPortal</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
                {links}
     
    </ul>
  </div>
  <div className="navbar-end flex gap-2">
    {
      user ? <button onClick={handlysignOut} className='btn px-8 py-3 font-semibold rounded-md  bg-blue-600 hover:bg-blue-500 text-gray-50'>Sign Out</button> :
      <>
          <NavLink to='signIn' className='btn px-8 py-3 font-semibold rounded-md  bg-blue-600 hover:bg-blue-500 text-gray-50'>Sign In</NavLink>
     <NavLink to='signUp' className='btn px-8 py-3 font-semibold rounded-md  bg-blue-600  hover:bg-blue-500 text-gray-50' >Register</NavLink>
      </>
    }
  </div>
</div>
    );
};

export default Navber;