import { uploadAdapter } from "~/ckeditor/uploadAdapter";

export const configToolbar = {
  extraPlugins: [uploadAdapter],
  allowedContent: true,
  mediaEmbed: {
    previewsInData: true
  },
  link: {
    addTargetToExternalLinks: true
  },
  image: {
    resizeUnit: 'px',
    resizeOptions: [
      {
        name: 'resizeImage:original',
        label: 'Original',
        value: null
      },
      {
        name: 'resizeImage:100',
        label: '100px',
        value: '100'
      },
      {
        name: 'resizeImage:200',
        label: '200px',
        value: '200'
      },
      {
        name: 'resizeImage:400',
        label: '400px',
        value: '400'
      },
      {
        name: 'resizeImage:600',
        label: '600px',
        value: '600'
      },
      {
        name: 'resizeImage:800',
        label: '800px',
        value: '800'
      },
      {
        name: 'resizeImage:1000',
        label: '1000px',
        value: '1000'
      },

    ],
    toolbar: [
      'imageTextAlternative',
      'imageStyle:inline',
      'imageResize',
      'imageStyle:block',
      'imageStyle:side',
      'linkImage'
    ]
  },
  toolbar: {
    items: [
      'heading',
      '|',
      'bulletedList',
      'blockQuote',
      'bold',
      'link',
      'imageUpload',
      'numberedList',
      'italic',
      'outdent',
      'indent',
      'mediaEmbed',
      'insertTable',
      'alignment',
      'code',
      'codeBlock',
      'findAndReplace',
      'fontFamily',
      'fontColor',
      'fontSize',
      'fontBackgroundColor',
      'highlight',
      'horizontalLine',
      'htmlEmbed',
      'imageInsert',
      'pageBreak',
      'specialCharacters',
      'removeFormat',
      'subscript',
      'style',
      'restrictedEditingException',
      'strikethrough',
      'superscript',
      'todoList',
      'underline',
      'undo',
      'redo',
      'textPartLanguage'
    ]
  },
  language: 'ru',
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableCellProperties',
      'tableProperties'
    ]
  }
}