function iniciarMap(){
    var coord = {lat: 25.740962358323568 ,lng: -100.4029489880712};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
}