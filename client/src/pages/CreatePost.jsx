
import { useAuth } from '../store/Auth';

import ModalPopup from '../component/ModalPopup'
import CreatePostForm from '../component/CreatePostForm';

const CreatePost = () => {  
  
  const {isLoggedIn} = useAuth()

  return (
   <>
     <div className="custom_class py-10 mt-12 md:mt-20">
         { 
          isLoggedIn ? <CreatePostForm /> : <ModalPopup message='You are not authorized to create post' />
         }
    </div> 
   </>
  )
}

export default CreatePost