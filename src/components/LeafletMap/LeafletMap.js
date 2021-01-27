import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import styled from "styled-components"

const MapStyles = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: flex-end;

  .leaflet-container {
    width: 594px !important;
    height: 441px !important;
    border-radius: 20px;
    a {
      color: var(--primary);
      font-weight: bold;
      text-align: center;

      &.leaflet-popup-close-button {
        color: var(--primary);
        transition: transform 0.15s cubic-bezier(0.55, 0.085, 0.68, 0.53);
        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
  @media only screen and (max-width: 1425px) {
    .leaflet-container {
      width: 456px !important;
    }
  }
  @media only screen and (max-width: 1182px) {
    margin-top: 40px;
    justify-content: stretch;
    .leaflet-container {
      width: 100% !important;
    }
  }
`

const LeafletMap = ({ markerText, className }) => (
  <>
    {typeof window !== "undefined" ? (
      <MapStyles className={className}>
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
                  <br />
                  Jak do nas trafić?
                </a>
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </MapStyles>
    ) : null}
  </>
)

export default LeafletMap
