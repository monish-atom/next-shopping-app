import { Product } from '@/lib/data';
import Image from 'next/image';

type Props = {
  params: {
    id: string;
  };
};

const Page = ({ params }: Props) => {
  const { id } = params;
  const { product } = Product;
  return (
    <main className='min-h-svh w-full py-24'>
      <section className='max-width min-h-full px-4 md:px-8'>
        <Image width={400} height={400} src={product.} alt={product.name} />
      </section>
    </main>
  );
};

export default Page;
