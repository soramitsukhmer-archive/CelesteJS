"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tokenize = tokenize;
Object.defineProperty(exports, "createGroupByKey", {
  enumerable: true,
  get: function get() {
    return _createGroupByKey.createGroupByKey;
  }
});

var _createGroupByKey = require("./createGroupByKey");

/**
 * Create a tokeninze key string
 * @param key
 */
function tokenize(key) {
  return key.replace(/\s/, "_").toUpperCase();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9pbmRleC50cyJdLCJuYW1lcyI6WyJ0b2tlbml6ZSIsImtleSIsInJlcGxhY2UiLCJ0b1VwcGVyQ2FzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBOzs7O0FBSU8sU0FBU0EsUUFBVCxDQUFrQkMsR0FBbEIsRUFBK0I7QUFDcEMsU0FBT0EsR0FBRyxDQUNQQyxPQURJLENBQ0ksSUFESixFQUNVLEdBRFYsRUFFSkMsV0FGSSxFQUFQO0FBR0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgeyBjcmVhdGVHcm91cEJ5S2V5IH0gZnJvbSAnLi9jcmVhdGVHcm91cEJ5S2V5J1xuXG4vKipcbiAqIENyZWF0ZSBhIHRva2VuaW56ZSBrZXkgc3RyaW5nXG4gKiBAcGFyYW0ga2V5XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2tlbml6ZShrZXk6IHN0cmluZykge1xuICByZXR1cm4ga2V5XG4gICAgLnJlcGxhY2UoL1xccy8sIFwiX1wiKVxuICAgIC50b1VwcGVyQ2FzZSgpO1xufVxuIl19