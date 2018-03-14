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
    const lineMakers = [
        null, // no lines for first slide
        new LineMaker({
            parent: { element: document.getElementById('project-section') },
            lines: [
                {
                    top: '-500px',
                    left: '15px',
                    width: 1,
                    height: '200vh',
                    color: '#f2f2f2',
                },
                {
                    top: '-500px',
                    left: '335px',
                    width: 1,
                    height: '200vh',
                    color: '#f2f2f2',
                },
                {
                    top: '-500px',
                    left: '655px',
                    width: 1,
                    height: '200vh',
                    color: '#f2f2f2',
                },
                {
                    top: '-500px',
                    left: 'auto',
                    right: '15px',
                    width: 1,
                    height: '200vh',
                    color: '#f2f2f2',
                },
            ]
        }), new LineMaker({
            parent: { element: document.getElementById('press-section') },
            lines: [
                {
                    top: '-500px',
                    left: '15px',
                    width: 1,
                    height: '200vh',
                    color: '#f2f2f2',
                },
                {
                    top: '-500px',
                    left: '338px',
                    width: 1,
                    height: '200vh',
                    color: '#f2f2f2',
                },
                {
                    top: '-500px',
                    left: '661px',
                    width: 1,
                    height: '200vh',
                    color: '#f2f2f2',
                },
                {
                    top: '-500px',
                    left: 'auto',
                    right: '15px',
                    width: 1,
                    height: '200vh',
                    color: '#f2f2f2',
                },
            ]
        }), new LineMaker({
            parent: { element: document.getElementById('papers-section') },
            lines: [
                {
                    top: '-500px',
                    left: '15px',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
                {
                    top: '-500px',
                    left: '335px',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
                {
                    top: '-500px',
                    left: '655px',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
                {
                    top: '-500px',
                    left: 'auto',
                    right: '15px',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
            ]
        }), new LineMaker({
            parent: { element: document.getElementById('core-section') },
            lines: [
                {
                    top: '-500px',
                    left: '-300px',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
                {
                    top: '-500px',
                    left: '60px',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
                {
                    top: '-500px',
                    left: '360px',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
                {
                    top: '-500px',
                    left: '660px',
                    right: '15px',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
            ]
        }), new LineMaker({
            parent: { element: document.getElementById('renterid-section') },
            lines: [
                {
                    top: '-500px',
                    left: '15px',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
                {
                    top: '-500px',
                    left: '422px',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
                {
                    top: '-500px',
                    left: '829px',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
                {
                    top: '-500px',
                    left: 'auto',
                    right: '0',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
            ]
        }), new LineMaker({
            parent: { element: document.getElementById('renteriq-section') },
            lines: [
                {
                    top: '-500px',
                    left: '15px',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
                {
                    top: '-500px',
                    left: '422px',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
                {
                    top: '-500px',
                    left: '829px',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
                {
                    top: '-500px',
                    left: 'auto',
                    right: '0',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
            ]
        }), new LineMaker({
            parent: { element: document.getElementById('renterscore-section') },
            lines: [
                {
                    top: '-500px',
                    left: '15px',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
                {
                    top: '-500px',
                    left: '422px',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
                {
                    top: '-500px',
                    left: '829px',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
                {
                    top: '-500px',
                    left: 'auto',
                    right: '0',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
            ]
        }), new LineMaker({
            parent: { element: document.getElementById('token-section') },
            lines: [
                {
                    top: '-500px',
                    left: '15px',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
                {
                    top: '-500px',
                    left: '422px',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
                {
                    top: '-500px',
                    left: '829px',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
                {
                    top: '-500px',
                    left: 'auto',
                    right: '0',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
            ]
        }), new LineMaker({
            parent: { element: document.getElementById('sale-section') },
            lines: [
                {
                    top: '-500px',
                    left: '15px',
                    width: 1,
                    height: '200vh',
                    color: '#f2f2f2',
                },
                {
                    top: '-500px',
                    left: '422px',
                    width: 1,
                    height: '200vh',
                    color: '#f2f2f2',
                },
                {
                    top: '-500px',
                    left: '829px',
                    width: 1,
                    height: '200vh',
                    color: '#f2f2f2',
                },
                {
                    top: '-500px',
                    left: 'auto',
                    right: '0',
                    width: 1,
                    height: '200vh',
                    color: '#f2f2f2',
                },
            ]
        }),];
    const myVivus = new Vivus('pathx');
    // start loading X animation
    myVivus.play(50, async () => {
        myVivus.reset();
        $('#xtext').fadeIn(1000, () => {
            // fade out of loading screen
            $('#loading').fadeOut(700);
            $('#fullpage').fullpage({
                verticalCentered: false,
                onLeave: (index, nextIndex) => {
                    animateNav();
                    if (lineMakers[index - 1])
                        lineMakers[index - 1].hideLines(index - 1);
                    if (lineMakers[nextIndex - 1])
                        lineMakers[nextIndex - 1].animateLinesIn(nextIndex - 1);
                },
            });
            initBall();
            animateNav();
        });
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
