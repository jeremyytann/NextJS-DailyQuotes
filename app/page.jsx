import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        
        <br className="max-md:hidden" />
        
        <span className="orange_gradient text-center">
          DailyQuotes
        </span>
      </h1>

      <p className="desc text-center">
        DailyQuotes is an open-source quote sharing tool 
        for people to discover and share their quotes.
      </p>

      <Feed />
    </section>
  )
}

export default Home