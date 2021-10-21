import React from 'react';
import classnames from 'classnames';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

export default function ConfirmationModal({ active, toggle }) {
  const SuccessModal = styled.div`
    background: #df9c37;
    height: 100px;
  `;

  const ModalCard = styled.div`
    width: 30%;
    font-family: 'Lora', serif;

    @media screen and (max-width: 1024px) {
      width: 40%;
    }
    @media screen and (max-width: 768px) {
      width: 60%;
    }
    @media screen and (max-width: 375px) {
      width: 90%;
    }
  `;

  return (
    <>
      <div className={classnames('modal', { 'is-active': active })}>
        <div className="modal-background"></div>
        <ModalCard className="modal-card">
          <SuccessModal className="modal-card-head">
            <div className="modal-card-title has-text-centered has-text-white">
              Thank you <br />
              for reaching out!
            </div>
          </SuccessModal>
          <section className="modal-card-body has-text-centered">
            <p>
              Please allow 2-3 business days for a response to your request. I
              appreciate your patience and interest in working with me.
            </p>
          </section>
          <footer className="modal-card-foot is-flex is-flex-direction-column">
            <div className="is-grouped">
              <button
                className="button has-text-grey	is-outlined has-text-weight-bold is-uppercase"
                style={{
                  width: '200px',
                  fontFamily: 'Lato, serif',
                  letterSpacing: '1.5px',
                }}
                type="button"
                onClick={() => toggle()}
              >
                <span className="icon is-small">
                  <FontAwesomeIcon icon={faTimes} />
                </span>
                <span>Close</span>
              </button>
            </div>
          </footer>
        </ModalCard>
      </div>
    </>
  );
}
