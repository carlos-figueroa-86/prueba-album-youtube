<template>
  <VDialog
    v-bind:model-value="openDialogPlay"
    @click:outside="handleCloseDialog"
    width="auto"
    max-width="1280"
  >
    <VCard>
      <VToolbar density="compact">
        <VSpacer></VSpacer>
        <VBtn icon @click="handleCloseDialog()">
          <VIcon>mdi-close</VIcon>
        </VBtn>
      </VToolbar>
      <VCardText class="pb-3">
        <VRow>
          <VCol cols="6" align-self="center">
            <iframe
              :src="`${video?.videoUrl}?&autoplay=1`"
              type="text/html"
              width="100%"
              height="360"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </VCol>

          <VCol cols="6" align-self="center">
            <VCard>
              <template v-slot:title>
                {{ video?.title }}
              </template>
              <VSpacer></VSpacer>
              <template v-slot:text>
                {{ video?.description }}
              </template>
              <VSpacer></VSpacer>
            </VCard>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </VDialog>
</template>

<script setup lang="ts">
import CONSTS from '@/config/constans';
import { db } from '../config/firebase';
import { DocumentData, doc, onSnapshot } from 'firebase/firestore';
import { defineProps, defineEmits, Ref, ref} from 'vue';
const props = defineProps({
  videoID: {
    type: String,
    required: true,
  },
  openDialogPlay: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const video: Ref<DocumentData | undefined> = ref();
// Obtener la informacion del video por el ID
onSnapshot(doc(db, CONSTS.NAME_COLLECTION, props.videoID), (doc) => {
  video.value = doc.data();
});

const emit = defineEmits(['hideModel']);
const handleCloseDialog = () => emit('hideModel');
</script>
