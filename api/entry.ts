import { getUrl, Routes } from "~/api/routes";
import { ParamsType } from "~/types/params";

const { ENTRY_ROUTE } = Routes;
const { RUBRIC_ROUTE } = Routes;

export const findEntries = async (slug?:string, params?: ParamsType): Promise<any> => {
  const { data } = await useFetch(getUrl(ENTRY_ROUTE), { params: params  });
  return data.value;
}

export const findEntry = async (slug:string, params?: ParamsType): Promise<any> => {
  console.log(123)
  const  data  = await useFetch(`${getUrl(RUBRIC_ROUTE)}${slug}`, { params: params  });
  return data;
}

export const findEntriesByRubric = async (slug?:string, params?: ParamsType): Promise<any> => {
  const { data } = await useFetch(`${getUrl(RUBRIC_ROUTE)}${slug}/entries`, { params: params  });
  return data.value;
}

