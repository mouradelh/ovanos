import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";
import { SinglePost } from "@/interfaces/singlePost";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface PostComponentProps {
    title: string,
    datum: string,
    imageUrl: string,
    beschrijving: string
}

export function PostComponent({ title, datum, imageUrl, beschrijving }: PostComponentProps) {
  return (
    <div className="text-center">
      <article className="prose prose-gray mx-auto dark:prose-invert">
        <div className="space-y-2 not-prose">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl lg:leading-[3.5rem]">
            {title}
          </h1>
          <p className="text-gray-500 dark:text-gray-400">{datum}</p>
        </div>
        <img
          alt={title}
          className="mx-auto aspect-video overflow-hidden rounded-lg object-cover"
          src={`http://localhost:1337${imageUrl}`}
        />
        <div className="mx-auto w-1/2 mt-4">
          <p>{beschrijving}</p>
        </div>
      </article>
    </div>
  );
}


export default function BlogPost() {
    const router = useRouter();
    const [blogPost, setBlogPost] = useState<SinglePost>();
    useEffect(() => {
        const fetchPost = async () => {
            if (router.query.id) {
                let res = await fetch(`http://localhost:1337/api/blogposts/${router.query.id}?populate=*`);
                let data : SinglePost = await res.json();
                setBlogPost(data);
            }
        };
    
        fetchPost();
    }, [router.query.id]);
    return(
        <>
        <Header></Header>
        <Navigation></Navigation>
        <main>
        {blogPost && blogPost.data && 
        <PostComponent 
            title={blogPost.data.attributes.Title} 
            imageUrl={blogPost.data.attributes.Image.data.attributes.formats.medium.url} 
            datum={blogPost.data.attributes.Datum.toString()} 
            beschrijving="">
        </PostComponent>
        }
        <div className="mx-auto w-1/2 mt-4">
          {blogPost &&
            blogPost.data &&
            blogPost.data.attributes.ArticleText.map((text, index) => (
              <p key={index} className="mb-4">
                {text.children[0].text}
              </p>
            ))}
        </div>
        <div className="text-center pb-7">
          <Link legacyBehavior href={"/blog"}>
            <a>
            <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
              Ga terug
            </button>
            </a>
          </Link>
        </div>
        </main>
        </>
    )
}