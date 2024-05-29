const baseUrl = 'http://clifftest.local/wp-json';
const username = process.env.NEXT_WORDPRESS_USERNAME;
const password = process.env.NEXT_WORDPRESS_PASSWORD;

const header: any = {
  header: {
    'Authorization': 'Basic ' + btoa(username + ':' + password)
  }
};

export const Wordpress = {

  getMediaById: async (id: number) => {
    const mediaRes: any = await fetch(baseUrl + `/wp/v2/media/${id}`, header);
    const media = await mediaRes.json();
    return media.source_url;
  },

  getPosts: async (postType: string, query: any) => {
    const posts = await fetch(baseUrl + `/wp/v2/${postType}`, header);

    return posts.json();
  },

  getPostBySlug: async (postType: string, slug: string) => {
    const postRes: any = await fetch(baseUrl + `/wp/v2/${postType}?slug=${slug}`, header);
    const post = await postRes.json();

    return post[0];
  },

  getMenus: async (menu?: string) => {
    const menusRes: any = await fetch(baseUrl + `/options/menu`, header);
    const menuData: any = await menusRes.json();

    if (menuData) {
      return menuData;
    }

    return
    console.log(menuData)
    let data: any = {};
    for (let i = 0; i < menuData.length; i++) {
      if (menuData[i].acf_fc_layout == menu) {
        data = {
          ...data,
          [menuData[i].acf_fc_layout]: menuData[i],
        }
      }
      if (menuData[i].acf_fc_layout == 'socials') {
        data = {
          ...data,
          [menuData[i].acf_fc_layout]: menuData[i],
        }
      }
    }

    return data;
  },

}