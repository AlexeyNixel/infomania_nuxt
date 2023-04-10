import { RubricType } from "~/types/rubric";

export type EntryType = {
    id: string
    oldId: number
    fileId: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    title: string
    desc: string
    content: string
    slug: string
    published: string
    departmentId: string
    rubricId: string
    rubric: RubricType
    preview: {
        path: string;
    };
    isDeleted: boolean
}