import type { AxiosPromise } from "axios";
import { instance } from "./instance";
import type { Book } from "./models";

const BASE_URL = "volumes";

interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
}

interface BookVolumeApi {
  title: string;
  subtitle?: string;
  authors: string[];
  publisher?: string;
  publishedDate?: string;
  description: string;
  pageCount?: number;
  printedPageCount?: number;
  printType?: string;
  categories: string[];
  averageRating?: number;
  ratingsCount?: number;
  maturityRating?: string;
  allowAnonLogging?: boolean;
  contentVersion?: string;
  imageLinks: ImageLinks;
  language?: string;
  previewLink?: string;
  infoLink?: string;
  canonicalVolumeLink?: string;
}

export interface BookApi {
  kind?: string;
  id: string;
  etag?: string;
  selfLink?: string;
  volumeInfo: BookVolumeApi;
}

export interface GoogleBooksApiAnswer {
  totalItems: number;
  items: BookApi[];
}

export const normalizeBooks = (from: BookApi): Book => {
  let image = "https://nidcap.org/wp-content/uploads/2021/03/book.png";
  if (from.volumeInfo.imageLinks) {
    image = from.volumeInfo.imageLinks.extraLarge;
    if (typeof image === "undefined") {
      image = from.volumeInfo.imageLinks.large;
    }
    if (typeof image === "undefined") {
      image = from.volumeInfo.imageLinks.medium;
    }
    if (typeof image === "undefined") {
      image = from.volumeInfo.imageLinks.small;
    }
    if (typeof image === "undefined") {
      image = from.volumeInfo.imageLinks.smallThumbnail;
    }
    if (typeof image === "undefined") {
      image = from.volumeInfo.imageLinks.thumbnail;
    }
  }
  return {
    id: from.id,
    title: from.volumeInfo.title,
    authors: from.volumeInfo.authors,
    categories: from.volumeInfo.categories,
    image,
    description: from.volumeInfo.description
  }
}

interface GetBooksListParams {
  q: string;
  subject?: string;
  orderBy?: string;
  maxResults?: string;
  startIndex?: string;
}
export const getBookList = (
  params?: GetBooksListParams
): AxiosPromise<GoogleBooksApiAnswer> => {
  let url = BASE_URL;
  if (params?.subject) {
    url+=`?q=${params?.q}+subject:${params?.subject}&orderBy=${params?.orderBy}&startIndex=${params?.startIndex}&maxResults=${params?.maxResults}&key=${__API_KEY}`;
  } else {
   url+=`?q=${params?.q}&orderBy=${params?.orderBy}&startIndex=${params?.startIndex}&maxResults=${params?.maxResults}&key=${__API_KEY}`;
  }
  return instance.get(url)
};

export type GetBookByIdParams = {
  bookId: string;
};

export const getBookById = ({
  bookId,
  ...params
  }: GetBookByIdParams): AxiosPromise<Book> => {
  return instance.get(`${BASE_URL}/${bookId}`, { params });
};
