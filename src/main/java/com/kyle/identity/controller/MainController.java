package com.kyle.identity.controller;

import com.kyle.identity.dto.CreateUserRequest;
import com.kyle.identity.entity.User;
import com.kyle.identity.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/registration", method = RequestMethod.POST)
    public User createNewUser(@RequestBody CreateUserRequest createUserRequest) {
        if (createUserRequest != null) {
            userService.saveUser(createUserRequest.getUser());
        } else {
            throw new NullPointerException("createUserRequest is null!");
        }
        return createUserRequest.getUser();
    }

}
