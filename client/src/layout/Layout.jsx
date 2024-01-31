import CategoriesSlider from "../component/CategoriesSlider"
import Footer from "../component/Footer"
import Header from "../component/Header"
import LoggedInUserData from "../component/LoggedInUserData"
import PopularArticles from "../component/PopularArticles"
import RecentPost from "../component/RecentPost"
import PageRoutes from "../router/PageRoutes"
import { useAuth } from "../store/Auth"

const Layout = () => {
  const {isLoggedIn} = useAuth()
  return (
    <>
        <Header />
        <main className="container mx-auto py-10">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-12 lg:col-span-9">              
              <PageRoutes />
            </div>
            <div className="hidden lg:block col-span-3 col-start-10">
              <aside className=" sticky top-10">
                {
                  isLoggedIn && <LoggedInUserData />
                }
                <RecentPost />
                {/* <PopularArticles /> */}
                <CategoriesSlider />
              </aside>
            </div>
          </div>        
        </main>
        <Footer />
    </>
  )
}

export default Layout