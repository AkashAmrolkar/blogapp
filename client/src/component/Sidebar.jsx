import CategoriesSlider from "../component/CategoriesSlider"
import LoggedInUserData from "../component/LoggedInUserData"
import RecentPost from "../component/RecentPost"
import { useAuth } from "../store/Auth"

const Sidebar = () => {
   
  const {isLoggedIn} = useAuth()

  return (
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
  )
}

export default Sidebar