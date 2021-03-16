# Test simple function
def sum (a=1, b=2)
  "#{a + b}rub."
end

# simple another say hi func
def sayhi (name)
  p "Hello #{name}"
end

sayhi 'Biba'
p sum

[1, 2, 3].each do |num|
  p num
end

sum()[0].to_i.times { p 'biba' }
p 'opslalala999'[/[0-9]/]
