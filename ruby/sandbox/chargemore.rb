class Employee
  attr_reader :name, :salary

  def initialize(name = "Anonymus", salary = 0.0)
    self.name = name
    self.salary = salary
  end

  def print_name
    puts "Name: #{@name}"
  end

  def name=(name)
    if name === ""
      raise "Name can't be blank!"
    end
    @name = name
  end

  def salary=(salary)
    if salary < 0
      raise "A salary of #{salary} isn't valid!"
    end
    @salary = salary
  end
end

class SalariedEmployee < Employee
  def initialize(name = "Anonymous", salary = 0.0)
    super(name)
    self.salary = salary
  end

  def print_pay_stub
    print_name
    pay_for_period = (@salary / 365.0) * 14
    puts format("Pay This Period: $%.2f", pay_for_period)
  end
end

class HourlyEmployee < Employee
  attr_reader :hourly_wage, :hours_per_week

  def initialize(name = "Anonymous", hourly_wage = 0.0, hours_per_week = 0.0)
    super(name)
    self.hourly_wage = hourly_wage
    self.hours_per_week = hours_per_week
  end

  def self.security_guard(name)
    self.new(name, 19.25, 30)
  end

  def self.cashier(name)
    self.new(name, 12.75, 25)
  end

  def self.janitor(name)
    self.new(name, 10.50, 20)
  end

  def hourly_wage=(hourly_wage)
    @hourly_wage = hourly_wage
  end

  def hours_per_week=(hours_per_week)
    @hours_per_week = hours_per_week
  end

  def print_pay_stub
    print_name
    pay_for_period = hourly_wage * hours_per_week * 2
    puts format("Pay This Period: $%.2f", pay_for_period)
  end
end

salaried_employee = SalariedEmployee.new("Jane Doe", 50000)
salaried_employee.print_pay_stub

hourly_employee = HourlyEmployee.new("John Smith", 14.97, 30)
hourly_employee.print_pay_stub

HourlyEmployee.cashier("Biba Cashier").print_pay_stub
