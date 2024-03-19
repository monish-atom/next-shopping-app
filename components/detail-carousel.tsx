import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

type Props = {
  productName: string;
  gallery: {
    id: string;
    mimeType: string;
    baseUrl: string;
    url: string;
    assetType: string;
  }[];
};

const DetailCarousel = ({ gallery, productName }: Props) => {
  return (
    <Carousel className='md:hidden'>
      <CarouselContent className='ml-0 w-full'>
        {gallery.map((gal) => (
          <CarouselItem key={gal.id} className='mx-2 w-full bg-amber-200 p-0'>
            <Image
              width={300}
              height={300}
              src={gal.baseUrl}
              alt={`${productName}-${gal.id}`}
              className='h-full w-full object-cover shadow-sm'
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious /> */}
      {/* <CarouselNext /> */}
    </Carousel>
  );
};

export default DetailCarousel;
