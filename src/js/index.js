import Component from './utils/component';
import { isString, isObject, isPromise, isFunction } from './utils/type';
import defaultOptions from './defaultOptions';

export default class BulmaCarousel extends Component {
    constructor(element, options = {}) {
        super(element, options, defaultOptions);
        
		//Bind events to current class
		// this._onTransitionEnd = this._onTransitionEnd.bind(this);
		this._onNextClick = this._onNextClick.bind(this);
		this._onPreviousClick = this._onPreviousClick.bind(this);
		this._onIndicatorClick = this._onIndicatorClick.bind(this);
        
        this._currentIndex = 0; // index of selected item

		// Initiate plugin
		this._init();
	}

	/**
	 * Initiate all DOM element corresponding to selector
	 * @method
	 * @return {Array} Array of all Plugin instances
	 */
	static attach(selector = '.carousel', options = {}, container = null) {
		return super.attach(selector, options, container);
	}

	/**
	 * Initiate plugin
	 * @method init
	 * @return {void}
	 */
	_init() {
        this.slides = this.element.querySelectorAll('.carousel-item') || [];

        this.slidesContainer = this.element.querySelector('.carousel-container');

        this.slidesIndicators = this.element.querySelectorAll('.carousel-indicator') || [];

        this._build();
    }

    /**
     * Build TagsInput DOM elements
     */
    _build() {
        this._updateIndicators();

        this.slidesContainer.style.left = '-100%';
        this.slidesContainer.style.transform = 'translateX(100%)';

        this._bindEvents();
    }

    /**
     * Bind all events listener
     */
    _bindEvents() {
        this.nextTriggers = this.element.querySelectorAll('[data-slide="next"]') || [];
        this.nextTriggers.forEach(nextTrigger => {
            nextTrigger.addEventListener('click', this._onNextClick);
        });
        
        this.prevTriggers = this.element.querySelectorAll('[data-slide="previous"]') || [];
        this.prevTriggers.forEach(prevTrigger => {
            prevTrigger.addEventListener('click', this._onPreviousClick);
        });

        // after each item slides in, slider container fires transitionend event
		// this.slidesContainer.addEventListener('transitionend', this._onTransitionEnd);
    }

    /**
     * Get next available slide index based on direction
     * 
     * @param {Integer} direction (-1: previous / 1: next)
     */
    _getNewSlideIndex(direction) {
        const slideIndex = (this._currentIndex + direction) % this.slides.length;
        const lastSlideIndex = this.slides.length - 1;
        const isGoingToWrap = (direction < 0 && this._currentIndex === 0) ||
            (direction > 0 && this._currentIndex === lastSlideIndex);

        if (isGoingToWrap && !this.options.loop) {
            return this._currentIndex;
        }

        return slideIndex === -1 ? lastSlideIndex : slideIndex;
    }

    _updateIndicators() {
        this.slidesIndicators.forEach((slideIndicator, index) => {
            slideIndicator.classList[index === this._currentIndex ? 'add' : 'remove']('is-active');
        });
    }

    _slide(direction) {
        const nextSlideIndex = this._getNewSlideIndex(direction);
        const nextSlide = this.slides[nextSlideIndex];

        if (nextSlide && nextSlide.classList.contains('is-active')) {
            this._isSliding = false;

            return;
        }
    }

    /**
     * Goto next slide
     * 
     * @param {Event} e 
     */
    _onIndicatorClick(e) {
		e.preventDefault();
    }

    /**
     * Goto next slide
     * 
     * @param {Event} e 
     */
    _onNextClick(e) {
        e.preventDefault();

        this._changeSlide(1);
    }

    /**
     * Goto previous slide
     * 
     * @param {Event} e 
     */
    _onPreviousClick(e) {
        e.preventDefault();
        
        this._changeSlide(-1);
    }

    /**
     * Update slides order
     */
    _changeSlide(direction) {
        Array.from(this.slides).forEach(slide => {
            slide.classList.remove('is-active');
        });

        this._currentIndex = this._getNewSlideIndex(direction);
        let nextSlide = this.slides[this._currentIndex];

        // change current position
        if (direction > 0) {
            this.slidesContainer.style.transform = 'translateX(100%)';
        } else {
            // Reverse animation
            this.slidesContainer.style.transform = 'translateX(-100%)';
        }
        this.slidesContainer.style.transition = undefined;

        nextSlide.classList.add('is-active');
        nextSlide.style.order = 1;

        for (let i = 2; i <= this.slides.length; i++) {
            nextSlide = nextSlide.nextElementSibling ?? this.slidesContainer.firstElementChild;
            nextSlide.style.order = i;
        }

        this._updateIndicators();

        this.slidesContainer.classList.remove('is-set');
        setTimeout(() => {
            this.slidesContainer.style.transform = 'none';
            this.slidesContainer.style.transition = 'transform 0.5s ease-in-out';
        }, 50);
        // // translate back to 0 from -100%
		// // we don't need transitionend to fire for this translation, so remove transition CSS
		// this.slidesContainer.classList.remove('carousel-container-transition');
		// this.slidesContainer.style.transform = 'translateX(0)';
    }
}