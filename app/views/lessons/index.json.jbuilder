json.array!(@lessons) do |lesson|
  json.extract! lesson, :id, :name, :word_count
  json.url lesson_url(lesson, format: :json)
end
