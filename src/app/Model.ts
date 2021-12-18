export interface Author {
  bio: string;
  dateAdded: string;
  dateModified: string;
  description: string;
  link: string;
  name: string;
  quoteCount: number;
  slug: string;
  _id: string;
  favorite?: boolean; 
}

export interface AuthorApiResponse {
  count: number;
  lastItemIndex: number;
  page: number;
  results: Author[];
  totalCount: number;
  totalPages: number;
}
