/* eslint-disable no-unused-vars */

import moment from 'moment'
import Pikaday from 'pikaday'

var picker = new Pikaday({
        field: document.getElementById('datePopup'),
        trigger: document.getElementById('datePopupTrigger'),
        format: 'DD/MM/YYYY',
})

/* eslint-enable no-unused-vars */
