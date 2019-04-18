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
    openpdf: function(data) {
      cobalt.plugins.send(this, "pdf", data)
    }
  };
  cobalt.plugins.register(plugin);
})(cobalt || {});

