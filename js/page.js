//author @huntbao
/*global $, document */
$ = (selector, context) => {
    return (context || document).querySelectorAll(selector)
}


