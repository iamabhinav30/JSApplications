
class StarRating {
    constructor(containerId) {
        // console.log(containerId);
        this.container = document.querySelector(containerId);
        console.log(this);
        console.log(this.container);
        this.stars = this.container.querySelectorAll('.star');
        console.log(this.stars);

        this.filled = 0;

        this.bindEvents();
    }

    bindEvents() {
        this.container.addEventListener('click', (event) => {
            this.onStarClick(event);
        });

        this.container.addEventListener('mouseover', (e) => {
            this.onStarUnselect(e);
        });

        this.container.addEventListener('mouseleave', () => {
            this.restoreRating();
        })
    }

    onStarClick(event) {
        console.log(event);
        const classElem = event.target.classList[0];
        console.log(classElem);
        if (classElem != 'star') return;
        const currentClicked = event.target.dataset.index;
        console.log(currentClicked);

        this.filled = currentClicked;

        this.fillStars(currentClicked);

        this.updateRatingsCount(this.filled);

    }


    fillStars(count) {
        for (let i = 0; i < 5; i++) {
            this.stars[i].classList.remove('star-filled');
        }

        for (let i = 0; i < count; i++) {
            this.stars[i].classList.add('star-filled');
        }
    }

    updateRatingsCount(count) {
        document.getElementById('count').innerText = `Rating Count ${count}`;
    }

    onStarUnselect(event) {
        const currentElemHovered = event.target.dataset.index;
        console.log(currentElemHovered);
        this.fillStars(currentElemHovered)

    }

    restoreRating() {
        this.fillStars(this.filled);
    }
}

new StarRating('#star-container');