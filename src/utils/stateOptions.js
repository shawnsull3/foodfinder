export const stateOptions = (restaurantArr) => {
    let statesObj = {}; // using an object for const time lookup

    for (let i = 0; i < restaurantArr.length; i++) {
        if (!statesObj[restaurantArr[i].state]) {
            statesObj[restaurantArr[i].state] = restaurantArr[i].state;
        }
    }
    let sortedStates = Object.keys(statesObj).sort();
    sortedStates.unshift('All')
    return sortedStates;
}

export default stateOptions;