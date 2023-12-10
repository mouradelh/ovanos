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
        const fetchItems = async() => {
            const response = await MenuItems(`${router.query.id}`);
            setMenuItems(response);

        }
        fetchItems();
    },[]);

    return (
        <>
        <Header></Header>
        <Navigation></Navigation>
        <main className="bg-gradient-to-r from-cyan-500 to-blue-500">
        <div className="flex flex-wrap space-x-4 justify-center">
  {menuItems && menuItems.data && menuItems.data.map((item) => (
    <ProductItem
      productName={item.attributes.Naam}
      productDescription={item.attributes.Beschrijving}
      imageLink={`http://localhost:1337${item.attributes.Afbeelding.data?.attributes.url}`}
      price={item.attributes.Prijs}
    />
  ))}
</div>
        </main>
        <Footer></Footer>
        </>
    )
}
