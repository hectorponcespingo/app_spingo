import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../general/Header';

export const PublicLayout = () => {
  return (
    <>
        <Header />

        <section className=''>
            <Outlet />
        </section>
    </>
  )
}
