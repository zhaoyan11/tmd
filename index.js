document.addEventListener('DOMContentLoaded', function () {
    let carouselEle = document.querySelector('.focus_news .carousel');
    let imagesEle = document.querySelector('.focus_news .carousel-images');
    let toolLastEle = document.querySelector('.focus_news .carousel-toggle_tool .last');
    let toolNextEle = document.querySelector('.focus_news .carousel-toggle_tool .next');

    toolLastEle.addEventListener('click', function (e) {
        toggle(-1)
    })

    toolNextEle.addEventListener('click', function (e) {
        toggle(1)
    })
})


let index = 1;
function toggle(direction) {
    let imagesEle = document.querySelector('.focus_news .carousel-images');
    let imgWidth = imagesEle.querySelector('.carousel-img').offsetWidth;
    let total = imagesEle.querySelectorAll('.carousel-img').length;

    index+=direction;
    if (index === total+1) {
        index = 1
    }
    if (index === 0) {
        index = 5
    }

    imagesEle.style.left = (1-index) * imgWidth + 'px';
    document.querySelector('.current_index').innerText = '0'+index;
    document.querySelector('.current_progress_line').style.width = index * 120 + 'px';

}


