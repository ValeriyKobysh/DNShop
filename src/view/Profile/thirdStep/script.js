//region import icons
import userIcon from '../../../assets/icons/user-icon.svg'
//endregion

export default {
    data() {
        return {
            msg: {
                firstShow: false,
                secondType: false,
                secondMsg: false
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
            this.msg.firstShow = true;

            setTimeout(() => {
                this.msg.secondType = true;
            }, 1000);

            setTimeout(() => {
                this.msg.secondType = false;
                this.msg.secondMsg = true;
            }, 4000);

        }, 6000);
    }
}