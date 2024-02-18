
var ProductOfNumbers = function() {
    this.stream = [1];
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    if(!num) this.stream = [1];
    else{
        let lastItem = this.stream[this.stream.length-1];
        this.stream.push(lastItem * num);
    }
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {
    if(k >= this.stream.length) return 0;
    let last = this.stream[this.stream.length-1];
    let first = this.stream[this.stream.length-k-1];
    return last/first;
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */


//  // Space complexity: O(1)
// var ProductOfNumbers = function() {
//     this.stream = new Array();
// };

// /** 
//  * @param {number} num
//  * @return {void}
//  */
// ProductOfNumbers.prototype.add = function(num) { // O(1)
//     this.stream.push(num);
// };

// /** 
//  * @param {number} k
//  * @return {number}
//  */
// ProductOfNumbers.prototype.getProduct = function(k) { // O(N)
//     let product = 1;
//     for(let i = this.stream.length-1;i>=this.stream.length-k;i--){
//         product*=this.stream[i];
//     }
//     return product;
// };

// /** 
//  * Your ProductOfNumbers object will be instantiated and called as such:
//  * var obj = new ProductOfNumbers()
//  * obj.add(num)
//  * var param_2 = obj.getProduct(k)
//  */
