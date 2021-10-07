function setText(data){    
    let price = document.getElementById('btcpx_id');
    let blocknum = document.getElementById('blocknum_id');
    let stats = document.getElementById('stats_id');
    let title = document.getElementById('musicTitle_id');
    let toggle = document.getElementById('musicToggle_id');
    const d = new Date();

    var spd = String(parseInt(100E6/data['market_price_usd'])); // satsPerDollar
    var moscowTime = spd.substr(0, spd.length-2) + ":" + spd.slice(-2);
    var px = new Intl.NumberFormat('en-US', {maximumFractionDigits: 0}).format(data['market_price_usd']);
    // fee = new Intl.NumberFormat('en-US', {maximumFractionDigits: 2}).format(data['average_transaction_fee_usd_24h'])
    // nodes = new Intl.NumberFormat('en-US').format(data['nodes'])
    var hashrate = new Intl.NumberFormat('en-US', {maximumFractionDigits: 0}).format(data['hashrate_24h']/1E18);
    var blockno = data['blocks'];
    var nxtHalvingAt = (parseInt(blockno/210000) + 1) * 210000;
    var daysTillNextHalving = parseInt(((nxtHalvingAt - blockno) * 10)/(60 * 24));
    var nextHalvingDate = new Date(d.setDate(d.getDate() + daysTillNextHalving)).toLocaleDateString();

    price.innerHTML = px;
    blocknum.innerHTML = 'Block ' + new Intl.NumberFormat('en-US').format(blockno);
    var txt = 'hashrate: ' + hashrate + ' EH/s, halving: ' + nextHalvingDate;
    stats.innerHTML = txt;
    if (!toggle.checked){
        title.style.color = "#f2a900";
        title.innerHTML = moscowTime;
    }
}

const setBtcPrice = async() => {
    const url = 'https://api.blockchair.com/bitcoin/stats';
    await fetch(url)
        .then(response => response.json())
        .then(data => setText(data['data']));
    setTimeout(setBtcPrice, 5000)
}


setBtcPrice()