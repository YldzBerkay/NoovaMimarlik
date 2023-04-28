
function initMap() {
    // Konum koordinatları
    const location = {lat: 37.7749, lng: -122.4194}; // Örnek olarak San Francisco, CA koordinatları

    // Harita oluşturma ve işaretçi eklenmesi
    const map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 14
    });

    const marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Örnek Konum' // İşaretçi üzerinde görünecek başlık
    });
};