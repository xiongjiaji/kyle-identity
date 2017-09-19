package com.kyle.identity.service;

import com.kyle.identity.entity.User;

public interface UserService {

    public User findUserByEmail(String email);
    public void saveUser(User user);

}
