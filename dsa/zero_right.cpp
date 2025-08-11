#include <bits/stdc++.h>
using namespace std;

vector<int> zeroes(vector<int> &nums)
{
    int n = nums.size();
    int j = 0;
    for(int i = 0; i < n; i++){
        if(nums[i] == 0){
            continue;
        }
        else{
            nums[j] = nums[i];
            j++;
        }
    }
    
    for ( int k = j; k < n; k++){
        nums[k] = 0;
    }
    return nums;
}

int main()
{
    vector<int> nums = {0, 0, 0, 1, 3, -2};
    zeroes(nums);
    for (int it : nums){
        cout<<it<<" ";
    }
    return 0;
}