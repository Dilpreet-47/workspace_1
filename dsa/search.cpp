#include <bits/stdc++.h>
using namespace std;

int main() {
	// your code goes here
    vector<int> nums = {2, 3, 4, 5, 3};
    int terget = 3;
    int n = nums.size();
    for( int i = 0; i < n; i++ ){
        if(nums[i] == terget){
            cout<<i;
            break;
        }
    }

    return -1;
}
