import Banner from '@/components/banner';
import { hmdata } from '@/lib/data';
import Image from 'next/image';

export default function Home() {
  return (
    <main className=''>
      <Banner />
      <section className='max-width min-h-full px-4 py-16 md:px-8'>
        <h2 className='text-xl font-medium md:text-2xl'>Popular Items</h2>

        <Products />
      </section>
      <ShowCase />
    </main>
  );
}

const Products = () => {
  const { results } = hmdata;
  return (
    <div className='mt-8 grid grid-cols-4 gap-4'>
      {results
        .filter((cat) => cat.mainCategoryCode === 'men_shirts_casual')
        .splice(0, 4)
        .map((result) => (
          <div key={result.code}>
            <div className='aspect-auto'>
              <Image
                width={300}
                height={300}
                src={result.images[0].url}
                alt={result.name}
                className='h-full w-full object-cover shadow-sm'
              />
            </div>
            <h2 className='mt-1.5'>{result.name}</h2>
            <p>
              {result.price.value} {result.price.currencyIso}
            </p>

            <div className='mt-2 flex gap-2'>
              {result.rgbColors.map((color, index) => (
                <div
                  key={index}
                  style={{ backgroundColor: color }}
                  className={`h-5 w-5 rounded-full`}
                  title={result.articleColorNames[index]}
                ></div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

const ShowCase = () => {
  return (
    <section className='max-width relative min-h-full px-4 py-16'>
      <h2 className='text-xl font-medium md:text-2xl'>Explore</h2>

      <div className='relative mt-8 grid h-full grid-cols-1 gap-2 md:grid-cols-3 lg:gap-4'>
        <div className='h-full w-full'>
          <Image
            width={400}
            height={400}
            src={'/images/male-03.jpg'}
            alt='Showcase Women'
            className='h-full w-full object-cover'
          />
        </div>
        <div className='h-full w-full'>
          <Image
            width={400}
            height={400}
            src={'/images/female-summer-02.jpg'}
            alt='Showcase Women'
            className='h-full w-full object-cover'
          />
        </div>
        <div className='h-full w-full'>
          <Image
            width={400}
            height={400}
            src={'/images/kid-01.jpg'}
            alt='Showcase Women'
            className='h-full w-full object-cover'
          />
        </div>
      </div>
    </section>
  );
};
