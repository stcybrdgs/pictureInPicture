const videoElement = document.getElementById('video')
const button = document.getElementById('button')

// user select media stream, pass to video el, then play
async function selectMediaStream() {
  try {
    // use screen capture api
    const mediaStream = await navigator.mediaDevices.getDisplayMedia()
    videoElement.srcObject = mediaStream
    videoElement.onloadedmetadata = () => {
      videoElement.play()
    }
  } catch (error) {
    console.log('Error: ', error)
  }
}

button.addEventListener('click', async () => {
  button.disabled = true
  await videoElement.requestPictureInPicture()
  button.disabled = false
})

// on load
selectMediaStream()

