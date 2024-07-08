import { Link } from 'react-router-dom';
import LogoIcon from '../../images/logo/logo-icon.svg';
import HamburgerIcon from '../SVGs/hamburger.svg';

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-blue-950 drop-shadow-1 dark:bg-blue-950 dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <HamburgerIcon sidebarOpen={props.sidebarOpen}></HamburgerIcon>
          </button>

          <Link className="block flex-shrink-0 lg:hidden" to="/">
            <img src={LogoIcon} alt="Logo" width={32} height={32} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
