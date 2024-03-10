import Banner from '@/components/banner';
import { Button } from '@/components/ui/button';
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
    <div className='mt-8 grid grid-cols-2 gap-4 md:grid-cols-4'>
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

            <div className='mt-1.5 flex justify-between'>
              <h2 className='line-clamp-1'>{result.name}</h2>
              <p>${result.price.value}</p>
            </div>

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
  const showCaseData = [
    {
      id: 1,
      category: 'Men',
      url: '/images/male-03.jpg',
      title: 'Shop Men',
      alt: 'Show case men',
    },
    {
      id: 2,
      category: 'Women',
      url: '/images/female-06.jpg',
      title: 'Shop Women',
      alt: 'Show case women',
    },
    {
      id: 3,
      category: 'Kids',
      url: '/images/kid-01.jpg',
      title: 'Shop Kids',
      alt: 'Show case kids',
    },
  ];

  return (
    <section className='max-width relative min-h-full px-4 py-16 md:px-8'>
      <h2 className='text-xl font-medium md:text-2xl'>Explore</h2>

      <div className='relative mt-8 grid h-full grid-cols-1 gap-2 md:grid-cols-3 lg:gap-4'>
        {showCaseData.map((data) => (
          <div key={data.id} className='relative h-full w-full overflow-clip'>
            <Image
              width={400}
              height={400}
              src={data.url}
              alt={data.alt}
              className='h-full w-full object-cover'
            />
            <div className='gradient absolute top-0 flex h-full w-full flex-col justify-end gap-4 p-4 text-secondary lg:p-6'>
              <h2 className='text-xl font-medium lg:text-3xl'>{data.title}</h2>
              <div>
                <Button
                  variant={'secondary'}
                  size={'lg'}
                  className='rounded-none md:text-lg'
                >
                  Shop for {data.category}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
