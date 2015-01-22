import ApplicationAdapter from 'ember';

export default ApplicationAdapter.extend({
 buildURL: function(type, id, record) {
   return '/friends/' + record.get('friend.id') + '/articles/' + id;
 }
});