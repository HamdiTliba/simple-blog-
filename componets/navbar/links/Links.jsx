"use client";
import { useState } from "react";
import styles from "./link.module.css";
import NavLinks from "./navLinks/NavLinks";
import { handleGithubSignOut } from "@/lib/action";
import Link from "next/link";
const Links = ({ session }) => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      title: "Home",
      page: "/",
    },
    {
      title: "About",
      page: "/about",
    },
    {
      title: "Contact",
      page: "/contact",
    },
    {
      title: "Blog",
      page: "/blog",
    },
  ];
  const isAdmin = true;
  return (
    <div className="link-container">
      <div className={styles.link}>
        {links.map((link) => (
          <NavLinks item={link} key={link.title} />
        ))}
        {session?.user ? (
          <>
            {session.user?.isAdmin && (
              <NavLinks item={{ title: "Admin", page: "/admin" }} />
            )}
            <form action={handleGithubSignOut}>
              <button className={styles.button}>Logout</button>
            </form>
          </>
        ) : (
          <Link
            href="/login"
            style={{
              background: "white",
              color: "black",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            Login
          </Link>
        )}
      </div>

      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLinks item={link} key={link.title} />
          ))}
          {session ? (
            <>
              {isAdmin && (
                <NavLinks item={{ title: "Admin", page: "/admin" }} />
              )}
              <button>Logout</button>
            </>
          ) : (
            <button>Login </button>
          )}
        </div>
      )}
      <button className={styles.btnMenu} onClick={() => setOpen((pre) => !pre)}>
        Menu
      </button>
    </div>
  );
};

export default Links;
