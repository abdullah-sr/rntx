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
    const projectSection = document.getElementById('project-section');
    const pressSection = document.getElementById('press-section');
    const papersSection = document.getElementById('papers-section')
    const coreSection = document.getElementById('core-section')
    const renteridSection = document.getElementById('renterid-section')
    const renteriqSection = document.getElementById('renteriq-section')
    const renterScoreSection = document.getElementById('renterscore-section')
    const tokenSection = document.getElementById('token-section')
    const saleSection = document.getElementById('sale-section')
    const teamSection = document.getElementById('team-section')
    const advisorsSection = document.getElementById('advisors-section')
    const faqsSection = document.getElementById('faqs-section')
    const lineMakers = [
        null, // no lines for first slide
        new LineMaker({
            parent: { element: projectSection },
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
            parent: { element: pressSection },
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
            parent: { element: papersSection },
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
            parent: { element: coreSection },
            lines: [
                {
                    top: '-500px',
                    left: '-200px',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
                {
                    top: '-500px',
                    left: '90px',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
                {
                    top: '-500px',
                    left: '370px',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
                {
                    top: '-500px',
                    left: '660px',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
            ]
        }), new LineMaker({
            parent: { element: renteridSection },
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
            parent: { element: renteriqSection },
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
            parent: { element: renterScoreSection },
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
            parent: { element: tokenSection },
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
            parent: { element: saleSection },
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
            parent: { element: teamSection },
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
            parent: { element: advisorsSection },
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
            parent: { element: faqsSection },
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
                    left: '307px',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
                {
                    top: '-500px',
                    left: '601px',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
                {
                    top: '-500px',
                    left: '892px',
                    width: 1,
                    height: '200vh',
                    color: '#0b0b0b',
                },
            ]
        }),];
    const $titleContainer = $('#title-container');
    const $contentp = $('#contentp');
    const $projectH2 = $('#project-h2');
    const $projectReasons = $('#project-reasons');
    const $pressSection = $('#press-section');
    const $pressH2 = $('#press-h2');
    const $projectSection = $('#papers-section');
    const $papersH2 = $('#papers-h2');
    const $paperLinks = $('#paperlinks');
    const $coreSection = $('#core-section');
    const $renterIdH2 = $('#renterid-h2');
    const $renterIdFlex = $('#renterid-flex');
    const $renterIqH2 = $('#renteriq-h2');
    const $renterIqFlex = $('#renteriq-flex');
    const $rScoreH2 = $('#rscore-h2');
    const $rScoreFlex = $('#rscore-flex');
    const $tokenH2 = $('#token-h2');
    const $tokenFlex = $('#token-flex');
    const $tokenSaleH2 = $('#tokensale-h2');
    const $teamH2 = $('#team-h2');
    const $flexTeam = $('#flex-team');
    const $advisorsH2 = $('#advisors-h2');
    const $flexAdvisors = $('#flex-advisors');
    const $flexFaq = $('#flex-faq');
    const $faqH2 = $('#faq-h2');
    const myVivus = new Vivus('pathx');
    // start loading X animation
    myVivus.play(1, async () => {
        myVivus.reset();
        $('#xtext').fadeIn(1000, () => {
            // fade out of loading screen
            $('#loading').fadeOut(700);
            $('#fullpage').fullpage({
                verticalCentered: false,
                scrollingSpeed: 900,
                loopBottom: false,
                loopTop: false,
                onLeave: (index, nextIndex) => {
                    animateNav();
                    const currentSlideIdx = nextIndex - 1;
                    if (currentSlideIdx == 0) {
                        $titleContainer.animateCss('fadeInDown');
                    }
                    if (currentSlideIdx == 1) {
                        $contentp.animateCss('fadeIn');
                        $projectH2.animateCss('slideInRight');
                        $projectReasons.animateCss('slideInUp');
                    }
                    if (currentSlideIdx == 2) {
                        $pressSection.animateCss('fadeIn');
                        $pressH2.animateCss('slideInRight');
                    }
                    if (currentSlideIdx == 3) {
                        $projectSection.animateCss('fadeIn');
                        $papersH2.animateCss('slideInRight');
                        $paperLinks.animateCss('slideInUp');
                    }
                    if (currentSlideIdx == 4) {
                        $coreSection.animateCss('slideInUp');
                    }
                    if (currentSlideIdx == 5) {
                        $renterIdH2.animateCss('slideInRight');
                        $renterIdFlex.animateCss('fadeInUp');
                    }
                    if (currentSlideIdx == 6) {
                        $renterIqH2.animateCss('slideInRight');
                        $renterIqFlex.animateCss('fadeInUp');
                    }
                    if (currentSlideIdx == 7) {
                        $rScoreH2.animateCss('slideInRight');
                        $rScoreFlex.animateCss('fadeInUp');
                    }
                    if (currentSlideIdx == 8) {
                        $tokenH2.animateCss('slideInRight');
                        $tokenFlex.animateCss('fadeInUp');
                    }
                    if (currentSlideIdx == 9) {
                        $tokenSaleH2.animateCss('slideInRight');
                    }
                    if (currentSlideIdx == 10) {
                        $teamH2.animateCss('slideInRight');
                        $flexTeam.animateCss('fadeInUp');
                    }
                    if (currentSlideIdx == 11) {
                        $advisorsH2.animateCss('slideInRight');
                        $flexAdvisors.animateCss('fadeInUp');
                    }
                    if (currentSlideIdx == 12) {
                        $flexFaq.animateCss('fadeInUp');
                        $faqH2.animateCss('slideInRight');
                    }
                    if (lineMakers[index - 1])
                        lineMakers[index - 1].hideLines(index - 1);
                    if (lineMakers[currentSlideIdx])
                        lineMakers[currentSlideIdx].animateLinesIn(currentSlideIdx);
                },
            });
            initBall();
            animateNav();
        });
    });
    const $menuItem = $('.menuitem');
    async function animateNav() {
        const animation = 'fadeInDown';
        // hide nav on section leave
        $menuItem.removeClass(`animated ${animation}`);
        await sleep(500);
        $menuItem.animateCss(animation, false);
    }

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
});
