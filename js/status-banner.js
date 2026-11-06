//owner: mewni

AFRAME.registerComponent('status-banner', {
    schema: {
        target: { type: 'selector' }
    },

    init: function () {
        var banner = this.data.target;

        this.el.addEventListener('markerFound', function () {
            banner.textContent = '🚀 Mission Activated!';
            banner.className = 'found';
        });

        this.el.addEventListener('markerLost', function () {
            banner.textContent = 'Mission Lost!';
            banner.className = 'lost';
        });
    }
});
