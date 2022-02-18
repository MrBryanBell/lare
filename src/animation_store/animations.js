import anime from 'animejs/lib/anime.es.js';
import { currentTab } from '../stores/session_store';
import { get } from 'svelte/store';

const getCoord = (x) => {
    if (x === 1) return 0;
    if (x === 2) return 52;
    if (x === 3) return 104;
};

// NAV-BAR (ACTIVE-INDICATOR)
    function fade(node){
        let num = get(currentTab);
        let finalNum = getCoord(num)

        anime({
            targets: node,
            translateY: [
                { value: finalNum, duration: 400 },
            ],
            opacity: [
                { value: 0.5, duration: 100, easing: 'linear' },
                { value: 1, duration: 400, easing: 'linear' },
            ],
            duration: 500,
            easing: 'cubicBezier(.1,.48,.22,.99)',
        })
    }

export { fade };