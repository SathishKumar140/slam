angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
                var friends =[];  
                var contactList = new ContactFindOptions(); 
                contactList.filter=""; 
                contactList.multiple=true;
                var fields = ["*"];  //"*" will return all contact fields
                navigator.contacts.find(fields,getContactFields,onError, contactList);
                function getContactFields(contacts) {
                              
                      for (var i=0; i<contacts.length; i++)
                      {
                             //alert(contacts.length);
                             //alert("Name:" + contacts[i].displayName + "\n");
                             friends[i] ={ id: i, name: contacts[i].displayName };
                      }
                  }
                function onError(contactError) {
                      alert('onError!');
                  }
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
