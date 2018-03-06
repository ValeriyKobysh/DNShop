//region import modules
import { mapGetters, mapMutations } from 'vuex'
//endregion

//region import mixin
import mixin from '../../mixins'
//endregion

//region import components
import headerComponent from '../../components/header'
import navbarComponent from '../../components/navbar'
import chatComponent from '../../components/chat'
//endregion

export default {
    mixins: [mixin],
    data() {
        return {
            
        }
    },
    computed: {
        ...mapGetters(['Spinner', 'Checked']),
    },
    props: {
        
    },
    methods: {
        ...mapMutations(['updateSpinner', 'updateChecked']),
    },
    components: {
        headerComponent, chatComponent, navbarComponent
    },
    watch: {
        '$route'(){
            console.log("dfdfdff");
            this.updateRoute().then(() => {
                console.log("object");
            })
        }
    },
    beforeRouteEnter(to, from, next){
        next(vm => {
            vm.reload().then(() => { return true })
        })
    },
    // beforeRouteUpdate(to, from, next){
    //     if(to.params.id > from.params.id){
    //         this.updateRoute().then(() => {
    //             next();
    //         })
    //     } else {
    //         next(false);
    //     }
    // },
    beforeRouteLeave(to, from, next){
        this.updateRoute().then(() => {
            next();
        })
    }
}