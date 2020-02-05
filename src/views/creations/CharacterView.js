import AppComponent from '../../AppComponent';

export default class CharacterView extends AppComponent {
    get character() {
        return this.$Amplify.graphqlOperation(this.query, {id: this.$route.params.id});
    }

    get articles() {
        return this.formatList([
            'joined',
            'history',
            'secrets',
            'notes',
        ]);
    }

    get details() {
        return this.formatList([
            'ideal',
            'flaw',
            'bond',
        ]);
    }

    getImage(image) {
        return `/images/characters/${image}`;
    }

    formatList(list) {
        return list.map((id) => ({
            id,
            title: id.charAt(0).toUpperCase() + id.slice(1),
        }));
    }
}
