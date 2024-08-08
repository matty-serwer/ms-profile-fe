// style
import styles from './HomeHero.module.css'
import { raleway } from '@/app/ui/fonts'

const HomeHero = () => {
  return (
    <div>
      <h1 className={`${styles.heroHeader} ${raleway.className}`}>
        Matthew Serwer
      </h1>
    </div>
  );
};

export default HomeHero;
