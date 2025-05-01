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
          name: "Notes",
          url: "https://notepad.js.org/",
        },
        {
          name: "Year Progress",
          url: "https://year-progress.cnln.dev/",
        },
        {
          name: "Gmail",
          url: "https://mail.google.com",
        },
        {
          name: "Wifi Information",
          url: "https://www.wiisfi.com/",
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
          name: "Roblox",
          url: "https://www.roblox.com/home",
        },
        {
          name: "Neal.fun",
          url: "https://neal.fun/",
        },
      ],
    },
    {
      type: "Piracy",
      color: "purple-",
      links: [
        {
          name: "Knaben",
          url: "https://knaben.org/",
        },
        {
          name: "EXT",
          url: "https://ext.to/",
        },
        {
          name: "Anna's Archive",
          url: "https://annas-archive.org/",
        },
        {
          name: "Torrentbay",
          url: "https://torrentbay.st/",
        },
      ],
    },
    {
      type: "Others",
      color: "rose-",
      links: [
        {
          name: "Fischpedia",
          url: "https://fischipedia.org/wiki/Fisch_Wiki",
        },
        {
          name: "Entertrained",
          url: "https://entertrained.app/",
        },
        {
          name: "Virutal Numbers",
          url: "https://onlinesim.io",
        },
        {
          name: "Government Info",
          url: "https://usafacts.org/",
        },
        {
          name: "Map of Wiki",
          url: "https://halilb84.github.io/Map-of-Wiki/",
        },
        {
          name: "Clip Fish",
          url: "https://clip.fish/",
        },
      ],
    },
  ],
};
