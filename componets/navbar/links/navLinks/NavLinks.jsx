"use client";

import Link from "next/link";
import styles from "./navLinks.module.css";

import { usePathname } from "next/navigation";

const NavLinks = ({ item }) => {
  const pathname = usePathname();
  return (
    <Link
      href={item.page}
      className={`${styles.container} ${
        pathname === item.page && styles.active
      }`}
    >
      {item.title}
    </Link>
  );
};

export default NavLinks;
