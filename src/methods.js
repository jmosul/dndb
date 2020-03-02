export function sortByKey(items, key, direction) {
    return [...items].sort((itemA, itemB) => {
        let compare = 0;

        direction = direction || 1;

        if (itemA[key] > itemB[key]) {
            return 1;
        } else if (itemA[key] < itemB[key]) {
            return -1;
        }

        return compare * direction;
    });
}

export function sortOccurrences(occurrences) {
    return sortByKey(occurrences, 'dale_reckoning');
}

export function sortBySubDoc(items, subDoc, key, direction) {
    return [...items].sort((itemA, itemB) => {
        let compare = 0;

        direction = direction || 1;

        if (itemA[subDoc][key] > itemB[subDoc][key]) {
            return 1;
        } else if (itemA[subDoc][key] < itemB[subDoc][key]) {
            return -1;
        }

        return compare * direction;
    });
}
