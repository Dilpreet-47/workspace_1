#include <bits/stdc++.h>
using namespace std;

int secondLargestElement(vector<int> &nums)
{
    // your code goes here
    int n = nums.size();
    int large = 0;
    for (int i = 0; i < n; i++)
    {
        if (nums[i] > nums[large])
        {
            large = i;
        }
    }

    int slarge = -1;

    for (int i = 0; i < n; i++)
    {
        if (nums[i] != nums[large])
        {
            if (slarge == -1 || nums[i] > nums[slarge])
            {
                slarge = i;
            }
        }
    }

    return nums[slarge];
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