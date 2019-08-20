function MyExtends(child, parent) {
    let F = function () {};
    return function (child, parent) {
        F.prototype = parent.prototype;
        child.prototype = new F();
        child.uber = parent.prototype;
        child.prototype.constructor = child
    }
}