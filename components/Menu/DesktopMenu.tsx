import { menuItems } from "./menuItems";
import Link from "next/link";
import styles from "./desktopMenu.module.scss";

export const DesktopMenu = () => {
  return (
    <nav className={styles.container}>
      <ul>
        {menuItems.map((menuItem, idx) => (
          <li key={idx}>
            <Link href={menuItem.path}>
              <a>{menuItem.item}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
