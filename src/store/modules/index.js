const index = {
    state: {
        productsData: [
            {
                id: 1,
                img: 'http://via.placeholder.com/360x320/2f2f2f',
                product: 'Холодильник Gorenje RKI4151AW',
                order: 22475619,
                city: 'Москва',
                name: 'Сергей Коваленко',
                time: '10:30'
            },
            {
                id: 2,
                img: 'http://via.placeholder.com/360x320/4c4c4c',
                product: 'Холодильник Gorenje RKI4151AW',
                order: 44556677,
                city: 'Москва',
                name: 'Сергей Коваленко',
                time: '12:33'
            },
            {
                id: 3,
                img: 'http://via.placeholder.com/360x320/5c2c5c',
                product: 'Холодильник Gorenje RKI4151AW',
                order: 12345678,
                city: 'Москва',
                name: 'Сергей Коваленко',
                time: '01:12'
            },
            {
                id: 4,
                img: 'http://via.placeholder.com/360x320/7e4c3c',
                product: 'Холодильник Gorenje RKI4151AW',
                order: 32345789,
                city: 'Москва',
                name: 'Сергей Коваленко',
                time: '16:45'
            },
            {
                id: 5,
                img: 'http://via.placeholder.com/360x320/9e4c8c',
                product: 'Холодильник Gorenje RKI4151AW',
                order: 88993633,
                city: 'Москва',
                name: 'Сергей Коваленко',
                time: '22:45'
            },
            {
                id: 6,
                img: 'http://via.placeholder.com/360x320/0e8c6c',
                product: 'Холодильник Gorenje RKI4151AW',
                order: 88993633,
                city: 'Москва',
                name: 'Сергей Коваленко',
                time: '17:22'
            }
        ],
        user: {
            login: 'User1508',
            password: '2Yv328g'
        },
        cash: {
            processing: 678,
            available: 3388,
            course: 65
        }
    },
    getters: {
        Products(state){ return state.productsData; },
        User(state){ return state.user; },
        Cash(state){ return state.cash; }
    },
    mutations: {
    },
    actions: {
    }
}

export default index;
