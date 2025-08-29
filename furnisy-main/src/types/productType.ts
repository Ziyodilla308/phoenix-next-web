export type TColor = {
  code: string;
};

export type ProductType = {
  id: number;
  name: string;
  description: string;
  thumbnail: string;
  attach_images: string[];
  price: number;
  currency: string;
  category: string;
  filter: string;
  discountPercentage: number;
  title: string;
  stock: number;
  colors: TColor[];
};
