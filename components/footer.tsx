type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className='sticky bottom-0 h-full bg-primary text-secondary'>
      <section className='mx-auto max-w-screen-2xl px-4 py-16 md:px-8'>
        <h2 className='font-bricolage-grotesque text-2xl font-medium md:text-3xl'>
          Footer
        </h2>

        <div className='mt-8 flex justify-between'>
          <div className='flex flex-wrap gap-16'>
            <div className='flex flex-col gap-3'>
              <h3 className='font-bricolage-grotesque text-lg md:text-xl'>
                Shop
              </h3>
              <ul className='flex flex-col gap-3 text-secondary/85'>
                <li>Men</li>
                <li>Women</li>
                <li>Kids</li>
              </ul>
            </div>
            <div className='flex flex-col gap-3'>
              <h3 className='font-bricolage-grotesque text-lg md:text-xl'>
                Help
              </h3>
              <ul className='flex flex-col gap-3 text-secondary/85'>
                <li>About</li>
                <li>FAQs</li>
                <li>Policy</li>
              </ul>
            </div>
            <div className='flex flex-col gap-3'>
              <h3 className='font-bricolage-grotesque text-lg md:text-xl'>
                Follow us
              </h3>
              <ul className='flex flex-col gap-3 text-secondary/85'>
                <li>X</li>
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>

          <div className='lg:w-1/3'>
            <p className='text-lg'>
              Home is a lifestyle clothing brand with a customer-centric
              approach. Our products are crafted with utmost attention to
              quality, from inception to completion.
            </p>
          </div>
        </div>

        <div className='mt-16 w-1/3'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            nostrum quia voluptatem, aliquid facilis unde suscipit tenetur
            voluptates nobis fuga ullam voluptas soluta tempora veniam nulla?
            Exercitationem nesciunt est fuga!
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
