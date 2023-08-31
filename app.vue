<template>
  <div class="flex flex-col items-center min-w-full gap-12 md:gap-20">
    <Header />
    <SectionPrevoyance />
    <SectionOffre />
    <Cta />
    <section class="min-w-full mx-auto prose text-center">
      <h2 class="mb-12 text-3xl font-semibold">Vos 3 garanties Socle Prévoyance</h2>
      <CardsWrapper>
        <Card v-for="card in cardsGaranties" :key="card.title" :data="card" />
      </CardsWrapper>
      <a class="flex justify-center mt-12 font-light no-underline text-secondary-800 hover:underline"
        href="/LIVRET_PREVOYANCE-CD31.pdf" target="_blank" download>En savoir plus sur nos garanties</a>

    </section>
    <section class="min-w-full prose text-center md:p-12 bg-secondary-200">
      <h2 class="mb-12 text-3xl font-semibold">Les services REMPART inclus dans votre offre Prévoyance</h2>
      <CardsWrapper>
        <Card v-for="card in cardsPrevoyance" :key="card.logo" :data="card" />
      </CardsWrapper>
    </section>
    <div class="relative max-w-full min-w-full overflow-hidden">
      <section class="w-full max-w-screen-xl px-4 mx-auto prose md:px-16">
        <h2 class="mb-12 text-3xl font-semibold text-center md:text-left">
          Qui sommes nous ?
        </h2>
        <p class="">
          Avec plus de 90 ans d’expérience, REMPART MUTUELLE est une mutuelle à l'ancrage régional. Indépendante et
          innovante nous créons et gérons nos propres garanties pour offrir les meilleurs service à nos adhérents.<br />
          Véritable mutuelle de proximité nous sommes attachés à répondre aux demandes et attentes de nos adhérents. Pour
          construire cette relation privilégiée, nous veillons à rester votre seul interlocuteur, grâce à :
        </p>
        <ul>
          <li>
            9 agences en Occitanie dont 7 en Haute-Garonne et 2 dans le Tarn</li>
          <li>Des équipes de gestion et un centre d’appel situés au centre-ville de Toulouse.</li>
          <li>Un Centre de Santé et un Centre Optique & Audition, Place Wilson à Toulouse</li>
        </ul>
      </section>
      <img src="~/assets/img/symbole.svg" alt="Symbole Mutuelle" class="absolute top-0 hidden h-full md:block -right-16">
    </div>
    <div class="min-w-full no-prose ">
      <section class="min-w-full prose text-center pt-14 bg-secondary-200">
        <h2 class="mb-8 text-4xl font-semibold">Où nous trouver ?</h2>
        <div class="flex flex-col items-end max-w-screen-xl px-4 mx-auto md:gap-8 md:flex-row md:px-24">
          <div class="flex items-center justify-between w-full gap-8 p-3 font-bold md:w-4/12 bg-secondary-800 whitespace-nowrap">
            <img src="~/assets/img/picto-phone.svg" class="m-0" alt="Picto phone">
            <span class="text-2xl text-white m">05 62 15 07 37</span>
          </div>
          <p class="flex max-w-screen-sm mb-4 text-left md:mb-1">Une équipe dédiée, experte dans la protection sociale des Agents
            de la Fonction Publique est à votre écoute.</p>
        </div>
      </section>
      <Map />
    </div>
    <Footer class="min-w-full" />
    <Fixed />
  </div>
</template>

<script setup>
useHead({
  htmlAttrs: {
    lang: 'fr'
  },
  title: 'Prévoyance Rempart Mutuelle',
  meta: [
    { name: 'description', content: 'Découvrez l’offre exclusive réservée aux agents du Conseil Départemental de la Haute-Garonne.' }
  ],
})

const cardsGaranties = [
  {
    title: "Incapacité temporaire totale de travail",
    description: "En cas d’arrêt de travail pour raison de santé : congés de maladie ordinaire, de longue maladie, temps partiel thérapeutique, … votre perte de rémunération - traitement indiciaire, NBI et régime indemnitaire - est prise en charge par la garantie Incapacité Temporaire Totale de Travail, dans la limite de 90%.",
  },
  {
    title: "Invalidité permanente <br><br>",
    description: "En cas d’arrêt de travail définitif, vous êtes placé(e) en retraite pour invalidité. <br><br> La garantie Invalidité permet de compléter la rente versée par votre caisse de retraite à hauteur de 90% de votre dernier traitement – NBI incluse.",
  },
  {
    title: "Décès <br><br>",
    description: "Un capital d’un montant de 25% de votre salaire annuel brut sera versé à vos proches selon l’ordre d’attribution souhaité.",
  }
]
const cardsPrevoyance = [
  {
    logo: "aidants",
    description: "Outils et solutions adaptés aux aidants familiaux qui accompagnent un proche en perte d’autonomie et qui connaissent des difficultés à concilier vie personnelle et vie professionnelle.",
  },
  {
    logo: "assistance",
    description: "Un imprévu de santé ? Après accord préalable, bénéficiez d’aides ménagères, garde d’enfants et d’animaux de compagnie, école à domicile pour les enfants malades, prise en charge des frais médicaux à l’étranger...",
  },
  {
    logo: "avantages",
    description: "Pour soutenir votre pouvoir d’achat, profitez de tarifs préférentiels sur de nombreuses enseignes et marques : équipement de la maison, courses, voyages, loisirs, presse, restaurants...",
    more: "https://www.rempartmutuelle.fr/nos-services/vos-services-exclusifs/rempart-avantages"
  },
  {
    logo: "parentalite",
    description: "Aide et soutien psychologique à la parentalité, en ligne, en tout anonymat et confidentialité. 24h/24 et 7j/7",
    more: "https://parentalite.rempartmutuelle.fr/"
  },
  {
    logo: "patrimoine",
    description: "Etude personnalisée, conseils sur mesure, placements, Epargne Retraite, gestion et transmission du patrimoine.<br><br>05 61 21 21 21 <br> <a href='mailto:contact@rempartpatrimoine.fr'>contact@rempartpatrimoine.fr</a>",
  },
  {
    logo: "solidarite",
    description: "Une plateforme humaine et digitale est à disposition 24h/24 et 7j/7 pour répondre à vos problématiques du quotidien. Ce service unique vous accompagne sur des solutions matérielles, psychologiques, sociales, médicales et professionnelles.",
    more: "https://solidarites.rempartmutuelle.fr/"
  },
]
</script>