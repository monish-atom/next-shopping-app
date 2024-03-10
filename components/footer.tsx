'use client';

import Link from 'next/link';

type Props = {};

const Footer = (props: Props) => {
  const getYear = () => {
    return new Date().getFullYear();
  };
  return (
    <footer className='h-full bg-primary text-white'>
      <section className='mx-auto max-w-screen-2xl px-4 py-16 md:px-8'>
        <div className='flex flex-col justify-between gap-16 lg:flex-row'>
          <div className='flex flex-wrap gap-16'>
            <div className='flex flex-col gap-3'>
              <h3 className='font-bricolage-grotesque text-lg md:text-xl'>
                Shop
              </h3>
              <ul className='flex flex-col gap-3 text-secondary/85'>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
              </ul>
            </div>
            <div className='flex flex-col gap-3'>
              <h3 className='font-bricolage-grotesque text-lg md:text-xl'>
                Help
              </h3>
              <ul className='flex flex-col gap-3 text-secondary/85'>
                <li>About</li>
                <li>FAQs</li>
                <li>Policy</li>
              </ul>
            </div>
            <div className='flex flex-col gap-3'>
              <h3 className='font-bricolage-grotesque text-lg md:text-xl'>
                Follow us
              </h3>
              <ul className='flex flex-col gap-3 text-secondary/85'>
                <li>X</li>
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>

          <div className='lg:w-1/3'>
            <p className='text-pretty text-secondary/95'>
              Next Vogue Hub is a go-to online fashion destination which offers
              a flawless and dynamic shopping experience for fashion
              enthusiasts. It invites users to immerse themselves in a curated
              realm of elegance and contemporary trends, delivering the latest
              in clothing, accessories, and more.
            </p>
          </div>
        </div>

        <div className='mt-16 flex flex-col justify-between gap-8 lg:flex-row'>
          <p>
            <span className='text-secondary/95'>
              {' '}
              © {getYear()} Next Vogue Hub. <br />{' '}
            </span>
            <Link
              href={'#'}
              className='text-blue-400 underline decoration-blue-400 hover:text-blue-500 hover:decoration-blue-500'
            >
              Privacy Policy
            </Link>
            ,{' '}
            <Link
              href={'#'}
              className='text-blue-400 underline decoration-blue-400 hover:text-blue-500 hover:decoration-blue-500'
            >
              Terms of Service
            </Link>
            .
          </p>
          <div>Payment methods</div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
