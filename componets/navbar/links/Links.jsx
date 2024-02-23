import styles from "./link.module.css";
import NavLinks from "./navLinks/NavLinks";
const Links = () => {
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
  return (
    <div className={styles.link}>
      {links.map((link) => (
        <NavLinks item={link} key={link.title} />
      ))}
    </div>
  );
};

export default Links;
