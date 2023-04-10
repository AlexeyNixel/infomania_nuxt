import { getUrl, Routes } from "~/api/routes";

const { RUBRIC_ROUTE } = Routes;

export const findRubric = async (id?: string): Promise<any> => {
    const { data } = await useFetch(getUrl(RUBRIC_ROUTE), { params: { id } });
    return data.value;
}