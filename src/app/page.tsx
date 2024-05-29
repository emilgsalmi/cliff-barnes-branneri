import { Wordpress } from "@/utils/wordpress";
import Blockrender from "@/blocks/blockrender";

async function getPostData(){
  const posts = await Wordpress.getPosts('posts', {limit: 5})
  return posts
}

export default async function Page(){
  const page = await Wordpress.getPostBySlug("pages", "index")
  const posts = await getPostData()
  console.log(page)
  return <Blockrender page={page} posts={posts}/>

}