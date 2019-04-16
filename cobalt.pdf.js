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
      this.openpdfCallback = callback;
      cobalt.plugins.send(this, "pdf", data)
    },
    handleEvent: function(json) {
      if (typeof this.openpdfCallback === 'function') {
        this.openpdfCallback(json.data)
      }
    }
  };
  cobalt.plugins.register(plugin);
})(cobalt || {});

