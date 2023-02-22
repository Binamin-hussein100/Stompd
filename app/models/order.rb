class Order < ApplicationRecord
  belongs_to :user
  has_many :order_products
  has_many :carts
  has_many :sneakers, through: :order_products
end
