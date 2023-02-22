class Sneaker < ApplicationRecord
    has_many :carts_sneakers
    has_many :order_products
    has_many :orders, through: :order_products 
    has_many :carts, through:  :carts_sneakers
    enum gender: [:male, :female, :youth]
end
