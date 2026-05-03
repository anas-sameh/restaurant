package com.yummy.restaurant.controller;

import com.yummy.restaurant.model.MenuItem;
import com.yummy.restaurant.service.MenuService;

import jakarta.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/cart")
public class CartController {

    private final MenuService menuService;

    // 👇 كل user ليه cart
    private final Map<String, List<MenuItem>> userCarts = new HashMap<>();

    public CartController(MenuService menuService) {
        this.menuService = menuService;
    }

    // add item to cart
    @PostMapping("/add/{id}")
    public List<MenuItem> addToCart(
            @PathVariable Long id,
            HttpServletRequest request
    ) {

        String email = (String) request.getAttribute("userEmail");

        if (email == null) {
            throw new RuntimeException("Unauthorized");
        }

        MenuItem item = menuService.getById(id);

        // 👇 هات cart بتاع اليوزر أو اعمله جديد
        List<MenuItem> cart = userCarts.computeIfAbsent(email, k -> new ArrayList<>());

        cart.add(item);

        return cart;
    }

    // view my cart
    @GetMapping("/my")
    public List<MenuItem> getMyCart(HttpServletRequest request) {

        String email = (String) request.getAttribute("userEmail");

        if (email == null) {
            throw new RuntimeException("Unauthorized");
        }

        return userCarts.getOrDefault(email, new ArrayList<>());
    }

    // clear my cart
    @DeleteMapping("/clear")
    public String clearCart(HttpServletRequest request) {

        String email = (String) request.getAttribute("userEmail");

        if (email == null) {
            throw new RuntimeException("Unauthorized");
        }

        userCarts.remove(email);

        return "Cart cleared";
    }
}