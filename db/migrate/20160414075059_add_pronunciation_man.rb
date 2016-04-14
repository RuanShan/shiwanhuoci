class AddPronunciationMan < ActiveRecord::Migration
  def up
      add_attachment :words, :pronunciation_uk_man
      add_attachment :words, :pronunciation_en_man
  end

  def down
      remove_attachment :words, :pronunciation_uk_man
      remove_attachment :words, :pronunciation_en_man
  end
end
