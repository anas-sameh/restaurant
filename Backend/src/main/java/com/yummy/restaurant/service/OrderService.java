package com.yummy.restaurant.service;

import com.yummy.restaurant.model.MenuItem;
import com.yummy.restaurant.model.Order;
import com.yummy.restaurant.repository.MenuRepository;
import com.yummy.restaurant.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import com.yummy.restaurant.model.User;
import com.yummy.restaurant.repository.UserRepository;
import java.util.Objects;
@Service
public class OrderService {

    private final OrderRepository orderRepository;
    private final MenuRepository menuRepository;
    private final UserRepository userRepository;
   public OrderService(OrderRepository orderRepository,
                    MenuRepository menuRepository,
                    UserRepository userRepository) {
    this.orderRepository = orderRepository;
    this.menuRepository = menuRepository;
    this.userRepository = userRepository;
}

    // get all orders
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

    // save order
   public Order saveWithUser(Order order, String email) {

    if (order.getItems() == null || order.getItems().isEmpty()) {
        throw new RuntimeException("Items cannot be empty");
    }

    // 👇 نجيب اليوزر من التوكن
    User user = userRepository.findByEmail(email)
            .orElseThrow(() -> new RuntimeException("User not found"));

    // 👇 نجيب المينيو من DB
    List<MenuItem> items = order.getItems().stream()
            .map(item -> {
                Long id = Objects.requireNonNull(item.getId(), "Item ID is required");

                return menuRepository.findById(id)
                        .orElseThrow(() -> new RuntimeException("MenuItem not found with id: " + id));
            })
            .toList();

    order.setItems(items);
    order.setUser(user); 
    order.setStatus("PENDING");

    return orderRepository.save(order);
}

public List<Order> getUserOrders(String email) {
    return orderRepository.findByUserEmail(email);
}
}