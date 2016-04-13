class AddCard < ActiveRecord::Migration
  def up
      add_attachment :words, :card
  end

  def down
      remove_attachment :words, :card
  end
end
