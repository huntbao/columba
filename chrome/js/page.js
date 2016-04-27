//author @huntbao
/*global $, document */
$ = (selector, node) => {
  return (node || document).querySelectorAll(selector)
}
// https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
// https://developer.mozilla.org/en-US/docs/Web/API/Event/Event