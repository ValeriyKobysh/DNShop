//region import modules
import { mapGetters, mapMutations } from 'vuex';
//endregion

export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters(['User'])
    },
    props: {
        
    },
    methods: {
        // ...mapMutations(['preloader', 'reloadPreloader']),
    },
    components: {
        
    },
    // created(){ this.preloader({time: 1000, check: false}); },

    // beforeRouteEnter: (to, from, next) => {
    //     next((vm) => {
    //         vm.$store.commit('reloadPreloader')
    //     })
    // }

}