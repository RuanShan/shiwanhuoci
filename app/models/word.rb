class Word < ActiveRecord::Base
  has_many :classifications

  has_attached_file :card, styles: { thumb: "60x60#" }
  has_attached_file :pronunciation_uk
  has_attached_file :pronunciation_en
  has_attached_file :pronunciation_uk_man
  has_attached_file :pronunciation_en_man

  before_validation {
    self.pronunciation_uk.clear if self.delete_pronunciation_uk == '1'
    self.pronunciation_en.clear if self.delete_pronunciation_en == '1'
    self.pronunciation_uk_man.clear if self.delete_pronunciation_uk_man == '1'
    self.pronunciation_en_man.clear if self.delete_pronunciation_en_man == '1'
  }

  validates :spelling, :meanings, presence: true

  validates_attachment :pronunciation_uk,
    content_type: { content_type: ["audio/mpeg","audio/mp3"] },
    size: { in: 0..10.megabytes }
  validates_attachment :pronunciation_en,
    content_type: { content_type: ["audio/mpeg","audio/mp3"] },
    size: { in: 0..10.megabytes }
  validates_attachment :pronunciation_uk_man,
    content_type: { content_type: ["audio/mpeg","audio/mp3"] },
    size: { in: 0..10.megabytes }
  validates_attachment :pronunciation_en_man,
    content_type: { content_type: ["audio/mpeg","audio/mp3"] },
    size: { in: 0..10.megabytes }
  # ie "image/pjpeg", "image/x-png"
  validates_attachment :card,
    content_type: { content_type: ["image/pjpeg", "image/x-png", "image/jpeg", "image/gif", "image/png"] },
    size: { in: 0..1.megabytes }
  #validates :pronunciation_en, attachment_presence: false

  # add a delete_<asset_name> method:
  attr_accessor :delete_pronunciation_uk,:delete_pronunciation_en,:delete_pronunciation_uk_man,:delete_pronunciation_en_man, :delete_card

end
