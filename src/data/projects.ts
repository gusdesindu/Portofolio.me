export type Project = {
  title: string;
  description: {
    id: string;
    en: string;
  };
  technologies: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Berita App',
    description: {
      id: 'Aplikasi berita modern dengan layout responsif, kategori berita, dan pengalaman membaca yang nyaman.',
      en: 'Modern news application with responsive layout, news categories, and a comfortable reading experience.',
    },
    technologies: ['Next.js', 'Tailwind CSS', 'API'],
    image: '/images/berita.png',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Figma Design Showcase',
    description: {
      id: 'Tampilan desain landing page dan antarmuka aplikasi yang dibuat dalam konsep UI/UX yang rapi dan terstruktur.',
      en: 'Landing page and application interface design concept created with a clean and structured UI/UX approach.',
    },
    technologies: ['Figma', 'UI/UX', 'Design System'],
    image: '/images/figmaa.png',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'JobFinder',
    description: {
      id: 'Platform pencarian pekerjaan yang menampilkan lowongan, detail pekerjaan, dan pengalaman pengguna yang mudah dipahami.',
      en: 'Job search platform that displays vacancies, job details, and an easy-to-understand user experience.',
    },
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    image: '/images/JobFinder.png',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Catalog App',
    description: {
      id: 'Aplikasi katalog produk dengan tampilan produk yang terorganisir dan navigasi yang sederhana untuk pengguna.',
      en: 'Product catalog application with organized product display and simple navigation for users.',
    },
    technologies: ['HTML', 'CSS', 'JavaScript'],
    image: '/images/katalog.png',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Portfolio Website',
    description: {
      id: 'Website portofolio pribadi dengan desain modern, struktur yang bersih, dan tampilan profesional.',
      en: 'Personal portfolio website with a modern design, clean structure, and professional presentation.',
    },
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/images/portfolio.png',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Praktik Project',
    description: {
      id: 'Proyek latihan yang fokus pada implementasi UI, interaksi sederhana, dan pembelajaran pengembangan frontend.',
      en: 'Practice project focused on UI implementation, simple interactions, and frontend development learning.',
    },
    technologies: ['HTML', 'CSS', 'React'],
    image: '/images/praktik.png',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'UMKM Showcase',
    description: {
      id: 'Website brand UMKM dengan tampilan produk dan informasi usaha yang dibuat agar lebih menarik dan mudah dipahami.',
      en: 'UMKM brand website with product presentation and business information designed to be more appealing and easy to understand.',
    },
    technologies: ['Laravel', 'PHP', 'Bootstrap'],
    image: '/images/umkm.png',
    liveUrl: '#',
    githubUrl: '#',
  },
];
