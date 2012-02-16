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
    
    it('should find only inputs with the right attribute', function () {
        $('#snippet').html('<input id="one" data-kendo="date" /><input id="two" />');
        
        var ns = {};
        
        window.kendo.bootstrapper(ns);
        
        expect(ns.datePickers.one).toBeDefined();
        expect(ns.datePickers.two).not.toBeDefined();
    });
});