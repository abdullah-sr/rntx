import 'typeface-overpass';
import 'normalize.css';
import Vivus from 'vivus';
import $ from 'jquery';
import 'fullpage.js';
import '../css/main.css';


$(document).ready(() => {
    const myVivus = new Vivus('pathx');
    myVivus.play(1, () => {
        myVivus.reset();
        const xtext = document.getElementById('xtext');
        xtext.classList.add('visible');
    });

    $('#fullpage').fullpage({
        verticalCentered: false,
    });
});
