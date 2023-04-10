import { defineStore } from 'pinia'
import { MainSliderType } from "~/types";
import { findSlides } from "~/api/slides";

export const useSliderStore = defineStore('slider', () => {
    const slides = ref<MainSliderType[]>([]);
    const slider = ref<MainSliderType>();

    const getMainSlider = async () => {
        const { data } = await findSlides({
            pageSize: 10,
            include:"entry,image",
            orderBy:'-createdAt'
        });
        slides.value = data ? data?.value?.data : [];
    }

    return {
        slides,
        slider,
        getMainSlider,
    }
})