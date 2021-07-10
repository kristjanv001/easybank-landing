import { useEffect } from "react";
import { Logo } from "../Logo/Logo";
import styles from "./header.module.scss";
import { MobileMenu } from "../Menu/MobileMenu";
import { DesktopMenu } from "../Menu/DesktopMenu";
import { useState } from "react";
import { CTAButton } from "../CTAButton/CTAButton";
import { Overlay } from "../Overlay/Overlay";
import { MobileMenuBtn } from "../Menu/MobileMenuBtn";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");
    isOpen
      ? body?.classList.add("lockScroll")
      : body?.classList.remove("lockScroll");
  }, [isOpen, setIsOpen]);

  return (
    <header className={`${styles.header} navContainer`}>
      <Logo />
      <div className={styles.mobileItems}>
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        <MobileMenuBtn isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <div className={styles.desktopItems}>
        <DesktopMenu />
      </div>

      <div className={styles.desktopItems}>
        <CTAButton />
      </div>

      <Overlay isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};
