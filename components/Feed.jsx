'use client';

import { useState, useEffect } from "react";

import QuoteCard from './QuoteCard';

const QuoteCardList =({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {
        data.map((quote) => (
          <QuoteCard 
            key={quote.id} 
            quote={quote}
            handleTagClick={handleTagClick} />
        ))
      }
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [quotes, setQuotes] = useState([]);

  const handleSearchChange = (event) => {

  }

  useEffect(() => {
    const fetchQuotes = async () => {
      const response = await fetch('/api/quote');
      const data = await response.json();

      setQuotes(data);
    }

    fetchQuotes();
  }, [])

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input 
        type="text"
        placeholder="Search by tag or username"
        value={searchText}
        onChange={handleSearchChange}
        required
        className="search_input peer" />
      </form>

      <QuoteCardList 
        data={quotes}
        handleTagClick={() => {}} />
    </section>
  )
}

export default Feed