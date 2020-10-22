export const filter = (restaurantArr, searchTerm, selectedState, selectedGenre) => {
    searchTerm = searchTerm.toLowerCase();
    let filtered = [];

    const contains = (string) => {
        return string.toLowerCase().indexOf(searchTerm) !== -1 ?  true :  false;
    }

    for (let i = 0; i < restaurantArr.length; i++) {
        if (selectedState === restaurantArr[i].state || selectedState === 'All') {
            if (restaurantArr[i].genre.indexOf(selectedGenre) !== -1 || selectedGenre === 'All') {
                if (contains(restaurantArr[i].name) || contains(restaurantArr[i].city) || contains(restaurantArr[i].genre)) {
                    filtered.push(restaurantArr[i]);
                }
            }
        }
    }
    return filtered;
}

export default filter;