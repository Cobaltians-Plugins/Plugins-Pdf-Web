(function(cobalt) {
    var plugin = {
        classes: {
        	ios: 'CobaltPdfPlugin',
			android: 'io.kristal.pdfplugin.PdfPlugin'
        },
        init: function() {
            //create shortcuts
            cobalt.openpdf = this.openpdf.bind(this);
        },
        openpdf: function(data, callback) {
            cobalt.plugins.send(this, "pdf", data, callback)
        }
    };
    cobalt.plugins.register(plugin);
})(cobalt || {});

