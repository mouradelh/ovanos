
// pages/somePage.tsx or wherever you want to make the request

import { GetServerSideProps } from 'next';
import { Strapi } from './Strapi';
import { Menu } from '../menu/[id]';


export const MenuLijst = async ():Promise<Strapi> => {
  const res = await fetch('http://localhost:1337/api/menus?populate=*', {
    headers: {
      // Authorization: 'bearer a32ab5bd4a1bb2e0d4f34d931db6891bbab646ca3e34129c5f7e9bb6bfd28ccb1f7c142f8621d860704acf9d2b4ecbcf3decf73f122c7a3bf13f6cd3245f9f7a152ca6858beef5c2c7e4c64b3708f81c0209ed4f8fe001cdf4da4aa2f5de84ac50d66826446664ddbb0f91880af197a02c9fda8f97cecb9928dc8fb02de44618',
    },
  });
  const menu : Strapi = await res.json();
  return menu
}

export const MenuItems = async(routerquery: string):Promise<Menu> => {
  const res = await fetch(`http://localhost:1337/api/${routerquery}?populate=*`, {
    headers: {
      // Authorization: 'bearer a32ab5bd4a1bb2e0d4f34d931db6891bbab646ca3e34129c5f7e9bb6bfd28ccb1f7c142f8621d860704acf9d2b4ecbcf3decf73f122c7a3bf13f6cd3245f9f7a152ca6858beef5c2c7e4c64b3708f81c0209ed4f8fe001cdf4da4aa2f5de84ac50d66826446664ddbb0f91880af197a02c9fda8f97cecb9928dc8fb02de44618',
    },
  });
  const menu : Menu = await res.json();
  return menu
}




