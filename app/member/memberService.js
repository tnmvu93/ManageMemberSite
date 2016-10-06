'use strict';

angular
	.module('app')
	.service('memberService', function() {
		var self = this;
		this.members = [
			{ id: 0, name: "Nguyen Van A" , date: new Date(2016, 10, 20), gender: '1'},
			{ id: 1, name: "Nguyen Van B" , date: new Date(2016, 10, 20), gender: '2'},
			{ id: 2, name: "Nguyen Van C" , date: new Date(2016, 10, 20), gender: '1'},
			{ id: 3, name: "Nguyen Van D" , date: new Date(2016, 10, 20), gender: '3'},
			{ id: 4, name: "Nguyen Van E" , date: new Date(2016, 10, 20), gender: '2'},
			{ id: 5, name: "Nguyen Van F" , date: new Date(2016, 10, 20), gender: '1'},
			{ id: 6, name: "Nguyen Van G" , date: new Date(2016, 10, 20), gender: '2'},
			{ id: 7, name: "Nguyen Van H" , date: new Date(2016, 10, 20), gender: '1'},
			{ id: 8, name: "Nguyen Van K" , date: new Date(2016, 10, 20), gender: '3'},
			{ id: 9, name: "Nguyen Van J" , date: new Date(2016, 10, 20), gender: '2'},
		];

		this.getAll = function() {
			return self.members;
		};

		this.add = function(member) {
			member.id = self.members.length;
			self.members.push(member);
		}

		this.edit = function(member) {
			if (member.id >= 0 && member.id < self.members.length) {
				self.members[member.id] = member;
			}
		}

		this.getMemberById = function(id) {
			if (id >= 0 && id < self.members.length) {
				return self.members[id];
			}
			return null;
		}
	})