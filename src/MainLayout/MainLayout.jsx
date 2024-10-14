
import Navbar from './../Layout/Navbar/Navbar'
import Footer from './../Layout/Footer/Footer'

export default function MainLayout({children}) {
  return (
    <div>
     <Navbar />
      {children}
     <Footer />
    </div>
  );
}
