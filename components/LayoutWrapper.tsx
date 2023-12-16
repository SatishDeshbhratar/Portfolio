import headerNavLinks from '@/data/headerNavLinks';
import { ReactNode, useState } from 'react';
import Footer from './Footer';
import Link from './Link';
import MobileNav from './MobileNav';
import SectionContainer from './SectionContainer';
import ThemeSwitch from './ThemeSwitch';
import { RoughNotation } from 'react-rough-notation';

interface Props {
  children: ReactNode;
}

const LayoutWrapper = ({ children }: Props) => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  return (
    <SectionContainer>
      <div className='flex h-screen flex-col justify-between'>
        <header className='flex items-center justify-end py-8'>
          <div className='flex items-center text-base leading-5'>
            <div className='hidden sm:block'>
              {headerNavLinks.map(link => (
                <Link
                  key={link.title}
                  href={link.href}
                  className='p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4'
                  onMouseEnter={() => setHoveredLink(link.title)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <RoughNotation
                    show={hoveredLink === link.title}
                    type='underline'
                    strokeWidth={2}
                    animationDelay={50}
                    animationDuration={500}
                  >
                    {link.title}
                  </RoughNotation>
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className='mb-auto'>{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  );
};

export default LayoutWrapper;
