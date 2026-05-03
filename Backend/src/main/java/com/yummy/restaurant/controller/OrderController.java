package com.yummy.restaurant.controller;

import com.yummy.restaurant.model.Order;
import com.yummy.restaurant.service.OrderService;

import jakarta.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/orders")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

  @GetMapping
    public List<Order> getOrders(HttpServletRequest request) {

        String role = (String) request.getAttribute("userRole");

        // 👇 شرط الأدمن
        if (!"ADMIN".equals(role)) {
            throw new RuntimeException("Access denied");
        }

        return orderService.getAllOrders();
    }

    // create order (JWT via Filter)
   @PostMapping
    public Order createOrder(
            @RequestBody Order order,
            HttpServletRequest request
    ) {
        String email = (String) request.getAttribute("userEmail");

        // 👇 هنا الحماية
        if (email == null) {
            throw new RuntimeException("Unauthorized");
        }

        return orderService.saveWithUser(order, email);
    }
    // get my orders
    @GetMapping("/my")
    public List<Order> getMyOrders(HttpServletRequest request) {

        String email = (String) request.getAttribute("userEmail");

        // 👇 هنا الحماية
        if (email == null) {
            throw new RuntimeException("Unauthorized");
        }

        return orderService.getUserOrders(email);
    }
}