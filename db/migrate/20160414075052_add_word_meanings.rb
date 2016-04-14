class AddWordMeanings < ActiveRecord::Migration
  def change
    add_column :words, :meanings, :string
    add_column :words, :description, :text

  end

end
