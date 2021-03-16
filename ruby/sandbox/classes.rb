class Animal
  attr_accessor :name

  def talk
    p "#{@name} Want to say..."
  end
end

class Bird < Animal
  def talk
    super
    p "chirk! chirk!"
  end
end

class Dog < Animal
end

class Cat < Animal
end

bird = Bird.new
bird.name = "Biba"
bird.talk
p Bird.superclass

