// css
import 'normalize.css';
import 'typeface-overpass';
import 'animate.css';
import '../css/main.css';
// js
import Vivus from 'vivus';
import $ from 'jquery';
import 'fullpage.js';
import initBall from './ball_animation';


$(document).ready(() => {

    const myVivus = new Vivus('pathx');
    myVivus.play(10, async () => {
        myVivus.reset();
        const xtext = document.getElementById('xtext');
        xtext.classList.add('visible');
        await sleep(1000);
        $('#fullpage').fullpage({
            verticalCentered: false,
            onLeave: animateNav,
        });
        initBall();
        $('#loading').fadeOut(700);
    });
});


async function animateNav() {
    const animation = 'fadeInDown';
    // hide nav on section leave
    const $menuItem = $('.menuitem').removeClass(`visible animated ${animation}`);
    await sleep(500);
    $menuItem.animateCss(animation, (ele) => {
        ele.addClass('visible');
    });
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

$.fn.extend({
    animateCss(animationName, callback) {
        const animationEnd = ((el) => {
            const animations = {
                animation: 'animationend',
                OAnimation: 'oAnimationEnd',
                MozAnimation: 'mozAnimationEnd',
                WebkitAnimation: 'webkitAnimationEnd',
            };

            for (const t in animations) {
                if (el.style[t] !== undefined) {
                    return animations[t];
                }
            }
        })(document.createElement('div'));

        this.addClass('animated ' + animationName).one(animationEnd, () => {
            if (typeof callback === 'function') callback(this);
            $(this).removeClass('animated ' + animationName);
        });

        return this;
    },
});
