import React from 'react';

const SideLink = ({ Icon, name, active, onMenuItemClick }) => {
  const isActive = active === name ? true : false;
  return (
    <li className='cursor-pointer group' onClick={() => onMenuItemClick(name)}>
      <a href={name.toLowerCase()} className='pointer-events-none'>
        <div className='inline-block text-xl mb-2'>
          <div
            className={`flex items-center group-hover:bg-primary-light group-hover:text-primary-base rounded-full pl-3 pr-8 py-3 
            ${isActive ? 'text-primary-base' : ''}
            `}
          >
            <Icon />

            <span className='ml-4 font-bold'>{name}</span>
          </div>
        </div>
      </a>
    </li>
  );
};

export default SideLink;
