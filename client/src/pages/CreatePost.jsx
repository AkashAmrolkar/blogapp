
import { useAuth } from '../store/Auth';

import ModalPopup from '../component/ModalPopup'
import CreatePostForm from '../component/CreatePostForm';
import CategoryBanner from '../component/CategoryBanner';

const CreatePost = () => {  
  
  const {isLoggedIn} = useAuth()

  return (
   <>
     <div className="custom_class py-10 mt-12 md:mt-20">
        <CategoryBanner heading={'Create Post'} />
        <div className=' w-full md:w-3/5 mx-auto shadow-md bg-white rounded-3xl p-4 md:p-10 mt-16'>
         { 
          isLoggedIn ? <CreatePostForm /> : <ModalPopup message='You are not authorized to create post' />
         }
        </div>
    </div> 
   </>
  )
}

export default CreatePost