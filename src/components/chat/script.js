//region import icons
import sendIcon from '../../assets/icons/send-icon.svg'
//endregion

export default {
    name: 'chat',
    data() {
        return {
            newMsg: '',
            msgs: [
                {
                    type: true, //true - to, false - from
                    avatar: 'http://via.placeholder.com/55x55',
                    time: '15:39',
                    name: 'Я',
                    text: 'Моментально на любую карту !!! Моментально на любую карту !!! Моментально на любую карту !!!'
                },
                {
                    type: false, //true - to, false - from
                    avatar: 'http://via.placeholder.com/55x55',
                    time: '15:39',
                    name: 'Viktor',
                    text: 'Моментально от 400 долларов на любую карту или кошелек.'
                }
            ]
        }
    },
    computed: {
        
    },
    props: {
        
    },
    methods: {
        scrollBottom(){
            // let element = document.querySelector('.chat__body');
            // let dataElement = element.getBoundingClientRect();

            // console.log(dataElement);
        },
        addNewMsg(){
            if(this.newMsg != ''){
                this.msgs.push({
                    type: true,
                    avatar: 'http://via.placeholder.com/55x55',
                    time: Date.now(),
                    name: 'Я',
                    text: this.newMsg
                })

                this.newMsg = '';
                // this.scrollBottom();
            }
        }
    },
    components: {
        sendIcon
    },
}