import http from "@/common/http-common";

export const surahDataService = {
    surah(id: any, part: any) {
        return http.get(`/surah/${id}?part=${part}`)
    }
}