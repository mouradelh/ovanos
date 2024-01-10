import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MenuItems } from "../api/apiService";
import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";
import { Menu } from "@/interfaces/menu";

export interface ProductCardProps {
    productName: string,
    productDescription: string,
    imageLink: string
    price : number
}

export interface MenuItemProp {
    title: string,
    price: number,
    imageUrl: string
}

export function MenuItem({title, price, imageUrl}: MenuItemProp) {
    return(
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={imageUrl} alt="" />
        <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{title}</h5>
            <p className="text-center">€ {price}</p>
        </div>
        </div>
    )
}

export function ProductItem({ productName, productDescription, imageLink, price }: ProductCardProps) {
    return (
      <div className="mx-auto mt-11 w-full sm:w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
        <img className="h-48 w-full object-cover object-center" src={imageLink} alt={productName} />
        <div className="p-4">
          <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{productName}</h2>
          <p className="mb-2 text-base dark:text-gray-300 text-gray-700">{productDescription}</p>
          <div className="flex items-center">
            <p className="mr-2 text-lg font-semibol dark:text-white">€{price}</p>
          </div>
        </div>
      </div>
    );
  }

export default function Post() {
    const router = useRouter();
    const [menuItems, setMenuItems] = useState<Menu>();
    useEffect(() => {
        const fetchItems = async () => {
            if (router.query.id) {
                let res = await fetch(`http://localhost:1337/api/${router.query.id}?populate=*`);
                let data: Menu = await res.json();
                setMenuItems(data);
            }
        };
    
        fetchItems();
    }, [router.query.id]);

    return (
        <>
        <Header></Header>
        <Navigation></Navigation>
        <main className="">
            <h2 className="text-center font-extrabold text-lg">{router.query.id}</h2>
        <div className="flex flex-wrap space-x-4 justify-center">
  {menuItems && menuItems.data && menuItems.data.map((item, index) => (
    <MenuItem
    key={index}
      title={item.attributes.Naam}
      imageUrl={`http://localhost:1337${item.attributes.Afbeelding.data?.attributes.url}`}
      price={item.attributes.Prijs}
    />
  ))}
</div>
        </main>
        </>
    )
}
