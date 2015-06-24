# 5.times do
#   puts "hi Ruby"
# end
#
# def abc
#
# end
#
# def abc
#   puts "hi abc"
#   return true
# end
#
# vhash = {a:3, key:value}
#
# vs = :symbol constant
#
# vs = :constant
#
# everytihng is object - all goes back to object class
#
# very dynamic
#
# puts varr[0]
#
# #comment in ruby
#
# puts var[varr.length-1] #count from zero
#
# puts varr[-1] - last array
#
# puts vhash[:a]
#
# if 3 + 4 == 7
#   puts " do something"
# else
#   puts "else"
# end
#
# loop while do while
#
  # looping over array

  new_arr = [1,2,3].map do  |e|
     e > 2
  end

puts new_arr
class Vehicle
    def something
      puts "#{@color} is nice"
    end
end

class Car < Vehicle
  def initialize(color)
    @color = color
  end

  def print
    puts "Color is #{@color}"
  end
end

b = Car.new("blue")

r = Car.new("red")

b.print

r.print

b.something

r.something
