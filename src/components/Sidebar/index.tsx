import { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../images/logo/logo.svg';
import SVGdashboard from '../SVGs/dashboard';
import SidebarItem from './SidebarItem';
import SvgProfile from '../SVGs/profile.svg';
import SvgTable from '../SVGs/table.svg';
import SvgSettings from '../SVGs/settings.svg';
import SvgCalendar from '../SVGs/calendar.svg';
import SvgChart from '../SVGs/chart.svg';
import SidebarGroup from './SidebarGroup';
import SidebarGroupItem from './SidebarGroupItem';
import SvgFormSideBar from '../SVGs/form.svg';
import SvgUIElement from '../SVGs/uielement.svg';
import SvgAuthSideBar from '../SVGs/auth.svg';
import SVGsidebarButton from '../SVGs/sidebarbutton.svg';
import checkin from '../../images/sidebar/calendar.svg';

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
    console.log('hello');
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
              <SidebarGroup
                activeCondition={
                  pathname === '/' || pathname.includes('dashboard')
                }
                pathName="/"
                itemName="Dashboard"
                sidebarExpanded={sidebarExpanded}
                setSidebarExpanded={setSidebarExpanded}
                svg={
                  <img src={checkin} alt="Dashboard" width={20} height={20} />
                }
              >
                <SidebarGroupItem
                  itemName="e Commerce"
                  pathName="/"
                ></SidebarGroupItem>
              </SidebarGroup>
              <SidebarGroup
                activeCondition={
                  pathname === '/forms' || pathname.includes('forms')
                }
                pathName="/forms"
                itemName="Form"
                sidebarExpanded={sidebarExpanded}
                setSidebarExpanded={setSidebarExpanded}
                svg={<SvgFormSideBar />}
              >
                <SidebarGroupItem
                  itemName="Form Elements"
                  pathName="/forms/form-elements"
                ></SidebarGroupItem>
                <SidebarGroupItem
                  itemName="Form Layout"
                  pathName="/forms/form-layout"
                ></SidebarGroupItem>
              </SidebarGroup>
              <SidebarItem
                itemName="calendar"
                pathName={pathname}
                svg={<img src={checkin} alt="Logo" width="20" height="20" />}
              ></SidebarItem>
              <SidebarItem
                itemName="profile"
                pathName={pathname}
                svg={<SvgProfile />}
              ></SidebarItem>
              <SidebarItem
                itemName="tables"
                pathName={pathname}
                svg={<SvgTable />}
              ></SidebarItem>
              <SidebarItem
                itemName="settings"
                pathName={pathname}
                svg={<SvgSettings />}
              ></SidebarItem>{' '}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              OTHERS
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              <SidebarItem
                itemName="chart"
                pathName={pathname}
                svg={<SvgChart />}
              ></SidebarItem>{' '}
              <SidebarGroup
                activeCondition={pathname === '/ui' || pathname.includes('ui')}
                pathName="/ui"
                itemName="UI Elements"
                sidebarExpanded={sidebarExpanded}
                setSidebarExpanded={setSidebarExpanded}
                svg={<SvgUIElement></SvgUIElement>}
              >
                <SidebarGroupItem
                  itemName="Alerts"
                  pathName="/ui/alerts"
                ></SidebarGroupItem>
                <SidebarGroupItem
                  itemName="Buttons"
                  pathName="/ui/buttons"
                ></SidebarGroupItem>
              </SidebarGroup>
              <SidebarGroup
                activeCondition={
                  pathname === '/auth' || pathname.includes('auth')
                }
                pathName="/auth"
                itemName="Authentication"
                sidebarExpanded={sidebarExpanded}
                setSidebarExpanded={setSidebarExpanded}
                svg={<SvgAuthSideBar></SvgAuthSideBar>}
              >
                <SidebarGroupItem
                  itemName="Sign In"
                  pathName="/auth/signin"
                ></SidebarGroupItem>
                <SidebarGroupItem
                  itemName="Sign Up"
                  pathName="/auth/signup"
                ></SidebarGroupItem>
              </SidebarGroup>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
