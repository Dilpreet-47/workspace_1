#include <bits/stdc++.h>
using namespace std;

int main() {
    vector<int> nums = {10, 5, 2, 7, 1, 9};
    int k = 15;
    int n = nums.size();
    int res = 0;  // longest length
    int sum = 0;  // running prefix sum
    
    unordered_map<int, int> mp; 
    mp[0] = -1; // prefix sum 0 at index -1 (handles subarray starting from index 0)

    for (int i = 0; i < n; i++) {
        sum += nums[i]; // update prefix sum
        
        // If we have seen sum-k before, that means a subarray ending here has sum k
        if (mp.find(sum - k) != mp.end()) {
            int length = i - mp[sum - k];
            res = max(res, length);
        }
        
        // Store sum in map only if it's not already there
        // (we want the earliest index for the longest length)
        if (mp.find(sum) == mp.end()) {
            mp[sum] = i;
        }   
    }

    cout << res << endl;
    return 0;
}
