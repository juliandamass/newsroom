import Link from 'next/link';
import { Menu, X } from 'react-feather';

import HeaderMenu from './header-menu';
import HeaderButton from './header-button';

import LogoMain from '../public/images/logo-main.png';

const Header = () => {
  const headerMenusData: any = [
    {
      title: 'About Us',
      url: 'https://www.parknparcel.com.sg/about-us',
      subMenus: {
        data: {
          descImagesUrl: 'menu-about-us.jpg',
          descTitle: 'About Park N Parcel',
          descText:
            'Park N Parcel is a tech-enabled logistics company that specializes in last-mile eCommerce fulfillment.',
        },
        menus: [
          {
            title: 'Mission',
            url: 'https://www.parknparcel.com.sg/about-us#mission',
          },
          {
            title: 'Milestones',
            url: 'https://www.parknparcel.com.sg/about-us#milestones',
          },
          {
            title: 'Awards & Recognition',
            url: 'https://www.parknparcel.com.sg/about-us#awards',
          },
          {
            title: 'Trusted Partners',
            url: 'https://www.parknparcel.com.sg/about-us#trusted',
          },
          {
            title: 'News Features ',
            url: 'https://www.parknparcel.com.sg/about-us#news',
          },
        ],
      },
    },
    {
      title: 'Services',
      url: '#',
      subMenus: {
        data: {
          descImagesUrl: 'menu-services.jpg',
          descTitle: 'Services',
          descText:
            'A wide range of customised delivery solutions from contactless home delivery to warehousing service as a convenient approach for all.',
        },
        menus: [
          {
            title: 'Promotions',
            url: 'https://www.parknparcel.com.sg/promotions',
          },
          {
            title: 'Last-Mile Delivery',
            url: 'https://www.parknparcel.com.sg/last-mile-delivery',
          },
          {
            title: 'Parker Points',
            url: 'https://www.parknparcel.com.sg/parker-point',
          },
          {
            title: 'Fulfillment & Warehousing ',
            url: 'https://www.parknparcel.com.sg/fulfillment',
          },
        ],
      },
    },
    {
      title: 'Tracking',
      url: 'https://www.parknparcel.com.sg/track',
    },
    {
      title: 'Resources',
      url: '#',
      subMenus: {
        data: {
          descImagesUrl: 'menu-resources.jpg',
          descTitle: 'Latest News ',
          descText: 'Coming soon...',
        },
        menus: [
          {
            title: 'Newsroom',
            url: '#',
          },
          {
            title: 'Blog',
            url: '#',
          },
        ],
      },
    },
    {
      title: 'Support',
      url: '#',
      subMenus: {
        data: {
          descImagesUrl: 'menu-support.jpg',
          descTitle: 'Happy to help',
          descText:
            'Feel free to refer to our order creation guides should you require assistance in creating the orders',
        },
        menus: [
          {
            title: 'Order Creation Guides',
            url: 'https://www.parknparcel.com.sg/guides',
          },
          {
            title: 'Contact Us',
            url: 'https://www.parknparcel.com.sg/contact-us',
          },
          {
            title: 'FAQ',
            url: 'https://www.parknparcel.com.sg/guides#faq',
          },
        ],
      },
    },
  ];

  const buttonLogin: any = {
    style: 'btn--primary',
    text: 'Login',
    menus: [
      {
        text: 'User Login',
        subText: 'Mass order upload, access parcel status, EPODs and more',
        linkType: 'external',
        link: 'https://dashboard.parknparcel.com/login',
      },
      {
        text: 'Parker Login',
        subText: 'Start earning commissions without cost!',
        linkType: 'external',
        link: 'https://www.parknparcel.com.sg/site/parker-login',
      },
    ],
  };

  const buttonSignup: any = {
    style: 'btn--gray--outline',
    text: 'Sign Up',
    menus: [
      {
        text: 'User Sign Up',
        subText: 'Start tracking and managing your orders efficiently',
        linkType: 'external',
        link: 'https://dashboard.parknparcel.com/signup',
      },
      {
        text: 'Parker Sign Up',
        subText: 'Be a part of our parker (collection) point network',
        linkType: 'internal',
        link: 'https://www.parknparcel.com.sg/parker-point-signup#parker-point-form',
      },
    ],
  };

  return (
    <header className="relative z-50 w-full shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between px-6 py-6 lg:px-4 lg:py-0">
        <Link href="/">
          <img
            src={LogoMain.src}
            className="w-auto h-7 cursor-pointer"
            alt="Park N Parcel Logo"
          />
        </Link>
        <div className="lg:hidden">
          <Menu className="w-7 h-7 text-gray-800" />
        </div>
        <div className="absolute lg:relative top-0 left-0 w-full lg:w-auto lg:inline-flex items-center justify-end space-x-3 px-6 py-4 lg:p-0 lg:ml-5 z-10">
          <div className="relative flex flex-col lg:flex-row items-center bg-white border border-gray-300 lg:border-none rounded-2xl p-4 pt-8 lg:p-0 shadow-xl lg:shadow-none">
            <div className=" flex flex-col lg:flex-row items-center w-full lg:w-auto lg:space-x-8 mb-4 lg:mb-0">
              {headerMenusData.map((menuData: any, i: number) => {
                return <HeaderMenu key={i} menuData={menuData} />;
              })}
              <div className="absolute top-2 right-0 lg:hidden px-4">
                <X className="w-7 h-7 text-gray-800" />
              </div>
            </div>
            <div className="flex items-center lg:ml-10 space-x-5">
              <HeaderButton buttonData={buttonSignup} />
              <HeaderButton buttonData={buttonLogin} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
