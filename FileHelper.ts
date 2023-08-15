export const FileHelper = {
  downloadBlob(blob, filename) {
    this.downloadDataUrl(URL.createObjectURL(blob), filename)
  },
  downloadDataUrl(dataUrl, filename, target = '_self') {
    let a = document.createElement('a')
    a.href = dataUrl
    a.setAttribute('target', target)
    a.setAttribute('download', filename)
    a.click()
  }
}
