import type { ArsenalMetaData } from "@/interfaces/shared";

export const introduction = `
    Here’s where I lay out the languages I speak — both to computers 
    and to humans — along with the frameworks, tools, and tech I reach 
    for when it’s time to build. These are the instruments in my daily workflow, 
    the ones that help me turn ideas into features, bugs into fixes, and coffee 
    into functioning code.`;

const programmingLanguages: ArsenalMetaData[] = [
  {
    name: "JavaScript",
    iconClassName: "devicon-javascript-plain",
    recentlyUsed: true,
    toSay: [
      "Oh... nice JavaScript 😏",
      "eeeh? [] === [] is false?",
      "Async is the new black 🖤",
    ],
  },
  {
    name: "TypeScript",
    iconClassName: "devicon-typescript-plain",
    recentlyUsed: true,
    toSay: [
      "Type safe, type happy ✅",
      "No 'any' allowed here 😎",
      "Compile-time vibes only ✨",
    ],
  },
  {
    name: "Python",
    iconClassName: "devicon-python-plain",
    recentlyUsed: true,
    toSay: [
      "IndentationError? Classic 😅",
      "Python: snake, not snack 🐍",
      "import this ☯️",
    ],
  },
  {
    name: "C#",
    iconClassName: "devicon-csharp-plain",
    recentlyUsed: false,
    toSay: [
      "C# sharp and clean 🎵",
      "NullReferenceException, anyone?",
      "LINQ it up! 🔍",
    ],
  },
  {
    name: "C++",
    iconClassName: "devicon-cplusplus-plain",
    recentlyUsed: false,
    toSay: [
      "C++: where memory matters 💾",
      "Segmentation fault incoming ⚡",
      "RAII or die! 😎",
    ],
  },
  {
    name: "HTML5",
    iconClassName: "devicon-html5-plain",
    recentlyUsed: true,
    toSay: [
      "I structure your world 🌐",
      "<div>life</div>",
      "Semantics over everything ✨",
    ],
  },
  {
    name: "CSS3",
    iconClassName: "devicon-css3-plain",
    recentlyUsed: true,
    toSay: [
      "Flex it like a boss 💪",
      "Grid over Flex? 🤔",
      "I make things pretty 😎",
    ],
  },
];

const frontendTechnologies: ArsenalMetaData[] = [
  {
    name: "React",
    iconClassName: "devicon-react-original",
    recentlyUsed: true,
    toSay: [
      "Hooks, hooks everywhere! 😎",
      "JSX is my love language 💖",
      "State? I got plenty of it! 🍵",
    ],
  },
  {
    name: "Next.js",
    iconClassName: "devicon-nextjs-plain colored",
    recentlyUsed: true,
    toSay: [
      "SSR? Yes please! 🌐",
      "Next time, Next.js! 😉",
      "Pages, API routes, and dreams ✨",
    ],
  },
  {
    name: "Material UI",
    iconClassName: "devicon-materialui-plain",
    recentlyUsed: true,
    toSay: [
      "MUI: components on fleek 💅",
      "Button, Button, everywhere! 🔘",
      "Themes? Light or dark? 🌗",
    ],
  },
  {
    name: "Tailwind CSS",
    iconClassName: "devicon-tailwindcss-original",
    recentlyUsed: false,
    toSay: [
      "Utility classes for life ⚡",
      "I see you spacing with p-4 👀",
      "Hover me if you dare 😏",
    ],
  },
  {
    name: "Jest",
    iconClassName: "devicon-jest-plain",
    recentlyUsed: false,
    toSay: [
      "Test it or regret it! 🧪",
      "Expect the unexpected 😜",
      "Snapshots forever 📸",
    ],
  },
  {
    name: "React Testing Library",
    iconClassName: undefined,
    recentlyUsed: true,
    toSay: [
      "Render and query, baby! 🎯",
      "The users love me ❤️",
      "DOM elements fear me 😎",
    ],
  },
  {
    name: "Vitest",
    iconClassName: "devicon-vitest-plain",
    recentlyUsed: true,
    toSay: [
      "Fast and furious tests ⚡",
      "Vitest vibes only 🎉",
      "Mocks, spies, and glory 🕵️‍♂️",
    ],
  },
];

const backendTechnologies: ArsenalMetaData[] = [
  {
    name: "Node.js",
    iconClassName: "devicon-nodejs-plain-wordmark",
    recentlyUsed: true,
    toSay: [
      "Event loop never sleeps ⏳",
      "npm install fun! 🎉",
      "Async/await is my cardio 💪",
    ],
  },
  {
    name: "FastAPI",
    iconClassName: "devicon-fastapi-plain-wordmark",
    recentlyUsed: true,
    toSay: [
      "Fast... really fast! ⚡",
      "Swagger me baby 😎",
      "Python + speed = love 💖",
    ],
  },
  {
    name: "ASP.NET MVC",
    iconClassName: undefined,
    recentlyUsed: false,
    toSay: [
      "MVC – Master, View, Controller 🎩",
      "C# rules the backend kingdom 🏰",
      "Views that render like magic ✨",
    ],
  },
  {
    name: ".NET Framework",
    iconClassName: "devicon-dot-net-plain",
    recentlyUsed: false,
    toSay: [
      "Legacy but legendary 💾",
      "Assemblies assemble! 🛠️",
      "Garbage collector at your service 🗑️",
    ],
  },
];

const cloudAndInfraTechnologies: ArsenalMetaData[] = [
  {
    name: "Microsoft Azure",
    iconClassName: "devicon-azure-plain",
    recentlyUsed: true,
    toSay: [
      "Cloudy with a chance of servers ☁️",
      "I see your VMs! 👀",
      "Azure is my playground 🛠️",
    ],
  },
  {
    name: "AWS",
    iconClassName: "devicon-amazonwebservices-plain-wordmark",
    recentlyUsed: false,
    toSay: [
      "S3, EC2, RDS… I know them all 😎",
      "Cloud flex 💨",
      "Lambda loves me 🖤",
    ],
  },
  {
    name: "Docker",
    iconClassName: "devicon-docker-plain",
    recentlyUsed: true,
    toSay: [
      "Containers are my jam 🥫",
      "Ship it! 🚢",
      "Dockerfile: my recipe 🍳",
    ],
  },
  {
    name: "Trivy",
    iconClassName: undefined,
    recentlyUsed: true,
    toSay: [
      "Scanning all the things 🔍",
      "Vulnerabilities? Not on my watch 🛡️",
      "Trivy be trippin' 😂",
    ],
  },
];

const devOpsTechnologies: ArsenalMetaData[] = [
  {
    name: "Azure DevOps",
    iconClassName: "devicon-azuredevops-plain",
    recentlyUsed: true,
    toSay: [
      "CI/CD wizard 🧙‍♂️",
      "Pipelines running, stress-free 😎",
      "Boards and repos, I see you 👀",
    ],
  },
  {
    name: "Azure Pipelines",
    iconClassName: undefined,
    recentlyUsed: true,
    toSay: [
      "Automate all the things! ⚙️",
      "Trigger, build, deploy 🔄",
      "YAML files be tricky 😏",
    ],
  },
];

const otherTechnologies: ArsenalMetaData[] = [
  {
    name: "Git",
    iconClassName: "devicon-git-plain-wordmark",
    recentlyUsed: true,
    toSay: [
      "Commit, push, repeat 🔁",
      "Branches are my friends 🌿",
      "Merge conflicts? Bring it 😈",
    ],
  },
  {
    name: "VS Code",
    iconClassName: "devicon-vscode-plain",
    recentlyUsed: true,
    toSay: [
      "Extensions galore! 🧩",
      "Command palette is life 🎹",
      "Dark mode forever 🌚",
    ],
  },
  {
    name: "Postman",
    iconClassName: "devicon-postman-plain",
    recentlyUsed: true,
    toSay: [
      "API testing made fun 🎯",
      "Send requests like a pro 🚀",
      "Collections are my treasures 🗃️",
    ],
  },
  {
    name: "Figma",
    iconClassName: "devicon-figma-plain",
    recentlyUsed: false,
    toSay: [
      "Design vibes only 🎨",
      "Frames and components, yay! 🖼️",
      "Prototype all the things! ✨",
    ],
  },
];

export const ListOfArsenal: ArsenalMetaData[] = [
  ...programmingLanguages,
  ...frontendTechnologies,
  ...backendTechnologies,
  ...cloudAndInfraTechnologies,
  ...devOpsTechnologies,
  ...otherTechnologies,
];
