import Feed from "@components/Feed";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      Discover and Create
      <br className='max-md:hidden' />
      <span className='orange_gradient text-center'> Save &amp; Share</span>
    </h1>
    <p className='desc text-center'>
      Save your prompts in a single place and share them with your friends.
    </p>

    <Feed />
  </section>
);

export default Home;
