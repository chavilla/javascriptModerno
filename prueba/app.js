function stringPermutations(str) {
    var array = getPermutations(str);
    array = removeDuplicates(array);

    return array.sort();
}
