Template.articlePage.helpers({
  owner: function() {
    return this.userId == Meteor.userId();
  }
  
});