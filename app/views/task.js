define(['jquery', 'underscore', 'backbone',
        '../models/task',
        'text!../templates/task.tp'
  ],

  function( $, _, Backbone,
      Task,
      taskTp
  ) {

      var Task = Backbone.View.extend({

        tagName: 'div',
        model: Task,
        template: taskTp,

        events: {
          'click .edit': 'edit', // * Edit a task
          'click .delete': 'delete', // * Remove a task
          'click .complete': 'complete' // * Mark a task as completed
          //todo: * Add a task with title
        },

        initialize: function() {

          //вызывает перерисовку по событиям destroy и change
          this.listenTo(this.model, 'destroy', this.remove);
          this.listenTo(this.model, 'change', this.render);
          this.render();

          //console.log('Item view initialized')

        },

        render: function() {
          // создаем представление для задания
          var temp  = _.template(this.template)({task: this.model.toJSON()});
          // выводим шаблон на страницу
          this.$el.html(temp)
        },

        edit: function(event) {

          // найдем заголовок проекта
          var self = this, $title = $(event.currentTarget);

          // переделаем его в поле ввода
          $title.attr('contentEditable', 'true');

          //ставит каретку в конец строки
          // не правильно работает placeCaretAtEnd( $title );

          // сохраняем изменения при снятии фокуса или нажатия ENTER
          $title.on('blur keypress', function(event) {
            if(event.type === 'blur' || event.which == 13) {
              event.preventDefault();
              var text = $(this).text();
              $title.attr('contentEditable', 'false');
              // поменяем атрибут модели
              self.model.set('title', text);
              //сохраняем на сервер
              //self.model.save();
            }
          });
        },

        delete: function() {
          //уничтожаем модель
          this.model.destroy();
        },

        complete: function(){
          // меняем атрибут модели на противоположный
          this.model.set('complete', !this.model.get('complete'));
        }

      });

    return Task;


  });
