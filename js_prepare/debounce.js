function debounce(fn, wait, immediate) {
    let timer = null;
    return function () {
        let args = arguments;
        let context = this;
        if (immediate && !timer){
            fn.apply(context, args)
        }
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(context, fn)
        }, wait)
    }
}

function throttle(fn, wait, immediate) {
    let timer = null
    let callnow = immediate
    return function () {
        let context = this
        let args = arguments

        if (callnow){
            fn.apply(context, args)
            callnow = false
        }
        if (!timer){
            timer = setTimeout(() => {
                fn.apply(context, args)
                timer = null
            }, wait)
        }
    }
}

