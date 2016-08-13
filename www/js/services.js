var services = angular.module('conference.services', [ngResource]);

services.factory('Session', function ($resource) {
  return $resource('http://localhost:5000/sessions/:sessionId');
});
