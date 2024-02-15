import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <div className="bg-[#fff9f3] p-10 text-center flex flex-col gap-5">
      <Link to={'/'} className="text-transparent bg-clip-text bg-gradient-to-r from-[#FC6668] to-[#E10489] font-semibold text-3xl leading-10">Logo</Link>
      <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
      <div className="flex justify-center items-center gap-5">
        <Link to='' className="p-2 rounded-full bg-gradient-to-r from-[#FC6668] to-[#E10489] hover:opacity-80"><FaInstagram className="text-white font-medium" /></Link>
        <Link to='' className="p-2 rounded-full bg-gradient-to-r from-[#FC6668] to-[#E10489] hover:opacity-80"><FaLinkedin className="text-white font-medium" /></Link>
        <Link to='' className="p-2 rounded-full bg-gradient-to-r from-[#FC6668] to-[#E10489] hover:opacity-80"><FaTwitter className="text-white font-medium" /></Link>
      </div>
    </div>
  )
}

export default Footer