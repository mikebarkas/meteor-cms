Template.createArticle.events({
  
  'submit form': function (e) {
    e.preventDefault();
  
    var article = {
      title: $(e.target).find('[name=title]').val(),
      body: $(e.target).find('[name=body]').val(),
      published: $(e.target).find('[name=published]').val()
    }

    Meteor.call('article', article, function(error, id) {
      if (error)
        return alert(error.reason);
    });

    Router.go('articles');

  }

});