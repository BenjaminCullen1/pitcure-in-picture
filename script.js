const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Prompt User to select media stream, pass to video, play

async function selectMediaStream () {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
    } catch (error) {
        // catch errors
        console.log('theres and error here: ', error);
    }
}

button.addEventListener('click', async () => {
    // Disable when clicked
    button.disabled = true;
    // start pip
    await videoElement.requestPictureInPicture();
    // rest the button
    button.disabled = false;
});

// On load

selectMediaStream();
