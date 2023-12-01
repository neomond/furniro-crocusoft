export interface BlogType {
  id: string;
  src: string;
  title: string;
  description: string;
  category: string;
  //   date: string;
  date: Date;
  user: string;
  recent?: boolean;
}
