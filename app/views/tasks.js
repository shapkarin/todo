define(['views/task', 'text!../templates/task.tp'], function(TaskView, taskTp) {

  var View = Backbone.View.extend({
    el: $('#application'),
    template: taskTp,

    initialize: function() {
      console.log('Collection View is create');
      this.render();
    },

    render: function() {
      console.log('Run collection rendering...');
      var temp = this.template;
      // очищаем содержимое представления
      this.$el.empty();
      // перебираем модели в коллекции и для каждой создаем представление
      _.each(this.collection.models, function(item) {
        // в options передаем шаблон и модель
        var view = new TaskView({model: item, template: temp});
        // добавляем полученные представления в контейнер
        this.$el.append(view.$el)
      }, this);
    }

  })

  return View;

})