import styles from "@/app/Home.module.css";
import HomeHero from "@/components/home/HomeHero";


export default function Home() {

  return (
    <main className={styles.container}>
      <HomeHero/>
    </main>
  );
}
