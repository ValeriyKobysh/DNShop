//region import components
import headerComponent from '../../components/header';
//endregion

//region import icons
import visaIcon from '../../assets/icons/visa-icon.svg';
import mobileIcon from '../../assets/icons/mobile-icon.svg';
import yandexIcon from '../../assets/icons/yandex-icon.svg'
//endregion

export default {
    data() {
        return {
            methods: [
                { icon: 'visa-icon', active: true, link: 'https://www.google.com.ua/' },
                { icon: 'mobile-icon', active: false, link: 'https://www.facebook.com/' },
                { icon: 'yandex-icon', active: false, link: 'https://yandex.ua/' }
            ]
        }
    },
    computed: {
        
    },
    props: {
        
    },
    methods: {
        toggleItem(index){
            this.methods.forEach((el, i) => {
                i == index ? el.active = true : el.active = false;
            });
        },
        link(){
            let item = this.methods.find(el => {
                return el.active
            })
            return item.link;
        }
    },
    components: {
        headerComponent, visaIcon, mobileIcon, yandexIcon
    },
    created(){
        this.link();
    }
}