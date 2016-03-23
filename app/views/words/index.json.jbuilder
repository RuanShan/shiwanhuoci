json.array!(@words) do |word|
  json.extract! word, :id, :spelling
  json.url word_url(word, format: :json)
end
