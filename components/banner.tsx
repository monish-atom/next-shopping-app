import Image from 'next/image';
import { Button } from './ui/button';

type Props = {};

const Banner = (props: Props) => {
  return (
    <section className='relative flex h-[75svh] items-center justify-center bg-amber-200 transition-all md:h-[100svh]'>
      <div className='relative flex aspect-auto h-full w-full overflow-clip'>
        <Image
          width={1184}
          height={664}
          quality={100}
          src={'/images/female-05.jpg'}
          alt='banner-image'
          className='h-full w-full animate-scale-up object-cover [animation-range:0px_50%] [animation-timeline:scroll(y)]'
          priority
        />
        <div className='absolute top-0 h-full w-full bg-gradient-to-tr from-primary via-transparent to-primary/30'>
          <div className='mx-auto flex h-full max-w-screen-2xl flex-col justify-end px-4  py-20 text-secondary md:px-8 md:py-32'>
            <h1 className='font-bricolage-grotesque text-5xl font-semibold md:text-6xl'>
              Shop the Latest Trends
            </h1>
            <h2 className='mt-4 max-w-[600px] text-secondary/85 md:text-lg'>
              Embrace the season with our vibrant and stylish summer collection.
              From breezy dresses to trendy shorts, we&apos;ve got everything
              you need to make a fashion statement.
            </h2>

            <div className='mt-6'>
              <Button variant={'secondary'} className='rounded-none'>
                View Collections
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
