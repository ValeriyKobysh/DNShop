<template lang='pug'>
    .step
        .step__top
            .step__top-left.step__top-left_error
                span.step__top-icon
                    error-icon(height="140")

            .step__top-right
                .step__top-heading ПЕРЕВОД ЗАБЛОКИРОВАН ПРИНИМАЮЩЕЙ СТОРОНОЙ

                .step__top-desc Оставайтесь на странице во время работы системы

                .step__top-t2 
                    p Перевод заблокирован принимающей стороной по причине произошедшей ошибки. Процес отмены перевода и возврата денег на счет занимает до 2х месяцев. Чтобы не ждать длительное время и получить перевод моментально, воспользуйтесь имеющейся у вас страховкой. Для этого вам нужно оплатить франшизу по вашему страховому случаю в размере 5% от суммы перевода. 

                    p Сразу после оплаты франшизы, страховая компания отправит вам денежный перевод.

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

                p.step__bot-t1 Статус: <span class="red"> Ошибка перевода</span>

                p.step__bot-t2 Произошла ошибка. Денежный перевод заблокирован <br />принимающей стороной до выяснения обстоятельств. <br />В течении 60 дней перевод будет возвращен на счет. 

                p.step__bot-t2 Франшиза страхового случая (5%): <span class="blue bold large">1900 руб</span>

                a.step__bot-submit.link(href="javascript:;") ОПЛАТИТЬ ФРАНШИЗУ

                .step__bot-footer Сразу после оплаты комиссии, <br />вам будет отправлен перевод в сумме: 38000 руб.
</template>

<script src='./script.js'></script>

<style lang='scss' src='../firstStep/style.scss'></style>