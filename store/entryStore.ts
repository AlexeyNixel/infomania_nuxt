import { defineStore } from 'pinia'
import { EntryType } from "~/types/entry";
import { findEntries, findEntriesByRubric, findEntry } from "~/api/entry";
import { ParamsType } from "~/types/params";

export const useEntryStore = defineStore('entry', () => {
  const entries = ref<EntryType[]>([]);
  const entry = ref<EntryType>();
  const rubricEntries = ref<{[key:string]: EntryType[]}>({})


  const getEntries = async () => {
    const { data } = await findEntries()
    entries.value = data
  }

  const getEntry = async (slug: string) => {
    const data = await findEntry(slug)
    console.log(data)
    entry.value = data
  }

  const getEntriesByRubric = async (rubric:  string, params?: ParamsType) => {
    const { data } = await findEntriesByRubric(rubric, params);
    rubricEntries.value[rubric] = data
  }

  return {
    getEntries,
    getEntry,
    getEntriesByRubric,
    entry,
    entries,
    rubricEntries,
  }
})