import NavLink from "@/components/NavLink";
import Link from "next/link";

const navLinks = [
    {
        path: '/dashboard',
        title: " Dashboard"
    },
    {
        path: '/dashboard/add-product',
        title: " Add Product"
    },
    {
        path: '/dashboard/manage-product',
        title: " Manage Product"
    },
    {
        path: '/',
        title: "Home"
    }

]

const SideBar = () => {
    return (
        <aside className="mr-10">
          <h1 className=" text-3xl font-semibold">DashBoard</h1>  
          <ul>
           { navLinks.map(({path, title}) => <li key ={title}>
            <NavLink activeClassName='text-blue-500' exact href={path}> {title}</NavLink>
           </li>)}
          </ul>
        </aside>
    );
};

export default SideBar;
