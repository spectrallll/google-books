import { Book } from "@/shared/api";
import { EntityState } from "@reduxjs/toolkit";
import { BookCategoryField, BookSortField } from "../consts";

export interface BookSchema extends EntityState<Book> {
  isLoading?: boolean;
  error?: string | null;
  sort: BookSortField;
  categoryField: BookCategoryField;
  search: string;
  hasMore: boolean;
  maxResults: number;
  index: number;
  found?: number | null;
}
