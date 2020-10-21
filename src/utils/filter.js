export const filter = (restaurantArr, searchTerm) => {
    // restaurantArr should already be alphabetical
    let filtered = [];

    const contains = (string) => {
        return string.indexOf(searchTerm) !== -1 ?  true :  false;
    }

    for (let i = 0; i < restaurantArr.length; i++) {
        if (contains(restaurantArr.name) || contains(restaurantArr.city) || contains(restaurantArr.genre)) {
            filtered.push(restaurantArr[i]);
        }
    }
    return filtered;
}

export default filter;