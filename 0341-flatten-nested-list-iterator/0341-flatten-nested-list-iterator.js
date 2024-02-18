/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
// /**
//  * @constructor
//  * @param {NestedInteger[]} nestedList
//  */
// var NestedIterator = function(nestedList) {
    
// };


// /**
//  * @this NestedIterator
//  * @returns {boolean}
//  */
// NestedIterator.prototype.hasNext = function() {
    
// };

// /**
//  * @this NestedIterator
//  * @returns {integer}
//  */
// NestedIterator.prototype.next = function() {
    
// };

// /**
//  * Your NestedIterator will be called like this:
//  * var i = new NestedIterator(nestedList), a = [];
//  * while (i.hasNext()) a.push(i.next());
// */

// space complexity: O(n) 
// time complexity: O(n) 
class NestedIterator {
    constructor(nestedList){
        this.flattened = this.flatten(nestedList);
        this.index = 0;
    }
    flatten(nestedList){
        let result = [];
        for(const element of nestedList){
            if(element.isInteger()){
                result.push(element.getInteger());
            }
            else{
                result.push(...this.flatten(element.getList()));
            }
        }
        return result;
    }

    next(){
        if(this.hasNext()){
            return this.flattened[this.index++];
        }
        return null;
    }
    
    hasNext(){
        return this.index <= this.flattened.length-1;
    }
}