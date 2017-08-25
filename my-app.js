// First of all, we need to initialize/enable Framework7 Vue plugin:
Vue.use(Framework7Vue);

// Vue component for each image
Vue.component('my-img', {
    props: ['image'],
    template: '<li class="swipeout">\n' +
    '                                <!-- Usual list element wrapped with "swipeout-content" -->\n' +
    '                                <div class="swipeout-content">\n' +
    '                                    <!-- Your list element here -->\n' +
    '                                    <div class="item-content">\n' +
    '                                        <div class="item-inner">\n' +
    ' <figure class="figure"><img :src="image.src" class="img-size"/>' +
    '<figcaption style="text-align: center;" class="figure-caption">{{image.name}}</figcaption>\n' +
    '</figure>' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <!-- Swipeout actions left -->\n' +
    '                                <div class="swipeout-actions-left">\n' +
    '                                    <!-- Swipeout actions links/buttons -->\n' +
    '                                    <a href="#" class="swipeout-delete swipeout-overswipe" style="display: none;"></a>\n' + '                                </div>\n' +
    '\n' +
    '                                <!-- Swipeout actions right -->\n' +
    '                                <div class="swipeout-actions-right">\n' +
    '                                    <!-- Swipeout actions links/buttons -->\n' +
    '                                    <a href="#" class="swipeout-delete swipeout-overswipe" style="display: none;"></a>\n' +
    '                                </div>\n' +
    '                            </li>'
});


// Init Vue App
new Vue({
    // App Root Element
    el: '#app',
    // Init Framework7. All Framework7 parameters should be passed in "framework7" property, e.g.:
    framework7: {
        // App Root Element, should be the same as the component root "el"
        root: '#app',
        // Array with app routes
        routes: [
            {
                path: '/',
                component: 'my-img'
            },
        ]
    },
    // App root data
    data: {
        image_list: [
            {name: 'Lorel Ipsum Lorel Ipsum', src: 'assets/images/1.jpg'},
            {name: 'Lorel Ipsum Lorel Ipsum', src: 'assets/images/2.jpg'},
            {name: 'Lorel Ipsum Lorel Ipsum', src: 'assets/images/3.jpg'},
            {name: 'Lorel Ipsum Lorel Ipsum', src: 'assets/images/4.jpg'},
            {name: 'Lorel Ipsum Lorel Ipsum', src: 'assets/images/5.jpg'},
            {name: 'Lorel Ipsum Lorel Ipsum', src: 'assets/images/6.jpg'},
            {name: 'Lorel Ipsum Lorel Ipsum', src: 'assets/images/7.jpg'},
            {name: 'Lorel Ipsum Lorel Ipsum', src: 'assets/images/8.jpg'},
            {name: '', src: 'assets/images/1.jpg'}

        ]
    },
    // App root methods
    methods: {
        // ....
    }
});


// // If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;


$$('.swipeout').on('swipeout:delete', function () {
    alert('Alert for deleted item!');
});

