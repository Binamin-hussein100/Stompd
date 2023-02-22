class Sneaker < ApplicationRecord
    has_many :carts_sneakers
    has_many :carts, through:  :carts_sneakers
    enum gender: [:male, :female, :youth]


end
