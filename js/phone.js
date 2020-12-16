const label = [], docomo = [], softbank = [], kddi = [], rakuten = [];
const timeTransform = (time1) => {
    //const time = Date.parse(time1 + " " + "00:00:00");
    //const date = new Date(time)
    times = time1.split('-')
    return times[1] + '-' + times[2]+ '-' + times[0];
}
const req = new XMLHttpRequest();
req.open("GET", "./csv/phone.csv", true);
req.send(null);

req.onload = () => {
    if (req.status != 404) {
        const line = req.responseText.split("\n");
        const data = [];
        for (let i = 0; i < line.length - 1; ++i) {
            const cells = line[i].split(",");
            data.push(cells);
        }
        for (let row in data) {
            label.push(data[row][0]);
            docomo.push(data[row][1]);
            softbank.push(data[row][2]);
            kddi.push(data[row][3]);
            rakuten.push(data[row][4]);
        }
        console.log('label', label)
        const ctx = document.getElementById('phoneChart');
        const myChart = new Chart(ctx, conf);
    }
}

const conf = {
    type: 'line',
    data: {
        labels: label,
        datasets: [
            {
                fill: false,
                label: 'docomo', 
                data: docomo, 
                pointRadius: 0,
                borderColor: 'rgba(255, 99, 132, 0.6)', 
                //backgroundColor: 'rgba(255, 99, 132, 0.2)',
            },
            {
                fill: false,
                label: 'softbank', 
                data: softbank, 
                pointRadius: 0,
                borderColor: 'rgba(54, 162, 235, 0.6)',
                //backgroundColor: 'rgba(54, 162, 235, 1)',
            },
            {
                fill: false,
                label: 'kddi', 
                data: kddi, 
                pointRadius: 0,
                borderColor: 'rgba(255, 206, 86, 0.6)',
                //backgroundColor: 'rgba(255, 206, 86, 1)',
            },
            {
                fill: false,
                label: 'rakuten', 
                data: rakuten, 
                pointRadius: 0,
                borderColor: 'rgba(255, 99, 132, 0.4)',
                //backgroundColor: 'rgba(255, 99, 132, 0.2)',
            },
    ],
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'phone career',
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
