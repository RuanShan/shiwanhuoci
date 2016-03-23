  class Classification < ActiveRecord::Base
    self.table_name = 'lessons_words'
    acts_as_list scope: :lesson

    with_options inverse_of: :classifications, touch: true do
      belongs_to :lesson
      belongs_to :word
    end

    validates :lesson, :word, presence: true
  end
