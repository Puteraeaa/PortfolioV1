import { HoverEffect } from './card-hover-effect-serti';

export default function SertifikatSection() {
  return (
    <div
      className='mt-40 md:mt-40 mb-10 max-w-screen-xl px-6 md:px-10 mx-auto'
      id='projects'
    >
      <h1
        className='text-3xl md:text-4xl text-center font-semibold tracking-wide underline underline-offset-8 decoration-cyan-400'
        data-aos='fade'
      >
        Training Certification and Achievement
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
    title: 'Google Certificate UI/UX (Beginer)',
    description: 'Sertifikat Kelulusan Google',
    link: '',
    url: '/images/sertifikat/Coursera-UI.jpg',
  },
  {
    title: 'Global Game Jam 2024 x Create In Bogor',
    description: 'Serifikat Peserta Global Game Jam 2024',
    link: '',
    url: '/images/sertifikat/cib.jpg',
  },
  {
    title: 'OSSN 2024',
    description: 'Pemenang Mendali Emas OSSN 2024',
    link: 'https://drive.google.com/file/d/1VVl-G8cQWCPBAPKNCpFhzLauMpw4FyaM/view?usp=sharing',
    url: '/images/sertifikat/ossn-2024.jpg',
  },
  {
    title: 'Memulai Dasar Pemrograman untuk Menjadi Pengembang Software',
    description: 'Sertifikat Kelulusan Dicoding',
    link: 'https://www.dicoding.com/certificates/1RXYENK99ZVM',
    url: '/images/sertifikat/dicoding-mdp.png',
  },
  {
    title: 'Coding Camp 2025',
    description: 'Coding Camp 2025 yang didukung oleh DBS Foundation di jalur pembelajaran Pengembang Front-End dan Back-End',
    link: '',
    url: '/images/sertifikat/dbs.jpg',
  },
  {
    title: 'Belajar Dasar Pemrograman Web',
    description: 'Sertifikat Kelulusan Dicoding',
    link: 'https://www.dicoding.com/certificates/1RXYENK99ZVM',
    url: '/images/sertifikat/dicoding-bdp.png',
  },
];
