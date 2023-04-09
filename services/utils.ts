
export const ellipsize = (str = "", length = 6) => {
    if (str.length <= length) {
        return str;
    }
    return `${str.substring(0, length)}...`;
}