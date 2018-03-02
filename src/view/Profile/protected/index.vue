<template lang='pug'>
    .step
        .step__top
            .step__top-left
                span.step__top-icon
                    success-icon(height="140")

            .step__top-right
                .step__top-heading ЗАЩИЩЕННАЯ ЛИНИЯ ГОТОВА К ИСПОЛЬЗОВАНИЮ

                .step__top-desc Оставайтесь на странице во время работы системы

                .step__top-t2 Чтобы завершить подключение линии и денежный перевод был отправлен, вам нужно активировать лицензию на програмное обеспечение. Для этого получите лицензионный ключ. Получение ключа моментальное. Сразу после получения лицензионного ключа, вам будет отправлен денежный перевод.

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

                p.step__bot-t2 Защищенная линия связи полностью настроена. <br />Получите личную цифровую подпись для заверения всех <br />ваших дальнейших переводов. 


                p.step__bot-t2 Подключение защищенной линии:  <span class="blue bold large">1625 руб</span>

                router-link.step__bot-submit.link(:to="{ name: 'insurance' }") ПОЛУЧИТЬ ЦИФРОВУЮ ПОДПИСЬ

                .step__bot-footer Сразу после оплаты комиссии, <br />вам будет отправлен перевод в сумме: 38000 руб.
</template>

<script src='./script.js'></script>

<style lang='scss' src='../firstStep/style.scss'></style>