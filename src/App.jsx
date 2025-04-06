// import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import React from 'react';
import Loader from './components/Loader/Loader.jsx';
import { Layout } from './components/Layout/Layout.jsx';

const HomePage = lazy(() => import('./pages/HomePage/HomePage.jsx'));
const CatalogPage = lazy(() => import('./pages/CatalogPage/CatalogPage.jsx'));

function App() {


  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  );

}

export default App;
