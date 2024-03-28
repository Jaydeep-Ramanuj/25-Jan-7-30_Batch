/**
* jquery.checkbox.js v0.0.2
* https://github.com/iuhoay/jquery.checkbox
*/
(function($){
  $.fn.checkbox = function(callback) {
    var $el = $(this),
        children_select = $el.data("children"),
        global_this = this;

    if (!children_select) return false;

    $el.on("change", function() {
      $(children_select).prop("checked", $el.prop("checked"));
      children_change();
    })

    $(children_select).on("change", function() {
      children_change();
    })

    var children_change = function() {
      var $children = $(children_select);
      $el.prop("checked", $children.length == $children.filter(":checked").length)

      if (typeof callback === 'function') {
        callback(global_this.values());
      }
    }

    this.values = function() {
      var result = [];
      $(children_select + ":checked").each(function() {
        result.push($(this).val());
      });
      return result;
    }

    return this;
  }
})(jQuery);
