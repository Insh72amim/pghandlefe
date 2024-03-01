import { NavLink } from 'react-router-dom';
import SvgProfile from '../SVGs/profile.svg';

interface menuItemProps {
  pathName: string;
  itemName: string;
  svg: JSX.Element;
}

const sidebarMenuItem = ({ pathName, itemName, svg }: menuItemProps) => {
  return (
    <li>
      <NavLink
        to={`/${itemName}`}
        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
          pathName.includes(itemName) && 'bg-graydark dark:bg-meta-4'
        }`}
      >
        {svg}
        {itemName.charAt(0).toUpperCase() + itemName.slice(1)}
      </NavLink>
    </li>
  );
};

export default sidebarMenuItem;
