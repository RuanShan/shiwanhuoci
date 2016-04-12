class CreateClassifications < ActiveRecord::Migration
  def change
    create_table :lessons_words do |t|
      t.references :lesson
      t.references :word
      t.integer :position
      t.timestamps null: false
    end
  end
end
