
import { GetServerSideProps } from 'next';
import { Blogposts } from '@/interfaces/blogpost';
import qs from 'qs'
import { Logo } from '@/interfaces/logo';
import { Medewerker } from '@/interfaces/medewerker';
import { Strapi } from '@/interfaces/Strapi';
import { env } from 'process';
import { Menu } from '@/interfaces/Menu';

const serverEndpoint = process.env.SERVER_ENDPOINT || '192.168.1.18'

export const LogoImage = async():Promise<Logo> => {
  const params = {
    populate: '*'
  };
  const queryString = qs.stringify(params);
  const res = await fetch(`http://${serverEndpoint}:1337/api/logo?${queryString}`);
  const logo : Logo = await res.json();
  return logo
}

export const MenuLijst = async ():Promise<Strapi> => {
  const params = {
    populate : '*'
  };
  const queryString = qs.stringify(params);
  const res = await fetch(`http://${serverEndpoint}:1337/api/menus?${queryString}`);
  const menu : Strapi = await res.json();
  return menu
}

export const MenuItems = async(routerquery: string):Promise<Menu> => {
  const res = await fetch(`http://${serverEndpoint}:1337/api/${routerquery}?populate=*`);
  const menu : Menu = await res.json();
  return menu
}

export const RecentBlogPosts = async():Promise<Blogposts> => {
  const params = {
    sort: 'publishedAt:desc',
    populate: '*'
  };
  const queryString = qs.stringify(params);
  const url = `http://${serverEndpoint}:1337/api/blogposts?${queryString}`;
  const res = await fetch(url);
  const data : Blogposts = await res.json();
  return data
}

export const AllBlogPosts = async():Promise<Blogposts> => {
  const params = {
    populate : '*'
  };
  const queryString = qs.stringify(params);
  const url = `http://${serverEndpoint}:1337/api/blogposts?${queryString}`;
  const res = await fetch(url);
  const data : Blogposts = await res.json();
  return data
}
export const AllMedewerkers = async():Promise<Medewerker> => {
  const params = {
    populate : '*'
  };
  const queryString = qs.stringify(params);
  const url = `http://${serverEndpoint}:1337/api/medewerkers?${queryString}`;
  const res = await fetch(url);
  const data : Medewerker = await res.json();
  return data
}



