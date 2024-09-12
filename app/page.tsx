import About from "@/components/About";
import { AlertDialogDemo } from "@/components/Alert";
import { AuroraBackgroundDemo } from "@/components/Aurora";
import { BackgroundBoxesDemo } from "@/components/BackgroundBoxes";
import { ExpandableCardDemo } from "@/components/ProjectCards";

export default function Home() {
  return (
    <main className="">
      <section className="" id="services">
        <AuroraBackgroundDemo />
      </section>
      <section className="bg-[var(--primary)] p-4" id="about">
        <h1 className="py-4 lg:text-4xl text-3xl text-center font-bold text-[var(--secondary)]">
          Projects
        </h1>
        <ExpandableCardDemo />
      </section>
      <section className="bg-[var(--primary)] py-12 px-7 " id="skills">
        <h1 className="w-full py-4 text-center lg:text-6xl text-5xl font-bold text-[var(--secondary)]">
          Skills
        </h1>
        <div className=" items-center justify-center py-4 grid lg:grid-rows-3 lg:grid-cols-5 grid-cols-3 text-xs   gap-4 ">
          {skills.map((item)=>(
            
          <AlertDialogDemo key={item.name} name={item.name} description={item.description} />
          ))}
         
        </div>
      </section>

      <section className="bg-[var(--primary)]" id="contact">
        <BackgroundBoxesDemo />
      </section>
    </main>
  );
}

const skills = [
  { 
    name: "Solidity", 
    description: "A programming language for writing smart contracts on Ethereum. It allows developers to create decentralized applications (dApps) on blockchain."
  },
  { 
    name: "Next.js", 
    description: "A React-based framework for building server-side rendered applications. It simplifies routing, API development, and static site generation."
  },
  { 
    name: "Tailwind CSS", 
    description: "A utility-first CSS framework for building modern UIs. It allows developers to apply styles directly in their HTML without writing custom CSS."
  },
  { 
    name: "Web3.js", 
    description: "A JavaScript library that interacts with Ethereum blockchain. It enables developers to interact with smart contracts and blockchain nodes."
  },
  { 
    name: "Ethers.js", 
    description: "A lightweight JavaScript library for interacting with Ethereum. It provides utilities for blockchain transactions and wallet management."
  },
  { 
    name: "Rust", 
    description: "A systems programming language focusing on speed, safety, and concurrency. It's used for performance-critical applications like blockchain and game engines."
  },
  { 
    name: "Golang", 
    description: "A statically typed language developed by Google. It's known for its simplicity and efficiency, widely used in backend development and cloud services."
  },
  { 
    name: "Ethereum", 
    description: "A decentralized platform that enables the creation of smart contracts. It is one of the largest blockchain platforms for decentralized apps (dApps)."
  },
  { 
    name: "Solana", 
    description: "A high-performance blockchain for decentralized applications. It focuses on scalability, offering fast transactions and low fees compared to Ethereum."
  },
  { 
    name: "Hardhat", 
    description: "A development environment for Ethereum. It helps developers compile, deploy, and test smart contracts efficiently."
  },
  { 
    name: "Foundry", 
    description: "A development toolkit for Ethereum smart contracts. It offers tools for testing, debugging, and deploying contracts written in Solidity."
  },
  { 
    name: "Express.js", 
    description: "A minimal Node.js web framework used for building backend services. It simplifies API development with middleware support."
  },
  { 
    name: "GraphQL", 
    description: "A query language for APIs that allows clients to request specific data. It optimizes data fetching by providing only the requested fields."
  },
  { 
    name: "PostgreSQL", 
    description: "An open-source relational database known for reliability and flexibility. It supports advanced SQL features and ACID compliance."
  },
  { 
    name: "Apollo", 
    description: "A GraphQL implementation for managing data between clients and servers. It streamlines queries and optimizes data caching in modern apps."
  },
  { 
    name: "Redis", 
    description: "An in-memory data structure store used for caching and real-time applications. It supports high-performance operations with key-value storage."
  },
  { 
    name: "AWS", 
    description: "Amazon Web Services provides scalable cloud computing services. It's used for hosting, storage, databases, and various infrastructure needs."
  },
  { 
    name: "Jira", 
    description: "A project management tool for tracking issues and tasks. It's popular in agile software development for sprint planning and bug tracking."
  },
  { 
    name: "Notion", 
    description: "A collaborative workspace tool for note-taking and project management. It helps teams organize tasks, documents, and databases."
  },
  { 
    name: "Git", 
    description: "A distributed version control system for tracking code changes. It helps developers collaborate on code, ensuring project history is maintained."
  },
  { 
    name: "CI/CD", 
    description: "Continuous Integration and Continuous Deployment tools automate code testing and deployment. It ensures frequent, stable code releases."
  },
  { 
    name: "DevOps", 
    description: "A culture and set of practices that automate and integrate software development and IT operations. It enhances efficiency, collaboration, and deployment."
  },
  { 
    name: "Cross Chain", 
    description: "Technology that allows blockchain networks to communicate and exchange data. It enables interoperability between different blockchain ecosystems."
  },
  { 
    name: "Bridge", 
    description: "A protocol enabling assets or data to transfer between different blockchains. Bridges help create interoperability between networks like Ethereum and Solana."
  },
  { 
    name: "Prisma", 
    description: "A database toolkit for Node.js and TypeScript. It simplifies data access, providing a powerful ORM for working with databases like PostgreSQL and MySQL."
  }
];
