bacon = true
fish = false

if fish
  p 'I like fish'
elsif bacon
  p 'I like bacon'
else
  p 'I dont like fish or bacon'
end

# !if
unless bacon 
  p 'fish'
else p 'bacon'
end

user = 'dave'
hello = "hello #{user}" if user

p 'please log in' unless user
p hello
