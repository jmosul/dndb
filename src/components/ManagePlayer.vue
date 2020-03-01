<template>
    <section>
        <div class="hero">
            <div class="hero-body">
                <h1 class="title">{{model.name}}</h1>
                <hr>
            </div>
        </div>

        <div class="player">
            <h3 class="is-title">Add To Campaign</h3>
            <add-to-campaign :player="model.id"></add-to-campaign>
        </div>
    </section>
</template>

<script>
    import Component from 'vue-class-component';
    import ViewModelComponent from './ViewModelComponent';
    import AddToCampaign from './AddToCampaign';

    @Component({
        components: {AddToCampaign},
    })
    export default class ManagePlayer extends ViewModelComponent {
        query = 'getPlayer';

        mounted() {
            super.mounted();
        }
    }
</script>

<style scoped>

</style>
