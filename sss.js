<script language="JavaScript">
var password;
var pass1="admin";
password=prompt('Masukkan Password Untuk Membuka Halaman Ini!',' ');
if (password==pass1) alert('Password Benar! Klik OK Untuk Membuka Halaman Ini!');
else {window.location="https://cdn.rawgit.com/ravenblood12/ravenblood-html/fe717695/lisensi.js";}
</script>
else {window.location="
$('#body').css('background', 'linear-gradient(45deg, rgb(0, 0, 0) 0%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 100%)');
$('#main').css('min-width', '100%');
$('#header').css('display', 'none');
$('#news').css('display', 'none');
$('#content').css('background', 'none');
$('#gameContainer').html('<br><span id="notification">...</span><br><br> <span style="float: left;"><input id="basebetAmount" value="0.00000001" style="background: none; text-align: center; color: #fff; border: 1px solid #fff;" placeholder="basebetAmount" autocomplete="off"> <input id="overBalance" value="0.00000000" style="background: none; text-align: center; color: #fff; border: 1px solid #fff;" placeholder="overBalance" autocomplete="off"> <input id="underBalance" value="0.00000000" style="background: none; text-align: center; color: #fff; border: 1px solid #fff;" placeholder="underBalance" autocomplete="off"></span> <span style="float: right;"><button id="min" onclick="min();" style="border: 1px solid #fff; padding: 2px;">min</button> <button id="play" style="border: 1px solid #fff; padding: 2px;">start</button> <button id="reset" onclick="reset();" style="border: 1px solid #fff; padding: 2px;">reset</button> <button id="showChart" style="border: 1px solid #fff; padding: 2px;">lihatProfit</button> <button id="showStatic" style="border: 1px solid #fff; padding: 2px;">Lihatstatic</button></span><br><br> <div id="chart" style="height: 320px;"></div><br> <div id="static">...</div>');
$('#gameContainer').css('width', '75%');
$('#gameContainer').css('height', '100%');
$('#gameContainer').css('color', '#fff');
$('#gameContainer').css('font-size', '16px');
$('#gameContainer').css('margin', 'auto');
$('#gameContainer').css('padding', '0px');
$('#notification').html('Bot has applied!');
$('#static').css('text-align', 'center');
$('#controlContainer').css('display', 'none');
$('#listContainer').css('display', 'none');
$('#frontText').css('display', 'none');
$('#footer').css('display', 'none');
document.getElementById('chart').hidden = true;
document.getElementById('static').hidden = true;
document.getElementById('static').hidden = true;
randomizeSeed();
console.clear();
var run = false;
hideChart = true;
hideStatic = true;
basebetAmount = 0;
betAmount = 0;
prediction = 0;
direction = '';
balance = 0;
overBalance = 0;
underBalance = 0;
bet = 0;
win = 0;
lose = 0;
winStreak = 0;
loseStreak = 0;
maxWinStreak = 0;
maxLoseStreak = 0;
wagered = 0;
profitWagered = 0;
profit = 0;
largestProfit = 0;
startTime = new Date();
onTime = 0;
playTime = 0;
playDay = 0;
playHour = 0;
playMinute = 0;
playSecond = 0;
speed = 0;
round = 0;
dsp = [];
chart = '';
color = '';
$.getScript('https://canvasjs.com/assets/script/canvasjs.min.js').done(function (script, textStatus) {
    dps = [{
        x: 0,
        y: 0
    }];
    chart = new CanvasJS.Chart('chart', {
        theme: 'light2',
        zoomEnabled: true,
        axisX: {
            title: ' ',
            includeZero: false,
        },
        axisY: {
            title: ' ',
            includeZero: false,
        },
        title: {
            text: ' ',
            fontColor: '#6d49d8',
            fontSize: 2e1,
            padding: 2e1
        },
        data: [{
            type: 'stepLine',
            dataPoints: dps
        }]
    });
    chart.render();
});
function updateChart(bet, profit, color) {
    dps.push({
        x: bet,
        y: profit,
        color: color
    });
    if (dps[dps.length - 2]) {
        dps[dps.length - 2].lineColor = color;
    }
    if (dps.length > 1e3) {
        dps.shift();
    }
    chart.render();
}
function min() {
    $('#basebetAmount').val((0.00000001).toFixed(8));
}
$('#play').on('click', function () {
    run == true ? play(this, "start", false, false) : play(this, "stop", true, true);
    basebetAmount = parseFloat($('#basebetAmount').val());
    overBalance = parseFloat($('#overBalance').val());
    underBalance = parseFloat($('#underBalance').val());
    betAmount = basebetAmount;
    prediction = Math.floor((Math.random() * (49 - 50 + 1)) + 25);
    direction = 'over';
    $('#basebetAmount').val(basebetAmount.toFixed(8));
    $('#overBalance').val(overBalance.toFixed(8));
    $('#underBalance').val(underBalance.toFixed(8));
    doBet();
});
function play(e, d, v) {
    $(e).html(d);
    run = v;
    $('#basebetAmount').prop('disabled', v);
    $('#overBalance').prop('disabled', v);
    $('#underBalance').prop('disabled', v);
    $('#min').prop('disabled', v);
    $('#reset').prop('disabled', v);
}
$('#showChart').on('click', function () {
    hideChart == true ? showChart(this, "hideChart", false) : showChart(this, "showChart", true);
});
function showChart(e, d, v) {
    $(e).html(d);
    hideChart = v;
    document.getElementById('chart').hidden = v;
}
$('#showStatic').on('click', function () {
    hideStatic == true ? showStatic(this, "hideStatic", false) : showStatic(this, "showStatic", true);
});
function showStatic(e, d, v) {
    $(e).html(d);
    hideStatic = v;
    document.getElementById('static').hidden = v;
}
function reset() {
    randomizeSeed();
    basebetAmount = 0;
    betAmount = 0;
    maxbetAmount = 0;
    prediction = 0;
    direction = '';
    balance = 0;
    overBalance = 0;
    underBalance = 0;
    bet = 0;
    win = 0;
    lose = 0;
    winStreak = 0;
    loseStreak = 0;
    maxWinStreak = 0;
    maxLoseStreak = 0;
    wagered = 0;
    profitWagered = 0;
    profit = 0;
    largestProfit = 0;
    startTime = new Date();
    onTime = 0;
    playTime = 0;
    playDay = 0;
    playHour = 0;
    playMinute = 0;
    playSecond = 0;
    speed = 0;
    round = 0;
    dsp = [];
    chart = '';
    color = '';
    $.getScript('https://canvasjs.com/assets/script/canvasjs.min.js').done(function (script, textStatus) {
        dps = [{
            x: 0,
            y: 0
        }];
        chart = new CanvasJS.Chart('chart', {
            theme: 'light2',
            zoomEnabled: true,
            axisX: {
                title: ' ',
                includeZero: false,
            },
            axisY: {
                title: ' ',
                includeZero: false,
            },
            title: {
                text: ' ',
                fontColor: '#6d49d8',
                fontSize: 2e1,
                padding: 2e1
            },
            data: [{
                type: 'stepLine',
                dataPoints: dps
            }]
        });
        chart.render();
    });
    $('#static').html('...');
    return;
}
function doBet() {
    if (run === true) {
        jQuery.ajax({
            url: "https://play."+user.domain+"/",
            type: "POST",
            dataType: "html",
            timeout: 2e4,
            data: {
                game: "dice",
                coin: $('#coin').val(),
                betAmount: betAmount,
                prediction: prediction,
                direction: direction,
                clientSeed: $('#clientSeed').val(),
                serverSeedHash: $('#serverSeedHash').html(),
                session: getCookie("SESSION"),
                hash: user.hash
            },
            success: function (data) {
                var data = JSON.parse(data);
                if (data.result === true) {
                    bet++;
                    onTime = new Date().getTime();
                    playTime = onTime - startTime;
                    playDay = Math.floor(playTime / (1e3 * 6e1 * 6e1 * 24));
                    playHour = Math.floor((playTime % (1e3 * 6e1 * 6e1 * 24)) / (1e3 * 6e1 * 6e1));
                    playMinute = Math.floor((playTime % (1e3 * 6e1 * 6e1)) / (1e3 * 6e1));
                    playSecond = Math.floor((playTime % (1e3 * 6e1)) / 1e3);
                    speed = parseFloat((bet / playTime) * 1e1);
                    balance = parseFloat(data.balance);
                    wagered += parseFloat(betAmount);
                    profit += parseFloat(data.profit);
                    profitWagered = (wagered * 0.1) / 1e2;
                    if (profit > largestProfit) {
                        largestProfit = profit;
                    }
                    if (data.gameResult === 'win') {
                        win++;
                        winStreak++;
                        loseStreak = 0;
                        color = 'green';
                    } else {
                        lose++;
                        loseStreak++;
                        winStreak = 0;
                        color = 'black';
                    }
                    if (winStreak >= maxWinStreak) {
                        maxWinStreak = winStreak;
                    }
                    if (loseStreak >= maxLoseStreak) {
                        maxLoseStreak = loseStreak;
                    }
                    $('#serverSeedHash').html(data.serverSeedHash);
                    $('#notification').html('<left><font style="color: #FFF000; font-size: 18px;"><b style="font-size: 18px;"></a>Lisensi Ravenblood</font>');
                    $('#static').html('<span style="float: left;">Play Time = ' + playDay + ':' + playHour + ':' + playMinute + ':' + playSecond + '</span> <span style="float: right;">Speed = ' + speed.toFixed(2) + '</span><br> <span style="float: left;">Balance = ' + balance.toFixed(8) + '</span> <span style="float: right;">Profit = ' + profit.toFixed(8) + '</span><br> <span style="float: left;">Win Streak = ' + winStreak + '</span> <span style="float: right;"> Loss Streak = ' + loseStreak + '</span><br> <span style="float: left;">Max Win Streak = ' + maxWinStreak + '</span> <span style="float: right;">Max Loss Streak = ' + maxLoseStreak + '</span>');
                    updateChart(bet, profit, color);
                    if (betAmount >= balance) {
                        stop();
                        $('#notification').html('You lose!');
                        return;
                    } else {
                        if (overBalance != 0 && balance >= overBalance) {
                            stop();
                            $('#notification').html('Under balance!!');
                            return;
                        } else if (underBalance != 0 && balance <= underBalance) {
                            stop();
                            $('#notification').html('over balance!');
                            return;
                        } else {
               if (profit >= largestProfit) {
                     if (bet % 5 === 0) {
                      prediction = Math.floor((Math.random() * (60 - 55 + 1)) + 55);
                      direction = 'under';
                } else {
                      prediction = Math.floor((Math.random() * (45 - 40 + 1)) + 40);
                      direction = 'over';
                }
                round = 2;
                betAmount = basebetAmount;
              } else {
                round++;
                if (round % 3 === 0) {
                    betAmount *= 1.5;
                 }
               }
              }
            };
                    doBet()
                } else {
                    randomizeSeed();
                    setInterval(doBet(), 1e3);
                }
            },
            error: function (xhr, ajaxOptions, throwagerednError) {
                randomizeSeed();
                setInterval(doBet(), 1e3);
            },
            timeout: function (xhr, ajaxOptions, throwagerednError) {
                randomizeSeed();
                setInterval(doBet(), 1e3);
            },
            abetort: function (xhr, ajaxOptions, throwagerednError) {
                randomizeSeed();
                setInterval(doBet(), 1e3);
            }
        });
    } else {
        $('#notification').html('<left><font style="color: #FFFF00; font-size: 20px;"><b style="font-size: 20px;">Lisensi</font>');
        return;
    }
}
