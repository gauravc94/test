// Given an array of N elements, switch(or swap) the element with the adjacent element and print the output.
// Sample Testcase:
// INPUT
// 5
// 3 2 1 2 3
// OUTPUT
// 2 3 2 1 3

var n = 5;
var arr = [3, 2, 1, 2, 3];

for(var i=0;i<n;i++){
    if(i%2==0){     // checks if the index is an even number
        if(i+1<n){  // if the next index is less than 5 i.e. its a valid index
            // swap
            var temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }

}
console.log(arr);
