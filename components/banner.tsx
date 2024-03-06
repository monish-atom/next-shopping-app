import Image from 'next/image';

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
          className='absolute top-0 flex h-full w-full flex-col justify-end
         gap-4 bg-black/30 p-8 text-right text-fground md:p-24'
        >
          <div className='flex flex-col items-start justify-start'>
            <h1 className='animate-translate-up text-5xl font-semibold  [animation-range:0px_80%] [animation-timeline:scroll(y)] md:text-6xl'>
              Vintage Vogue
            </h1>
            <h2 className='mt-2 animate-translate-up text-lg font-medium text-fground/85 [animation-range:0px_80%] [animation-timeline:scroll(y)] md:text-2xl'>
              Retro Women&apos;s Glam
            </h2>

            <div className='mt-6'>
              <button className='rounded bg-fground px-6 py-3 text-bground'>
                Shop now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
