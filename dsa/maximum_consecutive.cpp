#include <bits/stdc++.h>
using namespace std;

int main()
{
    vector<int> nums = {1, 0, 1, 1, 1, 0, 1, 1, 1};
    int n = nums.size();
    int count1 = 0;
    int maxi = 0;
    for (int i = 0; i < n; i++)
    {
        if (nums[i] == 1)
        {
            count1++;
            
        }
        else
        {
            maxi = max(maxi, count1);
            count1 = 0;
        }
    }
    maxi = max(maxi, count1);
    cout << maxi << endl;
    return 0;
}