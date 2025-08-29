export type HeroDataType = {
  id: number | string;
  title: string;
  description: string;
  thumbnail: string;
  image: string;
};

export const heroData: HeroDataType[] = [
  {
    id: 1,
    title: "Professional & Modern Tone",
    description: "Precision Sewing Solutions for Every Need.",
    thumbnail: "/images/home-1/hero/swn.mp4",
    image: "/images/shing_ling_new/11.png",
  },
  {
    id: 2,
    title: "Customer-Oriented Tone",
    description: "Your Partner in Sewing Excellence.",
    thumbnail: "/images/home-1/hero/swn.mp4",
    image: "/images/shing_ling_new/12.png",
  },
  {
    id: 3,
    title: "Creative & Inspiring Tone",
    description: "Sew Your Vision Into Reality.",
    thumbnail: "/images/home-1/hero/swn.mp4",
    image: "/images/shing_ling_new/13.png",
  },
];
