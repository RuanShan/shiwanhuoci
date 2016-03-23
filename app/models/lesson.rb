class Lesson < ActiveRecord::Base
  acts_as_list scope: :subject

  belongs_to :subject
  has_many :classifications

end
