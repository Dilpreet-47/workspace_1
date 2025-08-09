#include <bits/stdc++.h>
using namespace std;
int makepart(vector<int> &nums, int i, int j);
vector<int> quicksort(vector<int> &nums, int i, int j)
{
    if (i < j)
    {
        int partition = makepart(nums, i, j);
        quicksort(nums, i, partition - 1);
        quicksort(nums, partition + 1, j);
    }
    return nums;
}

int makepart(vector<int>& nums, int i, int j) {
    int pivot = nums[i];
    int low = i + 1;
    int high = j;

    while (low <= high) {
        while (low <= high && nums[low] <= pivot) low++;
        while (low <= high && nums[high] > pivot) high--;

        if (low < high) {
            swap(nums[low], nums[high]);
            low++;
            high--;
        }
    }

    swap(nums[i], nums[high]);  // Put pivot in correct position
    return high;  // New pivot index
}


int main()
{
    int arr[] = {4, 6, 2, 5, 7, 9, 1, 3};
    vector<int> nums;
    int size = sizeof(arr) / sizeof(arr[0]);

    for (int i = 0; i < size; i++)
    {
        nums.push_back(arr[i]);
    }

    quicksort(nums, 0, nums.size() - 1);

    for (auto it: nums){
        cout<<it<<" ";
    }
    return 0;
}