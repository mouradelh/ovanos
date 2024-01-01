import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Url } from "next/dist/shared/lib/router/router"
import Link from "next/link"
import { MenuLijst } from "../api/hello"
import {useEffect, useState} from 'react'
import { Strapi } from "@/interfaces/Strapi"

interface ButtonProps {
    title: string,
    url: string,
}
interface CardProps {
    title: string,
    subtitle: string,
    imageUrl: string,
    link: Url
}

export function Button({title, url}:ButtonProps) {
    return(
        <div>
            <img src={url} alt="Avatar" style={{width:100}}/>
            <div>
                <h4><b>{title}</b></h4> 
                <p>Architect & Engineer</p> 
            </div>
        </div>
    )

}

export function Card({title, subtitle, imageUrl, link}: CardProps) {
    return(
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <Link legacyBehavior href={link}>
                <a>
                    <img className="rounded-t-lg" src={imageUrl} alt="" />
                </a>
            </Link>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{subtitle}</p>
            <Link legacyBehavior href={link}>
            <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Lees meer
            </a>
            </Link>
        </div>
        </div>
    )
}

export default function Menu() {
    const [menuData, setMenuData] = useState<Strapi>();
    useEffect(() => {
        const fetchMenuData = async() => {
            const response = await MenuLijst();
            setMenuData(response);

        }
        fetchMenuData();
    },[]);

    return(
        <>
        <Header></Header>
        <Navigation></Navigation>
        <main className="bg-gradient-to-r from-cyan-500 to-blue-500 mb-0 pb-0">
            <h1 className="text-center font-extrabold">Menu</h1>
            <div className="flex flex-wrap space-x-4 space-y-3 justify-center">
            {menuData && menuData.data &&
            menuData.data.map((item) => (
            <Card
              key={item.id}
              title={item.attributes.Naam}
              subtitle={item.attributes.Beschrijving}
              imageUrl={`http://localhost:1337${item.attributes.Afbeelding?.data.attributes.formats.large.url}`}
              link={`/menu/${item.attributes.Naam.toLowerCase().replace(" ","")}`}
            />
          )
        )}
            </div>
        </main>
        </>
    )
}