import axios from "axios";
import scrapeSearchResult from "@/lib/scrapeSearchResult";
import { searchResultAnime } from "@/types/types";

const { BASEURL } = process.env;
const search = async (
  keyword: string
): Promise<{ searchResult: searchResultAnime[]; isHideImage: boolean }> => {
  const response = await axios.get(`${BASEURL}/?s=${keyword}&post_type=anime`);
  const html = response.data;
  const searchResult = scrapeSearchResult(html);
  const isHideImage = true;
  return { searchResult, isHideImage };
};

export default search;
