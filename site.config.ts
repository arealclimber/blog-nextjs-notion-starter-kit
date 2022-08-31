import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'Shirley-s-Notes-6e13b9f54006492ca9db8ae58dfef2c3',
  
  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Blog powered by NextJS',
  domain: 'nextjs-notion-starter-kit.transitivebullsh.it',
  author: 'Shirley',

  // open graph metadata (optional)
  description: 'Learning notes',

  // social usernames (optional)
  twitter: 'arealclimber',
  github: 'arealclimber',
  linkedin: 'arealclimber',
  // newsletter: '#', // optional newsletter URL
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
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'Blog',
      pageId: 'Blog-03eecbbbdc65454688c4a339e67ecd10'
    },
    {
      title: 'All',
      pageId: 'f8fdfe7370d642ad877c9d52a1c0fc70?v=888f9213c112458f8b7ba587b8a9e380'
    },

  ]
})
