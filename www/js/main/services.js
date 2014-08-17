angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
               
              return {
                all: function() {
                  return friends;
                },
                get: function(friendId) {
                  // Simple index lookup
                  return friends[friendId];
                }
              }
            });
