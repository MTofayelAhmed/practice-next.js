import Link from "next/link";

const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/profile",
    title: "Profile",
  },
  {
    path: "/blog",
    title: "Blogs",
  },
  {
    path: "/dashboard",
    title: "Dashboard",
  },
];

const Navbar = () => {
  return (
    <nav className=" flex items-center justify-between mx-20">
      <h1 className=" font-semibold text-3xl">Next Hero</h1>
      <ul className=" flex items-center justify-center">
        {navLinks.map(({ path, title }) => (
          <li className=" mx-2" key={title}>
            <Link href={path}> {title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
