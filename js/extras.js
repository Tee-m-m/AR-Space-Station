//stars, satellite and the <a-text> label.

AFRAME.registerComponent('extras', {
    init: function () {
        this.addStars();
        this.addSatellite();
        this.addLabel();
    },

    make: function (tag, attrs) {
        var el = document.createElement(tag);
        Object.keys(attrs).forEach(function (key) {
            el.setAttribute(key, attrs[key]);
        });
        return el;
    },

    //stars scattered high above
    addStars: function () {
        var positions = [
            '-0.9 1.8 -0.4', '0.8 1.9 0.3', '-0.3 2.0 0.6', '0.4 1.7 -0.7', '-0.8 1.6 0.7', '0.9 1.5 -0.3', '0.0 1.9 -0.2', '-0.5 1.5 -0.9'
        ];
        for (var i = 0; i < positions.length; i++) {
            this.el.appendChild(this.make('a-sphere', {
                radius: 0.03,
                color: '#FFF59D',
                position: positions[i]
            }));
        }
    },

    //satellite orbiting around the scene
    addSatellite: function() {
        var sat = this.make('a-entity', {
            position: '0 1.2 -0.6',
            animation: 'property: rotation; to: 0 360 0; dur: 10000; easing: linear; loop: true'
        });

        sat.appendChild(this.make('a-box', {
            width: 0.2, height: 0.2, depth: 0.2, color: '#BDC3C7'
        }));

        sat.appendChild(this.make('a-box', {
            width: 0.3, height:0.02, depth:0.15, color: '#2980B9', position: '-0.25 0 0'
        }));

        sat.appendChild(this.make('a-cylinder', {
            radius: 0.01, height: 0.15, color: '#ECF0F1', position: '0 0.17 0'
        }));

        this.el.appendChild(sat);
    },

    //label floating in front of the scene
    addLabel: function() {
        this.el.appendChild(this.make('a-text', {
            value: 'Space Station',
            align: 'center',
            color: '#FFFFFF',
            width: 2,
            position: '0 0.02 0.95',
            rotation: '-90 0 0'
        }));
    }
});