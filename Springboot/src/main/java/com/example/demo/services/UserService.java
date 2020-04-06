package com.example.demo.services;

import java.util.ArrayList;
import java.util.Arrays;

import org.springframework.stereotype.Service;

import com.example.demo.models.User;

@Service
public class UserService {

	private ArrayList<User> userList = new ArrayList<User>(Arrays.asList(
			new User("Rajaie", "rajaie111", "Rajaie@gmail.com"), new User("Moath", "moath111", "m@hotmail.com"),
			new User("Waleed", "wswaileh", "w@hotmail.com")));

	public ArrayList<User> getUserList() {
		return this.userList;
	}
	
	public User getUser(String userName) {
		for (User user: userList)
			if (user.equals(userName))
				return user;
		return null;
	}
	
	public User addUser(User user) {
		return userList.add(user)? user: null;
	}
	
	public boolean deleteUser(String userName) {
		for (User user: userList) {
			if (user.equals(userName))
				return userList.remove(user);
		}
		return false;
	}
	
	public User updateUser(String userName,User newUser) {
		for (User user: userList) {
			if (user.equals(userName)){
				user.setName(newUser.getName());
				user.setEmail(newUser.getEmail());
				return user;
			}
		}
		return null;
	}
	
	
}
