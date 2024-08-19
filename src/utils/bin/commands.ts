// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n 
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};




// /
const quotes: { id: number, text: string, author: string }[] = [
  {
    id: 1,
    text: "In a world where value is digital, the true wealth lies in understanding.",
    author: "Phil the OG Philosaptor"
  },
  {
    id: 2,
    text: "The blockchain is a ledger of trust, recording the past to secure the future.",
    author: "Phil the OG Philosaptor"
  },
  {
    id: 3,
    text: "Crypto is not just a currency; it’s the embodiment of decentralized freedom.",
    author: "Phil the OG Philosaptor"
  },
  {
    id: 4,
    text: "To HODL is to embrace the chaos, believing in order within the blockchain.",
    author: "Phil the OG Philosaptor"
  },
  {
    id: 5,
    text: "In every transaction, there is a choice between trust and greed—choose wisely.",
    author: "Phil the OG Philosaptor"
  },
  {
    id: 6,
    text: "Bitcoin is the philosopher's stone of the digital age, turning belief into value.",
    author: "Phil the OG Philosaptor"
  },
  {
    id: 7,
    text: "The market is a mirror, reflecting both fear and greed—seek the balance.",
    author: "Phil the OG Philosaptor"
  },
  {
    id: 8,
    text: "In a decentralized world, the true power belongs to the individual.",
    author: "Phil the OG Philosaptor"
  },
  {
    id: 9,
    text: "Every wallet holds not just coins, but the hopes and fears of its owner.",
    author: "Phil the OG Philosaptor"
  },
  {
    id: 10,
    text: "The future is encrypted, waiting for those who dare to decrypt it.",
    author: "Phil the OG Philosaptor"
  },
  {
    id: 11,
    text: "To understand crypto is to glimpse the future of human cooperation.",
    author: "Phil the OG Philosaptor"
  },
  {
    id: 12,
    text: "The blockchain is a silent witness, unalterable and eternal, to the trust we place in code.",
    author: "Phil the OG Philosaptor"
  },
  {
    id: 13,
    text: "In the code we trust, but in ourselves we must believe.",
    author: "Phil the OG Philosaptor"
  },
  {
    id: 14,
    text: "The value of a token is not in the coin, but in the community behind it.",
    author: "Phil the OG Philosaptor"
  },
  {
    id: 15,
    text: "Crypto is a journey of conviction, where patience is the greatest wealth.",
    author: "Phil the OG Philosaptor"
  },
  {
    id: 16,
    text: "Decentralization is the philosophy of the many, triumphing over the few.",
    author: "Phil the OG Philosaptor"
  },
  {
    id: 17,
    text: "In the volatility of the market, we find the constancy of opportunity.",
    author: "Phil the OG Philosaptor"
  },
  {
    id: 18,
    text: "To invest in crypto is to trust in a future that’s yet to be written.",
    author: "Phil the OG Philosaptor"
  },
  {
    id: 19,
    text: "The real innovation of blockchain is not in technology, but in the trust it creates.",
    author: "Phil the OG Philosaptor"
  },
  {
    id: 20,
    text: "In the world of crypto, the only certainty is the change that lies ahead.",
    author: "Phil the OG Philosaptor"
  }
];
// 

// quote
export const quote = async (args: string[]): Promise<string> => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  return `
  
"${randomQuote.text}"

      ©️ ${randomQuote.author}
  `;
};

const facts: { id: number, text: string, author: string }[] = [
  {
    id: 1,
    text: "In a world where value’s gone digital, true wealth is knowing when to buy the dip and when to just dip out.",
    author: "Phil the OG Philosaptor"
  },
  {
    id: 2,
    text: "Despite their small size, T. rex's arms were incredibly strong and could exert a force of over 400 pounds.",
    author: "Dinosaur Fact"
  },
  {
    id: 3,
    text: "Recent studies suggest that many dinosaurs may have had vibrant colors, similar to modern birds.",
    author: "Dinosaur Fact"
  },
  {
    id: 4,
    text: "The dinosaur with the longest name is Micropachycephalosaurus, which means 'tiny thick-headed lizard.'",
    author: "Dinosaur Fact"
  },
  {
    id: 5,
    text: "The first dinosaur fossil ever discovered was Megalosaurus, found in England in the early 19th century.",
    author: "Dinosaur Fact"
  },
  {
    id: 6,
    text: "Some dinosaur eggs were as large as a basketball, while others were smaller than a chicken's egg!",
    author: "Dinosaur Fact"
  },
  {
    id: 7,
    text: "Birds are considered the closest living relatives to dinosaurs, specifically theropods like Velociraptor.",
    author: "Dinosaur Fact"
  },
  {
    id: 8,
    text: "Socrates didn't write down his teachings; instead, he engaged in dialogues to stimulate critical thinking.",
    author: "Philosophical Concept"
  },
  {
    id: 9,
    text: "Existentialist philosophers like Jean-Paul Sartre believed that existence precedes essence.",
    author: "Philosophical Concept"
  },
  {
    id: 10,
    text: "Plato's Allegory of the Cave illustrates the difference between the world of appearances and the world of reality.",
    author: "Philosophical Concept"
  },
  {
    id: 11,
    text: "Utilitarianism suggests that the best action is the one that maximizes overall happiness.",
    author: "Philosophical Concept"
  },
  {
    id: 12,
    text: "René Descartes famously said, 'I think, therefore I am,' emphasizing the act of thinking as proof of existence.",
    author: "Philosophical Concept"
  },
  {
    id: 13,
    text: "In philosophy, the concept of a 'philosophical zombie' refers to a being that behaves like a human but lacks conscious experience.",
    author: "Philosophical Concept"
  },
  {
    id: 14,
    text: "The iconic Doge meme featuring a Shiba Inu started in 2013 and became a symbol of internet humor.",
    author: "Internet Meme"
  },
  {
    id: 15,
    text: "Originally a character from the comic 'Boys Club,' Pepe the Frog became a widely used meme for various emotions.",
    author: "Internet Meme"
  },
  {
    id: 16,
    text: "The Rickroll meme involves tricking someone into clicking a link that leads to Rick Astley's 'Never Gonna Give You Up.'",
    author: "Internet Meme"
  },
  {
    id: 17,
    text: "The 'Distracted Boyfriend' meme depicts a man looking at another woman while his girlfriend looks on disapprovingly.",
    author: "Internet Meme"
  },
  {
    id: 18,
    text: "The Nyan Cat meme features an animated cat with a Pop-Tart body flying through space, leaving a rainbow trail.",
    author: "Internet Meme"
  },
  {
    id: 19,
    text: "The 'Ice Bucket Challenge' went viral in 2014 as a fundraiser for ALS, showcasing the power of social media.",
    author: "Viral Trend"
  },
  {
    id: 20,
    text: "Films like 'The Matrix' explore philosophical themes such as reality, perception, and free will.",
    author: "Philosophy in Pop Culture"
  }
];


//fact
export const fact = async (args: string[]): Promise<string> => {
  const randomIndex = Math.floor(Math.random() * facts.length);
  const randomfact = facts[randomIndex];

  return `
  ${randomfact.text}
  `;
};


// meme
export const meme = async (args: string[]): Promise<string> => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];

  return `\t \t"${randomQuote.author} \n ${randomQuote.text}\t "
    <img src="/photo_2024-08-14_23-04-17-transformed.png" alt="" className='' style='width: 20px'/>
  `;
};

//think
export const think = async (args: string[]): Promise<string> => {
  
  return `Is Phil thinking, or is it just you?...`;
};

export const Secret = async (args: string[]): Promise<string> => {
  
  return `Welcome, Seeker of Truth.
Phil’s lost wisdom lies scattered across the blockchain.
Only those with the insight to decipher the ancient clues will unlock his secret.
Type “Begin” to start your journey into the unknown.
`;
};

export const BEGIN = async (args: string[]): Promise<string> => {
  
  return `In the beginning, there was nothing then Phil.
But when? Type in the right “year”...
`;
};

export const year_1969 = async (args: string[]): Promise<string> => {
  
  return `"The first message sent over ARPANET was simply ""LO."
“If the first message was just 'LO'... did the internet begin with a question?”
"
`;
};
export const year_1990 = async (args: string[]): Promise<string> => {
  
  return `The first web browser, WorldWideWeb, launched, making the web accessible to users. “If the web opened its eyes… did it see the future, or did it create a new one for us?”
`;
};
export const year_1991 = async (args: string[]): Promise<string> => {
  
  return `The World Wide Web became publicly available, allowing everyone to access the vast expanse of information.“If the web invited everyone in… was patience the key to unlocking endless knowledge?
`;
};
export const year_2008 = async (args: string[]): Promise<string> => {
  
  return `The Bitcoin whitepaper emerged, and at the same time, the Philosoraptor meme came to life, both sowing the seeds of a digital revolution.“In 2008, as Bitcoin was born and Philosoraptor first pondered, was it mere coincidence—or the dawn of a new age of thinking?
`;
};
export const year_2009 = async (args: string[]): Promise<string> => {
  
  return `The Genesis Block, also known as Block 0, was mined, marking the birth of Bitcoin and the blockchain revolution.
“When the Genesis Block was mined in 2009, it didn’t just ignite Bitcoin—it uncovered a new world waiting to be shaped in blocks.
`;
};
export const year_2011 = async (args: string[]): Promise<string> => {
  
  return `The Silk Road launched, revolutionizing perceptions of online transactions and anonymity.
“When the Silk Road opened… did it reveal freedom, or the hidden cost of anonymity?”
"
`;
};
export const year_2013 = async (args: string[]): Promise<string> => {
  
  return `“When Doge was born from laughter in 2013, was it just a meme, or the start of something bigger than we dared to imagine?”
`;
};
export const year_2015 = async (args: string[]): Promise<string> => {
  
  return `The Genesis Block of Ethereum was mined, launching a platform that transformed the crypto world with decentralized applications and smart contracts.“Ethereum’s Genesis Block wasn’t just a launch—it was the Big Bang that birthed a new digital universe, a brotherhood.”
`;
};
export const year_2020 = async (args: string[]): Promise<string> => {
  
  return `Shiba Inu joined the scene, echoing Dogecoin’s playful spirit while challenging the throne.“In 2020, as Shiba Inu emerged from the shadows of Doge, was it just another contender—or a sign that the age of memes had truly arrived?”
`;
};
export const year_2022 = async (args: string[]): Promise<string> => {
  
  return `The year Ethereum merged, leaving Proof of Work behind and embracing Proof of Stake.“In 2022, when Ethereum left its old skin behind, was it just an upgrade—or the moment the future of finance found its true form?”
`;
};
export const Genesis = async (args: string[]): Promise<string> => {
  
  return `The Genesis Wallet holds secrets known only to the original creators. But be warned, the path is guarded by the Genesis members.
`;
};

export const Signal = async (args: string[]): Promise<string> => {
  
  return `The smarts never reveal their cards, but they know the value of silence. Only those who can listen to the noise of the market will find the hidden signal.
`;
};

export const Vitalik = async (args: string[]): Promise<string> => {
  
  return `If Vitalik once spoke of decentralization as truth... is he just a man, or the voice of the future?"
`;
};

export const EXE = async (args: string[]): Promise<string> => {
  
  return `"If Vitalik is not human, but an exe... does it mean decentralization is not a goal, but a destiny?"
`;
};

export const Oath = async (args: string[]): Promise<string> => {
  
  return `"If the true value of a coin is in its community... is it worth more than its price, or does the community make it priceless?"
`;
};

export const Doge = async (args: string[]): Promise<string> => {
  
  return `"If Dogecoin was made as a joke... does that mean all money is just a meme?"
`;
};

export const Binance = async (args: string[]): Promise<string> => {
  
  return `"If Binance is the empire of crypto giants... is it the ultimate throne, or just the stage for the market's greatest dramas?"
`;
};

export const Coinbase = async (args: string[]): Promise<string> => {
  
  return `""If Coinbase straddles the line between mainstream and crypto... is it the key to digital enlightenment, or just a polished gateway amidst the chaos?"
`;
};

export const kraken = async (args: string[]): Promise<string> => {
  
  return `"If Kraken dives deep into the market’s abyss... is it a treasure chest of opportunities, or a sea of complexities waiting to ensnare the unwary?"
`;
};

export const Kucoin = async (args: string[]): Promise<string> => {
  
  return `"If KuCoin is the wild frontier of trading... is it a high-stakes playground of fortunes, or a labyrinth of risk and reward?"
`;
};

export const Bybit = async (args: string[]): Promise<string> => {
  
  return `"If Bybit is the gladiator’s arena of crypto... is it a battlefield of skill and chance, or a grand stage where digital warriors duel for supremacy?"
`;
};

export const Huobi = async (args: string[]): Promise<string> => {
  
  return `"If Huobi is the vault of crypto’s hidden lore... is it a repository of deep knowledge, or a treasure trove of secrets waiting to be unlocked?"
`;
};

export const Gate = async (args: string[]): Promise<string> => {
  
  return `"If Gate.io is the portal to the crypto cosmos... is it a gateway to infinite wealth, or a dazzling mirage with hidden depths and mysteries?"
`;
};
export const Mexc = async (args: string[]): Promise<string> => {
  
  return `"If MEXC was where we all started... is it the foundation of our journey, or just the beginning of the adventure?"
`;
};
export const Satoshi = async (args: string[]): Promise<string> => {
  
  return `"If Satoshi created Bitcoin...Who created Phil?"
`;
};
export const Marketing = async (args: string[]): Promise<string> => {
  
  return `"If marketing drives the hype... is it the fuel for innovation, or just the art of selling the dream?"
`;
};
export const Contract = async (args: string[]): Promise<string> => {
  
  return `"If smart contracts are the law of the blockchain... are they the future of agreements, or just code that binds us in new ways?"
`;
};
export const Kols = async (args: string[]): Promise<string> => {
  
  return `"If KOLs lead the conversation... are they the voices of wisdom, or just echoes of the loudest trends?"
`;
};
export const Telegram = async (args: string[]): Promise<string> => {
  
  return `"If Telegram is where crypto communities thrive... is it a hub of knowledge, or just whispers in the digital ether?"
`;
};

export const Pump = async (args: string[]): Promise<string> => {
  
  return `"If a pump raises the price... is it a sign of growth, or just the prelude to the inevitable fall?"
`;
};
export const Hold = async (args: string[]): Promise<string> => {
  
  return `"If holding is the key to long-term gains... is patience truly a virtue, or just waiting for the world to catch up?"
`;
};
export const Dump = async (args: string[]): Promise<string> => {
  
  return `"If a dump follows the pump... is it the market correcting, or just the moment the bubble bursts?"
`;
};
export const Blockchain = async (args: string[]): Promise<string> => {
  
  return `If Crypto is in Blocks... Is crypto an extention of Minecraft?
`;
};
export const Privatekey = async (args: string[]): Promise<string> => {
  
  return `"If I lose my private key, did my crypto ever really exist?"
`;
};







// // Contact
// export const email = async (args: string[]): Promise<string> => {
//   window.open(`mailto:${config.email}`);
//   return `Opening mailto:${config.email}...`;
// };

// export const github = async (args: string[]): Promise<string> => {
//   window.open(`https://github.com/${config.social.github}/`);

//   return 'Opening github...';
// };

// export const linkedin = async (args: string[]): Promise<string> => {
//   window.open(`https://www.linkedin.com/in/${config.social.linkedin}/`);

//   return 'Opening linkedin...';
// };

// // Search
// export const google = async (args: string[]): Promise<string> => {
//   window.open(`https://google.com/search?q=${args.join(' ')}`);
//   return `Searching google for ${args.join(' ')}...`;
// };

// export const duckduckgo = async (args: string[]): Promise<string> => {
  
//   return `Searching duckduckgo for ...`;
// };

// export const bing = async (args: string[]): Promise<string> => {
//   window.open(`https://bing.com/search?q=${args.join(' ')}`);
//   return `Wow, really? You are using bing for ${args.join(' ')}?`;
// };

// export const reddit = async (args: string[]): Promise<string> => {
//   window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
//   return `Searching reddit for ${args.join(' ')}...`;
// };

// // Typical linux commands
// export const echo = async (args: string[]): Promise<string> => {
//   return args.join(' ');
// };

// export const whoami = async (args: string[]): Promise<string> => {
//   return `${config.ps1_username}`;
// };

// export const ls = async (args: string[]): Promise<string> => {
//   return `a
// bunch
// of
// fake
// directories`;
// };

// export const cd = async (args: string[]): Promise<string> => {
//   return `unfortunately, i cannot afford more directories.
// if you want to help, you can type 'donate'.`;
// };

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
  
};






// Banner
export const banner = (args?: string[]): string => {
  return `<p style='font-size: 18px;'>
██████╗ ██╗  ██╗██╗██╗     
██╔══██╗██║  ██║██║██║     
██████╔╝███████║██║██║     
██╔═══╝ ██╔══██║██║██║     
██║     ██║  ██║██║███████╗
╚═╝     ╚═╝  ╚═╝╚═╝╚══════╝
</p>

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'quote' to see the Phil quite.
Type 'fact' to witness the amazing facts from Phil.
Type 'meme' to see meme :)

Ester egg?..



Twitter:  XXX
TELEGRAM: XXX
КОНТРАКТ: XXX

`;
};
