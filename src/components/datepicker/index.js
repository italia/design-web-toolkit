import $ from 'jquery'

$('.js-Datepicker').each((i, el) => {
  $(el).attr('type', 'text')

  require(['moment', 'pikaday'], (Moment, Pikaday) => {
    new Pikaday({
      field: $(el)[0],
      trigger: $(`[aria-controls='${el.id}']`)[0],
      format: 'DD/MM/YYYY',
      i18n: {
        previousMonth: 'Mese precedente',
        nextMonth: 'Mese successivo',
        months: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
        weekdays: ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'],
        weekdaysShort: ['Dom', 'Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab']
      },
      // onSelect: () => {
      //   console.log(this.getMoment().format('Do MMMM YYYY'))
      // }
    })
  })

})
