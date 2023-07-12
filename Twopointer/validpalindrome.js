const data = "kayak";

const isPalindrome = (input) => {
    let left = 0,
        right = input.length-1;
    
    while(left < right) {
        if(input[left] != input[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome(data));