@homes.each do |home|
  json.set! home.id do
    json.partial! 'home', home: home
  end
end
