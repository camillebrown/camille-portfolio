import React from 'react';
import classNames from 'classnames';

import './modal.css';
import { sent } from '../../../assets/images';

export default function SuccessModal({ closeModal, isModalActive }) {

  return (
    <div className={classNames('modal', { 'is-active': isModalActive })}>
      <div className="modal-background"></div>
      <div className="modal-card slide-in-blurred-top" id='modal-card'>
        <header className="modal-card-head" />
        <section className="modal-card-body">
          <div className="gif-container">
            <img src={sent} alt="email gif" />
            <div className="success-checkmark">
              <div className="check-icon">
                <span className="icon-line line-tip"></span>
                <span className="icon-line line-long"></span>
                <div className="icon-circle"></div>
                <div className="icon-fix"></div>
              </div>
            </div>
          </div>
          <div className="modal-card-body_content">
            <h1>Thank You!</h1>
            <p>I'll be in touch within the next few days.</p>
          </div>
        </section>
        <footer className="modal-card-foot">
          <button className="button" onClick={closeModal}>
            Close
          </button>
        </footer>
      </div>
    </div>
  );
}
