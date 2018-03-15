//region import modules
import { mapGetters, mapMutations } from 'vuex'
//endregion

//region import mixin

//endregion

export default {
    data() {
        return {
            select: [
                'Пластиковая карта',
                'Webmoney'
            ]
        }
    },
    computed: {
        ...mapGetters(['User'])
    },
    props: {
        
    },
    methods: {
    },
    components: {
        
    },
}