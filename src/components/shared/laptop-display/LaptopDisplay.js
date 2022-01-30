import React from 'react';

import './laptop_display.css';

export default function LaptopDisplay({ img }) {
  return (
    <div className="section-device">
      <div id="macbook" className="container grid-xl text-center">
        <div className="columns">
          <div className="column col-12">
            <div className="dots">
              <div
                className="dot tooltip"
                style={{ background: '#e2e3e4' }}
                data-tooltip="device-silver (default)"
              />
              <div
                className="dot tooltip"
                style={{ background: '#f7e8dd' }}
                data-tooltip="device-gold"
              />
              <div
                className="dot tooltip"
                style={{ background: '#facfc9' }}
                data-tooltip="device-rosegold"
              />
              <div
                className="dot tooltip"
                style={{ background: '#83878a' }}
                data-tooltip="device-spacegray"
              />
            </div>
          </div>
          <div className="column col-12">
            <div className="device device-macbook device-spacegray">
              <div className="device-frame">
                <img
                  className="device-content"
                  src={img}
                  alt="Laptop Display"
                />
              </div>
              <div className="device-stripe" />
              <div className="device-header" />
              <div className="device-sensors" />
              <div className="device-btns" />
              <div className="device-power" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
