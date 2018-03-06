//region import modules
import { mapGetters, mapMutations } from 'vuex';
//endregion

//region import icons
import listIcon from '../../../assets/icons/list-icon.svg'
import dollarsIcon from '../../../assets/icons/dollars-icon.svg'
import labelIcon from '../../../assets/icons/label-icon.svg'
//endregion

export default {
    data() {
        return {
            returnData: [
                {
                    icon: 'list-icon',
                    title: 'Соблюдение трудового кодекса',
                    desc: 'По желанию работника предоставляем полный соцпакет и легальное оформление.'
                },
                {
                    icon: 'dollars-icon',
                    title: 'Высокий доход',
                    desc: 'Каждый наш сотрудник на дому гарантированно получает от 2500 руб. в день.'
                },
                {
                    icon: 'label-icon',
                    title: 'Гарантированно стабильные выплаты з/п',
                    desc: 'Оплата происходит ежедневно на электронный кошелек либо на банковскую карту.'
                }
            ]
        }
    },
    computed: {
    },
    props: {
        
    },
    methods: {
        // ...mapMutations(['preloader', 'reloadPreloader']),
    },
    components: {
        listIcon, dollarsIcon, labelIcon
    },
    // created(){ this.preloader({time: 1000, check: false}); },

    // beforeRouteEnter: (to, from, next) => {
    //     next((vm) => {
    //         vm.$store.commit('reloadPreloader')
    //     })
    // },
    // beforeRouterLeave: (to, from, next) => {
    //     next((vm) => {
    //         vm.$store.commit('reloadPreloader')
    //     })
    // }
}