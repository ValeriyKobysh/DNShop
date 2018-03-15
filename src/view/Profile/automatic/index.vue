<template lang='pug'>
    .step
        .step__top
            .step__top-left.step__top-left_error
                span.step__top-icon
                    error-icon(height="140")

            .step__top-right
                .step__top-heading ВЫВОД ЗАРАБОТАННЫХ СРЕДСТВ

                .step__top-desc Не покидайте страницу!!! Если вы закроете данную страницу, сессия будет завершена и Ваш доход утерян

                .step__top-t2 
                    p Чтобы вам <span style="color: orange">отправили деньги</span> вручную, наймите личного менеджера. Менеджер будет каждый деть самостоятельно <span style="color: orange">отправлять вам деньги</span> с вашего баланса. 
                    
                    p <span style="font-weight: bold">Сразу после оплаты услуг менеджера, будет отправлен денежный перевод</span>

        .step__bot
            .step__bot-header ВЫВОД СРЕДСТВ

            .step__bot-body
                ul.step__bot-balans.list
                    li.step__bot-account
                        span.step__bot-account-bg
                            img(src="~img/images/account-img.svg")

                        span.step__bot-account-title Счет№:

                        span.step__bot-account-value 1773569865 

                    li.step__bot-sum
                        span.step__bot-sum-bg
                            img(src="~img/images/coint-img.svg")

                        span.step__bot-sum-title Баланс счета:

                        span.step__bot-sum-value 37458 руб

                p.step__bot-t1 Статус: <span class="orange"> Ожидается</span>

                p.step__bot-t2 Услуги личного менеджера на 12 месяцев: <span class="blue bold large">1125 руб</span>

                router-link.step__bot-submit.link(:to="{ name: 'secondStep' }") Оплатить услуги менеджера

                .step__bot-footer Сразу после оплаты комиссии, <br />вам будет отправлен перевод в сумме: 38000 руб.

</template>

<script src='./script.js'></script>

<style lang='scss' src='../firstStep/style.scss'></style>