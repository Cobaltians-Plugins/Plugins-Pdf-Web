(function(cobalt) {
    var plugin = {
        name: "pdf",
        init: function(options) {
            //create shortcuts
            cobalt.openpdf = this.openpdf.bind(this);
        },
        config: function(settings) {},
        openpdf: function(data, callback) {
            this.send("pdf", data, function(data) {
                if (typeof callback == 'function') {
                    callback(data);
                }
            })
        },
        handleEvent: function(json) {},
        send: function(action, data, callback) {
            cobalt.send({
                type: "plugin",
                name: this.name,
                action: action,
                data: data,
            }, callback);
        }
    };
    cobalt.plugins.register(plugin);
})(cobalt || {});

