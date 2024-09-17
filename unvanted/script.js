// Function to open tabs
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tab content
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove active class from all tab links
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Function to handle modal logic
document.addEventListener('DOMContentLoaded', () => {
    const requirementsBtns = document.querySelectorAll('.requirements-btn');
    const modalOverlay = document.getElementById('modal-overlay');
    const closeModalBtn = document.getElementById('close-modal');
    const modalBody = modalOverlay.querySelector('.modal-body');

    requirementsBtns.forEach(button => {
        button.addEventListener('click', () => {
            // Hide all other requirements in modal
            modalBody.querySelectorAll('.requirements').forEach(requirement => {
                requirement.classList.add('hidden');
            });

            // Show the correct requirements table
            const targetId = button.getAttribute('data-target');
            const targetRequirements = document.getElementById(`requirements-${targetId}`);
            targetRequirements.classList.remove('hidden');

            // Show modal
            modalOverlay.classList.remove('hidden');
        });
    });

    // Close modal logic
    closeModalBtn.addEventListener('click', () => {
        modalOverlay.classList.add('hidden');
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            modalOverlay.classList.add('hidden');
        }
    });
});
