import Image from 'next/image';

type Props = {};

const Banner = (props: Props) => {
  return (
    <section className='relative flex h-[80svh] items-center justify-center bg-amber-200 transition-all md:h-[100svh]'>
      <div className='relative h-full w-full overflow-clip'>
        <Image
          width={1024}
          height={768}
          quality={80}
          src={'/images/clothing-wide-02.jpg'}
          alt='banner-image'
          className='h-full w-full animate-scale-up object-cover object-top [animation-range:0px_80%] [animation-timeline:scroll(y)] '
        />
        <div className='absolute top-0 flex h-full w-full items-end bg-black/30 p-8 md:p-24'>
          <h1 className='animate-translate-up text-4xl font-semibold text-fground [animation-range:0px_80%] [animation-timeline:scroll(y)] md:text-6xl lg:text-8xl'>
            Shop the trends
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Banner;
