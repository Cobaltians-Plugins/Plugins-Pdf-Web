(function(cobalt) {
    var plugin = {
        name: "pdf",
        init: function() {
            //create shortcuts
            cobalt.openpdf = this.openpdf.bind(this);
        },
        openpdf: function(data, callback) {
            cobalt.plugins.send(this, "pdf", data, function(data) {
                if (typeof callback == 'function') {
                    callback(data);
                }
            })
        },
        handleEvent: function(json) {}
    };
    cobalt.plugins.register(plugin);
})(cobalt || {});

