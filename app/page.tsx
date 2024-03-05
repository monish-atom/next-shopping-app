import Banner from '@/components/banner';
import { hmdata } from '@/data';
import Image from 'next/image';

export default function Home() {
  return (
    <main className=''>
      <Banner />
      <section className='min-h-svh px-4 py-16 md:px-8'>
        <h2 className='text-xl font-medium md:text-2xl'>Popular Items</h2>
      </section>
    </main>
  );
}

const Products = () => {
  const { results } = hmdata;
  return (
    <div className='grid grid-cols-5 gap-8'>
      {results.map((result) => (
        <div key={result.code}>
          <div className='aspect-auto'>
            <Image
              width={300}
              height={300}
              src={result.images[0].url}
              alt={result.name}
              className='h-full w-full object-cover'
            />
          </div>
          <h2 className='mt-1.5'>{result.name}</h2>
          <p>
            {result.price.value} {result.price.currencyIso}
          </p>

          <div className='mt-2 flex gap-2'>
            {result.rgbColors.map((color, index) => (
              <div
                style={{ backgroundColor: color }}
                className={`h-5 w-5 rounded-full`}
                key={color}
                title={result.articleColorNames[index]}
              ></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
