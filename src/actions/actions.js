import { FILTERED_ARTICLES } from "./constants";

export const setFilteredArticles = ( articles ) => {
  return {
    type: FILTERED_ARTICLES,
    payload: articles
  }
}