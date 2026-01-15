import React from 'react';
import NavBar from './components/NavBar';
import Tabs from './components/Tabs';
import BannerImage from './assets/banner.png'
import FooterImage from './assets/footer.jpg'
import Category from './components/Cateogry';

import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <NavBar/>

      <Tabs/>
      
      <img className={styles.banner} src={BannerImage} alt="Banner"/>

      <h2>熱門</h2>
      <Category/>

      <h2>直播</h2>
      <Category/>

      <h2>推薦</h2>
      <Category/>

      <img className={styles.banner} src={FooterImage} alt="Footer"/>

      <footer className={styles.footer}>
        <span>@Bilibili 2022</span>
      </footer>

    </div>
  );
}

export default App;
