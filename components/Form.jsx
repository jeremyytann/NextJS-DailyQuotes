import Link from 'next/link';

const Form = ({type, quote, setQuote, submitting, handleSubmit}) => {
  return (
    <section className='w-full max-w-full flex-start flex-col'>
      <h1 className='head_text text-left'>
        <span className='blue_gradient'>
          {type} Quote
        </span>
      </h1>

      <p className='desc text-left max-w-md'>
        {type} your quotes with the world.
      </p>

      <form 
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your Quote
          </span>

          <textarea 
            value={quote.description}
            onChange={(event) => setQuote({ ...quote, description: event.target.value })} 
            placeholder='Write your quote here'
            required
            className='form_textarea' />
        </label>

        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Tag {' '}

            <span className='font-normal'>
              (e.g. #happy, #sad, #tgif)
            </span>
          </span>

          <input 
            value={quote.tag}
            onChange={(event) => setQuote({ ...quote, tag: event.target.value })} 
            placeholder='#tag'
            required
            className='form_input' />
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>
          <Link href='/' className='text-gray-500 text-sm'>
            Cancel
          </Link>

          <button 
            type='submit' 
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white'>
            {
              submitting ? (
                'Submitting...'
              ) : (
                type
              )
            }
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form