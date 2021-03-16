prices = [2.99, 25.00, 9.99]

def total(prices)
  amount = 0
  prices.each { |price| amount += price }
  amount
end

def refund(prices)
  amount = 0
  prices.each { |price| amount -= price }
  amount
end

def show_discounts(price)
  amount_off = price / 3.0
  puts format("Your discount: $%.2f", amount_off)
end

prices.each { |price| show_discounts(price) }

p format("%.2f", total(prices))
p format("%.2f", refund(prices))

#def my_method
#  puts "Hello"
#  yield('Chilly')
#  puts "We're back in the method!"
#end

#my_method { |name| puts "Mr. #{name}" }

#my_method do |name|
#  puts "Mr. #{name}"
#end

