//owner: sanuthi

AFRAME.registerComponent('astronaut-model', {
    init: function () {
        var model = document.createElement('a-entity');

        model.setAttribute('gltf-model', 'models/astronaut.glb');
        model.setAttribute('position', '0.55 0 0.45');
        model.setAttribute('scale', '0.005 0.005 0.005');
        model.setAttribute('rotation', '0 -30 0');

      
        model.setAttribute('animation__spin',
            'property: rotation; to: 0 330 0; dur: 20000; easing: linear; loop: true');

        model.addEventListener('model-loaded', function () {
            console.log('Astronaut model loaded');
        });
        model.addEventListener('model-error', function (e) {
            console.error('Astronaut model failed to load', e);
        });

        this.el.appendChild(model);
    }
});
