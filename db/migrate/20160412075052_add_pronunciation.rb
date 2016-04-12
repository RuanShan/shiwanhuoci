class AddPronunciation < ActiveRecord::Migration
  def up
      add_attachment :words, :pronunciation_uk
      add_attachment :words, :pronunciation_en
  end

  def down
      remove_attachment :words, :pronunciation_uk
      remove_attachment :words, :pronunciation_en
  end
end
