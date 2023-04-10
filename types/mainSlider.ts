import { EntryType } from "~/types/entry";
import { ImageType } from "~/types/image";

export type MainSliderType = {
    id: string,
    title: string,
    desc: string,
    entryId: string,
    fileId: string,
    image: ImageType,
    entry: EntryType,
    url: string
    isDeleted: boolean
    createdAt: string
}