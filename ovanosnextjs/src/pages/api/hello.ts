
// pages/somePage.tsx or wherever you want to make the request

import { GetServerSideProps } from 'next';
import { Strapi } from './Strapi';
import { Menu } from '../menu/[id]';
import { Blogposts } from '@/interfaces/blogpost';
import qs from 'qs'


export const MenuLijst = async ():Promise<Strapi> => {
  const res = await fetch('http://localhost:1337/api/');
  const menu : Strapi = await res.json();
  return menu
}

export const MenuItems = async(routerquery: string):Promise<Menu> => {
  const res = await fetch(`http://localhost:1337/api/${routerquery}?populate=*`);
  const menu : Menu = await res.json();
  return menu
}

export const RecentBlogPosts = async():Promise<Blogposts> => {
  const params = {
    sort: ['publishedAt:desc'],
  };
  const queryString = qs.stringify(params);
  const url = `http://localhost:1337/api/blogposts/?${queryString}`;
  const res = await fetch(url);
  const data : Blogposts = await res.json();
  return data
}




