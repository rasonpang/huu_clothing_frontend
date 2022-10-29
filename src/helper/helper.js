let debounceList = {};

export const debounce = (func, timeout = 1000) => {
    if (typeof func != 'function') return
    
    if (debounceList[func.name]) clearTimeout(debounceList[func.name]);
    debounceList[func.name] = setTimeout(() => {
        func();
        delete debounceList[func.name];
    }, timeout);
};

export const onFormSubmit = (func) => (e) => {
    e.preventDefault();
    func();
};

export const setIntersectionObserver = (selectors, fn, options) => {
    const targets = document.querySelectorAll(selectors);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(fn);
    }, {
        ...{
            root: null,
            rootMargin: '0px',
            threshold: 0.5
        },
        ...options
    })

    targets.forEach((element) => observer.observe(element));
};