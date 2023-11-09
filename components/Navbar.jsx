'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  const fetchProviders = async () => {
    const response = await getProviders();

    setProviders(response);
  }

  useEffect(() => {
    fetchProviders();
  }, [])

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image 
          src='/assets/images/logo.svg' 
          alt='DailyQuote Logo' 
          width={30} 
          height={30} 
          className='object-contain' />

        <p className='logo_text'>
          DailyQuotes
        </p>
      </Link>

      {/* Desktop Navigation */}
      <div className='sm:flex hidden'>
        {
          session?.user ? (
            <div className='flex gap-3 md:gap-5'>
              <Link href='/share-quote' className='black_btn'>
                Share Quote
              </Link>

              <button onClick={signOut} type='button' className='outline_btn'>
                Logout
              </button>

              <Link href='/profile'>
                <Image 
                  src={session?.user.image}
                  width={37}
                  height={37}
                  className='rounded-full'
                  alt='profile' />
              </Link>
            </div>
          ) : (
            <>
              {
                providers && Object.values(providers).map((provider) => (
                  <button 
                    type='button' 
                    key={provider.name} 
                    onClick={() => signIn(provider.id)} 
                    className='black_btn'>
                    Login
                  </button>
                ))
              }
            </>
          )
        }
      </div>

      {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
        {
          session?.user ? (
            <div className='flex'>
              <Image 
                src={session?.user.image}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
                onClick={() => setToggleDropdown((prev) => !prev)} />

              {
                toggleDropdown && (
                  <div className='dropdown'>
                    <Link
                      href='/profile'
                      className='dropdown_link'
                      onClick={() => setToggleDropdown(false)}>
                      My Profile
                    </Link>

                    <Link
                      href='/share-quote'
                      className='dropdown_link'
                      onClick={() => setToggleDropdown(false)}>
                      Create Quote
                    </Link>

                    <button 
                      type='button'
                      className='mt-5 w-full black_btn'
                      onClick={() => {
                        setToggleDropdown(false);
                        signOut();
                      }}>
                      Logout
                    </button>
                  </div>
                )
              }
            </div>
          ) : (
            <>
              {
                providers && Object.values(providers).map((provider) => (
                  <button 
                    type='button' 
                    key={provider.name} 
                    onClick={() => signIn(provider.id)} 
                    className='black_btn'>
                    Login
                  </button>
                ))
              }
            </>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar