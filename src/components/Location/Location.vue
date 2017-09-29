<template>
    <div class="mdl-grid">
        <div class="mdl-cell mdl-cell--5-col">
            <h4>Position</h4>
            <p>Latitude : {{ latitude }} </p>
            <p>Longitude : {{ longitude }} </p>
        </div>
    </div>
</template>

<script type="text/babel">
    export default {
        name: 'Location',
        data () {
            return {
                'latitude': null,
                'longitude': null,
                'locationId': null
            }
        },
        mounted () {
            this.locationId = navigator.geolocation.watchPosition((position) => {
                this.latitude = position.coords.latitude;
                this.longitude = position.coords.longitude;
            }, error => console.error('getCurrentPosition() error:', error));
        },
        destroyed () {
            navigator.geolocation.clearWatch(this.locationId);
        }
    }
</script>
