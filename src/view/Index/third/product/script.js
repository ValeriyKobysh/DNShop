//region import modules
import { mapGetters } from 'vuex'
//endregion

export default {
    data() {
        return {
            maxProduct: 6
        }
    },
    computed: {
        ...mapGetters(['Products']),
        getProduct(){
            if(this.$route.params.id && this.$route.params.id > 0){
                return parseInt(this.$route.params.id) - 1;
            }
        }
    },
    props: {

    },
    methods: {
        nav(){ 
            const id = parseInt(this.$route.params.id);

            if(id && id < this.maxProduct){
                return { name: 'product', params: { id: id + 1 } }
            } else{
                return { name: 'complete' }
            }
        }
    },
    components: {

    },
    created(){
    }
}