<template>
  <div class="container">
    <el-button
        type="primary"
        class="mb-3"
        @click="handlePreviewToggle"
    >
      {{ !isPreview ? 'Preview' : 'Editor' }}
    </el-button>
    <div v-show="!isPreview" class="w-240">
      <div id="toolbar-container"></div>
      <div id="editor"></div>
    </div>
    <div v-show="isPreview" v-html="editorData" class="w-240 py-5 ck-content" />
  </div>
</template>

<script lang="ts" setup>
import { ElButton } from 'element-plus';
import { initEditor } from '~/ckeditor/init';

type Props = {
  modelValue: string
}

const props = defineProps<Props>();
const emit = defineEmits(['update:modelValue']);
const isPreview = ref<boolean>(false);
const editorData = ref('');
let editor: any;

editorData.value = props.modelValue;

const handlePreviewToggle = () => {
  isPreview.value = !isPreview.value;
}

watch(() => props.modelValue, (value, oldValue) => {
  if (oldValue !== value) {
    editorData.value = value;
  }
})

watch(editorData, (value, oldValue) => {
  if (oldValue !== value) {
    emit('update:modelValue', value);
  }
})

onBeforeMount(async () => {
  if (!editor) {
    editor = await initEditor();
  }

  editor.setData(editorData.value);

  editor.model.document.on( 'change:data', () => {
    editorData.value = editor.getData();
  } );
})
</script>