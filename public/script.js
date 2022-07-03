function getNextPicture() {
    // Set array of images to be used
    var images = [
        "public/roda_1.svg",
        "public/roda_2.svg",
        "public/roda_3.svg",
        "public/roda_4.svg"];
    var logo = document.getElementById('logo');
    var current_logo_path = logo.getAttribute('src');
    var current_logo_index = images.indexOf(current_logo_path);
    var next_logo_index = (current_logo_index + 1) % images.length;
    var next_logo_path = images[next_logo_index];
    logo.setAttribute('src', next_logo_path);
}

setInterval(getNextPicture, 1000);