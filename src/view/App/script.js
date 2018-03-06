//region import modules
import { mapGetters, mapMutations } from 'vuex';
//endregion

//region imports components
import foo from '../../components/footer';
//endregion

export default {
    name: 'app',
    metaInfo: {

    },
    data() {
        return {

        }
    },
    computed: {
        ...mapGetters(['Spinner', 'Checked'])
    },
    components: {
        foo
    },
    methods: {

    }
}
