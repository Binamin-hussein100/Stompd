class CartsSneaker < ApplicationRecord
  belongs_to :cart
  belongs_to :sneaker
end


## one-many => has_many/belongs_to
## many-to-many => has_many : through / belongs_to uses a joins table