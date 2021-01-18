import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import styled from "styled-components"
import xminerLogo from "../../images/xminer-logo.png"

const MapStyles = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  justify-§ent: flex-end;
  .leaflet-container {
    width: 594px !important;
    height: 441px !important;
    border-radius: 20px;
  }
  @media only screen and (max-width: 1425px) {
    .leaflet-container {
      width: 456px !important;
    }
  }
  @media only screen and (max-width: 1182px) {
    justify-content: stretch;
    .leaflet-container {
      width: 100% !important;
    }
  }
  @media only screen and (max-width: 480px) {
    justify-content: stretch;
    margin: 0 -30px !important;
    display: block;
    .leaflet-container {
      width: calc(100% + 60px) !important;
      border-radius: 0;
      a {
        font-weight: 500;
        color: var(--primary);
      }
    }
  }
`

const LeafletMap = ({ markerText }) => (
  <MapStyles>
    {typeof window !== "undefined" ? (
      <MapContainer
        center={[52.1649978, 20.9079765]}
        zoom={13}
        style={{ width: "100%", height: "900px" }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='<a rel="noopener noreferrer" target="_blank" href="https://goo.gl/maps/uyGjs4NNDXmKnkjq5">Xminer</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markerText !== "" && (
          <Marker position={[52.1649978, 20.9079765]}>
            <Popup>
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://goo.gl/maps/uyGjs4NNDXmKnkjq5"
              >
                Xminer sp. z o.o.
              </a>
            </Popup>
          </Marker>
        )}
      </MapContainer>
    ) : null}
  </MapStyles>
)

export default LeafletMap
