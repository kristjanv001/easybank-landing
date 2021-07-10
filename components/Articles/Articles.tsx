import styles from "./articles.module.scss";
import { articlesData } from "./articlesData";

export const Articles = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className="heading">Latest Articles</h2>
        <div>{/* container for the card, then the card itself */}</div>
      </div>
    </section>
  );
};
