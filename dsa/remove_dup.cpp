#include <bits/stdc++.h>
using namespace std;
int main(){
    vector<int> arr = {0, 0, 3, 3, 5, 6};
    int n = arr.size();
    int j = 0;
    for(int i = 1; i < n; i++){
        if (arr[i] != arr[j]){
            arr[j+1] = arr[i];
            j++;
        }
    }
    for(int k = 0; k <= j; k++){
        cout<<arr[k]<<" "<<endl;
    }
    return 0;
}