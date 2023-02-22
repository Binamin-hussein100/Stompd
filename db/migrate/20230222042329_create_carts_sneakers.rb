class CreateCartsSneakers < ActiveRecord::Migration[7.0]
  def change
    create_table :carts_sneakers do |t|
      t.references :cart, null: false, foreign_key: true
      t.references :sneaker, null: false, foreign_key: true

      t.timestamps
    end
  end
end
