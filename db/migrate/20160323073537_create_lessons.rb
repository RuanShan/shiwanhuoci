class CreateLessons < ActiveRecord::Migration
  def change
    create_table :lessons do |t|
      t.references :subject
      t.string :name
      t.integer :position
      t.integer :word_count
      t.timestamps null: false
    end
  end
end
