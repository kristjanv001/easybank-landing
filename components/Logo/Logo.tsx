import styles from "./logo.module.scss";
import Link from "next/link";

export const Logo = () => {
  return (
    <>
      <Link href="/">
        <a className={styles.a}>
          <img className={styles.image} src="/logo.svg" alt="Easybank" />
        </a>
      </Link>
    </>
  );
};
