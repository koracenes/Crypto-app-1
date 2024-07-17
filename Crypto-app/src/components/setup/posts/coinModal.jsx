import React from "react";
import "./coinModal.css";

function CoinModal({ open, onClose, coin }) {
  if (!open || !coin) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <div>
          <img src={coin.image} alt={coin.name} />
          <h2>{coin.name}</h2>
          <p>Price: ${parseFloat(coin.current_price).toFixed(2)}</p>
          <p>Market Cap: ${parseFloat(coin.market_cap).toFixed(2)}</p>
          <p>Total Volume: ${parseFloat(coin.total_volume).toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

export default CoinModal;
