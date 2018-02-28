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
        
    },
    components: {
        listIcon, dollarsIcon, labelIcon
    },
}