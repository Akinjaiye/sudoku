const CONSTANT ={
    UNASSIGNED: 0,
    GRID_SIZE: 9,
    BOX_SIZE: 3,
    NUMBERS: [1,2,3,4,5,6,7,8,9],
    LEVEL_NAME:[
        'Easy',
        'Medium',
        'Hard',
        'Very hard',
        'Insane',
        'Inhuman'
    ],
    LEVEL: [29, 38,47,56,65,74]
}


const newGrid = (size) => {
    let arr = new Array(size);

    for(let i = 0; i < size; i++){
        arr[i] = new Array(size);
    }

    for(let i = 0; i < Math.pow(size, 2); i++){
        arr[Math.floor(i/size)][i%size] = CONSTANT.UNASSIGNED;
    }

    return arr;
}

//check duplicate number in col
const isColSafe = (grid, col, value) => {
    for(let row=0; row< CONSTANT.GRID_SIZE; row++){
        if(grid[row][col] === value) return false;
    }
    return true;
}

//check duplicate number in row
const isRowSafe = (grid, row, value) => {
    for(let col = 0; col < CONSTANT.GRID_SIZE; col++){
        if(grid[row][col] === value) return false;
    }
    return true;
}