import Banner from '@/components/banner';

const Page = () => {
  return (
    <main className='min-h-svh w-full'>
      <Banner
        url={'/images/kid-face-02.jpg'}
        showButton={false}
        title="Playful Perfection: Kids' Essential"
        description={`Adorable and Durable Delights to Elevate Every Child's Style Adventure`}
        className='md:h-[75svh]'
      />
      <section className='max-width relative min-h-full px-4 py-16 md:px-8'>
        <h2 className='subheader'>Best Sellers</h2>

        {/* <Products /> */}
      </section>
    </main>
  );
};

export default Page;
