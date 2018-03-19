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
import fontawesome from '@fortawesome/fontawesome';
import faFacebookSquare from '@fortawesome/fontawesome-free-brands/faFacebookSquare';
import faMedium from '@fortawesome/fontawesome-free-brands/faMedium';
import faTwitterSquare from '@fortawesome/fontawesome-free-brands/faTwitterSquare';
import initBall from './ball_animation';


fontawesome.library.add(faFacebookSquare, faMedium, faTwitterSquare);

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
                    left: '19vw',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
                {
                    top: '-500px',
                    left: '40vw',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
                {
                    top: '-500px',
                    left: '60vw',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
                {
                    top: '-500px',
                    left: 'auto',
                    right: '19vw',
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
            parent: { element: document.getElementById('team-section') },
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
                    left: '662px',
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
        }), new LineMaker({
            parent: { element: document.getElementById('faqs-section') },
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
        }),];
    const myVivus = new Vivus('pathx');
    // start loading X animation
    myVivus.play(100, async () => {
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

    //uses classList, setAttribute, and querySelectorAll
//if you want this to work in IE8/9 youll need to polyfill these
    (function () {
        var d = document,
            accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
            setAria,
            setAccordionAria,
            switchAccordion,
            touchSupported = ('ontouchstart' in window),
            pointerSupported = ('pointerdown' in window);

        var skipClickDelay = function (e) {
            e.preventDefault();
            e.target.click();
        }

        var setAriaAttr = function (el, ariaType, newProperty) {
            el.setAttribute(ariaType, newProperty);
        };
        setAccordionAria = function (el1, el2, expanded) {
            switch (expanded) {
                case "true":
                    setAriaAttr(el1, 'aria-expanded', 'true');
                    setAriaAttr(el2, 'aria-hidden', 'false');
                    break;
                case "false":
                    setAriaAttr(el1, 'aria-expanded', 'false');
                    setAriaAttr(el2, 'aria-hidden', 'true');
                    break;
                default:
                    break;
            }
        };
//function
        switchAccordion = function (e) {
            console.log("triggered");
            e.preventDefault();
            var thisAnswer = e.target.parentNode.nextElementSibling;
            var thisQuestion = e.target;
            if (thisAnswer.classList.contains('is-collapsed')) {
                setAccordionAria(thisQuestion, thisAnswer, 'true');
            } else {
                setAccordionAria(thisQuestion, thisAnswer, 'false');
            }
            thisQuestion.classList.toggle('is-collapsed');
            thisQuestion.classList.toggle('is-expanded');
            thisAnswer.classList.toggle('is-collapsed');
            thisAnswer.classList.toggle('is-expanded');

            thisAnswer.classList.toggle('animateIn');
        };
        for (var i = 0, len = accordionToggles.length; i < len; i++) {
            if (touchSupported) {
                accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
            }
            if (pointerSupported) {
                accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
            }
            accordionToggles[i].addEventListener('click', switchAccordion, false);
        }
    })();
});


async function animateNav() {
    const animation = 'fadeInDown';
    // hide nav on section leave
    const $menuItem = $('.menuitem').removeClass(`animated ${animation}`);
    await sleep(500);
    $menuItem.animateCss(animation, false);
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

$.fn.extend({
    animateCss(animationName, remove = true, callback) {
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
            if (remove) {
                $(this).removeClass('animated ' + animationName);
            }
            if (typeof callback === 'function') callback(this);
        });

        return this;
    }
    ,
})
;

