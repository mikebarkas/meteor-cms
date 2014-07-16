// 
// Router config
//
Router.configure ({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

//
// Main router
//
Router.map (function () {

  // Pages
  this.route('home', {
    path: '/',
    data: {
      title: 'Home Page Title',
      description: 'This is the page description from the router.',
    }
  });

  this.route('about', {
    path: '/about',
  });

  // Articles
  this.route('articles', {
    path: '/articles',
    template: 'articlesList'
  });

  this.route('articlePage', {
    path: 'articles/:_id',
    data: function() { return Articles.findOne(this.params._id); }
  });

  // Admin Section
  this.route('admin', {
    path: '/admin',
    template: 'admin',
    layoutTemplate: 'adminlayout'
  });

  this.route('manageArticles', {
    path: '/admin/manage-articles',
    template: 'manageArticles',
    layoutTemplate: 'adminlayout',
  });

  this.route('createArticle', {
    path: '/admin/create-article',
    template: 'createArticle',
    layoutTemplate: 'adminlayout'
  });

  this.route('editArticle', {
    path: '/admin/edit-article/:_id',
    template: 'editArticle',
    layoutTemplate: 'adminlayout',
    data: function() { return Articles.findOne(this.params._id); }
  });

});

//
// Require Log in
//
var requireLogin = function (pause) {
  if (! Meteor.user()) {
    if (Meteor.loggingIn())
      this.render(this.loadingTemplate);
    else
      this.render('accessDenied');
    pause();
  }
}

//
// Router hooks
//
Router.onBeforeAction('loading');
Router.onBeforeAction(requireLogin, {only: ['admin', 'createArticle']});

