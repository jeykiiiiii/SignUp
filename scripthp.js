const wrappers = document.querySelectorAll('.wrapper');

function handleWrapperClick(event) {
    const wrapper = event.currentTarget;
    const image = wrapper.querySelector('img');

    const characterName = wrapper.dataset.character;
    const message = `You have chosen ${characterName}!`;

    alert(message);
    alert("The game is under construction. Please wait for further updates!");

    const modalContainer = document.querySelector('.modal-container');
    if (modalContainer) {
        modalContainer.remove();
    }
}

wrappers.forEach(wrapper => {
    wrapper.addEventListener('click', handleWrapperClick);
});

function logout() {
    window.location.href = 'index.html';
}