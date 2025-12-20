import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Johnson",
  lastName: "Thomas",
  name: `Johnson Thomas`,
  role: "DevOps Engineer",
  avatar: "/images/avatar.jpg",
  email: "johnsonthomas.contact@gmail.com",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Malayalam", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Weekly insights on DevOps, cloud infrastructure, and automation</>,
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "WhatsApp",
    icon: "whatsapp",
    link: "https://web.whatsapp.com/send?phone=919074530297",
    essential: true,
  },
  {
    name: "Phone",
    icon: "phone",
    link: "tel:9074530297",
    essential: true,
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Xopscloud",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/johnson-thomas-062859193",
    essential: true,
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://instagram.com/Xopscloud",
    essential: true,
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/Xopscloud",
    essential: true,
  },
  {
    name: "Medium",
    icon: "medium",
    link: "https://xopscloud.medium.com/",
    essential: true,
  },
  {
    name: "Google Blog",
    icon: "document",
    link: "https://xopscloud.blogspot.com/",
    essential: false,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Automate. Scale. Deliver.</>,
  featured: {
    display: false,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Once UI</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work
        </Text>
      </Row>
    ),
    href: "/work/kubernetes-ci-cd-pipeline",
  },
  subline: (
    <>
      I design and manage cloud infrastructure that automates deployments, scales seamlessly
      with demand, and delivers reliable, secure applications. By combining CI/CD pipelines,
      cloud-native services, and Infrastructure as Code, I help teams ship faster while
      maintaining stability and performance.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Kerala, India`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I am a DevOps Engineer with hands-on experience in designing, automating, and managing
        scalable cloud infrastructure. I specialize in building and maintaining CI/CD pipelines,
        Linux system administration, containerization, and cloud services, with a strong focus on
        reliability, security, and performance. I am passionate about automation, system
        optimization, and delivering stable, production-ready solutions.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Nesa Software and Sinrorobotics",
        timeframe: "May 2025 - Present",
        role: "DevOps Engineer",
        achievements: [
          <>
            Designed and deployed Kochi Metro Parking Application in GCP with fully containerized 
            (Docker) environment, implementing load balancer, NAT, internet gateway, Cloud Armor, 
            and GitLab CI/CD pipelines.
          </>,
          <>
            Performed AWS and GCP cost optimization, ensuring resource efficiency while maintaining 
            high availability and security.
          </>,
          <>
            Implemented cloud security best practices, disaster recovery strategies, and automated 
            daily database/application backups across production environments.
          </>,
          <>
            Designed and documented cloud architecture diagrams for scalable and resilient solutions.
          </>,
          <>
            Administered Microsoft 365 environment including FMS setup, mail migration from GoDaddy 
            to MS365, and ongoing IT administration.
          </>,
          <>
            Hosted and deployed multiple full-stack applications: React.js – Python Django, 
            Vite – Python Django, Next.js – Node.js, Next.js- Python Django, Svelte – Python Django, 
            Angular – Python Flask.
          </>,
        ],
        images: [],
      },
      {
        company: "Keyshell IT Solutions",
        timeframe: "March 2023 - March 2025",
        role: "DevOps Engineer",
        achievements: [
          <>
            Automated CI/CD pipelines using Jenkins, GitHub Actions, and Azure DevOps for 
            scalable containerized applications with Docker, Kubernetes (EKS/kubeadm), and Docker Compose.
          </>,
          <>
            Implemented monitoring with Prometheus & Grafana and centralized logging with ELK Stack 
            for comprehensive observability.
          </>,
          <>
            Built Infrastructure as Code using Terraform, Ansible, and CloudFormation while 
            managing DNS (Route53), DHCP, firewalls, and OpenVPN.
          </>,
          <>
            Integrated SonarQube & Trivy for code quality and security scanning, delivered 
            training sessions on Linux administration and DevOps best practices.
          </>,
          <>
            Performed containerization and server management (Ubuntu, CentOS, RHEL) and 
            contributed to incident response and disaster recovery.
          </>,
          <>
            Project Highlights: E-commerce App (React+MySQL on AWS EC2), Payment System 
            (Angular + Python microservices), Banking App (.NET with Azure DevOps), Laravel App 
            (MongoDB and Neo4j), Construction Management App (React + Java), Microservices 
            Management with Kubernetes clusters and Helm.
          </>,
        ],
        images: [],
      },
      {
        company: "Neocaps Solutions",
        timeframe: "2022 - 2023",
        role: "System Administrator Support",
        achievements: [
          <>
            Managed and maintained company servers, networks and IT infrastructure to ensure 
            optimal performance and security with regular updates and security patches.
          </>,
          <>
            Administered user accounts, permissions, and access controls following best security 
            practices including firewall rules, VPN configurations, and network protocols.
          </>,
          <>
            Monitored system health, performed system locking, system updation and package 
            management to mitigate vulnerabilities.
          </>,
          <>
            Collaborated with development teams to optimize application performance and scalability 
            while supporting incident response and disaster recovery.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Keyshell Tech",
        description: <>Linux administration & DevOps Engineering (March 2023 - March 2025). Comprehensive training in Linux system administration, containerization, CI/CD pipelines, cloud infrastructure, and DevOps best practices.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Cloud Platforms",
        description: (
          <>Expert in AWS, Azure, and GCP with focus on scalable, cost-effective architectures.</>
        ),
        tags: [
          {
            name: "AWS",
            icon: "aws",
          },
          {
            name: "Azure",
            icon: "azure",
          },
          {
            name: "GCP",
            icon: "gcp",
          },
        ],
        images: [],
      },
      {
        title: "Containerization & Orchestration",
        description: (
          <>Kubernetes expert with Docker containerization and Helm package management.</>
        ),
        tags: [
          {
            name: "Docker",
            icon: "docker",
          },
          {
            name: "Kubernetes",
            icon: "kubernetes",
          },
          {
            name: "Helm",
            icon: "helm",
          },
          {
            name: "Docker Compose",
            icon: "docker",
          },
        ],
        images: [],
      },
      {
        title: "Infrastructure as Code",
        description: (
          <>Building infrastructure with Terraform, Ansible, and Packer for automation.</>
        ),
        tags: [
          {
            name: "Terraform",
            icon: "terraform",
          },
          {
            name: "Ansible",
            icon: "ansible",
          },
          {
            name: "Packer",
            icon: "packer",
          },
        ],
        images: [],
      },
      {
        title: "CI/CD & Version Control",
        description: (
          <>Automated pipelines with Jenkins, GitHub Actions, GitLab CI, and Azure DevOps.</>
        ),
        tags: [
          {
            name: "Jenkins",
            icon: "jenkins",
          },
          {
            name: "GitHub Actions",
            icon: "github",
          },
          {
            name: "GitLab CI/CD",
            icon: "gitlab",
          },
          {
            name: "Azure DevOps",
            icon: "azure",
          },
          {
            name: "Git",
            icon: "git",
          },
          {
            name: "Bitbucket",
            icon: "bitbucket",
          },
        ],
        images: [],
      },
      {
        title: "Monitoring & Observability",
        description: (
          <>Comprehensive monitoring with Prometheus, Grafana, and ELK stack for full observability.</>
        ),
        tags: [
          {
            name: "Prometheus",
            icon: "prometheus",
          },
          {
            name: "Grafana",
            icon: "grafana",
          },
          {
            name: "ELK Stack",
            icon: "elasticsearch",
          },
        ],
        images: [],
      },
      {
        title: "Databases & Caching",
        description: (
          <>Experience with SQL and NoSQL databases including MySQL, MongoDB, and Redis.</>
        ),
        tags: [
          {
            name: "MySQL",
            icon: "mysql",
          },
          {
            name: "MongoDB",
            icon: "mongodb",
          },
          {
            name: "Redis",
            icon: "redis",
          },
        ],
        images: [],
      },
      {
        title: "Scripting & Programming",
        description: (
          <>Proficient in Python and Bash scripting for automation and tooling.</>
        ),
        tags: [
          {
            name: "Python",
            icon: "python",
          },
          {
            name: "Bash",
            icon: "bash",
          },
        ],
        images: [],
      },
      {
        title: "Tools & Productivity",
        description: (
          <>Working with enterprise tools including Jira, Postman, MS365, and Ubuntu systems.</>
        ),
        tags: [
          {
            name: "Jira",
            icon: "jira",
          },
          {
            name: "Postman",
            icon: "postman",
          },
          {
            name: "MS365",
            icon: "microsoft",
          },
          {
            name: "Ubuntu",
            icon: "ubuntu",
          },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about DevOps and cloud infrastructure...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `DevOps and infrastructure projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

const documents = {
  path: "/documents",
  label: "Documents",
  title: `Documents – ${person.name}`,
  description: `Professional documents and certifications by ${person.name}`,
};

export { person, social, newsletter, home, about, blog, work, gallery, documents };
