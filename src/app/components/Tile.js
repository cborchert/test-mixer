import React, { Component } from "react";
import PropTypes from "prop-types";

import TileVideo from "./TileVideo";

class Tile extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { participant, nbParticipant } = this.props;
    console.log(participant);
    return (
      <div
        id="tile-item"
        className={
          "tile-item tile-" +
          nbParticipant +
          (participant.isConnected
            ? " participant-available"
            : " participant-offline")
        }
      >
        <h1
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            "z-index": "1",
            color: "white",
          }}
        >
          {participant.name}
        </h1>
        <TileVideo stream={participant.stream} participant={participant} />
      </div>
    );
  }
}

Tile.propTypes = {
  participant: PropTypes.object.isRequired,
  nbParticipant: PropTypes.number.isRequired,
};

export default Tile;
