class AddWordPhonetic < ActiveRecord::Migration
  def change
    add_column :words, :phonetic_uk, :string, length: 128
    add_column :words, :phonetic_en, :string, length: 128
  end
end
