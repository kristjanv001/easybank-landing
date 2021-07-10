import { menuItems } from "./menuItems";
import Link from "next/link";
import styles from "./mobileMenu.module.scss";

type MenuProps = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
};

export const MobileMenu = ({ isOpen, setIsOpen }: MenuProps) => {
  return (
    <>
      <nav
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen ? styles.fadeIn : styles.fadeOut} ${
          styles.menuContainer
        }`}
      >
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
    </>
  );
};
