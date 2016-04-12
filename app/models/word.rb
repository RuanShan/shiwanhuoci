class Word < ActiveRecord::Base
  has_many :classifications

  has_attached_file :pronunciation_uk, presence: true
  has_attached_file :pronunciation_en, presence: false

  # add a delete_<asset_name> method:
  attr_accessor :delete_pronunciation_uk
  before_validation { self.pronunciation_uk.clear if self.delete_pronunciation_uk == '1' }

  validates_attachment :pronunciation_uk, presence: true,
    content_type: { content_type: "audio/mpeg" },
    size: { in: 0..10.megabytes }

  #validates :pronunciation_en, attachment_presence: false

end
