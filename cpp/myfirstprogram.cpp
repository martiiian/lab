#include <iostream>
using namespace std;

int main()
{
  int a = 5;
  int b(2);
  decltype(b) c{3};
  auto sum = a + 1;
  int result = sum - b;

  cout << result;

  return 0;
}

