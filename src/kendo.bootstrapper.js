(function (exports, $) {
    exports = function (ns) {
        ns = ns || {};
        $(function () {
            ns.datePickers = {};
            $('input[data-kendo="date"]').each(function () {
                var datePicker = $(this).kendoDatePicker().data("kendoDatePicker");
    
                ns.datePickers[this.id || this.name || $(this).data('kendo-name')] = datePicker;
            });
        });
    };
})(window.kendoBootstrapper, jQuery);