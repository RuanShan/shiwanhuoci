class Word < ActiveRecord::Base
  has_many :classifications

  has_attached_file :card, presence: true, styles: { thumb: "60x60#" }
  has_attached_file :pronunciation_uk, presence: false
  has_attached_file :pronunciation_en, presence: false

  before_validation { self.pronunciation_uk.clear if self.delete_pronunciation_uk == '1' }

  validates_attachment :pronunciation_uk, presence: true,
    content_type: { content_type: "audio/mpeg" },
    size: { in: 0..10.megabytes }

  validates_attachment :card, presence: true,
    content_type: { content_type: ["image/jpeg", "image/gif", "image/png"] },
    size: { in: 0..1.megabytes }
  #validates :pronunciation_en, attachment_presence: false

  # add a delete_<asset_name> method:
  attr_accessor :delete_pronunciation_uk, :delete_card

end
