import Logo from "../public/img/life-itself-logo.svg"

const siteConfig = {
  title: "Making Sense of Crypto and Web3",
  tagline: "",
  description:
    "Introductions to key concepts and ideas in crypto and web3. Plus in-depth evaluation of its potential impact.",
  author: "Life Itself and collaborators",
  // logo image
  authorLogo: "/img//life-itself-logo.svg",
  // url to author
  authorUrl: "https://lifeitself.us/",
  // Google analytics key e.g. G-XXXX
  analytics: "G-9DL50W4DN9",
  // optional additional nextSeo content set on each page
  // see https://github.com/garmeeh/next-seo
  nextSeo: {
    openGraph: {
      images: [
        {
          url: "https://res.cloudinary.com/ds7qslkd0/image/upload/w_1200,c_scale/v1647434394/Web3/NbzC4V4_o7g3j5.jpg",
          alt: "Making Sense of Crypto & Web3 by Life Itself",
          width: 1200,
          height: 627,
          type: "image/jpg",
        },
      ],
    },
    twitter: {
      handle: "@forlifeitself",
      site: "web3.lifeitself.us",
      cardType: "summary_large_image",
    },
  },
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/forlifeitself",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/forlifeitself/",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "https://twitter.com/forlifeitself",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/life-itself/web3",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/channel/UCmBq3VO9w_MLTKD_CHsYN-Q",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      name: "Podcast",
      href: "https://anchor.fm/life-itself",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M1.503 9.678c-.83 0-1.5.67-1.5 1.5v1.63a1.5 1.5 0 103 0v-1.63c0-.83-.67-1.5-1.5-1.5zm20.994 0c-.83 0-1.5.67-1.5 1.5v1.63a1.5 1.5 0 103 0v-1.63c0-.83-.67-1.5-1.5-1.5zM6.68 14.587c-.83 0-1.5.67-1.5 1.5v1.63a1.5 1.5 0 103 0v-1.62c0-.83-.67-1.5-1.5-1.5zm0-9.817c-.83 0-1.5.67-1.5 1.5v5.357a1.5 1.5 0 003 0V6.258c0-.83-.67-1.5-1.5-1.5zm10.638 0c-.83 0-1.5.67-1.5 1.5v1.64a1.5 1.5 0 003 0V6.27c0-.83-.67-1.5-1.5-1.5zM12 0c-.83 0-1.5.67-1.5 1.5v1.63a1.5 1.5 0 103 0V1.5c0-.83-.67-1.499-1.5-1.499zm0 19.355c-.83 0-1.5.67-1.5 1.5v1.64a1.5 1.5 0 103 .01v-1.64c0-.82-.67-1.5-1.5-1.5zm5.319-8.457c-.83 0-1.5.68-1.5 1.5v5.328a1.5 1.5 0 003 0v-5.329c0-.83-.67-1.5-1.5-1.5zM12 6.128c-.83 0-1.5.68-1.5 1.5v8.728a1.5 1.5 0 003 0V7.638c0-.83-.67-1.5-1.5-1.5z" />
        </svg>
      ),
    },
    {
      name: "Life Itself",
      href: "https://lifeitself.us/labs",
      icon: (props) => (
        <svg viewBox="0 0 24 24" {...props}>
          <image href={Logo.src} width={24} height={24} />
        </svg>
      ),
    },
  ],
};

module.exports = siteConfig