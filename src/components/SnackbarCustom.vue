<template>
  <v-snackbar
    v-model="statusSnackbar.active"
    :timeout="statusSnackbar.timeout"
    location="top"
    variant="flat"
    :color="statusSnackbar.color"
    :close-on-content-click="true"
  >
    {{ statusSnackbar.message }}
    <template v-slot:actions>
      <v-btn
        color="black"
        variant="text"
        @click="handleCloseDialog"
        icon
        size="x-small"
      >
        <v-icon color="black">mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script setup lang="ts">
import { Colors } from '@/types/colors';
import { MessageSnackBar } from '@/types/messageSnackBar';
import { ref, defineProps, PropType } from 'vue';

const props = defineProps({
  snackbar: {
    type: Object as PropType<MessageSnackBar>,
    required: true,
    active: {
      type: Boolean,
      default: false,
    },
    timeout: {
      type: Number,
      default: 2000,
    },
    color: {
      type: String as PropType<keyof typeof Colors>,
      default: Colors.NORMAL,
    },
    message: {
      type: String,
      required: true,
      default: 'Mensaje informativo',
    },
  },
});

const statusSnackbar = ref(props.snackbar);
const handleCloseDialog = () => {
  statusSnackbar.value.active = false;
};
</script>
