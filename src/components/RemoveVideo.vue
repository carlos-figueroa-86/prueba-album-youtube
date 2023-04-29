<template>
  <v-dialog
    v-bind:model-value="openDialogRemove.openDialog"
    width="auto"
    persistent
  >
    <v-card class="modal-card">
      <div class="card-header">
        <v-card-title>¿Seguro que quieres eliminar este video?.</v-card-title>
        <v-spacer></v-spacer>
        <v-icon @click="handleCloseDialog" color="primary">mdi-close</v-icon>
      </div>

      <v-card-actions class="mt-4">
        <v-spacer></v-spacer>
        <v-btn
          color="primary mr-4"
          variant="outlined"
          @click="handleCloseDialog"
        >
          Cancelar
        </v-btn>
        <v-btn
          color="primary"
          variant="flat"
          @click="onRemovePositionVideo(openDialogRemove.indexed, openDialogRemove.videoID)"
        >
          Eliminar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { defineProps, defineEmits } from 'vue';

  interface DialogRemove {
    openDialog: boolean,
    indexed: number
    videoID: string,
  }

  defineProps({
    openDialogRemove: {
      type: Object as PropType<DialogRemove>,
      default: () => ({
        openDialog: false,
      })
    },
    onRemovePositionVideo: {
      type: Function,
      required: true,
    },
  });

const emit = defineEmits(['hideModel']);
const handleCloseDialog = () => emit('hideModel');
</script>

<style scoped src="../assets/style.css"></style>
