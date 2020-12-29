const data = [];

// Create mock data
const ROW = 7,
    COL = 7;

for (let i = 0; i < ROW; i++) {
    let row = [];
    for (let j = 0; j < COL; j++) {
        let obj = {};
        obj.val = COL * i + j + 1;
        obj.customClass = i + 1 == ROW ? ' box-bottom' : '';
        obj.customClass += j + 1 == COL ? ' box-right' : '';
        row.push(obj);
    }
    data.push(row);
}

export default data;
