import Footer from "../component/Footer"
import Header from "../component/Header"
import PageRoutes from "../router/PageRoutes"

const Layout = () => {
  return (
    <>
        <Header />
        <main className="container mx-auto py-10">
          <PageRoutes />        
        </main>
        <Footer />
    </>
  )
}

export default Layout