import { Header } from '@/components/header'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { useEffect, useState } from 'react'
import assert from 'assert'
import { RecentBlogPosts } from './api/apiService'
import { BlogpostsData } from '@/interfaces/Blogpost'
require('dotenv').config();
const SERVER_ENDPOINT = process.env.SERVER_ENDPOINT;


const inter = Inter({ subsets: ['latin'] })

export function Info() {
  return(
    <section className="bg-white">
    <div className="container px-6 py-12 mx-auto">

        <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
            <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </span>

                <h2 className="mt-4 text-lg font-medium text-gray-800">Email</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Wij zijn altijd blij je te helpen op onderstaande email:</p>
                <p className="mt-2 text-blue-500 dark:text-blue-400">hello@ovanos.com</p>
            </div>

            <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                </span>

                <h2 className="mt-4 text-lg font-medium text-gray-800">Adres</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Altijd welkom om een hapje te komen eten</p>
                <p className="mt-2 text-blue-500 dark:text-blue-400">Lange zwavelstraat 156, 2000 Antwerpen</p>
            </div>

            <div>
                <span className="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                </span>

                <h2 className="mt-4 text-lg font-medium text-gray-800">Nummer</h2>
                <p className="mt-2 text-gray-500 dark:text-gray-400">Altijd bereikbaar op onderstaande nummer</p>
                <p className="mt-2 text-blue-500 dark:text-blue-400">+32 488 456 12</p>
            </div>
        </div>
    </div>
</section>
  )
}

export interface BlogPostCardProps {
  id: number,
  title: string,
  description: string,
  imageUrl: string,
}

export function BlogpostCard({id, title, description, imageUrl}: BlogPostCardProps) {
  return(
    <div className="max-w-lg mx-auto">
      <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <Link href={`/blog/${id}`} legacyBehavior>
        <a>
        <img className="rounded-t-lg" src={imageUrl} alt={title}/>
        </a>
        </Link>
        <div className="p-5">
            <Link href={`/blog/${id}`} legacyBehavior>
              <a>
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">{title}</h5>
              </a>
            </Link>
            <p className="font-normal text-gray-700 mb-3">{description}</p>
            <Link href={`/blog/${id}`} legacyBehavior>
            <a className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center">
                Lees meer
            </a>
            </Link>
        </div>
      </div>
    </div>
  )
}

export function RecentBlogPostCard({title, description, imageUrl, id}: BlogPostCardProps) {
  return(
    <div>
      <Link legacyBehavior href={`/blog/${id}`}>
    <a key={id} className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 text-center">
      <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={imageUrl} alt={title}/>
      <div className="p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{title}</h5>
        <p className="mb-3 font-normal text-gray-700 ">{description}</p>
      </div>
    </a>
    </Link>
    </div>
    
    
  )
}

export function BlogPosts() {
  const [blogposts, setBlogPosts] = useState<BlogpostsData>();
  useEffect(() => {
    const fetchBlogs = async() => {
      const recentBlogPosts = await RecentBlogPosts();
      setBlogPosts(recentBlogPosts);
    }
    fetchBlogs();
  },[])
  return(
    <>
    {blogposts && blogposts.data && blogposts.data.length > 0 && (
      <RecentBlogPostCard
        id={blogposts.data[0].id}
        title={blogposts.data[0].attributes.Title}
        description={blogposts.data[0].attributes.KorteBeschrijving}
        imageUrl={`http://localhost:1337${blogposts.data[0].attributes.Image?.data.attributes.formats.small.url}`}
    />
    )}
    </>
  )
}

export default function Home() {
  return (
    <>
      <Header></Header>
      <Navigation></Navigation>
      <main className="mx-auto p-4 ">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Ovanos</h1>
          <p className="max-w-2xl mx-auto">
            Welkom bij Ovanos, waar elke maaltijd een meesterwerk is en genieten een kunst. Begin je dag met heerlijk ontbijt, bereid met verse ingrediënten. Ontdek onze diverse lunch- en dineropties, waar smaken van over de hele wereld samenkomen. Sluit je culinaire reis af met verleidelijke desserts die de perfecte finishing touch bieden. Bij Ovanos is elke hap een viering van smaak en gezelligheid. Ontdek de onvergetelijke eetervaring die we te bieden hebben.
          </p>
        </div>
        <div className="text-center mb-8">
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            <a href="/menu">Ons Menu</a>
          </button>
        </div>
        <h2 className="text-center font-extrabold">Recentste Blogpost</h2>
        <div className="flex justify-center">
          <div className="max-w-lg">
            <BlogPosts></BlogPosts>
          </div>
        </div>
        <Info></Info>
      </main>
    </>
  );
}

