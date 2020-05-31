var right_column = $("#right-column")[0];
const maps = '<iframe class="mx-auto m-0 d-block" width="100%" height="350" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=parliament&key=AIzaSyC7yhPk8sAD9lUmBtmYyRUBeMngG11-8KY" allowfullscreen></iframe>';

window.addEventListener('DOMContentLoaded', function() {
    right_column.innerHTML = maps + right_column.innerHTML;
}, false);