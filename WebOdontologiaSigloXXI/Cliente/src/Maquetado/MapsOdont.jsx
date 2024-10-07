import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import './MapsOdont.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-icon.png';

let IconoUbicacion = new L.icon({
  iconUrl: icon,
  iconShadow: iconShadow,
  iconSize: [20, 25],
  iconAnchor: [22, 94],
  shadowAnchor: [22, 94],
  popupAnchor: [-3, 76],
})

export default function MapaSedes() {

  return (
    <>
      <div className='container-map'>
        <MapContainer center={[-34.60224554337514, -58.41615653593277]} zoom={10} scrollWheelZoom={false} className="mapa-sedes">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[-34.571018, -58.459039]} icon={IconoUbicacion}>
            <Popup>
              Sede Colegiales <br /> Av Los Incas 3152.
            </Popup>
          </Marker>
          <Marker position={[-34.683279, -58.458281]} icon={IconoUbicacion}>
            <Popup>
              Sede Mataderos <br />Larrazabal 5146.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </>
  )
}