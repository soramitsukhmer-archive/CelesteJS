"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = require("./utils");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Celeste = /*#__PURE__*/function () {
  /**
   * Create a new instance of Celeste
   * @param functionalities
   * @param rights
   */
  function Celeste() {
    var functionalities = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var rights = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    _classCallCheck(this, Celeste);

    _defineProperty(this, "functionalities", []);

    _defineProperty(this, "rights", []);

    this.functionalities = functionalities;
    this.rights = rights;
  }
  /**
   * Add new functionality
   * @param functionality
   */


  _createClass(Celeste, [{
    key: "addFunctionality",
    value: function addFunctionality(functionalityID) {
      var functionality = this.findFunctionalityById(functionalityID);

      if ([functionality.index].includes(-1)) {// throw func not found
      }

      return this;
    }
    /**
     * Add new Access Right to existing functionality
     * @param functionalityID
     * @param rights
     */

  }, {
    key: "addAccessRights",
    value: function addAccessRights(functionalityID, rightsID) {
      var functionality = this.findFunctionalityById(functionalityID);
      var rights = this.findRightsById(rightsID);
      return this;
    }
    /**
     * Find functionality by ID
     * @param id
     */

  }, {
    key: "findFunctionalityById",
    value: function findFunctionalityById(id) {
      var index = this.functionalities.findIndex(function (item) {
        return item.id === id;
      });
      if (index === -1) this.throwFunctionalityNotFoundException();
      var item = this.functionalities[index];
      return {
        index: index,
        item: item
      };
    }
    /**
     * Find rights by ID
     * @param id
     */

  }, {
    key: "findRightsById",
    value: function findRightsById(id) {
      var index = this.rights.findIndex(function (item) {
        return item.id === id;
      });
      if (index === -1) this.throwAccessRightsNotFoundException();
      var item = this.rights[index];
      return {
        index: index,
        item: item
      };
    }
    /**
     * Create a group of Functionalities
     */

  }, {
    key: "group",
    value: function group() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'type';
      var factory = (0, _utils.createGroupByKey)(key);
      return factory(this.functionalities);
    }
    /**
     * Throw functionality not found exception
     */

  }, {
    key: "throwFunctionalityNotFoundException",
    value: function throwFunctionalityNotFoundException() {
      this.throwError('Functionality not found.');
    }
    /**
     * Throw access rights not found exception
     */

  }, {
    key: "throwAccessRightsNotFoundException",
    value: function throwAccessRightsNotFoundException() {
      this.throwError("AccessRights not found.");
    }
    /**
     * Throw error exception
     * @param message
     */

  }, {
    key: "throwError",
    value: function throwError(message) {
      throw new Error("[Celeste]: ".concat(message));
    }
  }]);

  return Celeste;
}();

exports["default"] = Celeste;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9DZWxlc3RlLnRzIl0sIm5hbWVzIjpbIkNlbGVzdGUiLCJmdW5jdGlvbmFsaXRpZXMiLCJyaWdodHMiLCJmdW5jdGlvbmFsaXR5SUQiLCJmdW5jdGlvbmFsaXR5IiwiZmluZEZ1bmN0aW9uYWxpdHlCeUlkIiwiaW5kZXgiLCJpbmNsdWRlcyIsInJpZ2h0c0lEIiwiZmluZFJpZ2h0c0J5SWQiLCJpZCIsImZpbmRJbmRleCIsIml0ZW0iLCJ0aHJvd0Z1bmN0aW9uYWxpdHlOb3RGb3VuZEV4Y2VwdGlvbiIsInRocm93QWNjZXNzUmlnaHRzTm90Rm91bmRFeGNlcHRpb24iLCJrZXkiLCJmYWN0b3J5IiwidGhyb3dFcnJvciIsIm1lc3NhZ2UiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUdBOzs7Ozs7Ozs7O0lBRXFCQSxPO0FBSWpCOzs7OztBQUtBLHFCQUF5RztBQUFBLFFBQTdGQyxlQUE2Rix1RUFBN0MsRUFBNkM7QUFBQSxRQUF6Q0MsTUFBeUMsdUVBQUosRUFBSTs7QUFBQTs7QUFBQSw2Q0FSakQsRUFRaUQ7O0FBQUEsb0NBUDVELEVBTzREOztBQUNyRyxTQUFLRCxlQUFMLEdBQXVCQSxlQUF2QjtBQUNBLFNBQUtDLE1BQUwsR0FBY0EsTUFBZDtBQUNIO0FBRUQ7Ozs7Ozs7O3FDQUlpQkMsZSxFQUF5QjtBQUN0QyxVQUFNQyxhQUFhLEdBQUcsS0FBS0MscUJBQUwsQ0FBMkJGLGVBQTNCLENBQXRCOztBQUVBLFVBQUksQ0FBQ0MsYUFBYSxDQUFDRSxLQUFmLEVBQXNCQyxRQUF0QixDQUErQixDQUFDLENBQWhDLENBQUosRUFBd0MsQ0FDcEM7QUFDSDs7QUFFRCxhQUFPLElBQVA7QUFDSDtBQUVEOzs7Ozs7OztvQ0FLZ0JKLGUsRUFBeUJLLFEsRUFBa0I7QUFDdkQsVUFBTUosYUFBYSxHQUFHLEtBQUtDLHFCQUFMLENBQTJCRixlQUEzQixDQUF0QjtBQUNBLFVBQU1ELE1BQU0sR0FBRyxLQUFLTyxjQUFMLENBQW9CRCxRQUFwQixDQUFmO0FBRUEsYUFBTyxJQUFQO0FBQ0g7QUFFRDs7Ozs7OzswQ0FJc0JFLEUsRUFBWTtBQUM5QixVQUFNSixLQUFLLEdBQUcsS0FBS0wsZUFBTCxDQUFxQlUsU0FBckIsQ0FBK0IsVUFBQUMsSUFBSTtBQUFBLGVBQUlBLElBQUksQ0FBQ0YsRUFBTCxLQUFZQSxFQUFoQjtBQUFBLE9BQW5DLENBQWQ7QUFDQSxVQUFJSixLQUFLLEtBQUssQ0FBQyxDQUFmLEVBQWtCLEtBQUtPLG1DQUFMO0FBQ2xCLFVBQU1ELElBQUksR0FBRyxLQUFLWCxlQUFMLENBQXFCSyxLQUFyQixDQUFiO0FBQ0EsYUFBTztBQUFFQSxRQUFBQSxLQUFLLEVBQUxBLEtBQUY7QUFBU00sUUFBQUEsSUFBSSxFQUFKQTtBQUFULE9BQVA7QUFDSDtBQUVEOzs7Ozs7O21DQUllRixFLEVBQVk7QUFDdkIsVUFBTUosS0FBSyxHQUFHLEtBQUtKLE1BQUwsQ0FBWVMsU0FBWixDQUFzQixVQUFDQyxJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDRixFQUFMLEtBQVlBLEVBQXRCO0FBQUEsT0FBdEIsQ0FBZDtBQUNBLFVBQUlKLEtBQUssS0FBSyxDQUFDLENBQWYsRUFBa0IsS0FBS1Esa0NBQUw7QUFDbEIsVUFBTUYsSUFBSSxHQUFHLEtBQUtWLE1BQUwsQ0FBWUksS0FBWixDQUFiO0FBQ0EsYUFBTztBQUFFQSxRQUFBQSxLQUFLLEVBQUxBLEtBQUY7QUFBU00sUUFBQUEsSUFBSSxFQUFKQTtBQUFULE9BQVA7QUFDSDtBQUVEOzs7Ozs7NEJBR3dEO0FBQUEsVUFBbERHLEdBQWtELHVFQUFwQyxNQUFvQztBQUNwRCxVQUFNQyxPQUFPLEdBQUcsNkJBQWlCRCxHQUFqQixDQUFoQjtBQUNBLGFBQU9DLE9BQU8sQ0FBQyxLQUFLZixlQUFOLENBQWQ7QUFDSDtBQUVEOzs7Ozs7MERBRzhDO0FBQzFDLFdBQUtnQixVQUFMLENBQWdCLDBCQUFoQjtBQUNIO0FBRUQ7Ozs7Ozt5REFHNkM7QUFDekMsV0FBS0EsVUFBTCxDQUFnQix5QkFBaEI7QUFDSDtBQUVEOzs7Ozs7OytCQUltQkMsTyxFQUFpQjtBQUNoQyxZQUFNLElBQUlDLEtBQUosc0JBQXdCRCxPQUF4QixFQUFOO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDZWxlc3RlQ29udHJhY3QgfSBmcm9tICcuL3NwZWMvQ2VsZXN0ZUNvbnRyYWN0J1xuaW1wb3J0IHsgRnVuY3Rpb25hbGl0eUNvbnRyYWN0LCBGdW5jdGlvbmFsaXR5R3JvdXBDb250cmFjdCB9IGZyb20gJy4vc3BlYy9GdW5jdGlvbmFsaXR5Q29udHJhY3QnXG5pbXBvcnQgeyBBY2Nlc3NSaWdodENvbnRyYWN0IH0gZnJvbSAnLi9zcGVjL0FjY2Vzc1JpZ2h0Q29udHJhY3QnXG5pbXBvcnQgeyBjcmVhdGVHcm91cEJ5S2V5IH0gZnJvbSAnLi91dGlscyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENlbGVzdGUgaW1wbGVtZW50cyBDZWxlc3RlQ29udHJhY3Qge1xuICAgIHByaXZhdGUgZnVuY3Rpb25hbGl0aWVzOiBBcnJheTxGdW5jdGlvbmFsaXR5Q29udHJhY3Q+ID0gW107XG4gICAgcHJpdmF0ZSByaWdodHM6IEFycmF5PEFjY2Vzc1JpZ2h0Q29udHJhY3Q+ID0gW107XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgaW5zdGFuY2Ugb2YgQ2VsZXN0ZVxuICAgICAqIEBwYXJhbSBmdW5jdGlvbmFsaXRpZXNcbiAgICAgKiBAcGFyYW0gcmlnaHRzXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZnVuY3Rpb25hbGl0aWVzOiBBcnJheTxGdW5jdGlvbmFsaXR5Q29udHJhY3Q+ID0gW10sIHJpZ2h0czogQXJyYXk8QWNjZXNzUmlnaHRDb250cmFjdD4gPSBbXSkge1xuICAgICAgICB0aGlzLmZ1bmN0aW9uYWxpdGllcyA9IGZ1bmN0aW9uYWxpdGllc1xuICAgICAgICB0aGlzLnJpZ2h0cyA9IHJpZ2h0c1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZCBuZXcgZnVuY3Rpb25hbGl0eVxuICAgICAqIEBwYXJhbSBmdW5jdGlvbmFsaXR5XG4gICAgICovXG4gICAgYWRkRnVuY3Rpb25hbGl0eShmdW5jdGlvbmFsaXR5SUQ6IE51bWJlcikge1xuICAgICAgICBjb25zdCBmdW5jdGlvbmFsaXR5ID0gdGhpcy5maW5kRnVuY3Rpb25hbGl0eUJ5SWQoZnVuY3Rpb25hbGl0eUlEKTtcblxuICAgICAgICBpZiAoW2Z1bmN0aW9uYWxpdHkuaW5kZXhdLmluY2x1ZGVzKC0xKSkge1xuICAgICAgICAgICAgLy8gdGhyb3cgZnVuYyBub3QgZm91bmRcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIG5ldyBBY2Nlc3MgUmlnaHQgdG8gZXhpc3RpbmcgZnVuY3Rpb25hbGl0eVxuICAgICAqIEBwYXJhbSBmdW5jdGlvbmFsaXR5SURcbiAgICAgKiBAcGFyYW0gcmlnaHRzXG4gICAgICovXG4gICAgYWRkQWNjZXNzUmlnaHRzKGZ1bmN0aW9uYWxpdHlJRDogTnVtYmVyLCByaWdodHNJRDogTnVtYmVyKSB7XG4gICAgICAgIGNvbnN0IGZ1bmN0aW9uYWxpdHkgPSB0aGlzLmZpbmRGdW5jdGlvbmFsaXR5QnlJZChmdW5jdGlvbmFsaXR5SUQpXG4gICAgICAgIGNvbnN0IHJpZ2h0cyA9IHRoaXMuZmluZFJpZ2h0c0J5SWQocmlnaHRzSUQpXG5cbiAgICAgICAgcmV0dXJuIHRoaXNcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIGZ1bmN0aW9uYWxpdHkgYnkgSURcbiAgICAgKiBAcGFyYW0gaWRcbiAgICAgKi9cbiAgICBmaW5kRnVuY3Rpb25hbGl0eUJ5SWQoaWQ6IE51bWJlcikge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZnVuY3Rpb25hbGl0aWVzLmZpbmRJbmRleChpdGVtID0+IGl0ZW0uaWQgPT09IGlkKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkgdGhpcy50aHJvd0Z1bmN0aW9uYWxpdHlOb3RGb3VuZEV4Y2VwdGlvbigpO1xuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5mdW5jdGlvbmFsaXRpZXNbaW5kZXhdO1xuICAgICAgICByZXR1cm4geyBpbmRleCwgaXRlbSB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEZpbmQgcmlnaHRzIGJ5IElEXG4gICAgICogQHBhcmFtIGlkXG4gICAgICovXG4gICAgZmluZFJpZ2h0c0J5SWQoaWQ6IE51bWJlcikge1xuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMucmlnaHRzLmZpbmRJbmRleCgoaXRlbSkgPT4gaXRlbS5pZCA9PT0gaWQpO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB0aGlzLnRocm93QWNjZXNzUmlnaHRzTm90Rm91bmRFeGNlcHRpb24oKVxuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5yaWdodHNbaW5kZXhdO1xuICAgICAgICByZXR1cm4geyBpbmRleCwgaXRlbSB9O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIGdyb3VwIG9mIEZ1bmN0aW9uYWxpdGllc1xuICAgICAqL1xuICAgIGdyb3VwKGtleTogc3RyaW5nID0gJ3R5cGUnKTogRnVuY3Rpb25hbGl0eUdyb3VwQ29udHJhY3Qge1xuICAgICAgICBjb25zdCBmYWN0b3J5ID0gY3JlYXRlR3JvdXBCeUtleShrZXkpXG4gICAgICAgIHJldHVybiBmYWN0b3J5KHRoaXMuZnVuY3Rpb25hbGl0aWVzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaHJvdyBmdW5jdGlvbmFsaXR5IG5vdCBmb3VuZCBleGNlcHRpb25cbiAgICAgKi9cbiAgICBwcml2YXRlIHRocm93RnVuY3Rpb25hbGl0eU5vdEZvdW5kRXhjZXB0aW9uKCkge1xuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0Z1bmN0aW9uYWxpdHkgbm90IGZvdW5kLicpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGhyb3cgYWNjZXNzIHJpZ2h0cyBub3QgZm91bmQgZXhjZXB0aW9uXG4gICAgICovXG4gICAgcHJpdmF0ZSB0aHJvd0FjY2Vzc1JpZ2h0c05vdEZvdW5kRXhjZXB0aW9uKCkge1xuICAgICAgICB0aGlzLnRocm93RXJyb3IoXCJBY2Nlc3NSaWdodHMgbm90IGZvdW5kLlwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUaHJvdyBlcnJvciBleGNlcHRpb25cbiAgICAgKiBAcGFyYW0gbWVzc2FnZVxuICAgICAqL1xuICAgIHByaXZhdGUgdGhyb3dFcnJvcihtZXNzYWdlOiBTdHJpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBbQ2VsZXN0ZV06ICR7bWVzc2FnZX1gKTtcbiAgICB9XG59XG4iXX0=