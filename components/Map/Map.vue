<template>
    <div class="relative">
        <div id="map" class="map" ref="mapWrapper">
            <GoogleMap api-key="AIzaSyANlxQ_pOf5FlLwncUmHdzZcLLL9xkdqDA" ref="map" class="map" :center="center" :zoom="zoom"
                :styles="mapStyle" @idle="scaleIcons" disableDefaultUi>
                <Marker :key="m.id" v-for="(m, index) in markers" :options="{
                    ...m, icon: {
                        url: '/marker.svg',
                        scaledSize: { width: 26, height: 54 }
                    }
                }" :position="m.position" :clickable="true" :draggable="false" v-model="selected"
                    @click="selected = m;">
                    <InfoWindow :open="true" v-on:closeclick="resetInfoWindow(m)"
                        class="inline-flex items-center gap-4 p-2 px-8 font-bold text-white bg-primary-950 rounded-3xl font-body">
                        <a :href="m.href" class="flex items-center gap-4"> {{ m.nom_social }} <img
                                src="~/assets/img/picto-add.svg" alt="Picto add"></a>
                    </InfoWindow>
                </Marker>
            </GoogleMap>
        </div>
        <div class="top-0 left-0 max-w-screen-xl min-w-full pointer-events-none md:absolute md:px-44 inline-flex-w-full">
            <ul class="box-content flex flex-col w-full md:w-4/12">
                <li class="flex flex-col pointer-events-auto bg-white/75">
                    <span class="px-4 py-3 text-3xl text-white uppercase bg-gray-600"><b>31.</b> Haute-Garonne</span>
                    <ul class="list-none ">
                        <li ref="itemRefs"
                            :class="{ 'nav-item': true, 'active': selected != null && agence.id == selected.id }"
                            class="flex items-center justify-between px-4 py-3 transition-all border-b border-gray-200 hover:bg-slate-300 hover:font-bold"
                            v-for="agence in agencesGaronne">
                            <a href="#" class="" @click.prevent.stop="selectAgence(agence)"><span class="text">{{
                                agence.nom_social }}</span></a>
                            <a :href="agence.href" target="_blank" class="nav-link">
                                <img src="~/assets/img/picto-add.svg" alt="Picto add">
                            </a>
                        </li>
                    </ul>
                </li>

                <li class="flex flex-col bg-white pointer-events-auto">
                    <span class="px-4 py-3 text-3xl text-white uppercase bg-gray-600"><b>81.</b> Tarn</span>
                    <ul class="list-none">
                        <li :class="{ 'nav-item': true, 'active': selected != null && agence.id == selected.id }"
                            class="flex items-center justify-between px-4 py-3 border-b border-gray-200 hover:bg-slate-300 hover:font-bold"
                            v-for="agence in agencesTarn">
                            <a href="#" class="map-link" @click.prevent.stop="openInfoWindow(agence.nom_social)"><span
                                    class="text">{{
                                        agence.nom_social }}</span></a>
                            <a :href="agence.href" target="_blank" class="nav-link">
                                <img src="~/assets/img/picto-add.svg" alt="Picto add"></a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>


    </div>
</template>
<script setup>
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";
import mapStyle from '~/assets/js/mapStyle.js'
const zoom = ref(7);
let center = ref({ lat: 43.599815, lng: 1.4295001 })

function zoomEvent(item) {
    center.value = { lat: item.lat, lng: item.lng };
    zoom.value = 15;
}

let agences = ref(
    [
        {
            id: 1,
            position: {
                lat: 43.611324,
                lng: 1.331698
            },
            nom_social: "AGENCE DE COLOMIERS",
            cp: "31770",
            href: "https://www.rempartmutuelle.fr/la-mutuelle/reseau/agence-de-colomiers",
            infoText: '<a href="https://www.rempartmutuelle.fr/la-mutuelle/reseau/agence-de-colomiers" class="link-info-window">AGENCE DE COLOMIERS</a>',
            infoWinOpen: true,
            icon: {
                url: '/marker.svg',
                scaledSize: { width: 26, height: 48 }
            }
        },
        {
            id: 2,
            position: {
                lat: 43.922198,
                lng: 2.141769
            },
            nom_social: "AGENCE D'ALBI",
            cp: "81000",
            href: "https://www.rempartmutuelle.fr/la-mutuelle/reseau/agence-albi",
            infoText: '<a href="https://www.rempartmutuelle.fr/la-mutuelle/reseau/agence-albi" class="link-info-window">AGENCE D\'ALBI</a>',
            infoWinOpen: false,
        },
        {
            id: 3,
            position: {
                lat: 43.608763,
                lng: 2.239736
            },
            nom_social: "AGENCE DE CASTRES",
            cp: "81100",
            href: "https://www.rempartmutuelle.fr/la-mutuelle/reseau/agence-castres",
            infoText: '<a href="https://www.rempartmutuelle.fr/la-mutuelle/reseau/agence-castres" class="link-info-window">AGENCE DE CASTRES</a>',
            infoWinOpen: false
        },
        {
            id: 4,
            position: {
                lat: 43.459383,
                lng: 2.003436
            },
            nom_social: "AGENCE DE REVEL",
            cp: "31250",
            href: "https://www.rempartmutuelle.fr/la-mutuelle/reseau/agence-revel",
            infoText: '<a href="https://www.rempartmutuelle.fr/la-mutuelle/reseau/agence-revel" class="link-info-window">AGENCE DE REVEL</a>',
            infoWinOpen: false
        },
        {
            id: 5,
            position: {
                lat: 43.605405,
                lng: 1.447396
            },
            nom_social: "AGENCE DE TOULOUSE WILSON",
            cp: "31000",
            href: "https://www.rempartmutuelle.fr/la-mutuelle/reseau/agence-de-toulouse-wilson",
            infoText: '<a href="https://www.rempartmutuelle.fr/la-mutuelle/reseau/agence-de-toulouse-wilson" class="link-info-window">AGENCE DE TOULOUSE WILSON</a>',
            infoWinOpen: false
        },
        {
            id: 6,
            position: {
                lat: 43.619948,
                lng: 1.435809
            },
            nom_social: "AGENCE DE TOULOUSE MINIMES",
            cp: "31200",
            href: "https://www.rempartmutuelle.fr/la-mutuelle/reseau/agence-de-toulouse-minimes",
            infoText: '<a href="https://www.rempartmutuelle.fr/la-mutuelle/reseau/agence-de-toulouse-minimes" class="link-info-window">AGENCE DE TOULOUSE MINIMES</a>',
            infoWinOpen: false
        },
        {
            id: 7,
            position: {
                lat: 43.461055,
                lng: 1.325169
            },
            nom_social: "AGENCE DE MURET",
            cp: "31600",
            href: "https://www.rempartmutuelle.fr/la-mutuelle/reseau/agence-muret",
            infoText: '<a href="https://www.rempartmutuelle.fr/la-mutuelle/reseau/agence-muret" class="link-info-window">AGENCE DE MURET</a>',
            infoWinOpen: false
        },
        {
            id: 8,
            position: {
                lat: 43.109165,
                lng: 0.72615
            },
            nom_social: "AGENCE DE SAINT GAUDENS",
            cp: "31800",
            href: "https://www.rempartmutuelle.fr/la-mutuelle/reseau/agence-saint-gaudens",
            infoText: '<a href="https://www.rempartmutuelle.fr/la-mutuelle/reseau/agence-saint-gaudens" class="link-info-window">AGENCE DE SAINT GAUDENS</a>',
            infoWinOpen: false
        },
        {
            id: 9,
            position: {
                lat: 43.565613,
                lng: 1.410586
            },
            nom_social: "AGENCE DE TOULOUSE SEYSSES",
            cp: "31100",
            href: "https://www.rempartmutuelle.fr/la-mutuelle/reseau/agence-de-toulouse-seysses",
            infoText: '<a href="https://www.rempartmutuelle.fr/la-mutuelle/reseau/agence-de-toulouse-seysses" class="link-info-window">AGENCE DE TOULOUSE SEYSSES</a>',
            infoWinOpen: false
        }
    ]
)
const markers = agences

const selected = ref(null);

// watch selected marker and open info window
function openInfoWindow(agence) {
    console.log('openInfoWindow')

}

const selectAgence = (agence) => {
    center.value = { lat: agence.position.lat, lng: agence.position.lng };
    agence.infoWinOpen = true;
    zoom.value = 13;
};

const agencesGaronne = computed(() => {
    return agences.value.filter(agence => agence.cp.slice(0, 2) === '31');
});
const agencesTarn = computed(() => {
    return agences.value.filter(agence => agence.cp.slice(0, 2) === '81');
});

function resetInfoWindow(marker) {
    marker.infoWinOpen = false;
}
</script>
<style>
.map {
    height: 80vh;
    width: 100%;
}

.gm-style-iw {
    padding: 0 0 0 0 !important;
    border-radius: 2rem !important;
    display: inline;
}
.gm-style-iw-d {
    display: inline !important;
    width: 100%;
}
.gm-style-iw-tc:after {
    background: #0A1527 !important
}

.gm-ui-hover-effect {
    padding-right: 32px !important;
    padding-top: 8px !important;
}

.gm-ui-hover-effect>span {
    background-color: white;
    padding-top: 4px !important;
}</style>