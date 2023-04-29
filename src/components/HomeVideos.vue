<template>
  <VContainer>
    <VRow class="pb-10">
      <VCol cols="12" sm="12" xl="12">
        <h2 class="text-left mb-3">Añadir nuevo video</h2>
        <div class="video-add">
          <input type="text" v-model="newVideoUrl" />
          <VBtn
            class="btn-add-video"
            color="primary"
            variant="elevated"
            @click="addVideo"
            >Añadir
          </VBtn>
        </div>
      </VCol>
    </VRow>

    <ListVideos v-if="videos.length" :videos="videos"></ListVideos>

    <SnackbarCustom :snackbar="snackbar"></SnackbarCustom>
  </VContainer>
</template>

<script setup lang="ts">
import ListVideos from './ListVideo.vue';
import SnackbarCustom from './SnackbarCustom.vue';
import { ref, defineProps, PropType } from 'vue';
import getVideo from '@/utils/getVideoYT';
import { registerVideo, todosVideos } from '@/utils/dataManage';
import { MessageSnackBar } from '@/types/messageSnackBar';
import { Colors } from '@/types/colors';

const props = defineProps({
  videos: {
    type: Array,
    default: () => [],
  },
  newVideoUrl: {
    type: String,
  },
  snackbar: {
    type: Object as PropType<MessageSnackBar>,
    default: () => ({
      active: false,
    }),
  },
});

const newVideoUrl = ref('');
const videos = ref(props.videos);
const snackbar = ref(props.snackbar);

const initial = async () => {
  // Obtenemos la lista de videos
  videos.value = await todosVideos();
  return;
};
initial();

// Funcion que add videos
const addVideo = async () => {
  const videoUrl = newVideoUrl.value.trim();
  if (!videoUrl) {
    snackbar.value.active = true;
    snackbar.value.message = 'Ingresar una url de video de Youtube';
    snackbar.value.color = Colors.ERROR;
    return;
  }

  const messageSnack: MessageSnackBar = { active: true };

  try {
    // Obtenemos la informacion del video de youtube
    const video = await getVideo(videoUrl);
    // Registra el video en firebase
    const docRef = await registerVideo(video);
    videos.value.push(docRef);

    messageSnack.message = 'Agregado correctamente el video';
    messageSnack.color = Colors.SUCCESS;
  } catch (error: any) {
    messageSnack.message = error.message;
    messageSnack.color = Colors.ERROR;
  }

  snackbar.value.active = messageSnack.active;
  snackbar.value.message = messageSnack.message;
  snackbar.value.color = messageSnack.color;
};
</script>

<style scoped src="../assets/style.css"></style>
