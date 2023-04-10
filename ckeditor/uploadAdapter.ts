class UploadAdapter {
  private readonly loader: any

  constructor(loader: any) {
    // The file loader instance to use during the upload.
    this.loader = loader
  }

  // Starts the upload process.
  async upload() {
    const data = new FormData()
    data.append('file', await this.loader.file)
    return new Promise((resolve, reject) => {
      fetch(`http://api.infomania.ru/api/upload`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
        body: data,
      })
        .then(async (response) => {
          const result = await response.json()

          resolve({ default: `http://static.infomania.ru${result.path}` })
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}

export function uploadAdapter(editor: any) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader: any) => {
    return new UploadAdapter(loader)
  }
}
