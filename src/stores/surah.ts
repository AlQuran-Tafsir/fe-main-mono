import {defineStore} from "pinia";
import {surahDataService} from "@/service/surah-data-service";

export const useSurahStore = defineStore('surah', () => {
    function getSurah(id: any, part: any) {
        return new Promise(async (resolve, reject) => {
            try {
                let localData = localStorage.getItem("surah::"+id+":"+part)
                if (localData !== '' && localData !== null) {
                    resolve(JSON.parse(localData))
                } else {
                    let response = await surahDataService.surah(id, part)

                    localStorage.setItem("surah::"+id+":"+part, JSON.stringify(response.data))
                    resolve(response.data)
                }
            } catch (e: any) {
                console.log(e.message)
                reject(e)
            }
        })
    }
    return {
        getSurah
    }
})