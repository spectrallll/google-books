import { AppRoutes, getRouteBookDetails, getRouteMain } from "@/shared/const/router";
import { AppRouteProps } from "@/shared/types/router";
import { BookSearchPageAsync } from "@/pages/book-search";
import { BookInfoPageAsync } from "@/pages/book-info";
export const routeConfig: Record<AppRoutes, AppRouteProps> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <BookSearchPageAsync />
  },
  [AppRoutes.BOOK_DETAILS]: {
    path: getRouteBookDetails(":id"),
    element: <BookInfoPageAsync />
  }
}
