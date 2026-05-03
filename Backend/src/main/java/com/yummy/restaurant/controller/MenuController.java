package com.yummy.restaurant.controller;

import com.yummy.restaurant.model.MenuItem;
import com.yummy.restaurant.service.MenuService;

import jakarta.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/menu")
public class MenuController {

    private final MenuService menuService;

    public MenuController(MenuService menuService) {
        this.menuService = menuService;
    }

    @GetMapping
    public List<MenuItem> getMenu() {
        return menuService.getAll();
    }

    @PostMapping
    public MenuItem addMenuItem(
            @RequestBody MenuItem item,
            HttpServletRequest request
    ) {
        String role = (String) request.getAttribute("userRole");

        if (!"ADMIN".equals(role)) {
            throw new RuntimeException("Access denied");
        }

        return menuService.save(item);
    }
}