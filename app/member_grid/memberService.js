'use strict';

angular
	.module('app')
	.service('memberService', function() {
		var self = this;
		this.members = [
			{ Id: 0, Name: "Nguyen Van A" , Date: "23/10/2016", Gender: '1'},
			{ Id: 1, Name: "Nguyen Van B" , Date: "23/10/2016", Gender: '2'},
			{ Id: 2, Name: "Nguyen Van C" , Date: "23/10/2016", Gender: '1'},
			{ Id: 3, Name: "Nguyen Van D" , Date: "23/10/2016", Gender: '3'},
			{ Id: 4, Name: "Nguyen Van E" , Date: "23/10/2016", Gender: '2'},
			{ Id: 5, Name: "Nguyen Van F" , Date: "23/10/2016", Gender: '1'},
			{ Id: 6, Name: "Nguyen Van G" , Date: "23/10/2016", Gender: '2'},
			{ Id: 7, Name: "Nguyen Van H" , Date: "23/10/2016", Gender: '1'},
			{ Id: 8, Name: "Nguyen Van K" , Date: "23/10/2016", Gender: '3'},
			{ Id: 9, Name: "Nguyen Van J" , Date: "23/10/2016", Gender: '2'},
		];

		this.GetAll = function() {
			return self.members;
		};

		this.Add = function(member) {
			member.Id = self.members.length;
			self.members.push(member);
		}

	})