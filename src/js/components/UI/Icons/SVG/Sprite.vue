<script setup>
import { ref, onMounted } from 'vue';
/***/
import axios from '@tools/axios';
/***/
import spriteIconsUrl from '@images/icons.svg';

// Contenu de la balise contenant les icônes SVG
const svgContent = ref(null);

// Chargement des icônes
const loadIcons = (() => {
  axios(spriteIconsUrl).then((response) => {
    if(response.data) {
      svgContent.value = response.data;
    }
  });
});

onMounted(() => {
    loadIcons();
});
</script>

<template>
    <div 
        v-if="svgContent !== null"
        class="sprite-icons" 
        v-html="svgContent"
    ></div>
</template>