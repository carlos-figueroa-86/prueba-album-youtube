<template>
  <VDialog
    v-bind:model-value="openDialogRemove.openDialog"
    width="auto"
    persistent
  >
    <VCard class="modal-card">
      <div class="card-header">
        <VCardTitle>¿Seguro que quieres eliminar este video?.</VCardTitle>
        <VSpacer></VSpacer>
        <VIcon @click="handleCloseDialog" color="primary">mdi-close</VIcon>
      </div>

      <VCardActions class="mt-4">
        <VSpacer></VSpacer>
        <VBtn
          color="primary mr-4"
          variant="outlined"
          @click="handleCloseDialog"
        >
          Cancelar
        </VBtn>
        <VBtn
          color="primary"
          variant="flat"
          @click="
            onRemovePositionVideo(
              openDialogRemove.indexed,
              openDialogRemove.videoID
            )
          "
        >
          Eliminar
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { defineProps, defineEmits } from 'vue';

interface DialogRemove {
  openDialog: boolean;
  indexed: number;
  videoID: string;
}

defineProps({
  openDialogRemove: {
    type: Object as PropType<DialogRemove>,
    default: () => ({
      openDialog: false,
    }),
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
