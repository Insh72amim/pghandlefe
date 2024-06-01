import React, { FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoDark from '../../images/logo/logo.svg';
import Logo from '../../images/logo/logo.svg';
import {
  LockSvg,
  MailSVG,
  PersonSVG,
} from '../../components/SVGs/authlogo.svg';
import GoogleLogo from '../../components/SVGs/google.svg';
import { signUp } from '../../apis/auth.api';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRetype, setPasswordRetype] = useState('');
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await signUp({
        name,
        email,
        password,
        mobileNumber,
      });
      navigate('/auth/signin');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-wrap items-center">
        <div className="hidden w-full xl:block xl:w-1/2">
          <div className="py-17.5 px-26 text-center">
            <Link className="mb-5.5 inline-block" to="/">
              <img className="hidden dark:block" src={Logo} alt="Logo" />
              <img className="dark:hidden" src={LogoDark} alt="Logo" />
            </Link>
            <p className="2xl:px-40 text-3xl italic">
              Easily handle your PG with PgHandle.
            </p>
          </div>
        </div>

        <div className="w-full border-stroke dark:border-strokedark xl:w-1/2">
          <div className="w-[80%] p-5 sm:p-8 xl:p-8">
            <span className="mb-1.5 block font-medium">Start for free</span>
            <h2 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
              Sign Up to PgHandle
            </h2>

            <form onSubmit={handleSubmit}>
              <div className="mb-2.5">
                <label className="mb-1.5 block font-medium text-black dark:text-white">
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    value={name}
                    onChange={(n) => setName(n.target.value)}
                  />

                  <span className="absolute right-4 top-4">
                    <PersonSVG />
                  </span>
                </div>
              </div>

              <div className="mb-2.5">
                <label className="mb-1.5 block font-medium text-black dark:text-white">
                  Mobile Number
                </label>
                <div className="relative">
                  <input
                    type="mobileNumber"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    value={mobileNumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                  />

                  <span className="absolute right-4 top-4">
                    <MailSVG />
                  </span>
                </div>
              </div>

              <div className="mb-2.5">
                <label className="mb-1.5 block font-medium text-black dark:text-white">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <span className="absolute right-4 top-4">
                    <MailSVG />
                  </span>
                </div>
              </div>

              <div className="mb-2.5">
                <label className="mb-1.5 block font-medium text-black dark:text-white">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    value={password}
                    onChange={(p) => setPassword(p.target.value)}
                  />

                  <span className="absolute right-4 top-4">
                    <LockSvg />
                  </span>
                </div>
              </div>

              <div className="mb-6">
                <label className="mb-1.5 block font-medium text-black dark:text-white">
                  Re-type Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Re-enter your password"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    value={passwordRetype}
                    onChange={(rp) => setPasswordRetype(rp.target.value)}
                  />

                  <span className="absolute right-4 top-4">
                    <LockSvg />
                  </span>
                </div>
              </div>

              <div className="mb-5">
                <input
                  type="submit"
                  value="Create account"
                  className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
                />
              </div>

              <button className="flex w-full items-center justify-center gap-3.5 rounded-lg border border-stroke bg-gray p-4 hover:bg-opacity-50 dark:border-strokedark dark:bg-meta-4 dark:hover:bg-opacity-50">
                <GoogleLogo />
                Sign up with Google
              </button>

              <div className="mt-6 text-center">
                <p>
                  Already have an account?{' '}
                  <Link to="/auth/signin" className="text-primary">
                    Sign in
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
