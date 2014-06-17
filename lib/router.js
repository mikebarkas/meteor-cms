Router.configure ({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

Router.map (function () {

  this.route('home', {
    path: '/',
    data: {
      title: 'Home Page Title',
      description: 'This is the page description from the router.',
    }
  });
  this.route('about', {path: '/about'});

  this.route('articles', {
    path: '/articles',
    template: 'articlesList'
  });

  // Admin Section
  this.route('admin', {
    path: '/admin',
    template: 'admin',
    layoutTemplate: 'adminlayout'
  });
});