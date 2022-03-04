const panels = document.querySelectorAll('.panel'); //creating a panels constant, to select all the '.panel' divs
panels.forEach ( //looping through each and every panel div.
    panel => {
        panel.addEventListener ( //adding an event listener, to perform an action when clicked.
            'click', () => {
                removeActiveClasses()
                panel.classList.add('active'); //when panel clicked, it should behave like the active panel
            }
        )
    }
)

function removeActiveClasses () {
    panels.forEach (
        panel => {
            panel.classList.remove('active');
        }
    )
}