"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createGroupByKey = createGroupByKey;

var _index = require("./index");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function createGroupByKey(key) {
  return function (items) {
    var group = new Map();
    items.reduce(function (acc, cur) {
      var token = (0, _index.tokenize)(cur[key]);

      if (acc.has(token)) {
        var cached = acc.get(token);
        acc.set(token, [].concat(_toConsumableArray(cached), [cur]));
      } else {
        acc.set(token, [cur]);
      }

      return acc;
    }, group);
    return group;
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9jcmVhdGVHcm91cEJ5S2V5LnRzIl0sIm5hbWVzIjpbImNyZWF0ZUdyb3VwQnlLZXkiLCJrZXkiLCJpdGVtcyIsImdyb3VwIiwiTWFwIiwicmVkdWNlIiwiYWNjIiwiY3VyIiwidG9rZW4iLCJoYXMiLCJjYWNoZWQiLCJnZXQiLCJzZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7QUFHTyxTQUFTQSxnQkFBVCxDQUEwQkMsR0FBMUIsRUFBdUM7QUFDMUMsU0FBTyxVQUFVQyxLQUFWLEVBQXNFO0FBQ3pFLFFBQU1DLEtBQWlDLEdBQUcsSUFBSUMsR0FBSixFQUExQztBQUVBRixJQUFBQSxLQUFLLENBQUNHLE1BQU4sQ0FBYSxVQUFVQyxHQUFWLEVBQWVDLEdBQWYsRUFBb0I7QUFDN0IsVUFBTUMsS0FBSyxHQUFHLHFCQUFTRCxHQUFHLENBQUNOLEdBQUQsQ0FBWixDQUFkOztBQUVBLFVBQUlLLEdBQUcsQ0FBQ0csR0FBSixDQUFRRCxLQUFSLENBQUosRUFBb0I7QUFDaEIsWUFBTUUsTUFBTSxHQUFHSixHQUFHLENBQUNLLEdBQUosQ0FBUUgsS0FBUixDQUFmO0FBQ0FGLFFBQUFBLEdBQUcsQ0FBQ00sR0FBSixDQUFRSixLQUFSLCtCQUFtQkUsTUFBbkIsSUFBMkJILEdBQTNCO0FBQ0gsT0FIRCxNQUdPO0FBQ0hELFFBQUFBLEdBQUcsQ0FBQ00sR0FBSixDQUFRSixLQUFSLEVBQWUsQ0FBQ0QsR0FBRCxDQUFmO0FBQ0g7O0FBRUQsYUFBT0QsR0FBUDtBQUNILEtBWEQsRUFXR0gsS0FYSDtBQWFBLFdBQU9BLEtBQVA7QUFDSCxHQWpCRDtBQWtCSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRva2VuaXplIH0gZnJvbSAnLi9pbmRleCdcbmltcG9ydCB7IEZ1bmN0aW9uYWxpdHlDb250cmFjdCwgRnVuY3Rpb25hbGl0eUdyb3VwQ29udHJhY3QgfSBmcm9tIFwiLi4vc3BlYy9GdW5jdGlvbmFsaXR5Q29udHJhY3RcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdyb3VwQnlLZXkoa2V5OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGl0ZW1zOiBGdW5jdGlvbmFsaXR5Q29udHJhY3RbXSk6IEZ1bmN0aW9uYWxpdHlHcm91cENvbnRyYWN0IHtcbiAgICAgICAgY29uc3QgZ3JvdXA6IEZ1bmN0aW9uYWxpdHlHcm91cENvbnRyYWN0ID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIGl0ZW1zLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjdXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRva2VuID0gdG9rZW5pemUoY3VyW2tleV0pO1xuXG4gICAgICAgICAgICBpZiAoYWNjLmhhcyh0b2tlbikpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYWNoZWQgPSBhY2MuZ2V0KHRva2VuKTtcbiAgICAgICAgICAgICAgICBhY2Muc2V0KHRva2VuLCBbLi4uY2FjaGVkLCBjdXJdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWNjLnNldCh0b2tlbiwgW2N1cl0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICB9LCBncm91cCk7XG5cbiAgICAgICAgcmV0dXJuIGdyb3VwO1xuICAgIH1cbn1cbiJdfQ==