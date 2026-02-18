import fs from 'fs'
const fileName = 'riderList.json';

// 1. Helper function to read current data
function getRiders() {
    try {
        const dataBuffer = fs.readFileSync(fileName);
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return {}; // Return empty object if file doesn't exist
    }
}

// 2. Helper function to save data
function saveRiders(riders) {
    const dataJSON = JSON.stringify(riders, null, 2);
    fs.writeFileSync(fileName, dataJSON);
    console.log("File saved successfully.");
}

// --- Operation 1: Add Rider ---
function addRider(latitude, longitude) {
    const riders = getRiders();
    
    // Calculate the new Rider Number based on existing keys
    const currentCount = Object.keys(riders).length;
    const newKey = `Rider ${currentCount + 1}`;

    // Add new rider to the object
    riders[newKey] = {
        latitude: latitude,
        longitude: longitude
    };

    console.log(`Adding ${newKey}...`);
    saveRiders(riders);
}

// --- Operation 2: Update Position ---
function updatePosition(riderName, newLatitude, newLongitude) {
    const riders = getRiders();

    // Check if the rider exists (using the key)
    if (riders.hasOwnProperty(riderName)) {
        riders[riderName].latitude = newLatitude;
        riders[riderName].longitude = newLongitude;
        
        console.log(`Updated position for ${riderName}`);
        saveRiders(riders);
    } else {
        console.log(`Error: ${riderName} not found.`);
    }
}

export {addRider, updatePosition}

// const ridersDataList = [
//   {
//     title: "Rider 1",
//     lat: 23.755123,
//     lng: 90.412845
//   },
//   {
//     title: "Rider 2",
//     lat: 23.760982,
//     lng: 90.427391
//   },
//   {
//     title: "Rider 3",
//     lat: 23.748661,
//     lng: 90.432154
//   },
//   {
//     title: "Rider 4",
//     lat: 23.771209,
//     lng: 90.418674
//   },
//   {
//     title: "Rider 5",
//     lat: 23.779102,
//     lng: 90.407512
//   },
//   {
//     title: "Rider 6",
//     lat: 23.750447,
//     lng: 90.439221
//   },
//   {
//     title: "Rider 7",
//     lat: 23.768912,
//     lng: 90.403891
//   },
//   {
//     title: "Rider 8",
//     lat: 23.758304,
//     lng: 90.429845
//   },
//   {
//     title: "Rider 9",
//     lat: 23.774560,
//     lng: 90.414772
//   },
//   {
//     title: "Rider 10",
//     lat: 23.745889,
//     lng: 90.437330
//   }
// ];
