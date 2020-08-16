document.addEventListener('DOMContentLoaded', function () {
    var imgUlEle = document.querySelector('.focus_news .carousel-images');
    var toolLastEle = document.querySelector('.focus_news .carousel-toggle_tool .last');
    var toolNextEle = document.querySelector('.focus_news .carousel-toggle_tool .next');

    toolLastEle.addEventListener('click', function (e) {
        toggle(-1)
    })

    toolNextEle.addEventListener('click', function (e) {
        toggle(1)
    })


    var total = imgUlEle.querySelectorAll('.carousel-img').length;
    imgUlEle.appendChild(imgUlEle.children[0].cloneNode(true));

    var index = 0, num = 1, internal;
    function toggle(direction) {
        index += direction;
        var width = imgUlEle.querySelector('.carousel-img').offsetWidth;

        if (index > total) {
            imgUlEle.style.left = 0;
            index = 1;
        }

        if (index < 0) {
            imgUlEle.style.left = -width * (total) + 'px';
            index = total - 1;
        }

        rollTo(imgUlEle, - index * width);

        num = index === total ? 1: index + 1;
        document.querySelector('.current_index').innerText = ('0' + num).length > 2 ? num: ('0' + num);
        document.querySelector('.current_progress_line').style.width = num * 120 + 'px';
    }

    function rollTo(dom, finalOffsetLeft) {
        clearInterval(internal);
        var t = 5;
        var d = finalOffsetLeft - dom.offsetLeft > 0 ? 15 : -15;

        internal = setInterval(function () {
            if (Math.abs(finalOffsetLeft - dom.offsetLeft) < Math.abs(d)) {
                clearInterval(internal);
                dom.style.left = finalOffsetLeft + 'px';
            } else {
                dom.style.left = dom.offsetLeft + d + 'px';
            }
        }, t)
    }
})


