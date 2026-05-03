package com.yummy.restaurant.controller;

import com.yummy.restaurant.dto.AuthResponse;
import com.yummy.restaurant.model.User;
import com.yummy.restaurant.service.UserService;
import org.springframework.web.bind.annotation.*;
import com.yummy.restaurant.service.JwtService;
@RestController
@RequestMapping("/auth")
public class AuthController {

    private final UserService userService;

    private final JwtService jwtService;

    public AuthController(UserService userService, JwtService jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }

    // signup
    @PostMapping("/signup")
    public User signup(@RequestBody User user) {
        return userService.register(user);
    }

    // login
   @PostMapping("/login")
    public AuthResponse login(@RequestBody User user) {

        User loggedUser = userService.login(user.getEmail(), user.getPassword());
        String token = jwtService.generateToken(loggedUser.getEmail(),loggedUser.getRole());

        return new AuthResponse(
                token,
                loggedUser.getName(),
                loggedUser.getEmail()
        );
    }
}