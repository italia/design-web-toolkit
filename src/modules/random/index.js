import $ from 'jquery'


$(() => {
  const CONTAINER_SELECTOR = '.js-randomize'
  const EXCLUDE_SELECTOR = '.js-randomize-exclude'

  let cache = []

  function shuffle(o) {
    for (let j, x, i = o.length; i; j = typeof cache[i] !== 'undefined' ?
      cache[i] : (cache[i] = parseInt(Math.random() * i)),
      x = o[--i], o[i] = o[j], o[j] = x);
    return o
  }

  $(CONTAINER_SELECTOR).each((i, container) => {
    let $container = $(container)
    $container.html(shuffle($container.children().not(EXCLUDE_SELECTOR).get()))
  })
})
