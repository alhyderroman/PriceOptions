import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Line } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";

const NavBar = () => {
    const [open,setOpen]=useState(false);

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/products', name: 'Products' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/dashboard', name: 'Dashboard' }
      ];
      
    return (
        <nav className="text-black p-6 bg-yellow-200">
           <div className="md:hidden text-2xl" onClick={()=>setOpen(!open)}>
            {
                open===true? <RiCloseLine></RiCloseLine>: <RiMenu2Line ></RiMenu2Line> 
            }
          
           </div>
           <ul className={`md:flex duration-1000 absolute md:static ${open?'top-16':'-top-60'} bg-yellow-200 px-6`}>
           {
                routes.map(route=><Link key={route.id} route={route}></Link>)
            }
           </ul>
        </nav>
    );
};

export default NavBar;