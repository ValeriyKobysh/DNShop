<template lang='pug'>
    .index.grow
        section.index__welcome
            img.index__welcome-bg(src="~img/images/welcome-img.png")

            .index__welcome-container.container

                .index__welcome-left
                    .index__welcome-logo
                        img(src="~img/icons/logo.png")
                    
                    .index__welcome-title Интернет-магазин бытовой техники «DNshop» Срочно набирает сотрудников для простой online работы в интернете с ежедневными выплатами от 2500 руб!

                    .index__welcome-desc Без вложений! Без специальных навыков! Удаленно! Доступно каждому!

                .index__welcome-right
                    img.index__welcome-img(src="~img/images/welcome-image.png")

        transition(name="fade" mode="out-in")
            router-view

        section.index__reviews
            .index__reviews-container.container
                h2.index__reviews-heading Отзывы наших сотрудников:

                .index__reviews-wrapper
                    ul.index__reviews-list.list
                        li.index__reviews-item(
                            v-for="item in sliderData"
                            :style="{ transform: 'translateX(' + sliderPosition + '%)' }")

                            .index__reviews-wrap
                                .index__reviews-header
                                    span.index__reviews-avatar
                                        img(:src="item.avatar")

                                    span {{item.name}}

                                .index__reviews-body {{item.review}}

                    .index__reviews-navs
                        a.index__reviews-nav.link(@click="prevSlide()")
                            nav-icon.index__reviews-icon(height="65")

                        a.index__reviews-nav.link(@click="nextSlide()")
                            nav-icon.index__reviews-icon.index__reviews-icon_back(height="65")

        section.index__partners
            .index__partners-container.container
                h2.index__partners-heading 
                    span Наши партнёры

                ul.index__partners-list.list
                    li.index__partners-item
                        img(src="~img/images/partners-1.png")

                    li.index__partners-item
                        img(src="~img/images/partners-2.png")

                    li.index__partners-item
                        img(src="~img/images/partners-3.png")

                    li.index__partners-item
                        img(src="~img/images/partners-4.png")

                    li.index__partners-item
                        img(src="~img/images/partners-5.png")

                    li.index__partners-item
                        img(src="~img/images/partners-6.png")

        section.index__adv
            .index__adv-container.container
                p Мы размещаем очень много рекламы в поисковых системах и на популярнейших ресурсах в интернете. У нас есть постоянный поток заказов от клиентов. Каждый оформленный заказ добавляется в нашу базу, в которую вы и будете вносить информацию наших клиентов.
                
                p Каждый сотрудник получает фиксированную ставку: 7,5% от стоимости обработанного заказа.

</template>

<script src='./script.js'></script>

<style lang='scss' src='./style.scss'></style>