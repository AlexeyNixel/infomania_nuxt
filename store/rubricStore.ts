import { defineStore } from 'pinia'

import moment from "moment/moment";
import {EntryType} from "~/types/entry";
import {MetaType} from "~/types/meta";
import {findRubric} from "~/api/rubric";

type State = {
    rubric: EntryType
    rubricEntries: {
        [key: string]: EntryType[]
    }
    meta: MetaType
    rubrics: { data: object }
};

const fetchParams: any = {
    pageSize: 6,
    include: 'rubric,preview',
    orderBy: '-publishedAt',
    fromDate: `2022-01-01T10:00:00.000Z`,
    toDate: `${moment(new Date).format('YYYY-MM-DD')}T${moment(new Date).format("HH:mm:ss")}.000Z`,
};

// {
//     state: () => <State>{
//         rubricEntries: {}
//     },
//         actions: {
//     async fetchRubric(id: string) {
//         const { response }  = await getOne('rubric', id)
//         this.rubric = response
//         return response
//     },
//
//     async fetchRubricEntries(slug: string): Promise<EntryType[]> {
//         const { data } = await getEntries('rubric', slug, fetchParams);
//         this.rubricEntries[slug] = data;
//         return data;
//     },
//
//         async fetchRubricEntriesList(slug: string, page?: number) {
//         const { data } = await getEntries('rubric', slug, {
//             include: 'preview',
//             orderBy: '-publishedAt',
//             page,
//         });
//
//         this.rubric = data;
//         return data;
//     },
//
//     async fetchNewsMenu(slug: string): Promise<EntryType[]> {
//         const { data } = await getEntries('rubric', slug, {
//             pageSize: 6,
//             include: 'preview',
//             orderBy: '-publishedAt',
//         });
//
//         this.rubric = data;
//         return data;
//     },
//
//         async fetchRubricMeta(slug: string, params?: ParamsType): Promise<MetaType> {
//         const { meta } = await getEntries('rubric', slug, params);
//
//         this.rubric = meta;
//         return meta;
//     },
// },
//
//     getters: {
//         getEntriesByRubricSlug: (state) => (rubricSlug: string) => {
//             return state.rubricEntries[rubricSlug] || [];
//         },
//
//             getRubricEntries: (state) => (rubrics: string[]) => {
//             const entries: Array<EntryType[]> = [];
//
//             rubrics.forEach((rubric) => {
//                 if (state.rubricEntries[rubric]) entries.push(state.rubricEntries[rubric])
//             });
//
//             return entries;
//         },
//     }
// }

export const useRubricStore = defineStore('rubric', () => {
    const rubric = ref<EntryType>();
    const rubricEntries = ref<{ [key: string]: EntryType[] }>({});

    const fetchRubric = async (id: string) => {
        const { data, meta } = await findRubric(id);

        rubric.value = data;
    }

    //     async fetchRubricEntries(slug: string): Promise<EntryType[]> {
    //         const { data } = await getEntries('rubric', slug, fetchParams);
    //         this.rubricEntries[slug] = data;
    //         return data;
    //     },

    // const fetchRubricEntries = async () => {
    //
    // }

    return {
        rubricEntries,
        fetchRubric,
    }
})
