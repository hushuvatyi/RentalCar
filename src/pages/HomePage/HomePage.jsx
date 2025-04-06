import React from 'react';
import { Link } from 'react-router-dom';
import { Section } from '../../components/Section/Section.jsx';
import styles from './HomePage.module.css';

const HomePage = () => {

  return (
    <Section>

      {/*{error && <Heading title="Some want wrong" bottom />}*/}
      <div className={styles.hero}>
        <div className={styles.text_wrapper}>
          <h1 className={styles.title}>Find your perfect rental car</h1>
          <p className={styles.text}>Reliable and budget-friendly rentals for any journey</p>
          <Link to="/catalog" className={styles.link}>
            View catalog
          </Link>
        </div>
      </div>

    </Section>
  );
};

export default HomePage;
