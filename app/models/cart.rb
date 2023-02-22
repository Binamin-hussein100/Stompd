class Cart < ApplicationRecord
  belongs_to :user
  has_many :carts_sneakers
  has_many :sneakers, through: :carts_sneakers
end
