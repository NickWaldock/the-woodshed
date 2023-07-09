import React from 'react';
import NoResults from '../assets/no-results.png';
import styles from '../styles/NoResults.module.css';
import Asset from '../components/Asset';

const NotFound = () => {
  return (
    <div className={styles.General}>
        <Asset 
            src={NoResults}
            message="Sorry, the page you are looking for doesn't exist"
        />
    </div>
  )
}

export default NotFound