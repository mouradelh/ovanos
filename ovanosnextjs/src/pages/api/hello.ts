
import { GetServerSideProps } from 'next';
import { Strapi } from './Strapi';
import { Menu } from '../menu/[id]';
import { Blogposts } from '@/interfaces/blogpost';
import qs from 'qs'

export const MenuLijst = async ():Promise<Strapi> => {
  const params = {
    populate : '*'
  };
  const queryString = qs.stringify(params);
  const res = await fetch(`http://localhost:1337/api/menus?${queryString}`);
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
    sort: 'publishedAt:desc',
    populate: '*'
  };
  const queryString = qs.stringify(params);
  const url = `http://localhost:1337/api/blogposts/?${queryString}`;
  const res = await fetch(url);
  const data : Blogposts = await res.json();
  return data
}

export const AllBlogPosts = async():Promise<Blogposts> => {
  const params = {
    populate : '*'
  };
  const queryString = qs.stringify(params);
  const url = `http://localhost:1337/api/blogposts/?${queryString}`;
  const res = await fetch(url);
  const data : Blogposts = await res.json();
  return data
}




