<script setup lang="ts">
import {onMounted, type Ref, ref} from "vue";
import ListSurah from "@/views/dump/ListSurah.vue";
import {useSurahStore} from "@/stores/surah";

const surahStore = useSurahStore()

const lastPartState = ref(0)
const sizePart = ref(0)
const surah: Ref<any> = ref({})
const surahLoading = ref(false)

const dialogSurahShow = ref(false)
const evenTexture2 = ref("bg-gray-100 bg-[url('/french-stucco.png')]")

const getSurah = async (id: any, lastPart: any) => {
    try {
        surahLoading.value = true
        let resp: any = await surahStore.getSurah(id, lastPart)
        if (lastPart == 0 ){
            surah.value = resp

            sizePart.value = Math.ceil(resp.numberOfVerses/10)
        } else {
            surah.value.verses = surah.value.verses.concat(...resp.verses)
        }

        localStorage.setItem("last-surah", id)
    } catch (e: any) {

    } finally {
        surahLoading.value = false
    }
}

const onScroll = (e: any) => {
    const { scrollTop, offsetHeight, scrollHeight } = e.target
    if ((scrollTop + offsetHeight) >= scrollHeight) {
        if (!surahLoading.value && (sizePart.value-1) > lastPartState.value) {
            lastPartState.value += 1
            getSurah(surah.value.number, lastPartState.value)
        }
    }
}

onMounted(() => {
    let lastSurah: any = localStorage.getItem("last-surah")
    if (lastSurah != '' && lastSurah != null) {
        getSurah(parseInt(lastSurah), 0)
    } else {
        getSurah(1, 0)
    }
})
</script>
<template>
    <div class="font-default h-screen overflow-y-scroll no-scrollbar" @scroll="onScroll">
        <div class="relative border-b border-gray-300 p-0.5">
            <div class="top-0 left-0 w-full border-b border-gray-400">
                <div class="grid grid-cols-4">
                    <div class="py-2 text-center leading-none">
                        <p class="text-xs text-gray-700 font-arab">
                            <span v-if="typeof surah.revelation !== 'undefined'">{{surah.revelation.arab}}</span>
                            <span v-else></span>
                        </p>
                        <p class="text-2xs">
                            <span v-if="typeof surah.revelation !== 'undefined'">{{surah.revelation.id}}</span>
                            <span v-else></span>
                        </p>
                    </div>
                    <div class="py-2 text-center col-span-2 p-1 relative">
                        <div>
                            <img src="/f0.png" alt="">
                        </div>
                        <div class="absolute top-0 left-0 w-full h-full">
                            <div class="flex justify-center items-center w-full h-full">
                                <div>
                                    <p class="text-xs text-gray-700 font-arab">
                                        <span v-if="typeof surah.name !== 'undefined'">{{surah.name.short}}</span>
                                    </p>
                                    <p class="text-2xs">
                                        <span v-if="typeof surah.name !== 'undefined'">{{surah.name.transliteration.id}}</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="py-2 text-center text-gray-700">
                        <p class="text-xs font-semibold">
                            <span v-if="typeof surah.numberOfVerses !== 'undefined'">{{surah.numberOfVerses}}</span>
                        </p>
                        <p class="text-2xs">Ayat</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="" >
            <div>
                <div v-for="(i0, index) in surah.verses" class="px-2 py-2 bg-opacity-20" :class="index%2 == 0 ? evenTexture2 : ''" >
                    <div class="flex">
                        <div class="mr-2">
                            <div class="h-5 w-5 rounded-full border-gray-300 flex justify-center items-center relative bg-yellow-100" :class="index%2 == 0 ? 'bg-white' : 'bg-gray-100'">
                                <img src="/f2.png" alt="">
                                <div class="absolute left-0 w-full h-full top-0">
                                    <div class="h-full flex justify-center items-center">
                                        <p class="text-2xs text-gray-700 absolute">{{i0.number.inSurah}}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1">
                            <div class="grid grid-cols-1 gap-2">
                                <p class="text-right font-arab">{{i0.text.arab}}</p>
                                <p class="text-xs leading-5">{{i0.translation.id}}</p>
                                <p class="text-xs leading-5 text-gray-700">{{i0.tafsir.id.short}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <template v-if="surahLoading">
                <div class="px-2 py-2" v-for="i0 in 12">
                    <div class="flex">
                        <div class="mr-2">
                            <div class="h-5 w-5 rounded-full border-gray-300 flex justify-center items-center relative bg-yellow-100">
                                <div class="absolute left-0 w-full h-full top-0">
                                    <div class="h-full flex justify-center items-center">
                                        <p class="text-2xs text-gray-700 absolute h-4 w-full bg-amber-100 rounded-full">

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="flex-1">
                            <div class="grid grid-cols-1 gap-2">
                                <div class="flex justify-end">
                                    <p class="h-3 w-48 rounded-full animate-pulse bg-gray-200"></p>
                                </div>
                                <p class="h-2 w-full rounded-full animate-pulse bg-gray-200"></p>
                                <p class="h-2 w-full rounded-full animate-pulse bg-gray-200"></p>
                                <p class="h-2 w-full rounded-full animate-pulse bg-gray-200"></p>
                                <p class="h-2 w-full rounded-full animate-pulse bg-gray-200"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <div class="h-24 py-2 px-2 border-t border-gray-200">
            <p class="text-right font-arab">
            صَدَقَ اللّٰهُ الْعَظِيْمُ
            </p>
            <p class="text-xs text-right font-poppins">Maha Benar Allah Yang Maha Agung</p>
        </div>
        <div class="fixed bottom-0 left-0 w-full">
            <div class="flex p-4 max-w-screen-md mx-auto">
                <div class="mr-2">
                    <button @click="dialogSurahShow = true" class="h-12 w-12 rounded-full border-gray-300 flex justify-center items-center relative bg-yellow-100">
                        <img src="/f2.png" alt="">
                        <div class="absolute left-0 w-full h-full top-0">
                            <div class="h-full flex justify-center items-center">
                                <p class="text-2xs text-gray-900 absolute font-bold">Lihat <br> surat</p>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
    <list-surah v-if="dialogSurahShow" @close="dialogSurahShow = false" @change="getSurah"/>
</template>