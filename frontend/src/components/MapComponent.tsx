import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Moon, Sun, Crosshair, Plus, Minus } from 'lucide-react';

// Fix for default marker icon issues in React Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

interface MapComponentProps {
    center?: [number, number];
    zoom?: number;
    className?: string;
    markers?: Array<{ position: [number, number]; title?: string }>;
}

const RecenterMap: React.FC<{ center: [number, number] }> = ({ center }) => {
    const map = useMap();
    useEffect(() => {
        map.flyTo(center, map.getZoom(), {
            animate: true,
            duration: 1.5
        });
    }, [center, map]);
    return null;
};

// Sub-component for Map Controls to access useMap
const MapToolbar: React.FC<{
    mapTheme: 'dark' | 'light';
    toggleTheme: () => void;
    onLocate: () => void;
}> = ({ mapTheme, toggleTheme, onLocate }) => {
    const map = useMap();

    return (
        <div className="absolute top-4 right-4 z-[1000] flex flex-col gap-1 bg-black/50 backdrop-blur-md border border-white/10 p-1.5 rounded-xl shadow-xl">
            <button
                onClick={() => map.zoomIn()}
                className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
                title="Zoom In"
            >
                <Plus size={20} />
            </button>
            <button
                onClick={() => map.zoomOut()}
                className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
                title="Zoom Out"
            >
                <Minus size={20} />
            </button>
            <div className="h-px w-full bg-white/10 my-0.5"></div>
            <button
                onClick={onLocate}
                className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
                title="Locate Me"
            >
                <Crosshair size={20} />
            </button>
            <div className="h-px w-full bg-white/10 my-0.5"></div>
            <button
                onClick={toggleTheme}
                className="p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
                title="Toggle Theme"
            >
                {mapTheme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
        </div>
    );
};

const MapComponent: React.FC<MapComponentProps> = ({
    center: initialCenter = [12.9716, 77.5946], // Default to Bangalore
    zoom = 13,
    className = "h-full w-full",
    markers = []
}) => {
    const [mapTheme, setMapTheme] = useState<'dark' | 'light'>('dark');
    const [currentPosition, setCurrentPosition] = useState<[number, number]>(initialCenter);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCurrentPosition([position.coords.latitude, position.coords.longitude]);
                },
                (error) => {
                    console.error("Error getting location:", error);
                }
            );
        }
    }, []);

    const toggleTheme = () => {
        setMapTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    const handleLocateMe = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setCurrentPosition([position.coords.latitude, position.coords.longitude]);
                },
                (error) => {
                    console.error("Error getting location:", error);
                    alert("Could not fetch your location.");
                }
            );
        }
    };

    const tileUrl = mapTheme === 'dark'
        ? "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        : "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png";

    return (
        <div className="relative h-full w-full group overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
            <MapContainer
                center={currentPosition}
                zoom={zoom}
                className={className}
                scrollWheelZoom={true}
                zoomControl={false} // Disable default zoom control
                attributionControl={false} // Remove default attribution
                style={{ height: '100%', width: '100%', borderRadius: 'inherit', background: '#242424' }}
            >
                <TileLayer
                    url={tileUrl}
                />
                <RecenterMap center={currentPosition} />

                {/* Current Location Marker */}
                <Marker position={currentPosition}>
                    <Popup>You are here</Popup>
                </Marker>

                {markers.map((marker, idx) => (
                    <Marker key={idx} position={marker.position}>
                        {marker.title && <Popup>{marker.title}</Popup>}
                    </Marker>
                ))}

                {/* Map Toolbar */}
                <MapToolbar
                    mapTheme={mapTheme}
                    toggleTheme={toggleTheme}
                    onLocate={handleLocateMe}
                />
            </MapContainer>

            {/* Input Overlay Buttons */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[1000] flex gap-4 w-full max-w-md px-4">
                <button className="flex-1 bg-black/80 backdrop-blur-md text-white py-3 px-6 rounded-xl border border-white/10 shadow-lg font-medium hover:bg-black transition-colors flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    Pick Up
                </button>
                <button className="flex-1 bg-white/90 backdrop-blur-md text-black py-3 px-6 rounded-xl border border-white/10 shadow-lg font-medium hover:bg-white transition-colors flex items-center justify-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    Drop Off
                </button>
            </div>
        </div>
    );
};

export default MapComponent;
