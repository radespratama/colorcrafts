export interface Colors {
  id: number;
  title: string;
  new: boolean;
  list: [
    {
      id: number;
      colorName: string;
      hex: string;
    }
  ];
}

export interface Docs {
  slug: string;
  content: string;
}
