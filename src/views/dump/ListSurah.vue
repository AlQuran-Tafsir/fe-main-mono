<script setup lang="ts">

import {ref} from "vue";

const emit = defineEmits(['close', 'change'])

const surah = ref([
    {
        "id": 1,
        "name": "الفاتحة",
        "transliteration": "Al-Fatihah",
        "translation": "Pembukaan",
        "type": "meccan",
        "total_verses": 7
    },
    {
        "id": 2,
        "name": "البقرة",
        "transliteration": "Al-Baqarah",
        "translation": "Sapi Betina",
        "type": "medinan",
        "total_verses": 286
    },
    {
        "id": 3,
        "name": "آل عمران",
        "transliteration": "Ali 'Imran",
        "translation": "Keluarga Imran",
        "type": "medinan",
        "total_verses": 200
    },
    {
        "id": 4,
        "name": "النساء",
        "transliteration": "An-Nisa",
        "translation": "Wanita",
        "type": "medinan",
        "total_verses": 176
    },
    {
        "id": 5,
        "name": "المائدة",
        "transliteration": "Al-Ma'idah",
        "translation": "Jamuan (Hidangan Makanan)",
        "type": "medinan",
        "total_verses": 120
    },
    {
        "id": 6,
        "name": "الأنعام",
        "transliteration": "Al-An'am",
        "translation": "Binatang Ternak",
        "type": "meccan",
        "total_verses": 165
    },
    {
        "id": 7,
        "name": "الأعراف",
        "transliteration": "Al-A'raf",
        "translation": "Tempat-tempat Tinggi",
        "type": "meccan",
        "total_verses": 206
    },
    {
        "id": 8,
        "name": "الأنفال",
        "transliteration": "Al-Anfal",
        "translation": "Rampasan Perang",
        "type": "medinan",
        "total_verses": 75
    },
    {
        "id": 9,
        "name": "التوبة",
        "transliteration": "At-Tawbah",
        "translation": "Pengampunan",
        "type": "medinan",
        "total_verses": 129
    },
    {
        "id": 10,
        "name": "يونس",
        "transliteration": "Yunus",
        "translation": "Yunus",
        "type": "meccan",
        "total_verses": 109
    },
    {
        "id": 11,
        "name": "هود",
        "transliteration": "Hud",
        "translation": "Hud",
        "type": "meccan",
        "total_verses": 123
    },
    {
        "id": 12,
        "name": "يوسف",
        "transliteration": "Yusuf",
        "translation": "Yusuf",
        "type": "meccan",
        "total_verses": 111
    },
    {
        "id": 13,
        "name": "الرعد",
        "transliteration": "Ar-Ra'd",
        "translation": "Guruh (Petir)",
        "type": "medinan",
        "total_verses": 43
    },
    {
        "id": 14,
        "name": "ابراهيم",
        "transliteration": "Ibrahim",
        "translation": "Ibrahim",
        "type": "meccan",
        "total_verses": 52
    },
    {
        "id": 15,
        "name": "الحجر",
        "transliteration": "Al-Hijr",
        "translation": "Bukit",
        "type": "meccan",
        "total_verses": 99
    },
    {
        "id": 16,
        "name": "النحل",
        "transliteration": "An-Nahl",
        "translation": "Lebah Madu",
        "type": "meccan",
        "total_verses": 128
    },
    {
        "id": 17,
        "name": "الإسراء",
        "transliteration": "Al-Isra",
        "translation": "Perjalanan Malam",
        "type": "meccan",
        "total_verses": 111
    },
    {
        "id": 18,
        "name": "الكهف",
        "transliteration": "Al-Kahf",
        "translation": "Para Penghuni Gua",
        "type": "meccan",
        "total_verses": 110
    },
    {
        "id": 19,
        "name": "مريم",
        "transliteration": "Maryam",
        "translation": "Maryam",
        "type": "meccan",
        "total_verses": 98
    },
    {
        "id": 20,
        "name": "طه",
        "transliteration": "Taha",
        "translation": "Tha-Ha",
        "type": "meccan",
        "total_verses": 135
    },
    {
        "id": 21,
        "name": "الأنبياء",
        "transliteration": "Al-Anbya",
        "translation": "Para Nabi",
        "type": "meccan",
        "total_verses": 112
    },
    {
        "id": 22,
        "name": "الحج",
        "transliteration": "Al-Hajj",
        "translation": "Haji",
        "type": "medinan",
        "total_verses": 78
    },
    {
        "id": 23,
        "name": "المؤمنون",
        "transliteration": "Al-Mu'minun",
        "translation": "Orang-orang Mukmin",
        "type": "meccan",
        "total_verses": 118
    },
    {
        "id": 24,
        "name": "النور",
        "transliteration": "An-Nur",
        "translation": "Cahaya",
        "type": "medinan",
        "total_verses": 64
    },
    {
        "id": 25,
        "name": "الفرقان",
        "transliteration": "Al-Furqan",
        "translation": "Pembeda",
        "type": "meccan",
        "total_verses": 77
    },
    {
        "id": 26,
        "name": "الشعراء",
        "transliteration": "Ash-Shu'ara",
        "translation": "Penyair",
        "type": "meccan",
        "total_verses": 227
    },
    {
        "id": 27,
        "name": "النمل",
        "transliteration": "An-Naml",
        "translation": "Semut",
        "type": "meccan",
        "total_verses": 93
    },
    {
        "id": 28,
        "name": "القصص",
        "transliteration": "Al-Qasas",
        "translation": "Kisah-kisah",
        "type": "meccan",
        "total_verses": 88
    },
    {
        "id": 29,
        "name": "العنكبوت",
        "transliteration": "Al-'Ankabut",
        "translation": "Laba-laba",
        "type": "meccan",
        "total_verses": 69
    },
    {
        "id": 30,
        "name": "الروم",
        "transliteration": "Ar-Rum",
        "translation": "Bangsa Romawi",
        "type": "meccan",
        "total_verses": 60
    },
    {
        "id": 31,
        "name": "لقمان",
        "transliteration": "Luqman",
        "translation": "Luqman",
        "type": "meccan",
        "total_verses": 34
    },
    {
        "id": 32,
        "name": "السجدة",
        "transliteration": "As-Sajdah",
        "translation": "Sujud",
        "type": "meccan",
        "total_verses": 30
    },
    {
        "id": 33,
        "name": "الأحزاب",
        "transliteration": "Al-Ahzab",
        "translation": "Golongan yang Bersekutu",
        "type": "medinan",
        "total_verses": 73
    },
    {
        "id": 34,
        "name": "سبإ",
        "transliteration": "Saba",
        "translation": "Saba\\'",
        "type": "meccan",
        "total_verses": 54
    },
    {
        "id": 35,
        "name": "فاطر",
        "transliteration": "Fatir",
        "translation": "Pencipta",
        "type": "meccan",
        "total_verses": 45
    },
    {
        "id": 36,
        "name": "يس",
        "transliteration": "Ya-Sin",
        "translation": "Yas Sin",
        "type": "meccan",
        "total_verses": 83
    },
    {
        "id": 37,
        "name": "الصافات",
        "transliteration": "As-Saffat",
        "translation": "Barisan-barisan",
        "type": "meccan",
        "total_verses": 182
    },
    {
        "id": 38,
        "name": "ص",
        "transliteration": "Sad",
        "translation": "Shad",
        "type": "meccan",
        "total_verses": 88
    },
    {
        "id": 39,
        "name": "الزمر",
        "transliteration": "Az-Zumar",
        "translation": "Para Rombongan",
        "type": "meccan",
        "total_verses": 75
    },
    {
        "id": 40,
        "name": "غافر",
        "transliteration": "Ghafir",
        "translation": "Sang Maha Pengampun",
        "type": "meccan",
        "total_verses": 85
    },
    {
        "id": 41,
        "name": "فصلت",
        "transliteration": "Fussilat",
        "translation": "Yang Dijelaskan",
        "type": "meccan",
        "total_verses": 54
    },
    {
        "id": 42,
        "name": "الشورى",
        "transliteration": "Ash-Shuraa",
        "translation": "Musyawarah",
        "type": "meccan",
        "total_verses": 53
    },
    {
        "id": 43,
        "name": "الزخرف",
        "transliteration": "Az-Zukhruf",
        "translation": "Perhiasan",
        "type": "meccan",
        "total_verses": 89
    },
    {
        "id": 44,
        "name": "الدخان",
        "transliteration": "Ad-Dukhan",
        "translation": "Kabut",
        "type": "meccan",
        "total_verses": 59
    },
    {
        "id": 45,
        "name": "الجاثية",
        "transliteration": "Al-Jathiyah",
        "translation": "Yang Bertekuk Lutut",
        "type": "meccan",
        "total_verses": 37
    },
    {
        "id": 46,
        "name": "الأحقاف",
        "transliteration": "Al-Ahqaf",
        "translation": "Bukit-bukir Pasir",
        "type": "meccan",
        "total_verses": 35
    },
    {
        "id": 47,
        "name": "محمد",
        "transliteration": "Muhammad",
        "translation": "Muhammad",
        "type": "medinan",
        "total_verses": 38
    },
    {
        "id": 48,
        "name": "الفتح",
        "transliteration": "Al-Fath",
        "translation": "Kemenangan",
        "type": "medinan",
        "total_verses": 29
    },
    {
        "id": 49,
        "name": "الحجرات",
        "transliteration": "Al-Hujurat",
        "translation": "Kamar-kamar",
        "type": "medinan",
        "total_verses": 18
    },
    {
        "id": 50,
        "name": "ق",
        "transliteration": "Qaf",
        "translation": "Qaf",
        "type": "meccan",
        "total_verses": 45
    },
    {
        "id": 51,
        "name": "الذاريات",
        "transliteration": "Adh-Dhariyat",
        "translation": "Angin yang Menerbangkan",
        "type": "meccan",
        "total_verses": 60
    },
    {
        "id": 52,
        "name": "الطور",
        "transliteration": "At-Tur",
        "translation": "Bukit",
        "type": "meccan",
        "total_verses": 49
    },
    {
        "id": 53,
        "name": "النجم",
        "transliteration": "An-Najm",
        "translation": "Bintang",
        "type": "meccan",
        "total_verses": 62
    },
    {
        "id": 54,
        "name": "القمر",
        "transliteration": "Al-Qamar",
        "translation": "Bulan",
        "type": "meccan",
        "total_verses": 55
    },
    {
        "id": 55,
        "name": "الرحمن",
        "transliteration": "Ar-Rahman",
        "translation": "Yang Maha Pemurah",
        "type": "medinan",
        "total_verses": 78
    },
    {
        "id": 56,
        "name": "الواقعة",
        "transliteration": "Al-Waqi'ah",
        "translation": "Hari Kiamat",
        "type": "meccan",
        "total_verses": 96
    },
    {
        "id": 57,
        "name": "الحديد",
        "transliteration": "Al-Hadid",
        "translation": "Besi",
        "type": "medinan",
        "total_verses": 29
    },
    {
        "id": 58,
        "name": "المجادلة",
        "transliteration": "Al-Mujadila",
        "translation": "Wanita yang Menggugat",
        "type": "medinan",
        "total_verses": 22
    },
    {
        "id": 59,
        "name": "الحشر",
        "transliteration": "Al-Hashr",
        "translation": "Pengusiran",
        "type": "medinan",
        "total_verses": 24
    },
    {
        "id": 60,
        "name": "الممتحنة",
        "transliteration": "Al-Mumtahanah",
        "translation": "Wanita yang Diuji",
        "type": "medinan",
        "total_verses": 13
    },
    {
        "id": 61,
        "name": "الصف",
        "transliteration": "As-Saf",
        "translation": "Barisan",
        "type": "medinan",
        "total_verses": 14
    },
    {
        "id": 62,
        "name": "الجمعة",
        "transliteration": "Al-Jumu'ah",
        "translation": "Hari Jum\\'at",
        "type": "medinan",
        "total_verses": 11
    },
    {
        "id": 63,
        "name": "المنافقون",
        "transliteration": "Al-Munafiqun",
        "translation": "Kaum Munafik",
        "type": "medinan",
        "total_verses": 11
    },
    {
        "id": 64,
        "name": "التغابن",
        "transliteration": "At-Taghabun",
        "translation": "Hari Dinampakkan Kesalahan",
        "type": "medinan",
        "total_verses": 18
    },
    {
        "id": 65,
        "name": "الطلاق",
        "transliteration": "At-Talaq",
        "translation": "Perceraian",
        "type": "medinan",
        "total_verses": 12
    },
    {
        "id": 66,
        "name": "التحريم",
        "transliteration": "At-Tahrim",
        "translation": "Mengharamkan",
        "type": "medinan",
        "total_verses": 12
    },
    {
        "id": 67,
        "name": "الملك",
        "transliteration": "Al-Mulk",
        "translation": "Kerajaan",
        "type": "meccan",
        "total_verses": 30
    },
    {
        "id": 68,
        "name": "القلم",
        "transliteration": "Al-Qalam",
        "translation": "Pena",
        "type": "meccan",
        "total_verses": 52
    },
    {
        "id": 69,
        "name": "الحاقة",
        "transliteration": "Al-Haqqah",
        "translation": "Kenyataan (Hari Kiamat)",
        "type": "meccan",
        "total_verses": 52
    },
    {
        "id": 70,
        "name": "المعارج",
        "transliteration": "Al-Ma'arij",
        "translation": "Tempat yang Naik",
        "type": "meccan",
        "total_verses": 44
    },
    {
        "id": 71,
        "name": "نوح",
        "transliteration": "Nuh",
        "translation": "Nuh",
        "type": "meccan",
        "total_verses": 28
    },
    {
        "id": 72,
        "name": "الجن",
        "transliteration": "Al-Jinn",
        "translation": "Jin",
        "type": "meccan",
        "total_verses": 28
    },
    {
        "id": 73,
        "name": "المزمل",
        "transliteration": "Al-Muzzammil",
        "translation": "Orang yang Berselimut",
        "type": "meccan",
        "total_verses": 20
    },
    {
        "id": 74,
        "name": "المدثر",
        "transliteration": "Al-Muddaththir",
        "translation": "Orang yang Berkemul",
        "type": "meccan",
        "total_verses": 56
    },
    {
        "id": 75,
        "name": "القيامة",
        "transliteration": "Al-Qiyamah",
        "translation": "Hari Berbangkit",
        "type": "meccan",
        "total_verses": 40
    },
    {
        "id": 76,
        "name": "الانسان",
        "transliteration": "Al-Insan",
        "translation": "Manusia",
        "type": "medinan",
        "total_verses": 31
    },
    {
        "id": 77,
        "name": "المرسلات",
        "transliteration": "Al-Mursalat",
        "translation": "Malaikat-malaikan yang Diutus",
        "type": "meccan",
        "total_verses": 50
    },
    {
        "id": 78,
        "name": "النبإ",
        "transliteration": "An-Naba",
        "translation": "Berita Besar",
        "type": "meccan",
        "total_verses": 40
    },
    {
        "id": 79,
        "name": "النازعات",
        "transliteration": "An-Nazi'at",
        "translation": "Malaikat yang Mencabut",
        "type": "meccan",
        "total_verses": 46
    },
    {
        "id": 80,
        "name": "عبس",
        "transliteration": "'Abasa",
        "translation": "Ia Bermuka Masam",
        "type": "meccan",
        "total_verses": 42
    },
    {
        "id": 81,
        "name": "التكوير",
        "transliteration": "At-Takwir",
        "translation": "Menggulung",
        "type": "meccan",
        "total_verses": 29
    },
    {
        "id": 82,
        "name": "الإنفطار",
        "transliteration": "Al-Infitar",
        "translation": "Terbelah",
        "type": "meccan",
        "total_verses": 19
    },
    {
        "id": 83,
        "name": "المطففين",
        "transliteration": "Al-Mutaffifin",
        "translation": "Orang-orang Curang",
        "type": "meccan",
        "total_verses": 36
    },
    {
        "id": 84,
        "name": "الإنشقاق",
        "transliteration": "Al-Inshiqaq",
        "translation": "Terbelah",
        "type": "meccan",
        "total_verses": 25
    },
    {
        "id": 85,
        "name": "البروج",
        "transliteration": "Al-Buruj",
        "translation": "Gugusan Bintang",
        "type": "meccan",
        "total_verses": 22
    },
    {
        "id": 86,
        "name": "الطارق",
        "transliteration": "At-Tariq",
        "translation": "Yang Datang di Malam Hari",
        "type": "meccan",
        "total_verses": 17
    },
    {
        "id": 87,
        "name": "الأعلى",
        "transliteration": "Al-A'la",
        "translation": "Yang Paling Tinggi",
        "type": "meccan",
        "total_verses": 19
    },
    {
        "id": 88,
        "name": "الغاشية",
        "transliteration": "Al-Ghashiyah",
        "translation": "Hari Pembalasan",
        "type": "meccan",
        "total_verses": 26
    },
    {
        "id": 89,
        "name": "الفجر",
        "transliteration": "Al-Fajr",
        "translation": "Fajar",
        "type": "meccan",
        "total_verses": 30
    },
    {
        "id": 90,
        "name": "البلد",
        "transliteration": "Al-Balad",
        "translation": "Negeri",
        "type": "meccan",
        "total_verses": 20
    },
    {
        "id": 91,
        "name": "الشمس",
        "transliteration": "Ash-Shams",
        "translation": "Matahari",
        "type": "meccan",
        "total_verses": 15
    },
    {
        "id": 92,
        "name": "الليل",
        "transliteration": "Al-Layl",
        "translation": "Malam",
        "type": "meccan",
        "total_verses": 21
    },
    {
        "id": 93,
        "name": "الضحى",
        "transliteration": "Ad-Duhaa",
        "translation": "Waktu Dhuha",
        "type": "meccan",
        "total_verses": 11
    },
    {
        "id": 94,
        "name": "الشرح",
        "transliteration": "Ash-Sharh",
        "translation": "Melapangkan",
        "type": "meccan",
        "total_verses": 8
    },
    {
        "id": 95,
        "name": "التين",
        "transliteration": "At-Tin",
        "translation": "Buah Tin",
        "type": "meccan",
        "total_verses": 8
    },
    {
        "id": 96,
        "name": "العلق",
        "transliteration": "Al-'Alaq",
        "translation": "Segumpal Darah",
        "type": "meccan",
        "total_verses": 19
    },
    {
        "id": 97,
        "name": "القدر",
        "transliteration": "Al-Qadr",
        "translation": "Kemuliaan",
        "type": "meccan",
        "total_verses": 5
    },
    {
        "id": 98,
        "name": "البينة",
        "transliteration": "Al-Bayyinah",
        "translation": "Pembuktian",
        "type": "medinan",
        "total_verses": 8
    },
    {
        "id": 99,
        "name": "الزلزلة",
        "transliteration": "Az-Zalzalah",
        "translation": "Kegoncangan",
        "type": "medinan",
        "total_verses": 8
    },
    {
        "id": 100,
        "name": "العاديات",
        "transliteration": "Al-'Adiyat",
        "translation": "Berlari Kencang",
        "type": "meccan",
        "total_verses": 11
    },
    {
        "id": 101,
        "name": "القارعة",
        "transliteration": "Al-Qari'ah",
        "translation": "Hari Kiamat",
        "type": "meccan",
        "total_verses": 11
    },
    {
        "id": 102,
        "name": "التكاثر",
        "transliteration": "At-Takathur",
        "translation": "Bermegah-megahan",
        "type": "meccan",
        "total_verses": 8
    },
    {
        "id": 103,
        "name": "العصر",
        "transliteration": "Al-'Asr",
        "translation": "Waktu Sore",
        "type": "meccan",
        "total_verses": 3
    },
    {
        "id": 104,
        "name": "الهمزة",
        "transliteration": "Al-Humazah",
        "translation": "Pengumpat",
        "type": "meccan",
        "total_verses": 9
    },
    {
        "id": 105,
        "name": "الفيل",
        "transliteration": "Al-Fil",
        "translation": "Gajah",
        "type": "meccan",
        "total_verses": 5
    },
    {
        "id": 106,
        "name": "قريش",
        "transliteration": "Quraysh",
        "translation": "Suku Quraisy",
        "type": "meccan",
        "total_verses": 4
    },
    {
        "id": 107,
        "name": "الماعون",
        "transliteration": "Al-Ma'un",
        "translation": "Barang yang Berguna",
        "type": "meccan",
        "total_verses": 7
    },
    {
        "id": 108,
        "name": "الكوثر",
        "transliteration": "Al-Kawthar",
        "translation": "Nikmat Berlimpah",
        "type": "meccan",
        "total_verses": 3
    },
    {
        "id": 109,
        "name": "الكافرون",
        "transliteration": "Al-Kafirun",
        "translation": "Orang-orang Kafir",
        "type": "meccan",
        "total_verses": 6
    },
    {
        "id": 110,
        "name": "النصر",
        "transliteration": "An-Nasr",
        "translation": "Pertolongan",
        "type": "medinan",
        "total_verses": 3
    },
    {
        "id": 111,
        "name": "المسد",
        "transliteration": "Al-Masad",
        "translation": "Gejolak Api (Sabut)",
        "type": "meccan",
        "total_verses": 5
    },
    {
        "id": 112,
        "name": "الإخلاص",
        "transliteration": "Al-Ikhlas",
        "translation": "Ikhlash",
        "type": "meccan",
        "total_verses": 4
    },
    {
        "id": 113,
        "name": "الفلق",
        "transliteration": "Al-Falaq",
        "translation": "Waktu Shubuh",
        "type": "meccan",
        "total_verses": 5
    },
    {
        "id": 114,
        "name": "الناس",
        "transliteration": "An-Nas",
        "translation": "Umat Manusia",
        "type": "meccan",
        "total_verses": 6
    }
])

const evenTexture2 = ref("bg-gray-100 bg-[url('/french-stucco.png')]")
const onClickCloseModal = () => {
    emit('close')
}

const onClickSurah = (id: any) => {
    emit('change', id, 0)
    emit('close')
}
</script>
<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div class="fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center text-center sm:p-0">
                <div
                    class="relative transform overflow-hidden rounded-t-2xl bg-white text-left shadow-xl transition-all w-full md:max-w-screen-md">
                    <div class="bg-white pt-0"  :class="evenTexture2">
                        <div class="mb-3 py-2 px-4 flex justify-between">
                            <div class="">
                                <h3 class="text-sm font-medium leading-6 text-gray-900">
                                    Daftar surah
                                </h3>
                            </div>
                            <div>
                                <button @click="onClickCloseModal">
                                    <img src="/close-circle-svgrepo-com.svg" class="w-5" alt="">
                                </button>
                            </div>
                        </div>
                        <div class="px-4 pb-4 h-96 overflow-x-scroll no-scrollbar">
                            <div class="grid grid-cols-1 gap-2">
                                <button v-for="i0 in surah" class="cursor-pointer" @click="onClickSurah(i0.id)">
                                    <div class="flex w-full">
                                        <div class="flex items-center">
                                            <div class="h-5 w-5 rounded-full border-gray-300 flex justify-center items-center relative bg-yellow-100 mr-2">
                                                <img src="/f2.png" alt="">
                                                <div class="absolute left-0 w-full h-full top-0">
                                                    <div class="h-full flex justify-center items-center">
                                                        <p class="text-2xs text-gray-700 absolute">{{i0.id}}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class=" rounded-full">
                                                <p class="text-2xs font-bold text-gray-700">{{i0.total_verses}} Ayat</p>
                                            </div>
                                        </div>
                                        <div class="flex-1">
                                            <p class="font-arab text-right">{{i0.name}}</p>
                                            <p class="text-xs text-right text-gray-700">{{i0.transliteration}} - {{i0.translation}}</p>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>