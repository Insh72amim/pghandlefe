import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import SidebarItem from './SidebarItem';
import DarkModeSwitcher from './DarkModeSwitcher';

import pg from '../../images/sidebar/pg.svg';
import Logo from '../../images/logo/logo.svg';
import guests from '../../images/sidebar/guests.svg';
import booking from '../../images/sidebar/booking.svg';
import checkin from '../../images/sidebar/checkin.svg';
import checkout from '../../images/sidebar/checkout.svg';
import premises from '../../images/sidebar/premises.svg';
import SVGsidebarButton from '../SVGs/sidebarbutton.svg';
import dashboard from '../../images/sidebar/dashboard.svg';
import availability from '../../images/sidebar/availability.svg';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true',
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);

    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute left-0 top-0 z-9999 flex h-screen w-60 flex-col overflow-y-hidden bg-blue-950 duration-300 ease-linear dark:bg-blue-950 lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>
        <DarkModeSwitcher />
        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <SVGsidebarButton></SVGsidebarButton>
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              MENU
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              <SidebarItem
                itemName="dashboard"
                pathName="/"
                svg={<img src={dashboard} alt="Logo" width="20" height="20" />}
              />
              <SidebarItem
                itemName="availability"
                pathName={pathname}
                svg={
                  <img src={availability} alt="Logo" width="20" height="20" />
                }
              />
              <SidebarItem
                itemName="guests"
                pathName={pathname}
                svg={<img src={guests} alt="Logo" width="20" height="20" />}
              />
              <SidebarItem
                itemName="bookings"
                pathName={pathname}
                svg={<img src={booking} alt="Logo" width="20" height="20" />}
              />
              <SidebarItem
                itemName="checkins"
                pathName={pathname}
                svg={<img src={checkin} alt="Logo" width="20" height="20" />}
              />
              <SidebarItem
                itemName="checkouts"
                pathName={pathname}
                svg={<img src={checkout} alt="Logo" width="20" height="20" />}
              />
            </ul>
          </div>

          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              OTHERS
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              <SidebarItem
                itemName="pg"
                pathName={pathname}
                svg={<img src={pg} alt="Logo" width="20" height="20" />}
              />
              <SidebarItem
                itemName="premises"
                pathName={pathname}
                svg={<img src={premises} alt="Logo" width="20" height="20" />}
              />
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
