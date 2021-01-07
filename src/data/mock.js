function createGrid() {
    let data = [];
    // Create mock data
    const ROW = 7,
        COL = 7;

    for (let i = 0; i < ROW; i++) {
        let row = [];
        for (let j = 0; j < COL; j++) {
            let val = COL * i + j + 1;
            row.push(val);
        }
        data.push(row);
    }
    return data;
}

function createMock(cards) {
    // Create mock data
    let mock = [];
    for (let i = 0; i < cards.length; i++) {
        let card = {
            id: i,
            grid: createGrid(),
            title: cards[i],
        };
        mock.push(card);
    }
    return mock;
}

export default createMock;
