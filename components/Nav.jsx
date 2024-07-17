"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <Link
            href={link.path}
            key={link.path} // Utilisation d'une clé unique basée sur le chemin
            className={`
              capitalize font-medium hover:text-blue-500 transition-all
              ${isActive ? "text-blue-500 border-b-2 border-blue-500" : ""}
            `}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
