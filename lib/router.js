// Router config
Router.configure ({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

// Main router
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

// Require Log in
var requireLogin = function (pause) {
  if (! Meteor.user()) {
    if (Meteor.loggingIn())
      this.render(this.loadingTemplate);
    else
      this.render('accessDenied');
    pause();
  }
}

// Router hooks
Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin, {only: 'admin'});