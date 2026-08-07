'use strict';

const elemWall = document.querySelector('.wall');
const rectWall = elemWall.getBoundingClientRect();
const elemSpider = document.querySelector('.spider');
const rectSpider = elemSpider.getBoundingClientRect();

elemSpider.style.left = (rectWall.width - rectSpider.width) / 2 + 'px';
elemSpider.style.top = (rectWall.height - rectSpider.height) / 2 + 'px';
