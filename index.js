var Vue = require('vue');


Vue.component('home', {
  template: '<h1>Home</h1><div class="content"><content/></div>',
  created: function () {
    this.msg = "Home sweet home!"
  }
});

Vue.component('page1', {
  template: '<h1>Page1</h1><div class="content"><content/></div>',
  created: function () {
    this.msg = "Welcome to page 1!"
  }
});

Vue.component('page2', {
  template: '<h1>Page2</h1><div class="content"><content/></div>',
  created: function () {
    this.msg = "Welcome to page 2!"
  }
});

Vue.component('notfound', {
  template: '<h1>404 yo</h1>'
});


var routes = ['home', 'page1', 'page2'];

function getRoute () {
  var path = location.hash.replace(/^#!\/?/, '') || 'home';
  return routes.indexOf(path) > -1 ? path : 'notfound';
}

window.addEventListener('hashchange', function () {
  app.currentView = getRoute();
});


var app = new Vue({
  el: 'div',
  data: {
    currentView: getRoute(),
    routes: routes,
    data: {
      test: '123'
    }
  }
});
