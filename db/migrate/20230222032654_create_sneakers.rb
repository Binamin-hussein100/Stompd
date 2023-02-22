class CreateSneakers < ActiveRecord::Migration[7.0]
  def change
    create_table :sneakers do |t|
      t.string :name
      t.integer :gender
      t.string :image
      t.float :price
      t.integer :size

      t.timestamps
    end
  end
end
