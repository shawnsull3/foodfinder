export const filter = (restaurantArr, searchTerm) => {
    // restaurantArr should already be alphabetical
    searchTerm = searchTerm.toLowerCase();
    let filtered = [];

    const contains = (string) => {
        return string.toLowerCase().indexOf(searchTerm) !== -1 ?  true :  false;
    }

    for (let i = 0; i < restaurantArr.length; i++) {
        if (contains(restaurantArr[i].name) || contains(restaurantArr[i].city) || contains(restaurantArr[i].genre)) {
            filtered.push(restaurantArr[i]);
        }
    }
    return filtered;
}

export default filter;