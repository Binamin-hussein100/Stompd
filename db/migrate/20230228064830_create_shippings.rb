class CreateShippings < ActiveRecord::Migration[7.0]
  def change
    create_table :shippings do |t|
      t.references :order, null: false, foreign_key: true
      t.integer :tracking_no
      t.boolean :status
      t.date :date

      t.timestamps
    end
  end
end
