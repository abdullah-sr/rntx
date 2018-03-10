import 'babel-polyfill';
import 'typeface-overpass';
import 'normalize.css';
import Vivus from 'vivus';
import $ from 'jquery';
import 'fullpage.js';
import '../css/main.css';
import initBall from './ball_animation';


$(document).ready(() => {

    const myVivus = new Vivus('pathx');
    myVivus.play(1, async () => {
        myVivus.reset();
        const xtext = document.getElementById('xtext');
        xtext.classList.add('visible');
        await sleep(1000);
        $('#fullpage').fullpage({
            verticalCentered: false,
        });
        initBall();
        $('#loading').fadeOut(700);
    });
});


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}