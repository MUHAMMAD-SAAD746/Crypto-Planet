const chartContainer = document.getElementById("trading-chart");

const chart = LightweightCharts.createChart(
    document.getElementById("trading-chart"),
    {
        width: chartContainer.clientWidth,
        height: 300,

        layout: {
            background: {
                color: "#121318"
            },
            textColor: "#787A89"
        },

        grid: {
            vertLines: {
                color: "#2a2d35"
            },
            horzLines: {
                color: "#2a2d35"
            }
        },

        rightPriceScale: {
            borderColor: "#2a2d35"
        },

        timeScale: {
            borderColor: "#2a2d35"
        },

        crosshair: {
            mode: LightweightCharts.CrosshairMode.Normal
        },

        handleScroll: {
            mouseWheel: true,
            pressedMouseMove: true,
            horzTouchDrag: true,
            vertTouchDrag: true
        },

        handleScale: {
            mouseWheel: true,
            pinch: true,
            axisPressedMouseMove: true
        },

        rightPriceScale: {
            visible: true
        },

        timeScale: {
            timeVisible: true,
            secondsVisible: false
        },


        localization: {
            priceFormatter: (price) => {
                if (price >= 1000000) {
                    return (price / 1000000).toFixed(2) + "M";
                }

                if (price >= 1000) {
                    return (price / 1000).toFixed(2) + "k";
                }

                return price.toFixed(2);
            }
        },
    }
);

const candleSeries = chart.addSeries(
    LightweightCharts.CandlestickSeries
);

candleSeries.setData([
    { time: "2026-08-01", open: 115000, high: 115600, low: 114700, close: 115300 },
    { time: "2026-08-02", open: 115300, high: 115700, low: 114900, close: 115100 },
    { time: "2026-08-03", open: 115100, high: 115800, low: 114800, close: 115500 },
    { time: "2026-08-04", open: 115500, high: 115900, low: 115000, close: 115400 },
    { time: "2026-08-05", open: 115400, high: 115950, low: 115100, close: 115700 },
    { time: "2026-08-06", open: 115700, high: 116000, low: 115300, close: 115500 },
    { time: "2026-08-07", open: 115500, high: 115900, low: 115000, close: 115200 },
    { time: "2026-08-08", open: 115200, high: 115800, low: 114900, close: 115600 },
    { time: "2026-08-09", open: 115600, high: 116100, low: 115300, close: 115800 },
    { time: "2026-08-10", open: 115800, high: 116000, low: 115400, close: 115500 },
    { time: "2026-08-11", open: 115500, high: 115900, low: 115100, close: 115300 },
    { time: "2026-08-12", open: 115300, high: 115800, low: 115000, close: 115700 },
    { time: "2026-08-13", open: 115700, high: 116100, low: 115400, close: 115900 },
    { time: "2026-08-14", open: 115900, high: 116200, low: 115500, close: 115600 },
    { time: "2026-08-15", open: 115600, high: 116000, low: 115300, close: 115800 },

    { time: "2026-08-16", open: 115800, high: 116500, low: 115500, close: 116300 },
    { time: "2026-08-17", open: 116300, high: 117000, low: 116000, close: 116800 },
    { time: "2026-08-18", open: 116800, high: 117400, low: 116400, close: 117100 },
    { time: "2026-08-19", open: 117100, high: 117800, low: 116800, close: 117600 },
    { time: "2026-08-20", open: 117600, high: 118100, low: 117200, close: 117400 },
    { time: "2026-08-21", open: 117400, high: 118300, low: 117000, close: 118000 },
    { time: "2026-08-22", open: 118000, high: 118700, low: 117600, close: 118500 },
    { time: "2026-08-23", open: 118500, high: 119000, low: 118100, close: 118300 },
    { time: "2026-08-24", open: 118300, high: 119200, low: 117900, close: 118900 },
    { time: "2026-08-25", open: 118900, high: 119600, low: 118500, close: 119400 },
    { time: "2026-08-26", open: 119400, high: 120000, low: 119000, close: 119800 },
    { time: "2026-08-27", open: 119800, high: 120500, low: 119400, close: 120300 },
    { time: "2026-08-28", open: 120300, high: 120900, low: 119900, close: 120100 },
    { time: "2026-08-29", open: 120100, high: 121000, low: 119800, close: 120700 },
    { time: "2026-08-30", open: 120700, high: 121400, low: 120300, close: 121100 },
    { time: "2026-08-31", open: 121100, high: 121800, low: 120700, close: 121600 },
    { time: "2026-09-01", open: 121600, high: 122100, low: 121100, close: 121400 },
    { time: "2026-09-02", open: 121400, high: 122300, low: 121000, close: 122000 },
    { time: "2026-09-03", open: 122000, high: 122700, low: 121600, close: 122500 },
    { time: "2026-09-04", open: 122500, high: 123100, low: 122000, close: 122900 },
    { time: "2026-09-05", open: 122900, high: 123500, low: 122500, close: 123200 },
    { time: "2026-09-06", open: 123200, high: 123900, low: 122800, close: 123700 },
    { time: "2026-09-07", open: 123700, high: 124300, low: 123300, close: 124000 },
    { time: "2026-09-08", open: 124000, high: 124600, low: 123500, close: 124400 },
    { time: "2026-09-09", open: 124400, high: 125000, low: 124000, close: 124800 },

    { time: "2026-09-10", open: 124800, high: 125100, low: 123900, close: 124100 },
    { time: "2026-09-11", open: 124100, high: 124300, low: 122900, close: 123100 },
    { time: "2026-09-12", open: 123100, high: 123400, low: 121900, close: 122200 },
    { time: "2026-09-13", open: 122200, high: 122800, low: 121700, close: 122600 },
    { time: "2026-09-14", open: 122600, high: 123800, low: 119400, close: 119400 },
    { time: "2026-09-15", open: 119400, high: 120400, low: 116400, close: 118800 },
    { time: "2026-09-16", open: 116700, high: 116900, low: 116200, close: 116200 },
]);

chart.timeScale().fitContent();


const resizeObserver = new ResizeObserver(() => {
    chart.applyOptions({
        width: chartContainer.clientWidth
    });
});

resizeObserver.observe(chartContainer);

console.log(LightweightCharts.version());