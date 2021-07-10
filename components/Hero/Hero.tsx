import { CTAButton } from "../CTAButton/CTAButton";
import styles from "./hero.module.scss";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.heroBg}></div>
      <div className={styles.innerContainer}>
        <div className={styles.contentContainer}>
          <h2 className={styles.heading}>Next generation digital banking</h2>
          <p>
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <CTAButton />
        </div>
      </div>
    </section>
  );
};
