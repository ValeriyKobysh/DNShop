//region import modules
import { mapGetters, mapMutations } from 'vuex'
//endregion

//region import mixin
import mixin from '../../../../mixins'
//endregion

export default {
    mixins: [mixin],
    data() {
        return {
            maxProduct: 6,
            copy: {
                product: false,
                order: false,
                city: false,
                name: false,
                time: false
            },
            paste: {
                product: '',
                order: '',
                city: '',
                name: '',
                time: ''
            }
        }
    },
    computed: {
        ...mapGetters(['Products', 'Spinner', 'Checked']),
        getProduct(){
            if(this.$route.params.id && this.$route.params.id > 0){
                return parseInt(this.$route.params.id) - 1;
            }
        }
    },
    props: {

    },
    methods: {
        ...mapMutations(['updateSpinner', 'updateChecked']),
        nav(){ 
            const id = parseInt(this.$route.params.id);

            if(id && id < this.maxProduct){
                return { name: 'product', params: { id: id + 1 } }
            } else{
                return { name: 'complete' }
            }
        },
        copyMT(prop){
            this.copy[prop] = true;
        },
        pasteMT(prop){
            if(this.copy[prop]){
                this.paste[prop] = this.Products[this.getProduct][prop];
            }
        },
    },
    components: {

    },
    beforeRouteEnter(to, from, next){
        if(from.name == 'complete'){
            next(false);
        } else {
            next(vm => {
                vm.reload().then(() => { return true })
            })
        }
    },
    beforeRouteUpdate(to, from, next){
        if(to.params.id > from.params.id){
            this.updateRoute().then(() => {
                next();
            })
        } else {
            next(false);
        }
    },
    beforeRouteLeave(to, from, next){
        if(to.name == 'complete') {
            this.updateRoute().then(() => {
                next();
            })
        }
    }

}
