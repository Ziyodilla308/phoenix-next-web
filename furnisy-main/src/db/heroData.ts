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
    title: "SL-8904 — ",
    description: "Автоматизированная сверхскоростная швейная машина-оверлок.",
    thumbnail: "/images/home-1/hero/swn.mp4",
    image: "/images/banner/2.png",
  },
  {
    id: 2,
    title: "SL-8302 — ",
    description:
      "высокоскоростная автоматизированная прямострочная швейная машина.",
    thumbnail: "/images/home-1/hero/swn-2.mp4",
    image: "/images/banner/5.png",
  },
  {
    id: 3,
    title: "SL-008-12064P ",
    description:
      "Промышленная 12-х игольная многофункциональная швейная машина.",
    thumbnail: "/images/home-1/hero/swn-3.mp4",
    image: "/images/banner/3.png",
  },
];
