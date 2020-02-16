let util = {

};
util.title = function (title) {
    title = title ? title + ' - Home' : 'Cloud Native Elastic Inference Demo';
    window.document.title = title;
};

export default util;