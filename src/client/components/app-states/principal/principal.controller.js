/**
 *
 */
class PrincipalController {

    /**
     * @constructor
     *
     * @param {Object} toast - toast service
     *
     * @returns {void}
     */
    constructor( toast ) {
        this.toast = toast;
        this.activate();
    }

    /**
     * Ativa o controller
     *
     * @returns {void}
     */
    activate() {
        this.toast.show( {
            title: 'Principal Controller ativado!'
        } );
    }

}

export default [
    'toast', PrincipalController
];
