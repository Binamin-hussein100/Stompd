class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :first name
      t.string :last name
      t.string :email
      t.string :password_digest
      t.string :user_type

      t.timestamps
    end
  end
end
