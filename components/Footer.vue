<template>
    <footer class="pt-8 pb-16 prose text-white bg-primary-950">
        <div class="grid w-full max-w-screen-xl px-8 mx-auto md:grid-cols-3">
            <div class="text-sm">
                <img src="~/assets/img/logo_rempart_mutuelle.svg" alt="" class="w-48">
                <div class="font-semibold">Complémentaire Santé et Prévoyance</div>
                <address class="mt-1 not-italic font-light">
                    1, rue d'Austerlitz CS 27 261 <br>
                    31072 Toulouse Cedex 6
                </address>
                <div class="flex gap-3">
                    <a v-for="i in social" class="transition-all transform hover:scale-125" :href="i.url"
                        target="_blank"><img :src="'/social/' + i.icon" :alt="i.name"></a>
                </div>
            </div>
            <div class="text-sm">
                <img src="~/assets/img/logo_rempart_sante.svg" alt="" class="w-48">
                <div class="font-semibold">Complémentaire Santé et Prévoyance</div>
                <address class="mt-1 not-italic font-light">
                    1, rue d'Austerlitz CS 27 261 <br>
                    31072 Toulouse Cedex 6 <br>
                    05 32 26 30 00
                </address>
            </div>
            <div class="text-sm">
                <img src="~/assets/img/agir_negatif.svg" alt="" class="w-32">
                <div class="font-semibold">Un offre prévoyance entre<br> REMPART MUTUELLE et<br> le Conseil Départemental 31
                </div>
                <a href="https://www.rempartmutuelle.fr/la-mutuelle/mentions-legales-1" target="_blank"
                    class="flex pt-4 font-light text-white no-underline">Mentions légales</a>
            </div>
        </div>
    </footer>
</template>

<script setup>
const social = [
    {
        name: 'Facebook',
        url: '#',
        icon: 'FB.svg'
    },
    {
        name: 'Instagram',
        url: '#',
        icon: 'IG.svg'
    },
    {
        name: 'Linkedin',
        url: '#',
        icon: 'IN.svg'
    },
    {
        name: 'Twitter',
        url: '#',
        icon: 'TW.svg'
    }
]
</script>