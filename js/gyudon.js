const label_gyudon = [], yoshinoya = [], matsuya = [], sukiya = []

const req_gyudon = new XMLHttpRequest();
req_gyudon.open("GET", "./csv/gyudon.csv", true);
req_gyudon.send(null);

req_gyudon.onload = () => {
    if (req_gyudon.status != 404) {
        const line = req_gyudon.responseText.split("\n");
        const data = [];
        for (let i = 0; i < line.length - 1; ++i) {
            const cells = line[i].split(",");
            data.push(cells);
        }
        for (let row in data) {
            label_gyudon.push(data[row][0]);
            yoshinoya.push(data[row][1]);
            matsuya.push(data[row][2]);
            sukiya.push(data[row][3]);
        }
        console.log('label_gyudon', yoshinoya)
        const ctx = document.getElementById('gyudonChart');
        const myChart = new Chart(ctx, conf_gyudon);
    }
}

const conf_gyudon = {
    type: 'line',
    data: {
        labels: label_gyudon,
        datasets: [
            {
                fill: false,
                label: '吉野家', 
                data: yoshinoya, 
                pointRadius: 0,
                borderColor: 'rgba(255, 99, 132, 0.6)', 
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
            },
            {
                fill: false,
                label: '松屋', 
                data: matsuya, 
                pointRadius: 0,
                borderColor: 'rgba(54, 162, 235,0.6)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
            },
            {
                fill: false,
                label: 'すき家', 
                data: sukiya, 
                pointRadius: 0,
                borderColor: 'rgba(255, 206, 86, 0.6)',
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
            },
        ],
    },
    options: {
        responsive: true,
        animation: {
            easing: 'easeOutQuad',
        },
        title: {
            display: true,
            text: '牛丼チェーン',
            fontSize: 20
        },
        scales: {
            xAxes: [{
                type: 'time',
                gridLines: false,
                time: {
                    parser: 'YYYY-MM-DD',
                    unit: 'month',
                }
            }],
            yAxes: [{
                ticks: {
                beginAtZero: true
                }
            }],
        },
    },
};

//const ctx = document.getElementById('myChart');
//const myChart = new Chart(ctx, conf);
//const chart = new Chart(document.getElementById('myChart'), conf);
