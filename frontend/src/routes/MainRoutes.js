import React, { lazy, Suspense } from 'react';

// project import

// pages routing

// render - sample page
const BooksPage = lazy(() => import('pages/books'));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: (
    <Suspense fallback={<div>Loading...</div>}>
      <BooksPage />
    </Suspense>
  )
};

export default MainRoutes;