import React from 'react';
import styles from './Form.module.css';
import image from '../../assets/Formimage.jpg';

const Form = () => {
  return (
    <div className={styles.divContainer}>
      <div>
        <h3 className={styles.containerH3}>Sign up</h3>
        <h5 className={styles.subheading}>
          Already have account? <a href="#">Login here</a>
        </h5>
      </div>
      <div className={styles.container}>
        <div className={styles.formSection}>
          <label className={styles.label}>Name</label>
          <input
            className={styles.inputFields}
            type="text"
            placeholder="Enter your name here"
          />
            <br />
          <label className={styles.label}>Email id</label>
          <input
            className={styles.inputFields}
            type="email"
            placeholder="Enter user email ID here"
          />
          <br />
          <label className={styles.label}>Password</label>
          <input
            className={styles.inputFields}
            type="password"
            placeholder="Enter password here"
          />
          <input className={styles.input} type="checkbox" /><label className={styles.label1}>By signing up you agree to receive updates and special offers.</label>
                <button className={styles.button}>Submit</button>

        </div>
        <div>
    
        </div>
        <div className={styles.imageSection}>
          <img className={styles.image} src={image} alt="Sign up visual" />
        </div>
      </div>
    </div>
  );
};



export default Form;
