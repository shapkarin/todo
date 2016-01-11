requirejs.config({
  baseUrl: '/todo/app/',
  paths: {
    text: 'lib/require/plugins/text',
    jquery: 'lib/jquery-1.8.3',
    underscore: 'lib/underscore',
    backbone: 'lib/backbone'
  }

});

requirejs(['jquery', 
     'underscore',
     'backbone',
     'collections/tasks',
     'views/tasks'],
  function($, _, Backbone,
           CollectionTask,
           ViewTaskList) {

  var App = {
    Model: {},
    View: {},
    Collection: {},
    testTasks: []
  };

  for (var i = 1; i < 6; i++){
    App.testTasks.push({
        title: 'task ' + i
    })
  }

  App.Collection.Task = new CollectionTask(App.testTasks);

  App.View.Task = new ViewTaskList({
    collection: App.Collection.Task
  });

});
