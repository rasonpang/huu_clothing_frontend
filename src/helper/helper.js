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