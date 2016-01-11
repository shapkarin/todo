define(['jquery', 'underscore', 'backbone', 'models/task','lib/backbone.localStorage'],  function($, _, Backbone, Model) {

    var Collection = Backbone.Collection.extend({
        model: Model,
        //localStorage: new Backbone.LocalStorage('tasks'),
        initialize: function(){
          console.log('Tasks collection initialized')
        },
      comparator: function(chapterA, chapterB) {
        if (chapterA.get('title') > chapterB.get('title')) return -1;
        if (chapterB.get('title') > chapterA.get('title')) return 1;
        return 0;
      }
    });

    return Collection;
});