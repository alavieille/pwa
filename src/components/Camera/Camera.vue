<template>
    <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--6-col">
            <video ref="video" class="camera-stream"></video>
        </div>
  </div>
</template>

<script type="text/babel">
    export default {
        name: 'Camera',
        data () {
            return {
                mediaStream: null
            }
        },
        mounted () {
            navigator.mediaDevices.getUserMedia({ video: true }).then((mediaStream) => {
                this.mediaStream = mediaStream;
                this.$refs.video.srcObject = mediaStream;
                this.$refs.video.play();
             }).catch(error => console.error('getUserMedia() error:', error))
        },
        destroyed () {
            let tracks = this.mediaStream.getTracks();
            tracks.map(track => track.stop())
        }
    }
</script>

<style>
    .camera-stream {
        width: 100%;
    }
</style>
