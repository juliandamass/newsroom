import { useEffect, useRef, useState } from 'react';

import { ChevronDown, User, Box } from 'react-feather';

const HeaderButton = ({ buttonData }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const dropdown = useRef<any>(null);

  useEffect(() => {
    if (!isVisible) return;
    const handleClick = (event: { target: any }) => {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setIsVisible(false);
      }
    };
    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [isVisible]);

  return (
    <div className="relative" onClick={() => setIsVisible((b) => !b)}>
      <div className={`btn cursor-pointer btn--nav ${buttonData.style}`}>
        {buttonData.text}
        <ChevronDown className="w-5 h-5 ml-1 -mr-2" />
      </div>
      {isVisible && (
        <div
          ref={dropdown}
          style={{ width: '240px' }}
          className="absolute top-full left-1/2 lg:left-auto lg:right-0 transform -translate-x-1/2 lg:transform-none mt-2 px-4 bg-white overflow-hidden rounded-lg shadow-xl border border-gray-200"
        >
          <div className="flex flex-col divide-y">
            {buttonData.menus.map((menu: any, i: number) => {
              return (
                <a key={i} className="group flex py-4 cursor-pointer">
                  <div className="flex items-center justify-center">
                    {i == 0 ? (
                      <User className=" w-9 h-9 mr-3 text-gray-400 group-hover:text-gray-900 transition" />
                    ) : (
                      <Box className=" w-9 h-9 mr-3 text-gray-400 group-hover:text-gray-900 transition" />
                    )}
                  </div>
                  <div>
                    <p className="font-display font-semibold whitespace-nowrap">
                      {menu.text}
                    </p>
                    <p className="text-sm text-gray-700 leading-4">
                      {menu.subText}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderButton;
