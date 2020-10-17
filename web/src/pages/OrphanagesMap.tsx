import React from 'react';

import mapMarkerIcon from './../images/mapmarker.svg';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';

import 'leaflet/dist/leaflet.css';

import { Map, TileLayer } from 'react-leaflet';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap(){
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerIcon} alt="Happy"/>

                    <h2>Escolha um orfanato</h2>

                    <p>Muitas crianças estão esperando a sua visita</p>

                </header>

                <footer>
                    <strong>Praia Grande / SP</strong>
                </footer>

                <Link to="/" className="createOrphanage">
                    <FiPlus size={26} color="#fff"/>
                </Link>

            </aside>


            <Map 
                center={[-24.0302294,-46.4948821]}
                zoom={15}
                style={{
                    width: '100%',
                    height: '100%'
                }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            </Map>
        </div>
    
    );
}

export default OrphanagesMap;