//
// Public list of articles.
//
Template.articlesList.helpers({
  
  article: function() {
    return Articles.find();
  }

});

//
// This will be a check if owner of article for editing authentication.
//
Template.articlePage.helpers({
  
  owner: function() {
    return this.userId == Meteor.userId();
  }
  
});