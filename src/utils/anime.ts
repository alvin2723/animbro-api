import axios from "axios";
import scrapeSingleAnime from "@/lib/scrapeSingleAnime";
import type { anime as animeType } from "@/types/types";
import changeHideImageFlag from "./changeHideImageFlag";

const { BASEURL } = process.env;
const anime = async (
  slug: string
): Promise<{ result: animeType | undefined; isHideImage: boolean }> => {
  const { data } = await axios.get(`${BASEURL}/anime/${slug}`);
  const result = scrapeSingleAnime(data);
  const isHideImage = changeHideImageFlag();

  return { result, isHideImage };
};

export default anime;
