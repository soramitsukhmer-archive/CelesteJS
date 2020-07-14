"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AccessRight =
/**
 * Create a new instance of AccessRight
 * @param state
 */
function AccessRight(data) {
  _classCallCheck(this, AccessRight);

  _defineProperty(this, "id", void 0);

  _defineProperty(this, "name", void 0);

  this.id = data.id || null;
  this.name = data.name;
};

exports["default"] = AccessRight;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL0FjY2Vzc1JpZ2h0LnRzIl0sIm5hbWVzIjpbIkFjY2Vzc1JpZ2h0IiwiZGF0YSIsImlkIiwibmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7SUFFcUJBLFc7QUFJakI7Ozs7QUFJQSxxQkFBWUMsSUFBWixFQUFtQztBQUFBOztBQUFBOztBQUFBOztBQUMvQixPQUFLQyxFQUFMLEdBQVVELElBQUksQ0FBQ0MsRUFBTCxJQUFXLElBQXJCO0FBQ0EsT0FBS0MsSUFBTCxHQUFZRixJQUFJLENBQUNFLElBQWpCO0FBQ0gsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFjY2Vzc1JpZ2h0Q29udHJhY3QsIEFjY2Vzc1JpZ2h0VHlwZSB9IGZyb20gJy4uL3NwZWMvQWNjZXNzUmlnaHRDb250cmFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY2Vzc1JpZ2h0IGltcGxlbWVudHMgQWNjZXNzUmlnaHRDb250cmFjdCB7XG4gICAgcHVibGljIGlkOiBudW1iZXI7XG4gICAgcHVibGljIG5hbWU6IHN0cmluZztcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBBY2Nlc3NSaWdodFxuICAgICAqIEBwYXJhbSBzdGF0ZVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRhdGE6IEFjY2Vzc1JpZ2h0VHlwZSkge1xuICAgICAgICB0aGlzLmlkID0gZGF0YS5pZCB8fCBudWxsO1xuICAgICAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XG4gICAgfVxufVxuIl19