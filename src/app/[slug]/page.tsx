import { Wordpress } from "@/utils/wordpress"
import Blockrender from "@/blocks/blockrender"

export const generateStaticParams = async () => {
    const posts = await Wordpress.getPosts("page", {})
    const paths = posts.map((post:any) => ({slug:post.slug}))
    return paths
}

async function getPostData() {
    const posts = await Wordpress.getPosts('posts', {limit: 5})
    return posts;
  }
  
  
  export default async function Page({ params }: { params: any }) {
    const page = await Wordpress.getPostBySlug("pages", params.slug);
    const posts = await getPostData();
    return <Blockrender page={page} posts={posts}/>
  }