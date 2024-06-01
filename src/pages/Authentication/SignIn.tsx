import React, { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../images/logo/logo.svg';
import GoogleLogo from '../../components/SVGs/google.svg';
import { LockSvg } from '../../components/SVGs/authlogo.svg';
import { signIn, verifyToken } from '../../apis/auth.api';
import { useAuth } from './AuthContext';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const authentication = useAuth();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const res = await signIn({
        email,
        password,
      });
      const verify = await verifyToken({ access_token: res.access_token });

      if (verify.valid && verify.decoded.email === email) {
        authentication?.login(res.access_token);
        navigate('/');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900 overflow-hidden">
      <div className="w-full max-w-7xl">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <div className="py-17.5 px-26 text-center">
              <Link className="mb-5.5 inline-block" to="/">
                <img src={Logo} alt="Logo" />
              </Link>

              <p className="2xl:px-20 text-2xl italic">
                Easily handle your PG with PgHandle.
              </p>
            </div>
          </div>

          <div className="w-full xl:w-1/2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <span className="mb-1.5 block font-medium">Start for free</span>
              <h2 className="mb-9 text-2xl font-bold text-black sm:text-title-xl2">
                Sign In to PgHandle
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black ">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none "
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black ">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="6+ Characters, 1 Capital letter"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <span className="absolute right-4 top-4">
                      <LockSvg />
                    </span>
                  </div>
                </div>

                <div className="mb-5">
                  <input
                    type="submit"
                    value="Sign In"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                  />
                </div>

                <button className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-5">
                  <GoogleLogo />
                  Sign in with Google
                </button>

                <div className="mt-6 text-center">
                  <p>
                    Don’t have any account?{' '}
                    <Link to="/auth/signup" className="text-primary">
                      Sign Up
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
