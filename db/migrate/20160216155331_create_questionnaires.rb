class CreateQuestionnaires < ActiveRecord::Migration
  def change
    create_table :questionnaires do |t|
      t.string :name
      t.string :age
      t.string :agender
      t.string :address
      t.string :telephone
      t.string :ideas
      t.string :advice

      t.timestamps null: false
    end
  end
end
