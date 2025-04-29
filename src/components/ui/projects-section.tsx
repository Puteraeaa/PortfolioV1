import { HoverEffect } from './card-hover-effect';

export default function ProjectsSection() {
  return (
    <div
      className='mt-20 md:mt-40 max-w-screen-xl px-6 md:px-10 mx-auto'
      id='projects'
    >
      <h1
        className='text-3xl md:text-4xl text-center font-semibold tracking-wide underline underline-offset-8 decoration-cyan-400'
        data-aos='fade'
      >
        Projects
      </h1>

      <div
        className='mt-10 flex flex-col lg:flex-row gap-10 lg:gap-20'
        data-aos='fade-up'
      >
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}

export const projects = [
  {
    title: 'SIMONIK',
    description:
      'Sistem Monitoring Dan Kerja Lapangan.',
    link: 'https://e-jurnal.pplgsmkn1ciomas.my.id/',
    tech: ['ReactJs', 'TailwindCSS', 'Mysql', 'Laravel', 'API','Axios'],
    url: '/images/project/simonik.png',
  },
  {
    title: 'Rate Flix',
    description:
      'Check out the latest movies and see ratings with TMDB API.',
    link: 'https://ratee-flixx.vercel.app/',
    tech: ['ReactJs', 'TailwindCSS','API'],
    url: '/images/project/rate-flix.png',
  },
  {
    title: 'Bot Whatsapp',
    description: 'Terintegrasi dengan bot AI Google untuk kemampuan AI yang lebih baik dan Fitur download lagu dari YouTube.',
    link: 'https://github.com/Puteraeaa/BOT-WA',
    tech: ['NodeJs', 'Puppeteer', 'Axios', 'Ytdl-core'],
    url: '/images/project/bot-wa.png',
  },
  {
    title: 'Frontend Game Store App',
    description: 'Frontend for a game store app.',
    link: 'https://github.com/Puteraeaa/Game_Store',
    tech: ['Expo js', 'TailwindCSS', 'Framer Motion'],
    url: '/images/project/game-store.png',
  },
  {
    title: 'Smart-Learn',
    description: 'Sistem Pembelajaran Berbasis Web.',
    link: 'https://sites.google.com/view/puteraeaportofolio/smart-learn',
    tech: ['Vite Js', 'TailwindCSS','API','Axios','Laravel'],
    url: '/images/project/smart.png',
  },
  {
    title: 'Secure-Vault',
    description: 'SecureVault is a secure, decentralized, and permanent blockchain-based storage solution',
    link: 'https://github.com/ALZEE23/secure-vault',
    tech: ['React Js', 'TailwindCSS','API','Axios','Motoko','Internet Computer'],
    url: '/images/project/secure.png',
  },
  {
    title: 'Reservasi Salon Online with Payment Gateway',
    description: 'Reservasi Salon Online dengan Pembayaran menggunakan Midtrans.',
    link: '',
    tech: ['Laravel','TailwindCSS','Midtrans'],
    url: '/images/project/salon.png',
  },
];
