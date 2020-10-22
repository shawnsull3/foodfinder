export const genreOptions = (restaurantArr) => {
    let genreObj = {}; // using an object for const time lookup

    for (let i = 0; i < restaurantArr.length; i++) {
        let genreArr = restaurantArr[i].genre.split(',')
        for (let j = 0; j < genreArr.length; j++) {
            if (!genreObj[genreArr[j]]) {
                genreObj[genreArr[j]] = genreArr[j];
            }
        }
    }
    let sortedGenres = Object.keys(genreObj).sort();
    sortedGenres.unshift('All')
    return sortedGenres;
}

export default genreOptions;