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
    title: "Blog",
  },
  {
    path: "/dashBoard",
    title: "DashBoard",
  },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between ">
      <h1 className="text-3xl font-semibold">Next Hero</h1>
      <ul className="flex items-center justify-center">
        {navLinks.map(({ path, title }) => (
          <li className="mx-2" key={title}>
            <Link href={path}>{title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
