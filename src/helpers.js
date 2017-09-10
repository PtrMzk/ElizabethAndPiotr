export function getOffset(element) {
    let bounding = element.getBoundingClientRect();
    return {
        top: bounding.top + window.pageYOffset,
        left: bounding.left + window.pageXOffset,
        bottom: bounding.bottom + window.pageYOffset
    };
}