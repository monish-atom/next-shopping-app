import Link from 'next/link';
import { Menu, Search, ShoppingBag } from 'lucide-react';
type Props = {};

const Nav = (props: Props) => {
  const links = [
    {
      id: 1,
      name: 'Men',
      url: '/men',
    },
    {
      id: 2,
      name: 'Women',
      url: '/women',
    },
    {
      id: 3,
      name: 'Kids',
      url: '/kids',
    },
  ];
  return (
    <nav className='fixed inset-x-0 top-0 z-50 h-20 w-full animate-nav-opacity border-b [animation-range:0px_5%] [animation-timeline:scroll(y)]'>
      <header className='flex h-full items-center justify-between px-4 md:px-8'>
        <div className='flex gap-24'>
          <Link href={'/'} className='font-bricolage-grotesque'>
            Home
          </Link>
          <ul className='hidden gap-6 md:flex'>
            {links.map((link) => (
              <li key={link.id}>
                <Link href={link.url}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className='flex items-center gap-6 md:gap-8'>
          <button>
            <ShoppingBag />
          </button>
          <button>
            <Search />
          </button>
          <button className='block md:hidden'>
            <Menu />
          </button>
        </div>
      </header>
    </nav>
  );
};

export default Nav;
