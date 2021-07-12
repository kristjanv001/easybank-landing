import styles from "./footer.module.scss";
import { CTAButton } from "../CTAButton/CTAButton";
import { Logo } from "../Logo/Logo";
import { footerMenuItems1, footerMenuItems2 } from "./footerMenuItems";
import Link from "next/link";
// import Image from "next/image";
import { Facebook } from "../SVGIcons/Facebook";
import { Twitter } from "../SVGIcons/Twitter";
import { Pinterest } from "../SVGIcons/Pinterest";
import { Youtube } from "../SVGIcons/Youtube";
import { Instagram } from "../SVGIcons/Instagram";

export const Footer = () => {
  const svgWH = {
    width: 27,
    height: 27,
  };

  return (
    <footer className={styles.container}>
      <div className={styles.grid}>
        {/* LOGO & SOCIALS */}
        <div className={styles.logoSocials}>
          <div className={styles.logo}>
            <Logo color="white" />
          </div>
          <div>
            <Link href="/">
              <a className={styles.icon}>
                <Facebook
                  width={svgWH.width}
                  height={svgWH.height}
                  viewBox="0 0 22 22"
                />
              </a>
            </Link>

            <Link href="/">
              <a className={styles.icon}>
                <Youtube
                  width={svgWH.width}
                  height={svgWH.height}
                  viewBox="0 0 22 22"
                />
              </a>
            </Link>

            <Link href="/">
              <a className={styles.icon}>
                <Twitter
                  width={svgWH.width}
                  height={svgWH.height}
                  viewBox="0 0 22 22"
                />
              </a>
            </Link>

            <Link href="/">
              <a className={styles.icon}>
                <Pinterest
                  width={svgWH.width}
                  height={svgWH.height}
                  viewBox="0 0 22 22"
                />
              </a>
            </Link>

            <Link href="/">
              <a className={styles.icon}>
                <Instagram
                  width={svgWH.width}
                  height={svgWH.height}
                  viewBox="0 0 22 22"
                />
              </a>
            </Link>
          </div>
        </div>

        {/* MENU ITEMS */}
        <div className={styles.menuItems}>
          {footerMenuItems1.map(({ item, path }, idx) => {
            return (
              <span className={styles.menuItem} key={idx}>
                <Link href={path}>
                  <a>{item}</a>
                </Link>
              </span>
            );
          })}
        </div>

        <div className={styles.menuItems}>
          {footerMenuItems2.map(({ item, path }, idx) => {
            return (
              <span className={styles.menuItem} key={idx}>
                <Link href={path}>
                  <a>{item}</a>
                </Link>
              </span>
            );
          })}
        </div>

        {/* CTA & COPYRIGHT */}
        <div className={styles.copyRightContainer}>
          <CTAButton />
          <span className={styles.copyRightText}>
            © Easybank. All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
};
