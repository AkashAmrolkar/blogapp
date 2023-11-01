import Footer from "../component/Footer"
import Header from "../component/Header"
import PageRoutes from "../router/PageRoutes"

const Layout = () => {
  return (
    <>
        <Header />
        <PageRoutes />
        <Footer />
    </>
  )
}

export default Layout