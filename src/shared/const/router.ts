export enum AppRoutes {
  MAIN = "main",
  BOOK_DETAILS = "book_details"
}

export const getRouteMain = () => "/"
export const getRouteBookDetails = (id: string) => `/books/${id}`