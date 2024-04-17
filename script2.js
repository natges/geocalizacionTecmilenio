function iniciarMap(){
    var coord = {lat: 25.743095513092477, lng:-100.28312356457815 };
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}