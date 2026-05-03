package com.yummy.restaurant.service;

import com.yummy.restaurant.model.MenuItem;
import com.yummy.restaurant.repository.MenuRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuService {

    private final MenuRepository menuRepository;

    public MenuService(MenuRepository menuRepository) {
        this.menuRepository = menuRepository;
    }

    // get all menu items
    public List<MenuItem> getAll() {
        return menuRepository.findAll();
    }

    // save menu item
    
    public MenuItem save(MenuItem item) {
        return menuRepository.save(item);
    }

        // ✅ الحل الصح بدون أي warning
    @SuppressWarnings("null")
    public MenuItem getById(Long id) {

        if (id == null) {
            throw new IllegalArgumentException("Menu ID cannot be null");
        }

        MenuItem item = menuRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Menu item not found with id: " + id));

        return item;
    }
}