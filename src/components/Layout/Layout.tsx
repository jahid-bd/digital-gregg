import dynamic from 'next/dynamic';
import { ReactNode } from 'react';

const Header = dynamic(() => import('../Header'));
const Footer = dynamic(() => import('../Footer'));

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
