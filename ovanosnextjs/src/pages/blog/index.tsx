import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { Blogposts } from "@/interfaces/blogpost"
import { link } from "fs"
import Link from "next/link"
import { useEffect, useState } from "react"
import { AllBlogPosts } from "../api/hello"
import { BlogPosts } from ".."

interface BlogCardProps {
    title: string,
    datum: string,
    imageUrl: string,
    link: string,
    korteBeschrijving: string
}

export function BlogCard({title, datum, imageUrl, korteBeschrijving, link}:BlogCardProps) {
    return(
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
      <div className="flex flex-col space-y-1.5 p-6">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-500">Posted on {datum}</p>
      </div>
      <div className="p-6">
        <img
          src={`http://localhost:1337${imageUrl}`}
          alt="Blog Post 1"
          className="w-full h-auto mb-4"
        />
        <p>{korteBeschrijving}...</p>
      </div>
      <div className="flex items-center p-6">
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-primary underline-offset-4 hover:underline h-10 px-4 py-2">
          <Link legacyBehavior href="">
          <a className="text-blue-500 hover:underline">
            Read More
          </a>
          </Link>
        </button>
      </div>
    </div>
    )
}

export function BlogPost() {
    const [blogPosts, setBlogPosts] = useState<Blogposts>();
    useEffect(() => {
        const getBlogPosts = async() => {
            const res = await AllBlogPosts();
            setBlogPosts(res);
        }
        getBlogPosts();
    },[])
    return(
    <div className="px-4 py-6 md:px-6 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                blogPosts?.data.map((post) => (
                    <BlogCard
                        title={post.attributes.Title} 
                        datum={post.attributes.Datum} 
                        link="#" 
                        imageUrl={post.attributes.Image.data.attributes.formats.small.url} 
                        korteBeschrijving={post.attributes.KorteBeschrijving}>
                    </BlogCard>
                ))
            }
        </div>
    </div>
    )
}

export default function Blog() {
    return(
        <>
        <Header></Header>
        <Navigation></Navigation>
        <main>
            {BlogPost()}
        </main>
        <Footer></Footer>
        </>
    )
}