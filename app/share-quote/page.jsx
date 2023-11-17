'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

import Form from '@components/Form';

const ShareQuote = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setSubmitting] = useState(false);
  const [quote, setQuote] = useState({
    description: '',
    tag: '',
  });

  const shareQuote = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch('/api/quote/new', {
        method: 'POST',
        body: JSON.stringify({
          description: quote.description,
          userId: session?.user.id,
          tag: quote.tag,
        })
      })

      if (response.ok) {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  }
  
  return (
    <Form 
      type='Share'
      quote={quote}
      setQuote={setQuote}
      submitting={submitting} 
      handleSubmit={shareQuote} />
  )
}

export default ShareQuote