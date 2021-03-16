require 'function'

RSpec.describe sum, "#something" do
  context "sum 100 and 10" do
    it "sums it right" do
      expect(sum 100, 10).to eq "110rub."
    end
  end
end

