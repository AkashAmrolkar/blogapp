import Layout from "./layout/Layout"
import { ToastContainer } from 'react-toastify'
import dotenv from "dotenv"
dotenv.config();

function App() {
  return (
    <>
    <Layout />
    <ToastContainer 
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    </>
  )
}

export default App
