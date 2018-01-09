const CONFIG = {}

/*
 *  Whitelist: use this array of RegEx to include ONLY specific components
 *  or modules into the final build.
 *
 *  __Example, to include just header + search form + offcanvas:
 *
 *   CONFIG.includes = [
 *          '(.*)base(.*)',
 *          '(.*)button(.*)',
 *          '(.*)components(.*)',
 *          '(.*)theme(.*)',
 *          '(.*)utils(.*)',
 *          '(.*)icons(.*)',
 *          '(.*)hamburger(.*)',
 *          '(.*)offcanvas(.*)',
 *          '(.*)linklist(.*)',
 *          '(.*)treeview(.*)',
 *          '(.*)skiplinks(.*)',
 *          '(.*)form(.*)',
 *          '(.*)header(.*)'
 *         ]
 *
 * @see index.css for possible values
 *
 */
CONFIG.includes = [
  '(.*)scripts(.*)',
  '(.*)theme(.*)',
  '(.*)utils(.*)',
  '(.*)offcanvas(.*)',
  '(.*)header(.*)',
  '(.*)treeview(.*)',
  '(.*)linklist(.*)',
  '(.*)accordion(.*)',
  '(.*)skiplinks(.*)'
]

/*
 *  Blacklist: use this array of RegEx to exclude specific omponents
 *  or modules from the final build.
 *
 *    ie. to exclude all global CSS:
 *
 *      CONFIG.excludes = [ '(.*)base(.*)', '(.*)normalize(.*)' ]
 *
 * @see index.css for possible values
 *
 */
CONFIG.excludes = []

module.exports = CONFIG
