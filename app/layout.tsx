import '../styles/globals.css';
import React from 'react';
import Header from './components/header';

export const metadata = {
  title: 'Todo App',
  description: 'Todo App using Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
