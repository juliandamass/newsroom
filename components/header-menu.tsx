import { useState } from 'react';

const HeaderMenu = ({ menuData }: any) => {
  const menu: any = menuData;

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      className="relative group"
    >
      <div className="relative px-2 py-2 lg:py-8 cursor-pointer">
        <a className="text-gray-700 hover:text-gray-900 font-display">
          {menu.title}
        </a>
        <div className="absolute left-1/2 bottom-5 transform -translate-x-1/2 w-0 h-0.5 bg-primary rounded-full transition"></div>
      </div>
      {menu.subMenus != null && isVisible && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-2 bg-white overflow-hidden rounded-xl shadow-xl border border-gray-200 z-10">
          <div className="flex flex-col lg:flex-row">
            <div className="p-6 bg-gray-200">
              <div className="w-60 h-40 mb-4">
                <img
                  src="images/logo-main.png"
                  alt="Alt"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <h6 className="font-display text-xl font-semibold mb-2">
                {menu.subMenus.data.descTitle}
              </h6>
              <p className="text-gray-600 text-sm leading-5">
                {menu.subMenus.data.descText}
              </p>
            </div>
            <ul className="p-6 pr-16 space-y-4">
              {menu.subMenus.menus.map((subMenu: any, i: number) => {
                return (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-700 hover:text-gray-900 hover:font-semibold whitespace-nowrap cursor-pointer"
                    >
                      {subMenu.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderMenu;
