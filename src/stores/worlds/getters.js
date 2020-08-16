export default {
    all: ({worlds}) => worlds,
    current: ({worlds, currentId}) => worlds.filter(({id}) => id === currentId)[0],
    isEmpty: ({worlds}) => !worlds.length,
    party: ({worlds, currentId}) => worlds.filter(({id}) => id === currentId)[0].parties.items[0],
};
