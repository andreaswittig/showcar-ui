describe('forms - input-groups tests', function(){

    const inputHeight = 40;

    beforeEach(function() {
        browser.url('/docs/pages/forms.html');
    });

    it('should have the correct input-group size',function() {
        browser.getElementSize('.example-groups .sc-input-group', 'height').should.equal(inputHeight);

        return browser;
    });

    it('should have the correct input-group-radio size',function() {
        browser.getElementSize('.example-groups .sc-input-group-radio', 'height').should.to.satisfy(function(heights) {
            return heights.every(function(h) {
                return h === inputHeight;
            })
        });

        return browser;
    });
});
