#include<bits/stdc++.h>
using namespace std;
int main(){
    vector<int> nums = {1, 2, 3, 4, 5};
    int n = nums.size();
    int j = 0;
    int num = nums[j];
    for(int i = 1; i < n; i++){
        nums[j] = nums[i];
        j++;
    }
    nums[n - 1] = num;
    for(int it : nums){
        cout<<it<<" ";
    }
    return 0;
}