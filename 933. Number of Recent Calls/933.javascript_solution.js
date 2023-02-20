var RecentCounter = function () {
    this.output = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    this.output.push(t);
    while (this.output[0] < t - 3000) {
        this.output.shift();
    }
    return this.output.length;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */