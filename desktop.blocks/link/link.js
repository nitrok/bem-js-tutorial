modules.define('i-bem__dom', function(provide, DOM) {
/**
 * Link
 */
DOM.decl('link', {

    /**
     * @private
     */
    onSetMod: {
        /**
         * `aria-disabled` and `tabindex` attributes get the value of
         * `disabled` modifier
         */
        disabled: function(modName, modVal) {
            var disabled = modVal === 'yes';

            this.domElem.attr({
                'aria-disabled': disabled,
                tabindex: disabled ? -1 : 0
            });

        }

    }

});

provide(DOM);

});
