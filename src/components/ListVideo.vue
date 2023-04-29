<template>
  <VRow class="mt-10">
    <VCol
      v-for="(video, index) in videos"
      :key="index"
      class="child-flex pa-10 pt-3"
      cols="4"
    >
      <VCard @click="methods.showVideo(video.id)">
        <VIcon
          class="video-label-left video-actions-remove"
          @click.stop="
            (dialogRemoveVideo.openDialog = true),
              (dialogRemoveVideo.indexed = index),
              (dialogRemoveVideo.videoID = video.id)
          "
          >mdi-close</VIcon
        >
        <VImg :aspect-ratio="16 / 9" cover :src="video.data().thumbnailUrl"></VImg>
        <div class="video-label-left video-duration-time">
          {{ video.data().duration }}
        </div>
      </VCard>
    </VCol>
  </VRow>

  <PlayVideo
    v-if="videoID"
    v-model:openDialogPlay="openDialogVideoPlayer"
    :videoID="videoID"
    @hide-model="methods.closeDialog(false)"
  ></PlayVideo>

  <RemoveVideo
    v-if="dialogRemoveVideo.videoID"
    v-model:openDialogRemove="dialogRemoveVideo"
    v-on="events"
    @hide-model="dialogRemoveVideo.openDialog = false"
  ></RemoveVideo>

  <SnackbarCustom :snackbar="snackbar"></SnackbarCustom>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import PlayVideo from './PlayVideo.vue';
import RemoveVideo from './RemoveVideo.vue';
import SnackbarCustom from './SnackbarCustom.vue';
import { ref, defineProps } from 'vue';
import { DocumentData, QueryDocumentSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { Ref } from 'vue';
import { db } from '@/config/firebase';
import CONSTS from '@/config/constans';
import { MessageSnackBar } from '@/types/messageSnackBar';
import { Colors } from '@/types/colors';

const props = defineProps({
  videos: {
    type: Array as PropType<Array<QueryDocumentSnapshot<DocumentData>>>,
    default: () => []
  },
  snackbar: {
    type: Object as PropType<MessageSnackBar>,
    default: () => ({
      active: false,
    }),
  },
});

interface DialogRemove {
  openDialog: boolean,
  indexed?: number
  videoID?: string,
}

const dialogRemoveVideo: Ref<DialogRemove> = ref({
  openDialog: false,
});
const openDialogVideoPlayer = ref(false);
const snackbar = ref(props.snackbar);
const videosProps = ref(props.videos);
const videoID: Ref<String | undefined> = ref(undefined);

const methods = {
  showVideo: (id: string) => {
    videoID.value = id;
    openDialogVideoPlayer.value = true;
  },
  closeDialog: (status: boolean) => {
    // Cerrar el dialogo
    openDialogVideoPlayer.value = status;
    dialogRemoveVideo.value.openDialog = status;
    videoID.value = undefined;
  },
};

const events = {
  removePositionVideo: async (indexed: number, videoId: string) => {
    // Eliminar el video de firebase
    await deleteDoc(doc(db, CONSTS.NAME_COLLECTION, videoId));
    videoID.value = undefined,
    videosProps.value.splice(indexed, 1);
    dialogRemoveVideo.value.openDialog = false;
    // Se muestra el mensaje
    snackbar.value.active = true;
    snackbar.value.message = 'Se elimino el video de la lista';
    snackbar.value.color = Colors.INFO;
  },
};
</script>

<style scoped src="../assets/style.css"></style>
