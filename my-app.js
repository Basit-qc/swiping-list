// Initialize app
var myApp = new Framework7();

// // If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;


$$('.swipeout').on('swipeout:delete', function () {
  myApp.alert('Delete');
});

// $$('.forward').on('click', function () {
//   myApp.alert('Forward');
// });
//
// function mark() {
//     myApp.alert('ho gya raja g');
// }


/* Initialize views */
var mainView = myApp.addView('.view-main', {
  dynamicNavbar: true
});


// for (var i = 0; i < myApp.views.length; i ++) {
//   var view = myApp.views[i];
//   if (view.main) myApp.alert('I found main View!')
// }


Vue.component('todo-item', {
  props: ['todo'],
  template: '<li class="swipeout">\n' +
  '                                <!-- Usual list element wrapped with "swipeout-content" -->\n' +
  '                                <div class="swipeout-content">\n' +
  '                                    <!-- Your list element here -->\n' +
  '                                    <div class="item-content">\n' +
  '                                        <div class="item-inner">\n' +
  ' <figure class="figure"><img :src="todo.src" class="img-size"/>' +
  '<figcaption style="text-align: center;" class="figure-caption">{{todo.name}}</figcaption>\n' +
  '</figure>' +
  '                                        </div>\n' +
  '                                    </div>\n' +
  '                                </div>\n' +
  '                                <!-- Swipeout actions left -->\n' +
  '                                <div class="swipeout-actions-left">\n' +
  '                                    <!-- Swipeout actions links/buttons -->\n' +
  '                                    <a href="#" class="swipeout-delete swipeout-overswipe" style="display: none;"></a>\n' +  '                                </div>\n' +
  '\n' +
  '                                <!-- Swipeout actions right -->\n' +
  '                                <div class="swipeout-actions-right">\n' +
  '                                    <!-- Swipeout actions links/buttons -->\n' +
  '                                    <a href="#" class="swipeout-delete swipeout-overswipe" style="display: none;"></a>\n' +
  '                                </div>\n' +
  '                            </li>'
});

var vue_app = new Vue({
  el: '#vue_app',
  data: {
    groceryList: [
      { name: 'Lorel Ipsum Lorel Ipsum', src: 'assets/images/1.jpg' },
      { name: 'Lorel Ipsum Lorel Ipsum', src: 'assets/images/2.jpg' },
      { name: 'Lorel Ipsum Lorel Ipsum', src: 'assets/images/3.jpg' },
      { name: 'Lorel Ipsum Lorel Ipsum', src: 'assets/images/4.jpg' },
      { name: 'Lorel Ipsum Lorel Ipsum', src: 'assets/images/5.jpg' },
      { name: 'Lorel Ipsum Lorel Ipsum', src: 'assets/images/6.jpg' },
      { name: 'Lorel Ipsum Lorel Ipsum', src: 'assets/images/7.jpg' },
      { name: 'Lorel Ipsum Lorel Ipsum', src: 'assets/images/8.jpg' },
      { name: '', src: 'assets/images/1.jpg' }

    ]
  }
});
