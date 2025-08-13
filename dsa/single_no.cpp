#include <bits/stdc++.h>
using namespace std;

int main()
{
    vector<int> nums = {1, 2, 2, 4, 3, 1, 4};
    int n = nums.size();

    int count[n] = {0};
    for (int i = 0; i < n; i++)
    {
        for (int j = 0; j < n; j++)
        {
            if (nums[i] == nums[j])
            {
                count[i]++;
            }
            
        }
        if(count[i] == 1){
                cout<<nums[i]<<" ";
                break;
            }
    }
    return 0;
}