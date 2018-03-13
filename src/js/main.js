// css
import 'normalize.css';
import 'typeface-overpass';
import 'typeface-overpass-mono';
import 'animate.css';
import '../css/decolines.css';
import '../css/main.css';
// js
import Vivus from 'vivus';
import $ from 'jquery';
import 'fullpage.js';
import initBall from './ball_animation';


$(document).ready(() => {
    require('./LineMaker');
    const myVivus = new Vivus('pathx');
    // start loading X animation
    myVivus.play(1, async () => {
        myVivus.reset();
        $('#xtext').fadeIn(1000, () => {
            // fade out of loading screen
            $('#loading').fadeOut(700);
            $('#fullpage').fullpage({
                verticalCentered: false,
                onLeave: animateNav,
            });
            initBall();
            animateNav();
            lineMaker.animateLinesIn();
        });
    });
    var lineMaker = new LineMaker({
        parent: { element: document.getElementById('test') },
        lines: [
            {
                top: '-100%',
                left: '15px',
                width: 1,
                height: '200vh',
                color: '#c7c6c6',
                hidden: true,
                animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }
            },
            {
                top: '-100%',
                left: '335px',
                width: 1,
                height: '200vh',
                color: '#c7c6c6',
                hidden: true,
                animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }
            },
            {
                top: '-100%',
                left: '655px',
                width: 1,
                height: '200vh',
                color: '#c7c6c6',
                hidden: true,
                animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }
            },
            {
                top: '-100%',
                right: '15px',
                width: 1,
                height: '200vh',
                color: '#c7c6c6',
                hidden: true,
                animation: { duration: 2000, easing: 'easeInOutExpo', delay: 0, direction: 'TopBottom' }
            },
        ]
    });
});


async function animateNav() {
    const animation = 'fadeInDown';
    // hide nav on section leave
    const $menuItem = $('.menuitem').removeClass(`animated ${animation}`);
    await sleep(500);
    $menuItem.animateCss(animation);
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
        });

        return this;
    },
});
