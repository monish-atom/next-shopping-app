import Banner from '@/components/banner';
import { LadiesNewArrivalsClothes } from '@/lib/data';
import Image from 'next/image';

const Page = () => {
  const { results: newArrivals } = LadiesNewArrivalsClothes;

  return (
    <main className='min-h-svh w-full'>
      <Banner
        url={'/images/female-face-01.jpg'}
        showButton={false}
        title="Refine Your Style: Men's  Collection"
        description='Elevate Every Outfit with Timeless Pieces Crafted for the Modern Gentleman.'
        className='md:h-[75svh]'
      />
      <section className='max-width relative min-h-full px-4 py-16 md:px-8'>
        <h2 className='subheader'>Best Sellers</h2>

        <Products />
      </section>
    </main>
  );
};

const Products = () => {
  const { results } = LadiesNewArrivalsClothes;
  return (
    <div className='mt-8 grid grid-cols-2 gap-4 md:grid-cols-4'>
      {results.map((result) => (
        <div key={result.code}>
          <div className='aspect-auto'>
            <Image
              width={300}
              height={300}
              src={result.images[0].url}
              alt={result.name}
              className='h-full w-full object-cover shadow-sm'
              unoptimized
            />
          </div>

          <div className='mt-1.5 flex justify-between'>
            <h2 className='line-clamp-1'>{result.name}</h2>
            <p>${result.price.value}</p>
          </div>

          <div className='mt-2 flex gap-2'>
            {result.rgbColors?.map((color, i) => (
              <div
                key={color}
                style={{ backgroundColor: color }}
                className='h-5 w-5 rounded-full'
                title={result.articleColorNames[i]}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
