import React from 'react';
import { Header } from '../Header/Header.jsx';
import { Outlet } from 'react-router-dom';

console.log('from layout');

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export { Layout };