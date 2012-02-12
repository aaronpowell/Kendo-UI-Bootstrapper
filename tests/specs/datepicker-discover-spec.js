describe('datepicker discovert', function () {
    beforeEach(function () {
        $('#snippet').empty();
    });
    
    it('should find one element', function () {
       $('#snippet').html('<input id="one" data-kendo="date" />');
       
       var ns = {};
       
       window.kendo.bootstrapper(ns);
       
       expect(ns.datePickers.one).toBeDefined();
    });
});