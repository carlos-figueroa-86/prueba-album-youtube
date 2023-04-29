<template>
  <v-dialog
    v-bind:model-value="openDialogPlay"
    @click:outside="handleCloseDialog"
    width="auto"
    max-width="1280"
  >
    <v-card>
      <v-toolbar density="compact">
        <v-spacer></v-spacer>
        <v-btn icon @click="handleCloseDialog()">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text class="pb-3">
        <v-row>
          <v-col cols="6" align-self="center">
            <iframe
              :src="`${video?.videoUrl}?&autoplay=1`"
              type="text/html"
              width="100%"
              height="360"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </v-col>

          <v-col cols="6" align-self="center">
            <v-card>
              <template v-slot:title>
                {{ video?.title }}
              </template>
              <v-spacer></v-spacer>
              <template v-slot:text>
                {{ video?.description }}
              </template>
              <v-spacer></v-spacer>
            </v-card>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import CONSTS from '@/config/constans';
import { db } from '../config/firebase';
import { DocumentData, doc, onSnapshot } from 'firebase/firestore';
import { Ref } from 'vue';
import { ref } from 'vue';
import { defineProps, defineEmits } from 'vue';
import { watch } from 'vue';
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
const statusDialog = ref(props.openDialogPlay);
// Obtener la informacion del video por el ID
onSnapshot(doc(db, CONSTS.NAME_COLLECTION, props.videoID), (doc) => {
  video.value = doc.data();
});

watch(statusDialog, (newValue, oldValue) => {
  console.log('object', newValue, oldValue);
})

const emit = defineEmits(['hideModel']);
const handleCloseDialog = () => {
  console.log('Se cerro');
  emit('hideModel');
}
</script>
