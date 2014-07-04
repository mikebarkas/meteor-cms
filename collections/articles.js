//
// Define Collections
//
Articles = new Meteor.Collection('articles');

//
// Basic Permissions
//
Articles.allow({
  update: permissionCheck,
  remove: permissionCheck
});

/*
Articles.deny({
  update: ownsDocument

});
*/
//
// Define Methods
//
Meteor.methods({

  article: function(articleAttributes) {

    var user = Meteor.user(),
      sameTitle = Articles.findOne({title: articleAttributes.title});

      if (!user) {
        throw new Meteor.Error(401, 'You must be logged in to submit Articles.');
      }

      if (!articleAttributes.title) {
        throw new Meteor.Error(422, 'Please include a title.');
      }

      if (articleAttributes.title && sameTitle) {
        throw new Meteor.Error(302, 'An Article with the same name already exists.');
      }

      // Whitelist the fields
      var article = _.extend(_.pick(articleAttributes,
          'title',
          'body',
          'published'
        ), {

        userId: user.id,
        author: user.username,
        submitted: new Date().getTime(),

      });

      var articleId = Articles.insert(article);

      return  articleId;
  }

});