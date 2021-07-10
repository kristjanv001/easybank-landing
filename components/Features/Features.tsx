import styles from "./features.module.scss";
import { featuresData } from "./sectionData";
import Image from "next/image";

export const Features = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.mainFeature}>
          <h2 className="heading">Why Choose Easybank?</h2>
          <p className={styles.mainText}>
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>

        <div className={styles.featureContainer}>
          {featuresData.map(({ title, description, icon }, idx) => {
            return (
              <div key={idx} className={styles.featureWrapper}>
                <div className={styles.icon}>
                  <Image width="72" height="72" src={icon} alt="Icon" />
                </div>
                <h2 className={styles.subHeading}>{title}</h2>
                <p>{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
