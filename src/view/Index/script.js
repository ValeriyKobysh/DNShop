//region import components

//endregion

//region import icons
import navIcon from '../../assets/icons/reviews-nav-icon.svg'
//endregion

export default {
    data() {
        return {
            sliderData: [
                {
                    avatar: 'http://via.placeholder.com/60x60',
                    name: 'Алексей Куприн',
                    review: 'Очень нужны были для погашения кредита, который выплатить у мене не було возможности. Сайт реально работает и платит! Благодаря этому сайту я погасил свой кредит, да еще и успел себе заработать на свои нужды! Работаю здесь уже больше двух недель. Выплаты происходять вовремя и ежедневно, как и говорилось. Вывожу деньги деньги я на свою банковскую карту. Спасибо.'
                },
                {
                    avatar: 'http://via.placeholder.com/60x60',
                    name: 'Алексей Куприн',
                    review: 'Очень нужны были для погашения кредита, который выплатить у мене не було возможности. Сайт реально работает и платит! Благодаря этому сайту я погасил свой кредит, да еще и успел себе заработать на свои нужды! Работаю здесь уже больше двух недель. Выплаты происходять вовремя и ежедневно, как и говорилось. Вывожу деньги деньги я на свою банковскую карту. Спасибо.'
                },
                {
                    avatar: 'http://via.placeholder.com/60x60',
                    name: 'Алексей Куприн',
                    review: 'Очень нужны были для погашения кредита, который выплатить у мене не було возможности. Сайт реально работает и платит! Благодаря этому сайту я погасил свой кредит, да еще и успел себе заработать на свои нужды! Работаю здесь уже больше двух недель. Выплаты происходять вовремя и ежедневно, как и говорилось. Вывожу деньги деньги я на свою банковскую карту. Спасибо.'
                },
                {
                    avatar: 'http://via.placeholder.com/60x60',
                    name: 'Алексей Куприн',
                    review: 'Очень нужны были для погашения кредита, который выплатить у мене не було возможности. Сайт реально работает и платит! Благодаря этому сайту я погасил свой кредит, да еще и успел себе заработать на свои нужды! Работаю здесь уже больше двух недель. Выплаты происходять вовремя и ежедневно, как и говорилось. Вывожу деньги деньги я на свою банковскую карту. Спасибо.'
                },
                {
                    avatar: 'http://via.placeholder.com/60x60',
                    name: 'Алексей Куприн',
                    review: 'Очень нужны были для погашения кредита, который выплатить у мене не було возможности. Сайт реально работает и платит! Благодаря этому сайту я погасил свой кредит, да еще и успел себе заработать на свои нужды! Работаю здесь уже больше двух недель. Выплаты происходять вовремя и ежедневно, как и говорилось. Вывожу деньги деньги я на свою банковскую карту. Спасибо.'
                }
            ],
            sliderPosition: 0,
            sliderStep: 100
        }
    },
    computed: {
        
    },
    props: {
        
    },
    methods: {
        prevSlide(){
            if(this.sliderPosition != 0) this.sliderPosition += this.sliderStep
        },
        nextSlide(){
            if(this.sliderPosition != -(this.sliderData.length - 2) * this.sliderStep) this.sliderPosition -= this.sliderStep
        }
    },
    components: {
        navIcon
    },
}