export const ImgHelper = {
  resize(src, size) {
    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext('2d')
    let img = new Image()
    return new Promise(resolve => {
      img.onload = function () {
        // set size proportional to image
        canvas.width = size
        canvas.height = canvas.width * (img.height / img.width)

        // step 1 - resize to 50%
        let oc = document.createElement('canvas'),
          octx = oc.getContext('2d')

        oc.width = img.width * 0.5
        oc.height = img.height * 0.5
        octx.drawImage(img, 0, 0, oc.width, oc.height)

        // step 2
        octx.drawImage(oc, 0, 0, oc.width * 0.5, oc.height * 0.5)

        // step 3, resize to final size
        ctx.drawImage(oc, 0, 0, oc.width * 0.5, oc.height * 0.5,
          0, 0, canvas.width, canvas.height)

        resolve(canvas.toDataURL())
      }
      img.src = src
    })
  }
}
