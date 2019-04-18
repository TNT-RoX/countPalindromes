const isPalindrome = subArray =>
    subArray.length > 0 && subArray.join() === subArray.reverse().join();

const countPalindromes = s => [...s].reduce((res, part, idx, arr) => {
    const partArray = arr.slice(idx, s.length);
    res = partArray.reduceRight(
        (parts, part, partIdx) =>
        isPalindrome(partArray.slice(0, partIdx)) ? parts + 1 : parts,
        res
    );
    return isPalindrome(partArray) ? res + 1 : res;
}, 0);

console.log(countPalindromes('ABBCCBBA'));
