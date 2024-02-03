import React, { useState } from 'react';
import '../styles/burgerButton.scss';
import NavBar from './navBar';

function BurgerButton() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <>
            <button
                className={`burger-button ${isModalOpen ? 'active' : ''}`}
                type="button"
                onClick={toggleModal}
            >
                <span></span>
            </button>
            <NavBar isOpen={isModalOpen} onClose={toggleModal} />
        </>
    );
}

export default BurgerButton;