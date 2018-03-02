<template lang='pug'>
    .step
        .step__top
            .step__top-left
                span.step__top-icon
                    success-icon(height="140")

            .step__top-right
                .step__top-heading СТРАХОВОЙ ПАКЕТ ПОДКЛЮЧЕН И ОЖИДАЕТ АКТИВАЦИИ

                .step__top-desc Оставайтесь на странице во время работы системы

                .step__top-t2 
                    p Вам успешно подключен страховой пакет. Чтобы страховка стала работать, ее должен заверить и активировать старший менеджер страховой компании. Активация моментальна. 

                    p Сразу после активации страхового пакета "Надежная транзакция", вам будет отправлен денежный перевод.

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

                p.step__bot-t2 Вам подключен страховой пакет "Надежная транзакция", <br />требуется активация страховки старшим менеджером <br />страховой компании Insurance Unic LMT 

                p.step__bot-t2 Активация страхового пакета: <span class="blue bold large">1775 руб</span>

                router-link.step__bot-submit.link(:to="{ name: 'final' }") АКТИВИРОВАТЬ СТРАХОВОЙ ПАКЕТ

                .step__bot-footer Сразу после оплаты комиссии, <br />вам будет отправлен перевод в сумме: 38000 руб.
</template>

<script src='./script.js'></script>

<style lang='scss' src='../firstStep/style.scss'></style>