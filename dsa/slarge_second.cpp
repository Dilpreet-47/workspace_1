#include <bits/stdc++.h>
using namespace std;

int secondLargestElement(vector<int> &nums)
{
    // your code goes here
    int n = nums.size();
    if (n < 2) return -1;
    int large = -1;
    int slarge = -1;

    for (int i = 0; i < n; i++){
        if (large == -1 || nums[i] > nums[large]){
            slarge = large;
            large = i;
        }
        else if (nums[i] != nums[large]){
            if (slarge == -1 || nums[i] > nums[slarge]){
                slarge = i;
            }
        }
    }

    return (slarge == -1)? -1: nums[slarge];
}
int main()
{
    vector<int> nums;
    int arr[] = {7, 7, 2, 2, 10, 10, 10};

    for (int it : arr)
    {
        nums.push_back(it);
    }
    cout << secondLargestElement(nums)<<endl;

    return 0;
}
