  import React, { useState } from 'react';
import { handleLogin } from '../../services/authService';
import { AiFillEye, AiFillEyeInvisible} from 'react-icons/ai';
 
  const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false); // Add loading state
    const [isPasswordHidden, setPasswordHidden] = useState(true);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the form is submitted
    try {
      await handleLogin(e, email, password, setLoading); // Pass setLoading to handleLogin
    } catch (error) {
      setLoading(false); // Set loading to false if there is an error during login
      console.error('Login failed:', error);
    }
  };
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px ">
              <div className='mb-4'>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='relative'>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input    
                  id="password"
                  name="password"
                  type={isPasswordHidden ? 'password' : 'text'}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
              className="text-gray-500 mt-1.5  absolute right-3 inset-y-0 my-auto active:text-gray-500"
              onClick={() => setPasswordHidden(!isPasswordHidden)}
            >
              {isPasswordHidden ? (
                <AiFillEyeInvisible className="w-6 h-6" />
              ) : (
                <AiFillEye className="w-6 h-6" />
              )}
            </span>
              </div>
            </div>

            <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              disabled={loading} // Disable the button when loading is true
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>

            
            </div>
          </form>
        </div>
      </div>
    );
  };

  export default LoginPage;
