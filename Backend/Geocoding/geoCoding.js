import riderList from "../DataList/rider.js";
import clientList from "../DataList/client.js";
import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })

function filter(data){
    if(data){
       
    }
}

async function  getGeoCoding (){
    try {
        const geocoding_api = process.env.GEOCODING_API
        const address = 'road 10, banasree,rampura,dhaka,bangladesh'//riderList.raider3 + ',dhaka,bangladesh'
        const Geo_link = `https://geocode.maps.co/search?q=${address}&api_key=${geocoding_api}`
        console.log("location" + address)
        const resposnse = await fetch(Geo_link)
        const data = await resposnse.json()
        console.log(data.geometry.location)
    } catch (error) {
        console.log(error)
    }
}

export default getGeoCoding