
(function () {
  var spaceDivElement;
  var iframeHandler;

  beforeEach(function (done) {
    iframeHandler = harnessUtils.createIframe('test/html/test.html', function (win, doc) {
      spaceDivElement = iframeHandler.document.querySelector('ceci-spacer');
      done();
    });
  });

  describe('Ceci Spacer', function () {
    test('Sanity check', function (done) {
      chai.assert(spaceDivElement.ceci, 'Ceci descriptor exists.');
      iframeHandler.runIframeTest('Sanity Check', done);
    });
  });
})();
