angular.module('angularfireSlackApp')
  .controller('ChannelsCtrl', function($state, Auth, Users, profile, channels) {
    var channelsCtrl = this;

    //resolve dependency from the router
    channelsCtrl.profile = profile;
	channelsCtrl.channels = channels;

	channelsCtrl.getDisplayName = Users.getDisplayName;
	channelsCtrl.getGravatar = Users.getGravatar;

	//logout function that will allow users to return to the home state
	channelsCtrl.logout = function(){
	  Auth.$unauth();
	  $state.go('home');
	}

	channelsCtrl.newChannel = {
	  name: ''
	};

	channelsCtrl.createChannel = function(){
	  channelsCtrl.channels.$add(channelsCtrl.newChannel).then(function(ref){
	    $state.go('channels.messages', {channelId: ref.key()});
	  });
	};
  });