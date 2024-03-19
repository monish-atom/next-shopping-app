import DetailCarousel from '@/components/detail-carousel';
import { Button } from '@/components/ui/button';
import { Product } from '@/lib/data';
import { Info, Store } from 'lucide-react';
import Image from 'next/image';

type Props = {
  params: {
    id: string;
  };
};

const sizeGuides = [
  {
    id: 'xs',
    size: 'XS',
  },
  {
    id: 's',
    size: 'S',
  },
  {
    id: 'm',
    size: 'M',
  },
  {
    id: 'l',
    size: 'L',
  },
  {
    id: 'xl',
    size: 'XL',
  },
  {
    id: 'xxl',
    size: 'XXL',
  },
] as const;

const Page = ({ params }: Props) => {
  const { id } = params;
  const { product } = Product;

  const productImage = product.articlesList
    .filter((list) => list.code === id)
    .map((list) => list.fabricSwatchThumbnails[0].baseUrl);

  const productDetail = product.articlesList.filter((list) => list.code === id);
  const galleryDetails = productDetail.flatMap(
    (detail) => detail.galleryDetails,
  );

  return (
    <main className='relative min-h-svh w-full py-24'>
      <section className='max-width grid min-h-full grid-cols-1 gap-4 px-4 [align-items:start] md:px-8 lg:grid-cols-5'>
        <DetailCarousel gallery={galleryDetails} productName={product.name} />

        <div className='col-span-3 hidden w-full columns-2 break-before-avoid gap-4 space-y-4 md:block'>
          {galleryDetails.map((detail) => (
            <div key={detail.id} className='w-full'>
              <Image
                width={300}
                height={300}
                src={detail.baseUrl}
                quality={75}
                alt={`${product.name}-${detail.id}`}
                className='h-full w-full object-cover shadow-sm'
                unoptimized
              />
            </div>
          ))}
        </div>

        <div className='sticky top-14 col-span-2 flex min-h-screen flex-col gap-4 py-4'>
          <div className='flex flex-col gap-2'>
            <h2 className='subheader'>{product.name}</h2>
            <p className='text-primary/75g text-pretty text-sm'>
              {product.description}
            </p>
          </div>
          <div className='flex flex-col gap-2 py-4'>
            <p className='text-sm text-primary/75'>
              MRP inclusive of all taxes
            </p>
            <span className='text-lg md:text-2xl'>{`$${product.whitePrice.price}`}</span>
          </div>

          <div className='flex flex-col gap-2 py-4'>
            <p className='text-sm text-primary/75'>Sizes</p>

            <div className='flex flex-wrap justify-stretch gap-2'>
              {sizeGuides.map((size) => (
                <span
                  key={size.id}
                  className='px-8 py-2 text-sm outline outline-1 outline-primary/50'
                >
                  {size.size}
                </span>
              ))}
            </div>
            <Button
              size={'lg'}
              variant={'default'}
              className='mt-4 rounded-none'
            >
              Add
            </Button>

            <div className='my-4 h-0.5 w-full rounded bg-primary/40' />

            <div className='flex gap-2 text-primary/75'>
              <Info size={20} />
              <span className='text-sm'>Delivery time: 5 - 7 days</span>
            </div>
            <div className='flex gap-2 text-primary/75'>
              <Store size={20} />
              <span className='text-sm'>Available in stores</span>
            </div>
          </div>
        </div>
      </section>

      <section className='max-width px-4 py-16 md:px-8'>
        <h2 className='subheader'>Similar</h2>
      </section>
    </main>
  );
};

export default Page;
