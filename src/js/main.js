import 'typeface-overpass';
import 'normalize.css';
import Vivus from 'vivus';
import $ from 'jquery';
import 'fullpage.js';
import '../css/main.css';
import initBall from './ball_animation';


$(document).ready(() => {
    $('#fullpage').fullpage({
        verticalCentered: false,
    });

    const xshape = document.getElementById('xshape');
    xshape.classList.add('visible');

    const myVivus = new Vivus('pathx');
    myVivus.play(1, () => {
        myVivus.reset();
        const xtext = document.getElementById('xtext');
        xtext.classList.add('visible');
    });

    initBall();
});
