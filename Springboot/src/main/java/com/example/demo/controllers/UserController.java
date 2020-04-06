package com.example.demo.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.User;
import com.example.demo.services.UserService;

@CrossOrigin(origins = "http://localhost:4200")

@RestController
public class UserController {

	@Autowired
	UserService userService;

	@RequestMapping(method = RequestMethod.GET, value = "/users")
	public ArrayList<User> getAllUsers() {
		return userService.getUserList();
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/users/{userName}")
	public User getUser(@PathVariable String userName) {
		return userService.getUser(userName);
	}

	@RequestMapping(method = RequestMethod.POST, value = "/users")
	public User addUser(@RequestBody User user) {
		return userService.addUser(user);
	}

	@RequestMapping(method = RequestMethod.DELETE, value = "/users/{userName}")
	public Boolean removeUser(@PathVariable String userName) {
		return userService.deleteUser(userName);
	}

	@RequestMapping(method = RequestMethod.PUT, value = "/users/{userName}")
	public User updateUser(@RequestBody User newUser, @PathVariable String userName) {
		return userService.updateUser(userName,newUser);
	}

	
}
