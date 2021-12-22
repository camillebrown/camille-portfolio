import { useCallback, useState } from 'react';

function useModal() {
  const modal = document.getElementById('modal-card');

  const [isModalActive, setIsModalActive] = useState(false);
  const toggleModal = useCallback(() => {
    setIsModalActive((isModalActive) => !isModalActive);
  }, []);

  const closeModal = () => {
    modal.classList.toggle('slide-in-blurred-top');
    modal.classList.toggle('slide-out-blurred-top');
    setTimeout(function () {
      toggleModal()
    }, 1 * 1000);
  };

  return {
    isModalActive,
    setIsModalActive,
    toggleModal,
    closeModal
  };
}

export default useModal;
