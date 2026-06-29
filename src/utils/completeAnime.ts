import axios from "axios";
import { load } from "cheerio";
import pagination from "@/lib/pagination";
import scrapeCompleteAnime from "@/lib/scrapeCompleteAnime";
import changeHideImageFlag from "./changeHideImageFlag";

const { BASEURL } = process.env;
const completeAnime = async (page: number | string = 1) => {
  const { data } = await axios.get(`${BASEURL}/complete-anime/page/${page}`);
  const $ = load(data);
  const completeAnimeEls = $(".venutama .rseries .rapi .venz ul li").toString();
  const completeAnimeData = scrapeCompleteAnime(completeAnimeEls);
  const paginationData = pagination($(".pagination").toString());
  const isHideImage = changeHideImageFlag();

  return {
    paginationData,
    completeAnimeData,
    isHideImage,
  };
};

export default completeAnime;
