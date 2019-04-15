(function(cobalt) {
  var plugin = {
    name: 'CobaltPdfPlugin',
    classes: {
      ios: 'CobaltPdfPlugin',
      android: 'io.kristal.pdfplugin.PdfPlugin'
    },
    init: function() {
      cobalt.openpdf = this.openpdf.bind(this);
    },
    openpdf: function(data, callback) {
      cobalt.openpdfCallback = callback;
      cobalt.plugins.send(this, "pdf", data)
    },
    handleEvent: function(json) {
      if (typeof cobalt.openpdfCallback === 'function') {
        cobalt.openpdfCallback(json.data)
      }
    }
  };
  cobalt.plugins.register(plugin);
})(cobalt || {});

