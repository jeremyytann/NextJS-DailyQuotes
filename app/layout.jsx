import '@styles/globals.css';

import Navbar from '@components/Navbar';
import Provider from '@components/Provider';

export const metadata = {
  title: 'DailyQuotes',
  description: 'A place to share your daily quotes'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <Provider>
          <div className='main'>
            <div className='gradient' />
          </div>

          <main className='app'>
            <Navbar />

            {children}
          </main>
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout;