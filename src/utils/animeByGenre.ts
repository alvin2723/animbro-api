import axios from "axios";
import scrapeAnimeByGenre from "@/lib/scrapeAnimeByGenre";
import changeHideImageFlag from "./changeHideImageFlag";

const { BASEURL } = process.env;
const animeByGenre = async (genre: string, page: number | string = 1) => {
  const response = await axios.get(`${BASEURL}/genres/${genre}/page/${page}`);
  const result = scrapeAnimeByGenre(response.data);
  const isHideImage = changeHideImageFlag();

  return { result, isHideImage };
};

export default animeByGenre;
