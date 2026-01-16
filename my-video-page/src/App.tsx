import React, { useRef, useState } from 'react';
import NavBar from './components/NavBar';
import Tabs from './components/Tabs';
import BannerImage from './assets/banner.png'
import FooterImage from './assets/footer.jpg'
import Category from './components/Cateogry';

import styles from './styles.module.scss';
import { dataSource } from './constants/data';
import classNames from 'classnames';

function App() {
  const oldYRef = useRef<number>(0);
  const contentsRef = useRef<HTMLDivElement>(null);

  const [hidden,sethidden] = useState<boolean>(false);

  const onScroll = () =>{
    if (contentsRef.current) {
      const {top:newY}= contentsRef.current.getBoundingClientRect();

      const delta = newY - oldYRef.current;

      oldYRef.current = newY;

      if(delta < 0 ){
        sethidden(true);
      }else{
        sethidden(false);
      }
    }
  };

  return (
    <div className={styles.app}>
      <header className={classNames(styles.header,{[styles.hidden]:hidden})}>
        <NavBar title="首頁"/>

        <Tabs/>
      </header>

      <div className={styles.line}></div>

      <div className={styles.scrollView} onScroll={onScroll}>
        <img className={styles.banner} src={BannerImage} alt="Banner"/>

        <div ref={contentsRef} className={styles.constents}>
          <h2>{dataSource.hot.title}</h2>
          <Category list={dataSource.hot.list}/>

          <h2>{dataSource.live.title}</h2>
          <Category list={dataSource.live.list}/>

          <h2>{dataSource.recommend.title}</h2>
          <Category list={dataSource.recommend.list}/>
        </div>

        <img className={styles.banner} src={FooterImage} alt="Footer"/>

        <footer className={styles.footer}>
          <span>@Bilibili 2022</span>
        </footer>
      </div>        

    </div>
  );
}

export default App;
