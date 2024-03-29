'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

const QuoteCard = ({ quote, handleTagClick, handleEdit, handleDelete }) => {
  const [copied, setCopied] = useState('');

  const handleCopy = () => {
    setCopied(quote.description);
    navigator.clipboard.writeText(quote.description);
    
    setTimeout(() => setCopied(''), 3000);
  }

  return (
    <div className='prompt_card'>
      <div className='flex justify-between items-start gap-5'>
        <div className='flex-1 flex justify-start items-center gap-3 cursor-pointer'>
          <Image 
            src={quote.creator.image}
            alt='user_image'
            width={40}
            height={40}
            className='rounded-full object-contain' />

          <div className='flex flex-col'>
            <h3 className='font-satoshi font-semibold text-gray-900'>
              {quote.creator.username}
            </h3>

            <p className='font-inter text-sm text-gray-500'>
              {quote.creator.email}
            </p>
          </div>
        </div>

        <div className='copy_btn' onClick={() => handleCopy()}>
          <Image 
            src={copied === quote.description ? '/assets/icons/tick.svg' : '/assets/icons/copy.svg'}
            width={12}
            height={12} />
        </div>
      </div>

      <p className='my-4 font-satoshi text-sm text-gray-700'>
        {quote.description}
      </p>

      <p onClick={() => handleTagClick && handleTagClick(quote.tag)}
        className='font-inter text-sm blue_gradient cursor-pointer'>
        {quote.tag}
      </p>
    </div>
  )
}

export default QuoteCard