import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'Arealclimber-6e13b9f54006492ca9db8ae58dfef2c3',
  
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: "Shirley's notes",
  domain: 'blog.arealclimber.me',
  author: 'Shirley',

  // open graph metadata (optional)
  description: 'Notes I learn from books, speeches, lectures, projects, or life.',

  // social usernames (optional)
  // medium: 'arealclimber',
  twitter: 'arealclimber',
  github: 'arealclimber',
  linkedin: 'arealclimber',
  // newsletter: 'https://tinyletter.com/arealclimber/', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // },
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'zh', 
      pageId: 'a9ec351df8a945d295b380c2041a2784?v=5d5006e7ddbb4accbc8b96bcb046d7a7'
    },
    {
      title: 'en',
      pageId: 'Blog-d9ed15d68f044a5c9835e22bf67afa32'
    },
    // {
    //   title: 'Tech',
    //   pageId: 'Technology-2c9046c18b3444a69d83d0490eb38bb4'
    // },
    {
      title: 'About',
      pageId: 'Shirley-Chang-9228b7201c584baeb1de441edcb9610d'
    },

  ]
})
