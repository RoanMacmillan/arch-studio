import './globals.css'
import Header from './components/Header/header'; // import the Header component
import Footer from './components/Footer/Footer';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header /> {/* render the Header component */}
        {children}
        <Footer />
      </body>
    </html>
  )
}
