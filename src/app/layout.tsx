"use client";

import { ReactNode } from 'react';
import Header from './components/Header';
import './globals.css';

type LayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <head>
        <title>golDMen - Мужская одежда в Нальчике</title>
        <meta name="description" content="golDMen - интернет-магазин мужской одежды в Нальчике. Уникальный ассортимент одежды и аксессуаров для мужчин." />
        <meta name="keywords" content="нальчик одежда, goldmen нальчик, goldmen, golDMen, goldmen store, golDMen store, головко 93 нальчик, goldmen.store07, мужская мода, мужская одежда, аксессуары для мужчин" />
        <meta name="author" content="golDMen" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph meta tags */}
        <meta property="og:title" content="golDMen - Мужская мода в Нальчике" />
        <meta property="og:description" content="golDMen - интернет-магазин мужской одежды в Нальчике. Уникальный ассортимент одежды и аксессуаров для мужчин." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.goldmen.store07/" />
        <meta property="og:image" content="https://www.goldmen.store07/your-image.jpg" />
        <meta property="og:site_name" content="golDMen" />

        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="golDMen - Мужская мода в Нальчике" />
        <meta name="twitter:description" content="golDMen - интернет-магазин мужской одежды в Нальчике. Уникальный ассортимент одежды и аксессуаров для мужчин." />
        <meta name="twitter:image" content="https://www.goldmen.store07/your-image.jpg" />
        <meta name="twitter:site" content="@yourtwitterhandle" />
        <meta name="twitter:creator" content="@yourtwitterhandle" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="container">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
