//owner: adithi

AFRAME.registerComponent('planets', {
    init: function () {
        this.addPlanet('-0.6 0.7 -0.3', 0.18, '#E67E22', 8000);
        this.addPlanet('0.6 0.9 0.2', 0.12, '#3498DB', 5000);
    },

    addPlanet: function (pos, radius, color, spinTime) {
        var planet = document.createElement('a-sphere');
        planet.setAttribute('radius', radius);
        planet.setAttribute('color', color);
        planet.setAttribute('position', pos);
        planet.setAttribute('class', 'planet clickable');
       //animation
        planet.setAttribute('animation__spin',
            'property: rotation; to: 0 360 0; dur: ' + spinTime + '; easing: linear; loop: true');
        this.el.appendChild(planet);
    }
});
