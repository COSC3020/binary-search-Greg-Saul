function binarySearch(list, element) {
    if(list.length === 0){
        return -1;
    }
    let front = 0;
    let back = list.length - 1;

    while (front <= back){
        let mid = Math.floor((front + back) / 2)

        if(list[mid] === element){
            while(list[mid] === list[mid - 1]){
                mid = mid -1;
            }
            return mid;
        }
        else if(list[mid] < element){
            front = mid + 1;
        }
        else{
            back = mid - 1;
        }
    }
    return -1;
}
