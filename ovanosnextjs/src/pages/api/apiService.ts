
import { GetServerSideProps } from 'next';
import qs from 'qs'
import { StrapiData } from '@/interfaces/Strapi';
import { env } from 'process';
import { MenuData } from '@/interfaces/Menu';
import { LogoDatas } from '@/interfaces/Logo';
import { BlogpostsData } from '@/interfaces/Blogpost';
import { Medewerkers } from '@/interfaces/Medewerker';

const serverEndpoint = process.env.SERVER_ENDPOINT || 'localhost'

export const LogoImage = async():Promise<LogoDatas> => {
  const params = {
    populate: '*'
  };
  const queryString = qs.stringify(params);
  const res = await fetch(`http://${serverEndpoint}:1337/api/logo?${queryString}`);
  const logo : LogoDatas = await res.json();
  return logo
}

export const MenuLijst = async ():Promise<StrapiData> => {
  const params = {
    populate : '*'
  };
  const queryString = qs.stringify(params);
  const res = await fetch(`http://${serverEndpoint}:1337/api/menus?${queryString}`);
  const menu : StrapiData = await res.json();
  return menu
}

export const MenuItems = async(routerquery: string):Promise<MenuData> => {
  const res = await fetch(`http://${serverEndpoint}:1337/api/${routerquery}?populate=*`);
  const menu : MenuData = await res.json();
  return menu
}

export const RecentBlogPosts = async():Promise<BlogpostsData> => {
  const params = {
    sort: 'publishedAt:desc',
    populate: '*'
  };
  const queryString = qs.stringify(params);
  const url = `http://${serverEndpoint}:1337/api/blogposts?${queryString}`;
  const res = await fetch(url);
  const data : BlogpostsData = await res.json();
  return data
}

export const AllBlogPosts = async():Promise<BlogpostsData> => {
  const params = {
    populate : '*'
  };
  const queryString = qs.stringify(params);
  const url = `http://${serverEndpoint}:1337/api/blogposts?${queryString}`;
  const res = await fetch(url);
  const data : BlogpostsData = await res.json();
  return data
}
export const AllMedewerkers = async():Promise<Medewerkers> => {
  const params = {
    populate : '*'
  };
  const queryString = qs.stringify(params);
  const url = `http://${serverEndpoint}:1337/api/medewerkers?${queryString}`;
  const res = await fetch(url);
  const data : Medewerkers = await res.json();
  return data
}



