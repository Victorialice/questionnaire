# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
strings = ["alice", "Jack", "Smith"]
1..100.times do |i|
  Product.create(
    name: strings[rand(3)] + i.to_s,
    price: rand(550),
    released_at: DateTime.now - rand(10).day
  )
end
