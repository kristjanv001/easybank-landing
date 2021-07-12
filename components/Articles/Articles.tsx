import styles from "./articles.module.scss";
import { articlesData } from "./articlesData";
import Image from "next/image";

export const Articles = () => {
  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>
        <h2 className="heading">Latest Articles</h2>
        <div className={styles.grid}>
          {articlesData.map(({ author, title, text, img }, idx) => {
            return (
              <div key={idx} className={styles.cardContainer}>
                <Image
                  className={styles.image}
                  width="600"
                  height="400"
                  src={img}
                  alt="Icon"
                />
                <div className={styles.cardWrapper}>
                  <span className={styles.author}>By {author}</span>
                  <h3 className={styles.title}>{title}</h3>
                  <p className={styles.text}>{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
