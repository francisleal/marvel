export const capitalize = (string: string) => {
    const subst = string.toLowerCase().replace(/(?:^|\s)\S/g, function (a) {
        return a.toUpperCase();
    });
    return subst.trim();
}