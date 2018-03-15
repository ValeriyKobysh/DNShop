<template lang='pug'>
    .step
        .step__top
            .step__top-left
                span.step__top-icon
                    success-icon(height="140")

            .step__top-right
                .step__top-finhead УСПЕШНЫЙ ПЕРЕВОД

                .step__top-findesc Ваши средства будут зачислены в скором времени 

                a.step__top-link(href="jvaascript:;") Скачать курс
                    //- p Перевод <span style="color: orange">заблокирован</span> принимающей стороной по причине произошедшей ошибки. Процес отмены перевода и возврата денег на счет занимает до 2х месяцев. Чтобы не ждать длительное время и получить перевод <span style="color: orange">моментально</span>, воспользуйтесь имеющейся у вас страховкой. Для этого вам нужно оплатить франшизу по вашему страховому случаю в размере 5% от суммы перевода. 

                    //- p <span style="font-weight: bold">Сразу после оплаты франшизы, страховая компания отправит вам денежный перевод.</span>

</template>

<script src='./script.js'></script>

<style lang='scss' src='../firstStep/style.scss'></style>