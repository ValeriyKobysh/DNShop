//region import icons
import userIcon from '../../../assets/icons/user-icon.svg'
//endregion

export default {
    data() {
        return {
            msg: {
                show: false
            }
        }
    },
    computed: {
        
    },
    props: {
        
    },
    methods: {
        
    },
    components: {
        userIcon
    },
    mounted(){
        setTimeout(() => {
            this.msg.show = true;
        }, 6000);
    }
}