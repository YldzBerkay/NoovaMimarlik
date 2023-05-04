function openImageSite(pageName) {
  window.location.href = pageName;
}

function makeGrayscale(img) {
  img.classList.add("grayscale");
}

function makeNormal(img) {
  img.classList.remove("grayscale");
}
