#include <bits/stdc++.h>
using namespace std;

int main(){
    vector<int> nums = {4,1,2,1,2};
    int n = nums.size();
    int a = 0;
    for(int i = 0; i < n; i++){
        a ^= nums[i];
    }
    cout<<a<<endl;
    return 0;
}