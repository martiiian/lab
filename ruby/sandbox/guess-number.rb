rand_num = rand(25) + 1
count_tries = 0
max_count_tries = 10

p "Welcome to \'Get My Number!\'"
print "What\'s your name? "
input = gets
p "Welcome, #{input.chomp}!"

puts 'Enter your number 0-25'

while count_tries < max_count_tries
  input_num = gets.to_i

  if rand_num === input_num
    p "yohooo you are win!"

    break
  else
    p "don't guess, try again.."
  end

  count_tries += 1
end

if count_tries === max_count_tries
  p "Sorry but you are loose, number is #{rand_num}"
end

