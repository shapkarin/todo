define(['jquery', 'underscore', 'backbone', 'models/task','lib/backbone.localStorage'],  function($, _, Backbone, Model) {

    var Collection = Backbone.Collection.extend({
        model: Model,
        //todo: * Persist tasks between working sessions (it could be LocalStorage)
        //localStorage: new Backbone.LocalStorage('tasks'),
        initialize: function(){
          console.log('Tasks collection initialized')
        },
      // * List tasks in sorted in reverse order by task title
      comparator: function(chapterA, chapterB) {
        if (chapterA.get('title') > chapterB.get('title')) return -1;
        if (chapterB.get('title') > chapterA.get('title')) return 1;
        return 0;
      }
    });

    return Collection;
});