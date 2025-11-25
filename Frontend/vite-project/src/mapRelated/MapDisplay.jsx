import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup, Rectangle } from 'react-leaflet'
import classes from './MapDisplay.module.css'

function  MapDisplay(){
    const rectangle = [
        [51.49, -0.08],
        [51.5, -0.06],
    ]
    const rampuraAreaDemo =  [ [23.7426126, 90.4005675 ],[23.7826126 , 90.4405675], ]
    const blackOptions = { color: 'black' }
    return(
        <MapContainer className={classes.MapContainer} center={[23.7626126,90.4205675]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
                <Rectangle bounds={rampuraAreaDemo} pathOptions={blackOptions} />
            </Marker>
        </MapContainer>
    )
}

export default MapDisplay