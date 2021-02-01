//pyramids, recursive solution
function pyramid(n, row = 0, level = '') {
    //base case
    if (row === n) {
        return;
    }

    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    const midpoint = Math.floor(2 * n - 1 / 2);
    let add;
    //we determine which column we're operating on by looking at the length of our level string
    // && makes sure we're still to the left of this bound
    if (midpoint - row <= level.length && midpoint + row >= level.length) {
        add = '#';
    } else {
        add = ' ';
    }
    //after determining what character add will be, we'll insert this add this new variable into our recursive solution
    pyramid(n,row,level + add);

}