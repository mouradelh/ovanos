import { Header } from "@/components/header";
import { Navigation } from "@/components/navigation";
import { SinglePost } from "@/interfaces/singlePost";
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
          <p className="mt-4">
            {beschrijving}
          </p>
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
                let res = await fetch(`http://localhost:1337/api/blogposts/${router.query.id}?populate=*`, {
                    headers: {
                        // Authorization: 'bearer a32ab5bd4a1bb2e0d4f34d931db6891bbab646ca3e34129c5f7e9bb6bfd28ccb1f7c142f8621d860704acf9d2b4ecbcf3decf73f122c7a3bf13f6cd3245f9f7a152ca6858beef5c2c7e4c64b3708f81c0209ed4f8fe001cdf4da4aa2f5de84ac50d66826446664ddbb0f91880af197a02c9fda8f97cecb9928dc8fb02de44618',
                    },
                });
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
            beschrijving={blogPost.data.attributes.KorteBeschrijving}>
        </PostComponent>
        }
        </main>
        </>
    )
}