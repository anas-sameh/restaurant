package com.yummy.restaurant.model;

import lombok.Data;

import java.util.List;

@Data
public class Cart {

    private List<MenuItem> items;
}