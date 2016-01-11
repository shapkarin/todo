define(['jquery',
        'underscore',
        'backbone',

        '../modules/placeCaret',

        '../models/task'
  ],

  function( $, _, Backbone,

      placeCaretAtEnd,
      Task

  ) {

      var Task = Backbone.View.extend({

        tagName: 'div',
        model: Task,
        template: '',

        events: {
          'click .edit': 'edit',
          'click .delete': 'delete',
          'click .complete': 'complete'
        },

        initialize: function(options) {

          this.template = options.template;
          this.listenTo(this.model, 'destroy', this.remove);
          this.listenTo(this.model, 'change', this.render);
          this.render();

          console.log('Item view initialized')

        },

        render: function() {
          // создаем представление для задания
          var temp  = _.template(this.template)({task: this.model.toJSON()});
          // выводим шаблон на страницу
          this.$el.html(temp)
        },

        edit: function(event) {

          // найдем заголовок проекта
          var self = this,
            $title = $(event.currentTarget);

          // переделаем его в поле ввода
          $title.attr('contentEditable', 'true');

          //ставит каретку в конец строки
          placeCaretAtEnd( $title );

          // сохраняем изменения при снятии фокуса или нажатия ENTER
          $title.on('blur keypress', function(event) {
            if(event.type === 'blur' || event.which == 13) {
              event.preventDefault();
              var text = $(this).text();
              $title.attr('contentEditable', 'false');
              // поменяем атрибут модели
              //self.model.set('name', text);
              //self.model.save();
            }
          });
        },

        delete: function() {
          this.model.destroy();
        },

        complete: function(){
          this.model.set('complete', !this.model.get('complete'));
        }

      });

    return Task;


  });
