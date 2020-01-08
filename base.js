/**
 * Scroll behavior
 *
 */
function scroll() {
    //Get all elements that has hrefs with #
    let targets = document.querySelectorAll('a[href^="#"]');

    for (let i = 0; i < targets.length; i++) {
        targets[i].onclick = function (e) {
            e.preventDefault();

            let hash = this.getAttribute("href");
            let elem = document.getElementById(hash.replace("#", ""));

            elem.scrollIntoView({ left: 0, block: 'start', behavior: 'smooth' });
        }
    }
}
scroll();

/*******************
 * Button toTop
 ********************/
let toTopButton = document.getElementById("toTop");

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        toTopButton.style.display = "block";
    } else {
        toTopButton.style.display = "none";
    }
}

window.onscroll = function() {scrollFunction()};

function scrollToTop(){
    window.scrollTo({top: 0, behavior: 'smooth'});
}


/*******************
 * Accordion
 ********************/
//Get all accordions
let accordions = document.getElementsByClassName('accordion');

//loop over accordions
for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function () {
        //toggle class 'active' to the button of accordion
        this.classList.toggle('active');

        //get the panel beloging to specific button that was clicked
        let panel = this.nextElementSibling;

        //toggle display between 'block' and 'none'
        panel.style.maxHeight ? panel.style.maxHeight = null : panel.style.maxHeight = panel.scrollHeight + 'px';
    });
}


const btns = document.querySelectorAll('button');

for (let i = 0; i < btns.length; i++){

    btns[i].addEventListener('click', function () {

        if(btns[i].previousElementSibling !== null){

            let url = window.location.href.split('#');

            let fullUrl =  url[0] + '#' + btns[i].previousElementSibling.id;

            navigator.clipboard.writeText(fullUrl).then(function() {

                let successMessage = document.getElementById('success');

                successMessage.style.display = 'block';
                successMessage.children[0].innerHTML = 'URL was successfully copyied to the clipboard!';

                setTimeout(function () {
                    successMessage.style.display = 'none';
                }, 3000);

            }, function(err) {
                successMessage.children[0].innerHTML = 'URL was not copyied to the clipboard!';
            });
        }

    })
}
