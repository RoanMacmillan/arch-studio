import Link from "next/link";
import styles from "./page.module.css";
import Button from "./components/button/button";

export default function Home() {
  return (
    <main>
      <div className={styles.heroWrapper}>
        <h1>Project Paramour</h1>
        <p>
          Project made for an art museum near Southwest London. Project Paramour
          is a statement of bold, modern architecture.
        </p>

        <Button href="/portfolio">See Our Portfolio</Button>
      </div>

      <div className={styles.textWrapper}>
        <div className={styles.line}></div>
        <h2>Welcome to Arch Studio</h2>
        <p>
          We have a unique network and skillset to help bring your projects to
          life. Our small team of highly skilled individuals combined with our
          large network put us in a strong position to deliver exceptional
          results.
        </p>
        <p>
          {""}
          Over the past 10 years, we have worked on all kinds of projects. From
          stations to high-rise buildings, we create spaces that inspire and
          delight.
        </p>{" "}
        <p>
          {" "}
          We work closely with our clients so that we understand the intricacies
          of each project. This allows us to work in harmony the surrounding
          area to create truly stunning projects that will stand the test of
          time.
        </p>
      </div>


      <div className={`${styles.heroWrapper} ${styles.aboutWrapper}`}>
        <h1>Small team, big ideas</h1>
        

        <Button href="/about" width="187px">About us</Button>
      </div>

      <div className={styles.featuredContainer}>
      <h1>Featured</h1>

      <div className={`${styles.imageCard} ${styles.card1}`}>

      <h2>Project Del Sol</h2>
      <a>View all projects</a>


      </div>

      <div className={`${styles.imageCard} ${styles.card2}`}>

      <h2>228B Tower</h2>
      <a>View all projects</a>


      </div>

      <div className={`${styles.imageCard} ${styles.card3}`}>

      <h2>Le Prototype</h2>
      <a>View all projects</a>


      </div>

      <Button href='/portfolio' width="100%">See All</Button>

      </div>


    </main>
  );
}
