import { Header } from '@/components/header'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { useEffect, useState } from 'react'
import { Blogposts } from '@/interfaces/blogpost'


const inter = Inter({ subsets: ['latin'] })

export function Info() {
  return(
    <div className="flex flex-row">
      <div className="flex-1">
        <h2 className="text-xl font-bold">Openingstijden</h2>
        <ul>
          <li>Maandag: 04:30 - 20:00</li>
          <li>Dinsdag: 04:30 - 20:00</li>
          <li>Donderdag: 04:30 - 20:00</li>
          <li>Woensdag: Gesloten</li>
          <li>Vrijdag: 04:30 - 20:00</li>
          <li>Zaterdag: 04:30 - 20:00</li>
          <li>Zondag: 04:30 - 20:00</li>
        </ul>
      </div>
      <div className="flex-1 mb-8">
        <h2 className="text-xl font-bold">Adres</h2>
        <p>LANGE ZAVELSTRAAT 38-40 2060 ANTWERPEN</p>
      </div>
      <div className="flex-1 mb-8">
        <h2 className="text-xl font-bold">Telefoon</h2>
        <p>0488 03 30 30</p>
      </div>
    </div>
  )
}

export interface BlogPostCardProps {
  id: number,
  title: string,
  description: string,
  imageUrl: string,
  buttonText: string
}

export function BlogpostCard({id, title, description, imageUrl, buttonText}: BlogPostCardProps) {
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
                {buttonText}
            </a>
            </Link>
        </div>
      </div>
    </div>
  )
}

export function BlogPosts() {
  const [blogposts, setBlogPosts] = useState<Blogposts>();
  useEffect(() => {
    const fetchBlogs = async() => {
      const res = await fetch("http://localhost:1337/api/blogposts?populate=*", {
        headers : {
          Authorization : 'bearer a32ab5bd4a1bb2e0d4f34d931db6891bbab646ca3e34129c5f7e9bb6bfd28ccb1f7c142f8621d860704acf9d2b4ecbcf3decf73f122c7a3bf13f6cd3245f9f7a152ca6858beef5c2c7e4c64b3708f81c0209ed4f8fe001cdf4da4aa2f5de84ac50d66826446664ddbb0f91880af197a02c9fda8f97cecb9928dc8fb02de44618',
        },
      });
      let data : Blogposts = await res.json();
      setBlogPosts(data);
    }
    fetchBlogs();
  },[])
  return(
    <>
    {blogposts && blogposts.data.map((blog) => (
      <BlogpostCard key={blog.id} id={blog.id} title={blog.attributes.Title} description={blog.attributes.KorteBeschrijving} imageUrl={`http://localhost:1337${blog.attributes.Image.data.attributes.formats.small.url}`} buttonText='Lees Meer'></BlogpostCard>
    ))}
    </>
  )
}

export default function Home() {
  return (
    <>
        <Header></Header>
        <Navigation></Navigation>
        <main className="container mx-auto p-4">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold">Ovanos</h1>
            <p className="max-w-2xl mx-auto">Welkom bij Ovanos, waar elke maaltijd een meesterwerk is en genieten een kunst. Begin je dag met heerlijk ontbijt, bereid met verse ingrediënten. Ontdek onze diverse lunch- en dineropties, waar smaken van over de hele wereld samenkomen. Sluit je culinaire reis af met verleidelijke desserts die de perfecte finishing touch bieden. Bij Ovanos is elke hap een viering van smaak en gezelligheid. Ontdek de onvergetelijke eetervaring die we te bieden hebben.</p>
          </div>
          <div className="text-center mb-8">
            <button className="bg-blue-500 text-white px-4 py-2 rounded"><a href="/menu">Ons Menu</a></button>
          </div>
          <h2 className='text-center font-extrabold'>Recente blogposts</h2>
          <div className='flex flex-row'>
          <BlogPosts></BlogPosts>
          </div>
          
          <Info></Info>
        </main>
        <Footer></Footer>
    </>
  )
}
