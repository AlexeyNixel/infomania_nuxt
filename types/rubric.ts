import { EntryType } from "~/types/mainSlider";

export type RubricType = {
    id: string;
    title: string;
    slug: string;
    entries: EntryType;
};