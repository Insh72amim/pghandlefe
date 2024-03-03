import React, { ReactNode, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SvgDropDownSideBar from '../SVGs/dropdown.svg';

interface SidebarGroupProps {
  children: ReactNode;
  activeCondition: boolean;
  pathName: string;
  itemName: string;
  sidebarExpanded: boolean;
  svg: JSX.Element;
  setSidebarExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}

const SidebarGroup = ({
  children,
  activeCondition,
  pathName,
  itemName,
  sidebarExpanded,
  setSidebarExpanded,
  svg,
}: SidebarGroupProps) => {
  const [open, setOpen] = useState<boolean>(activeCondition);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <NavLink
        to="#"
        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
          (pathName === `${itemName}` || pathName.includes(itemName)) &&
          'bg-graydark dark:bg-meta-4'
        }`}
        onClick={(e) => {
          e.preventDefault();
          sidebarExpanded ? handleClick() : setSidebarExpanded(true);
        }}
      >
        {svg}
        {itemName}
        <SvgDropDownSideBar open={open}></SvgDropDownSideBar>
      </NavLink>
      <div
        className={`translate transform overflow-hidden ${!open && 'hidden'}`}
      >
        <div
          className={`translate transform overflow-hidden ${!open && 'hidden'}`}
        >
          <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">{children}</ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SidebarGroup;
