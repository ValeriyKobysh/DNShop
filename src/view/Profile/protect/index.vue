<template lang='pug'>
    .step
        .step__top
            .step__top-left
                span.step__top-icon
                    success-icon(height="140")

            .step__top-right
                .step__top-heading УСТАНОВЛЕНА ЗАЩИЩЕННАЯ ЛИНИЯ СВЯЗИ

                .step__top-desc Не покидайте страницу!!! Если вы закроете данную страницу, сессия будет завершена и Ваш доход утерян

                .step__top-t2 Чтобы завершить подключение линии и <span style="color: orange">денежный перевод</span> был отправлен, вам нужно активировать лицензию на програмное обеспечение. Для этого получите <span style="color: orange">лицензионный ключ</span>. Получение ключа моментальное. <span style="font-weight: bold">Сразу после получения лицензионного ключа, вам будет отправлен денежный перевод.</span>

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

                p.step__bot-t2 Для завершения подключения, получите <br />лицензионный ключ активации программного <br />обеспечения линии.

                p.step__bot-t2 Подключение защищенной линии:  <span class="blue bold large">1525 руб</span>

                router-link.step__bot-submit.link(:to="{ name: 'license' }") ПОЛУЧИТЬ ЛИЦЕНЗИОННЫЙ КЛЮЧ

                .step__bot-footer Сразу после оплаты комиссии, <br />вам будет отправлен перевод в сумме: 38000 руб.
</template>

<script src='./script.js'></script>

<style lang='scss' src='../firstStep/style.scss'></style>