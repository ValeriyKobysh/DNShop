<template lang='pug'>
    footer.footer
        .footer__container.container
            span.footer__text Служба поддержки: ok.master.2015@mail.ru
            span.footer__text «DNShop». Все правила защищены.
            router-link.footer__link(:to="{ name: 'responsibility' }") Отказ от отвественности
</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>