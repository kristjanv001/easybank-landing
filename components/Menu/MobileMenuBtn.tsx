import styles from "./mobileMenuBtn.module.scss";

type MobileMenuBtnProps = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
};

export const MobileMenuBtn = ({ isOpen, setIsOpen }: MobileMenuBtnProps) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className={`${isOpen ? styles.open : styles.closed} ${styles.button}`}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};
