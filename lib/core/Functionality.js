"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Functionality =
/**
 * Create a new instance of Functionality
 * @param data
 */
function Functionality(data) {
  _classCallCheck(this, Functionality);

  _defineProperty(this, "id", void 0);

  _defineProperty(this, "name", void 0);

  _defineProperty(this, "type", void 0);

  _defineProperty(this, "function", void 0);

  _defineProperty(this, "description", void 0);

  _defineProperty(this, "accessRights", void 0);

  this.id = data.id || null;
  this.name = data.name;
  this.type = data.type;
  this["function"] = data["function"];
  this.description = data.description || null;
  this.accessRights = data.accessRights || [];
};

exports["default"] = Functionality;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL0Z1bmN0aW9uYWxpdHkudHMiXSwibmFtZXMiOlsiRnVuY3Rpb25hbGl0eSIsImRhdGEiLCJpZCIsIm5hbWUiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJhY2Nlc3NSaWdodHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0lBR3FCQSxhO0FBUWpCOzs7O0FBSUEsdUJBQVlDLElBQVosRUFBcUM7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDakMsT0FBS0MsRUFBTCxHQUFVRCxJQUFJLENBQUNDLEVBQUwsSUFBVyxJQUFyQjtBQUNBLE9BQUtDLElBQUwsR0FBWUYsSUFBSSxDQUFDRSxJQUFqQjtBQUNBLE9BQUtDLElBQUwsR0FBWUgsSUFBSSxDQUFDRyxJQUFqQjtBQUNBLHFCQUFnQkgsSUFBSSxZQUFwQjtBQUNBLE9BQUtJLFdBQUwsR0FBbUJKLElBQUksQ0FBQ0ksV0FBTCxJQUFvQixJQUF2QztBQUNBLE9BQUtDLFlBQUwsR0FBb0JMLElBQUksQ0FBQ0ssWUFBTCxJQUFxQixFQUF6QztBQUNILEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGdW5jdGlvbmFsaXR5Q29udHJhY3QsIEZ1bmN0aW9uYWxpdHlUeXBlIH0gZnJvbSAnLi4vc3BlYy9GdW5jdGlvbmFsaXR5Q29udHJhY3QnXG5pbXBvcnQgeyBBY2Nlc3NSaWdodENvbnRyYWN0IH0gZnJvbSBcIi4uL3NwZWMvQWNjZXNzUmlnaHRDb250cmFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGdW5jdGlvbmFsaXR5IGltcGxlbWVudHMgRnVuY3Rpb25hbGl0eUNvbnRyYWN0IHtcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgICBwdWJsaWMgbmFtZTogc3RyaW5nO1xuICAgIHB1YmxpYyB0eXBlOiBzdHJpbmc7XG4gICAgcHVibGljIGZ1bmN0aW9uOiBzdHJpbmc7XG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgcHVibGljIGFjY2Vzc1JpZ2h0czogQXJyYXk8QWNjZXNzUmlnaHRDb250cmFjdD5cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBpbnN0YW5jZSBvZiBGdW5jdGlvbmFsaXR5XG4gICAgICogQHBhcmFtIGRhdGFcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihkYXRhOiBGdW5jdGlvbmFsaXR5VHlwZSkge1xuICAgICAgICB0aGlzLmlkID0gZGF0YS5pZCB8fCBudWxsO1xuICAgICAgICB0aGlzLm5hbWUgPSBkYXRhLm5hbWU7XG4gICAgICAgIHRoaXMudHlwZSA9IGRhdGEudHlwZTtcbiAgICAgICAgdGhpcy5mdW5jdGlvbiA9IGRhdGEuZnVuY3Rpb247XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkYXRhLmRlc2NyaXB0aW9uIHx8IG51bGw7XG4gICAgICAgIHRoaXMuYWNjZXNzUmlnaHRzID0gZGF0YS5hY2Nlc3NSaWdodHMgfHwgW107XG4gICAgfVxufVxuIl19