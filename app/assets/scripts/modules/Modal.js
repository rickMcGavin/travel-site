import $ from 'jquery';

class Modal {
	constructor() {
		this.openModalButton = $('.open-modal');
		this.modal = $('.modal');
		this.closeModalButton = $('.modal__close');
		this.events();
	}

	events() {
		// clicking the open modal button
		this.openModalButton.click(this.openModal.bind(this));
		// click the x close modal button
		this.closeModalButton.click(this.closeModal.bind(this));
		// user pushes the esc key
		$(document).keyup(this.keyPressHandler.bind(this));
	}

	keyPressHandler(e) {
		if (e.keyCode == 27) {
			this.closeModal();
		}
	}

	openModal() {
		this.modal.addClass('modal--is-visible');
		return false; // prevents default behavior of scrolling up when an a element has # for link
	}

	closeModal() {
		this.modal.removeClass('modal--is-visible');
	}
}

export default Modal;