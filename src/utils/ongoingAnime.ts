import axios from "axios";
import { load } from "cheerio";
import pagination from "@/lib/pagination";
import scrapeOngoingAnime from "@/lib/scapeOngoingAnime";
import changeHideImageFlag from "./changeHideImageFlag";

const { BASEURL } = process.env;
const ongoingAnime = async (page: number | string = 1) => {
  const { data } = await axios.get(`${BASEURL}/ongoing-anime/page/${page}`);
  const $ = load(data);
  const ongoingAnimeEls = $(".venutama .rseries .rapi .venz ul li").toString();
  const ongoingAnimeData = scrapeOngoingAnime(ongoingAnimeEls);
  const paginationData = pagination($(".pagination").toString());
  const isHideImage = changeHideImageFlag();

  return {
    paginationData,
    ongoingAnimeData,
    isHideImage,
  };
};

export default ongoingAnime;
