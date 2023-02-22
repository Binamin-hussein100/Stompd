class CreateShippings < ActiveRecord::Migration[7.0]
  def change
    create_table :shippings do |t|
      t.integer :tracking_no
      t.references :order, null: false, foreign_key: true
      t.boolean :status
      t.date :date

      t.timestamps
    end
  end
end
