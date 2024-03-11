import Banner from '@/components/banner';
import { Button } from '@/components/ui/button';
import { hmdata } from '@/lib/data';
import { Testimonials } from '@/lib/testimonials';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='relative z-40 bg-white'>
      <Banner />
      <section className='max-width min-h-full px-4 py-16 md:px-8'>
        <h2 className='font-bricolage-grotesque text-xl font-medium md:text-2xl'>
          Popular Items
        </h2>

        <Products />
      </section>
      <ShowCase />
      <Accessories />
      <Reviews />
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
      title: 'Shop for Men',
      alt: 'Show case men',
    },
    {
      id: 2,
      category: 'Women',
      url: '/images/female-06.jpg',
      title: 'Shop for Women',
      alt: 'Show case women',
    },
    {
      id: 3,
      category: 'Kids',
      url: '/images/kid-01.jpg',
      title: 'Shop for Kids',
      alt: 'Show case kids',
    },
  ];

  return (
    <section className='max-width relative min-h-full px-4 py-16 md:px-8'>
      <h2 className='font-bricolage-grotesque text-xl font-medium md:text-2xl'>
        Explore
      </h2>

      <div className='relative mt-8 grid h-full grid-cols-1 gap-2 md:grid-cols-3 lg:gap-4'>
        {showCaseData.map((data) => (
          <Link
            href={`/${data.category.toLowerCase()}`}
            key={data.id}
            className='relative h-full w-full overflow-clip'
          >
            <Image
              width={400}
              height={400}
              src={data.url}
              alt={data.alt}
              className='h-full w-full object-cover'
            />
            <div className='gradient absolute top-0 flex h-full w-full flex-col justify-end gap-4 p-8 text-secondary'>
              <h2 className='font-bricolage-grotesque text-xl font-medium lg:text-3xl'>
                {data.title}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

const Accessories = () => {
  return (
    <section className='relative my-16 h-full w-svw'>
      <div className='aspect-auto h-[75vh]'>
        <Image
          width={1184}
          height={664}
          quality={100}
          src={'/images/accessories-05.jpg'}
          alt={'Accessories'}
          className='h-full w-full object-cover object-center'
        />
      </div>
      <div className='absolute top-0 flex h-full w-full items-center justify-start bg-black/30 p-56 text-white'>
        <div className='flex max-w-lg flex-col gap-4'>
          <h2 className='font-bricolage-grotesque font-semibold lg:text-5xl'>
            Complete Your Look with Trendsetting Extras
          </h2>
          <p className='text-secondary/90'>
            From Luxurious Leather to Fashion-Forward Footwear, Uncover Your
            Signature Style
          </p>
          <Button
            variant={'secondary'}
            size={'lg'}
            className='w-fit rounded-none'
          >
            <span>Shop Now</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const { testimonials } = Testimonials;
  return (
    <section className='max-width h-full px-4 pb-36 pt-16 md:px-8'>
      <h2 className='font-bricolage-grotesque text-xl font-medium lg:text-2xl'>
        Customer reviews
      </h2>
      <div className='mt-8 flex gap-2 overflow-x-scroll'>
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className='h-72 w-96 flex-shrink-0 bg-amber-100/60 p-8 shadow-sm'
          >
            <h2 className='font-bricolage-grotesque font-medium md:text-lg'>
              {testimonial.title}
            </h2>
            <div className='mt-4 flex items-center gap-1'>
              {[...Array(5)].fill(0).map((_, index) => (
                <Star
                  key={index}
                  size={18}
                  className='fill-yellow-300 text-yellow-300'
                />
              ))}
            </div>
            <p className='mt-4 text-pretty'>{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
