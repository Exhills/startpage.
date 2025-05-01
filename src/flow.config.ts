type Config = {
  links: {
    type: string;
    color: string;
    links: {
      name: string;
      url: string;
    }[];
  }[];
};

export const flowConfig: Config = {
  links: [
    {
      type: "Socials",
      color: "blue-",
      links: [
        {
          name: "Discord",
          url: "https://discord.com/app",
        },
        {
          name: "Twitter",
          url: "https://twitter.com",
        },
        {
          name: "Steam",
          url: "https://store.steampowered.com/",
        },
        {
          name: "Reddit",
          url: "https://reddit.com",
        },
        {
          name: "Github",
          url: "https://github.com",
        },
        {
          name: "Twitch",
          url: "https://www.twitch.tv/",
        },
      ],
    },
    {
      type: "Useful",
      color: "teal-",
      links: [
        {
          name: "FMHY",
          url: "https://fmhy.net/",
        },
        {
          name: "CodeCafé",
          url: "https://codecafe.app",
        },
        {
          name: "Year Progress",
          url: "https://year-progress.cnln.dev/",
        },
        {
          name: "Gmail",
          url: "https://mail.google.com",
        },
      ],
    },
    {
      type: "Leisure",
      color: "blue-",
      links: [
        {
          name: "YouTube",
          url: "https://youtube.com",
        },
        {
          name: "Zoro",
          url: "https://zoro.to",
        },
        {
          name: "Manga",
          url: "https://mangareader.to",
        },
      ],
    },
    {
      type: "Resources",
      color: "purple-",
      links: [
        {
          name: "Tailwind",
          url: "https://tailwindcss.com/docs/customizing-colors",
        },
        {
          name: "Icons",
          url: "https://icones.js.org/",
        },
        {
          name: "Fontshare",
          url: "https://fontshare.com/",
        },
      ],
    },
    {
      type: "Others",
      color: "rose-",
      links: [
        {
          name: "Dev.to",
          url: "https://dev.to",
        },
        {
          name: "Monkeytype",
          url: "https://monkeytype.com",
        },
        {
          name: "LH:3000",
          url: "http://localhost:3000",
        },
        {
          name: "LH:5173",
          url: "http://localhost:5173",
        },
      ],
    },
  ],
};
