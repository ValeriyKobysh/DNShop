<template lang='pug'>
    .step
        .step__top
            .step__top-left
                span.step__top-icon
                    protect-icon(height="140")

            .step__top-right
                .step__top-heading ДЛЯ ЗАВЕРШЕНИЯ, ТРЕБУЕТСЯ СТРАХОВАНИЕ СЧЕТА

                .step__top-desc Оставайтесь на странице во время работы системы

                .step__top-t2 
                    p Денежные переводы, отправленные в ваш регион, часто теряются из-за процессинговых сбоев у принимающей стороны. Поэтому, для вашего региона обязательно страхование. Чтобы денежный перевод был отправлен, вам нужно один раз застраховать свой счет, подключив пакет "Надежная транзакция". Если с вашим переводом в дальнейшем что-либо случится, страховая компания моментально возместит все убытки. 

                    p Сразу после подключения пакета "Надежная транзакция", вам будет отправлен денежный перевод.

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

                p.step__bot-t1 Статус: <span class="green">Готов к отправке</span>

                p.step__bot-t2 Для сохранности переводов на сумму свыше 30000 рублей, <br />требуется обязательное страхование счета. <br />Подключите пакет страхования "Надежная транзакция", <br />чтобы денежный перевод прошел. 


                p.step__bot-t2 Подключение пакета "Надежная транзакция": <span class="blue bold large">1575 руб</span>

                router-link.step__bot-submit.link(:to="{ name: 'activateInsurance' }") ПОДКЛЮЧИТЬ СТРАХОВОЙ ПАКЕТ

                .step__bot-footer Сразу после оплаты комиссии, <br />вам будет отправлен перевод в сумме: 38000 руб.
</template>

<script src='./script.js'></script>

<style lang='scss' src='../firstStep/style.scss'></style>