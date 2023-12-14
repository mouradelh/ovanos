import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MenuItems } from "../api/hello";
import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";


export interface Menu {
    data: Datum[];
    meta: Meta;
}

export interface Datum {
    id:         number;
    attributes: DatumAttributes;
}

export interface DatumAttributes {
    Naam:         string;
    Beschrijving: string;
    Prijs:        number;
    createdAt:    Date;
    updatedAt:    Date;
    publishedAt:  Date;
    Afbeelding:   Afbeelding;
    menu:         Afbeelding;
}

export interface Afbeelding {
    data: Data | null;
}

export interface Data {
    id:         number;
    attributes: DataAttributes;
}

export interface DataAttributes {
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           Formats;
    hash:              string;
    ext:               EXT;
    mime:              MIME;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
}

export enum EXT {
    PNG = ".png",
}

export interface Formats {
    thumbnail: Large;
    small:     Large;
    medium:    Large;
    large:     Large;
}

export interface Large {
    name:   string;
    hash:   string;
    ext:    EXT;
    mime:   MIME;
    path:   null;
    width:  number;
    height: number;
    size:   number;
    url:    string;
}

export enum MIME {
    ImagePNG = "image/png",
}

export interface Meta {
    pagination: Pagination;
}

export interface Pagination {
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;
}

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
            <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">€{price}</p>
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
                let res = await fetch(`http://localhost:1337/api/${router.query.id}?populate=*`, {
                    headers: {
                        // Authorization: 'bearer a32ab5bd4a1bb2e0d4f34d931db6891bbab646ca3e34129c5f7e9bb6bfd28ccb1f7c142f8621d860704acf9d2b4ecbcf3decf73f122c7a3bf13f6cd3245f9f7a152ca6858beef5c2c7e4c64b3708f81c0209ed4f8fe001cdf4da4aa2f5de84ac50d66826446664ddbb0f91880af197a02c9fda8f97cecb9928dc8fb02de44618',
                    },
                });
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
        <main className="bg-gradient-to-r from-cyan-500 to-blue-500">
            <h2 className="text-center">{router.query.id}</h2>
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
        <Footer></Footer>
        </>
    )
}
