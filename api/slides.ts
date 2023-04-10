import { getUrl, Routes } from "./routes";
import { fetchData } from "~/helpers/fetch";
import { ParamsType } from "~/types/params";

const { MAIN_SLIDER_ROUTE } = Routes;

export const findSlides = (params?: ParamsType): Promise<any> =>
  fetchData(getUrl(MAIN_SLIDER_ROUTE), params)
    .then(data => data)
    .catch(err => err)


