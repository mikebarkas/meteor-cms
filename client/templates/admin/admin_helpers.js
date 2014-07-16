//
// List articles.
//
Template.manageArticles.helpers({
  
  articleRow: function() {
    return Articles.find();
  }

});

//
// Create article.
//
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

//
// Edit articles.
//
Template.editArticle.events({

  'submit form': function(e) {
    e.preventDefault();

    var currentArticleId = this._id;

    var articleProperties = {
      title: $(e.target).find('[name=title]').val(),
      body: $(e.target).find('[name=body]').val(),
      published: $(e.target).find('[name=published]').val()
    }

    Articles.update(currentArticleId, {$set: articleProperties}, function(error) {
      if (error) {
        alert(error.reason);
      } else {
        Router.go('articles');
      }
    });

  },

  'click #edit-article-delete': function(e) {
    e.preventDefault();

    if (confirm('Delete this Article?')) {
      var currentArticleId = this._id;

      Articles.remove(currentArticleId);

      Router.go('articles');
    }
  }

});