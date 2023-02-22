class Sneaker < ApplicationRecord
    enum gender: [:male, :female, :youth]
end
