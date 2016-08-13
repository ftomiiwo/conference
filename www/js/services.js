var services = angular.module('conference.services', ['ngResource']);
services.factory('Session', function ($resource) {

  var res = $resource('http://localhost:5000/sessions/:sessionId');
  console.log(res);
  return res;
});
