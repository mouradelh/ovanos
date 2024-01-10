import { LogoData } from "@/interfaces/Logo";
import { LogoImage } from "@/pages/api/apiService";
import Link from "next/link"
import { useEffect, useState } from "react"

export const Navigation = () => {
  const [logo, setLogo] = useState<LogoData>();
  useEffect(() => {
    const fetchLogo = async() => {
      const logo = await LogoImage();
       setLogo(logo);
    }
    fetchLogo();
  },[])
  return(
  <nav className="bg-white dark:bg-gray-900 w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src={`http://localhost:1337${logo && logo.attributes && logo?.attributes.Afbeelding.data.attributes.formats.small.url}`} className="h-8" alt="ovanos"/>
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Ovanos</span>
      </a>
    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open menu</span>
        <svg className="w-5 h-5" aria-hidden="true" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
    </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <Link legacyBehavior href={"/"}><a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Home</a></Link>
        </li>
        <li>
          < Link legacyBehavior href={"/blog"}><a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Blog</a></Link>
        </li>
        <li>
          <Link legacyBehavior href={"/menu"}><a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Menu</a></Link>
        </li>
        <li>
          <Link legacyBehavior href={"/medewerkers"}><a className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Medewerkers</a></Link>
        </li>
      </ul>
    </div>
    </div>
  </nav>
  )
}