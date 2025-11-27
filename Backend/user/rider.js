const riderList = [
  { name: "Rider 1", latitude: 23.755123, longitude: 90.412845 },
  { name: "Rider 2", latitude: 23.760982, longitude: 90.427391 },
  { name: "Rider 3", latitude: 23.748661, longitude: 90.432154 },
  { name: "Rider 4", latitude: 23.771209, longitude: 90.418674 },
  { name: "Rider 5", latitude: 23.779102, longitude: 90.407512 },
  { name: "Rider 6", latitude: 23.750447, longitude: 90.439221 },
  { name: "Rider 7", latitude: 23.768912, longitude: 90.403891 },
  { name: "Rider 8", latitude: 23.758304, longitude: 90.429845 },
  { name: "Rider 9", latitude: 23.774560, longitude: 90.414772 },
  { name: "Rider 10", latitude: 23.745889, longitude: 90.437330 }
];

function addRider(latitude, longitude){
    const newRider = {
        name : `Rider ${string (riderList.length) + 1}`,
        latitude : latitude,
        longitude : longitude,
    }
    riderList.push(newRider)
}

function updatePosition(riderName, newLattitude, newLongtitude){
    for(rider in riderList){
        if(rider.name === riderName){
            rider.latitude = newLattitude
            rider.longitude = newLongtitude
        }
    }
}