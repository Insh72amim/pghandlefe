import { NavLink } from 'react-router-dom';

interface groupMenuItemProps {
  pathName: string;
  itemName: string;
}

const SidebarGroupItem = ({ pathName, itemName }: groupMenuItemProps) => {
  return (
    <li>
      <NavLink
        to={pathName}
        className={({ isActive }) =>
          'group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark2 duration-300 ease-in-out hover:text-white ' +
          (isActive && '!text-white')
        }
      >
        {itemName}
      </NavLink>
    </li>
  );
};

export default SidebarGroupItem;
