import styles from "./ctaButton.module.scss";
import toast, { Toaster } from "react-hot-toast";

export const CTAButton = () => {
  const notify = () =>
    toast("Hey there", {
      icon: "👋",
    });

  return (
    <>
      <button onClick={notify} className={styles.button}>
        Request Invite
      </button>
      <Toaster position="bottom-right" />
    </>
  );
};
