
import { useAuth } from '../store/Auth';

import Modal from '../component/Modal'
import CreatePostForm from '../component/CreatePostForm';

const CreatePost = () => {  
  
  const {isLoggedIn} = useAuth()

  return (
   <>
     <div className="container custom_class py-10 mt-12 md:mt-20">
         { 
          isLoggedIn ? <CreatePostForm /> : <Modal />
         }
    </div> 
   </>
  )
}

export default CreatePost