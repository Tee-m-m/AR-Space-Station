//owner: acshaya & brindha
// Tap to grow; tap again to shrink back.
AFRAME.registerComponent('grow-on-tap', {
    init: function () {
        var el = this.el;
        var big = false;

        el.addEventListener('click', function () {
            big = !big;
            el.setAttribute('animation__grow', {
                property: 'scale',
                to: big ? '1.8 1.8 1.8' : '1 1 1',
                dur: 400,
                easing: 'easeOutBack'
            });
        });
    }
});
