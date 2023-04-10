import {configToolbar} from "~/ckeditor/config";

export async function initEditor() {
  await import('~/ckeditor/build/ckeditor');
  return new Promise((res, rej) => {
    const watchdog = new CKSource.EditorWatchdog();

    window.watchdog = watchdog;

    watchdog.setCreator((element, config) => {
      console.log(config)
      return CKSource.Editor
        .create(element, {...config, ...configToolbar})
        .then(editor => {

          res(editor);

          return editor;
        })
    });

    watchdog.setDestructor(editor => {

      return editor.destroy();
    });

    watchdog
      .create(document.querySelector('#editor'), {})
      .catch(handleError);

    function handleError(error) {
      rej(error)
    }
  })
}