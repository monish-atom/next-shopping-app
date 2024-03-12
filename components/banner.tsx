import Image from 'next/image';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

type Props = {
  url: string;
  title?: string;
  description?: string;
  showButton: boolean;
  className?: string;
};

const Banner = ({ url, title, description, showButton, className }: Props) => {
  return (
    <section
      className={cn(
        'relative flex h-[70svh] items-center justify-center bg-amber-200 transition-all',
        className,
      )}
    >
      <div className='relative flex aspect-auto h-full w-full overflow-clip'>
        <Image
          width={1184}
          height={664}
          quality={90}
          src={url}
          alt='banner-image'
          className='h-full w-full animate-scale-up object-cover [animation-range:0px_50%] [animation-timeline:scroll(y)]'
          priority
          unoptimized
        />
        <div className='dis absolute top-0 h-full w-full bg-gradient-to-tr from-primary via-transparent to-primary/30'>
          <div className='mx-auto flex h-full max-w-screen-2xl flex-col justify-end p-4 text-secondary md:px-8 md:py-32'>
            <h2 className='font-bricolage-grotesque text-3xl font-semibold md:text-6xl lg:max-w-2xl'>
              {title ? title : 'Shop the Latest Trends'}
            </h2>
            <p className='mt-4 max-w-[600px] text-secondary/85 md:text-lg'>
              {description
                ? description
                : ` Embrace the season with our vibrant and stylish summer collection.
              From breezy dresses to trendy shorts, we've got everything
              you need to make a fashion statement.`}
            </p>

            {showButton && (
              <div className='mt-6'>
                <Button variant={'secondary'} className='rounded-none'>
                  View Collections
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
