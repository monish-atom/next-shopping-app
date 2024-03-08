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
          src={'/images/female-wide-11.jpg'}
          alt='banner-image'
          className='h-full w-full animate-scale-up object-cover [animation-range:0px_80%] [animation-timeline:scroll(y)]'
          priority
        />
        <div
          className='absolute top-0 flex h-full w-full flex-col items-start justify-end gap-4
         bg-gradient-to-tr from-primary via-transparent to-primary/30 p-8 text-left text-fground lg:p-24 '
        >
          <div className=''>
            <h1 className='text-5xl font-semibold md:text-6xl'>
              Shop the Latest Trends
            </h1>
            <h2 className='mt-4 max-w-[600px] text-fground/95 md:text-lg'>
              Embrace the season with our latest styles.
              <br /> Limited time: 20% off with code SPRING20.
            </h2>

            <div className='mt-6'>
              <Button
                variant={'secondary'}
                size={'lg'}
                className='rounded-none'
              >
                Shop now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
