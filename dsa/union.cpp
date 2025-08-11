#include <bits/stdc++.h>
using namespace std;
vector<int> unionArray(vector<int> &nums1, vector<int> &nums2, vector<int> &nums3)
{
    int n1 = nums1.size();
    int n2 = nums2.size();
    int i = 0;
    int j = 0;
    while (i < n1 && j < n2)
    {
        if (nums1[i] > nums2[j])
        {
            if (nums3.empty() || nums3.back() != nums2[j])
            {
                nums3.push_back(nums2[j]);
                j++;
            }
        }
        else if (nums2[j] > nums1[i])
        {
            if (nums3.empty() || nums3.back() != nums1[i])
            {
                nums3.push_back(nums1[i]);
                i++;
            }
        }
        else
        {
            if (nums3.empty() || nums3.back() != nums2[j])
            {
                nums3.push_back(nums2[j]);
                i++;
                j++;
            }
        }
    }
    while (i < n1)
    {
        if (nums3.empty() || nums3.back() != nums1[i])
        {
            nums3.push_back(nums1[i]);
            i++;
        }
    }
    while (j < n2)
    {
        if (nums3.empty() || nums3.back() != nums2[j])
        {
            nums3.push_back(nums2[j]);
            j++;
        }
    }
    return nums3;
}

int main()
{
    vector<int> nums1 = {1, 2, 3, 4, 5};
    vector<int> nums2 = {1, 2, 7};
    vector<int> nums3;
    unionArray(nums1, nums2, nums3);

    for (int it : nums3)
    {
        cout << it << " ";
    }
    return 0;
}