Template.articlesList.helpers({
  article: function() {
    return Articles.find({published: 'yes'});
  }
});