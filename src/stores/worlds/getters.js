export default {
    all: ({worlds}) => worlds,
    current: ({worlds, currentId}) => worlds.filter(({id}) => id === currentId)[0],
    isEmpty: ({worlds}) => !worlds.length,
};
