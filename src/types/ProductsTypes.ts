export interface ProductTypes {
  id: string;
  title: string;
  subTitle: string;
  img: string;
  price: number;
  specialPrice?: string;
  discount?: number;
  related?: boolean;
  isLiked?: boolean;
  isNew?: boolean;
  noLabel?: boolean;
  salePrice?: number;
  costPrice?: number;
  discountPercent?: number;
  createdAt?: Date;
  isRelated?: boolean;
  productImages?: string[];
  reviews?: string[];
  category?: string[];
  size?: string[];
  color?: string[];
  description?: string;
}

export interface ProductCardProps {
  item: ProductTypes;
}
