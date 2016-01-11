define(['jquery'], function($) {

  // переводим курсор в конец заголовка при редактировании
  var placeCaretAtEnd = function($el){
    $el[0].focus();
    if (typeof window.getSelection != "undefined"
      && typeof document.createRange != "undefined") {
      var range = document.createRange();
      range.selectNodeContents($el[0]);
      range.collapse(false);
      var sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    } else if (typeof document.body.createTextRange != "undefined") {
      var textRange = document.body.createTextRange();
      textRange.moveToElementText($el[0]);
      textRange.collapse(false);
      textRange.select();
    }
  };

  return placeCaretAtEnd
});