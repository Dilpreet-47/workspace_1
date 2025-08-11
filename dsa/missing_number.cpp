#include <bits/stdc++.h>
using namespace std;

int missing(vector<int>& nums){
    sort(nums.begin(), nums.end());
    int n = nums.size() + 1;
    for(int i = 0; i < n; i++){
        if(nums[i] != i){
            return i;
        }
    }
    return -1;
}

int main(){
    vector<int> nums = {0, 1, 2, 4, 5, 6};
    cout<<missing(nums);
    return 0;
}