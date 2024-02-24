"use client";
import { useState } from "react";
import styles from "./link.module.css";
import NavLinks from "./navLinks/NavLinks";
const Links = () => {
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
      title: "Blog",
      page: "/blog",
    },
    {
      title: "Contact",
      page: "/contact",
    },
  ];
  const session = true;
  const isAdmin = true;
  return (
    <div className="link-container">
      <div className={styles.link}>
        {links.map((link) => (
          <NavLinks item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLinks item={{ title: "Admin", page: "/admin" }} />}
            <button className={styles.button}>Logout</button>
          </>
        ) : (
          <button>Login </button>
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
