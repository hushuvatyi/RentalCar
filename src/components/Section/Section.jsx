import style from './Section.module.css';
import React from 'react';

export const Section = ({ children }) => {
  return <section className={style.section}>{children}</section>;
};
