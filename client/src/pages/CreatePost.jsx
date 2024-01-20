
import { useAuth } from '../store/Auth';

import Modal from '../component/Modal'
import CreatePostForm from '../component/CreatePostForm';

const CreatePost = () => {  
  
  const {isLoggedIn} = useAuth()

  return (
   <>
     <div className="container custom_class">
         { 
          isLoggedIn ? <CreatePostForm /> : <Modal />
         }
    </div> 
   </>
  )
}

export default CreatePost