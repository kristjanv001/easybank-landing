import styles from "./overlay.module.scss";

type OverlayProps = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
};

export const Overlay = ({ isOpen, setIsOpen }: OverlayProps) => {
  return (
    <div
      onClick={() => setIsOpen(false)}
      className={` ${styles.overlay} ${
        isOpen ? styles.fadeIn : styles.fadeOut
      }`}
    ></div>
  );
};
