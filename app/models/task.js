define(['jquery',
    'underscore',
    'backbone'
  ],

  function( $, _, Backbone) {

    var Task = Backbone.Model.extend({

      url: '',

      defaults: {
        // * Add a task with title
        "title": '',
        "completed": false,
        "created_at": new Date()
      },

      initialize: function(){
        //console.log('Task model initialized')
      }

    });

    return Task;
  });
