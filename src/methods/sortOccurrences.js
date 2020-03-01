export default function(occurrences) {
    return [...occurrences].sort((occurrenceA, occurrenceB) => {
        if (occurrenceA.dale_reckoning > occurrenceB.dale_reckoning) {
            return 1;
        } else if (occurrenceA.dale_reckoning < occurrenceB.dale_reckoning) {
            return -1;
        }

        return 0;
    });
}
