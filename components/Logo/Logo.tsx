import styles from "./logo.module.scss";
import Link from "next/link";
import Image from "next/image";

export const Logo = () => {
  return (
    <>
      <Link href="/">
        <a className={styles.a}>
          <Image width="139" height="20" src="/logo.svg" alt="Easybank" />
        </a>
      </Link>
    </>
  );
};
