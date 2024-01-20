import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import { toast } from 'react-toastify';
import registerImg from '../assets/register.jpg';
import 'react-toastify/dist/ReactToastify.min.css';

const Register = () => {
  const nav = useNavigate();

  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [profile, setProfile] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleFileChange = (e) => {
    setProfile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('fullname', fullname);
      formData.append('email', email);
      if (password === confirmPassword) {
        formData.append('password', password);
      } else{
        toast.error("Password and Confirmed Password Mismatched..!")
      }
      formData.append('profile', profile);
      const response = await fetch('/api/users/register', {
        method: 'POST',
        body: formData,
      });

      if (response.status === 201) {
        toast.success("User Registered Successfully")
        nav('/login');
      } else {
        toast.warning('User already registered with this Email')
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
      <div className="grid sm:grid-cols-1 md:grid-cols-2 items-center gap-5">
        <div>
          <h2 className="text-center text-5xl font-semibold text-black">Register</h2>
          <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit} encType='multipart/form-data'>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fullname">
                Full Name:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                name="fullname"
                id="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-outline mb-4">
              <label className="form-label" htmlFor="formupload">
                Profile Picture:
              </label>
              <input
                onChange={handleFileChange}
                type="file"
                id="formupload"
                name="profile"
                className="form-control"
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm_password">
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="password"
                name="confirm_password"
                id="confirm_password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Register
              </button>
              <Link to="/login" className="flex items-center gap-2 font-semibold">
                Login <BsArrowRight />
              </Link>
            </div>
          </form>
        </div>
      </div>
  );
};

export default Register;
