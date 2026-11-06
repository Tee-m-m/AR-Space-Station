//owner: adithi

// Rocket on the launch platform, slowly moving upwards.
AFRAME.registerComponent('rocket', {
    init: function () {
        var rocket = document.createElement('a-entity');
        rocket.setAttribute('position', '0 0.2 0');
        rocket.setAttribute('animation',
            'property: position; to: 0 1.0 0; dur: 8000; easing: easeInOutSine; dir: alternate; loop: true');

        rocket.appendChild(this.part('a-cylinder', { radius: 0.08, height: 0.4, color: '#ECF0F1' }));
        rocket.appendChild(this.part('a-cone', { 'radius-bottom': 0.08, 'radius-top': 0, height: 0.2, color: '#E74C3C', position: '0 0.3 0' }));
        rocket.appendChild(this.part('a-box', { width: 0.2, height: 0.1, depth: 0.02, color: '#E74C3C', position: '0 -0.15 0' }));
        rocket.appendChild(this.part('a-box', { width: 0.02, height: 0.1, depth: 0.2, color: '#E74C3C', position: '0 -0.15 0' }));
        this.el.appendChild(rocket);
    },

    part: function (tag, attrs) {
        var el = document.createElement(tag);
        Object.keys(attrs).forEach(function (k) { el.setAttribute(k, attrs[k]); });
        return el;
    }
});
