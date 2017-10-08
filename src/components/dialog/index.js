import Frdialogmodal from 'fr-dialogmodal/dialogmodal.js'

var dialog = Frdialogmodal({
  // String - Outer container selector, hook for JS init() method
  selector: '.js-fr-dialogmodal',

  // String - Modal selector, the element that represents the modal
  modalSelector: '.js-fr-dialogmodal-modal',

  // String - Selector for the open button
  openSelector: '.js-fr-dialogmodal-open',

  // String - Selector for the close button
  closeSelector: '.js-fr-dialogmodal-close',

  // Boolean - Switches the dialog role to alertdialog, only use this when representing an alert, error or warning
  isAlert: false,

  // String - Class name that will be added to the selector when the component has been initialised
  readyClass: 'fr-dialogmodal--is-ready',

  // String - Class name that will be added to the selector when the component is active
  activeClass: 'fr-dialogmodal--is-active'
})

export default { dialog, Frdialogmodal }
