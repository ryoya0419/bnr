'use strict'


//otherをクリックするとバナーがLPに変わり

// <label for="other_tab"><span>other</span></label>
// クリックされたら
// <h2 class="title">バナー</h2>が<h2 class="title">LP</h2>
// になる

//または

// <label for="shopMedia_tab"><span id="trigger7">店内POPやチラシ/span></label>
// クリックされたら
// <h2 class="title">バナー</h2>が<h2 class="title">店内POPやチラシ</h2>
// になる

document.getElementById('trigger0').addEventListener('click', jsfor0);

function jsfor0() {
    document.getElementById('target').textContent = 'LP';
}

document.getElementById('trigger7').addEventListener('click', jsfor7);

function jsfor7() {
    document.getElementById('target').textContent = '店内POPやチラシ';
}


// それ以外をクリックするとバナーに変わる

// <label for="bijoude_tab"><span>Bijoude</span></label>
document.getElementById('trigger1').addEventListener('click', jsfor1);

function jsfor1() {
    document.getElementById('target').textContent = 'バナー';
}

// <label for="iqserver_tab"><span>IQserver</span></label>
document.getElementById('trigger2').addEventListener('click', jsfor2);

function jsfor2() {
    document.getElementById('target').textContent = 'バナー';
}

// <label for="pcrwap_tab"><span>PCRWAP</span></label>
document.getElementById('trigger3').addEventListener('click', jsfor3);

function jsfor3() {
    document.getElementById('target').textContent = 'バナー';
}

// <label for="star_tab"><span>STAR OF THE COLOR</span></label>
document.getElementById('trigger4').addEventListener('click', jsfor4);

function jsfor4() {
    document.getElementById('target').textContent = 'バナー';
}

// <label for="myprotein_tab"><span>Myprotein</span></label>
document.getElementById('trigger5').addEventListener('click', jsfor5);

function jsfor5() {
    document.getElementById('target').textContent = 'バナー';
}

// <label for="golf_tab"><span id="trigger6">Golf</span></label>
document.getElementById('trigger6').addEventListener('click', jsfor6);

function jsfor6() {
    document.getElementById('target').textContent = 'バナー';
}

// <h2 class="title">LP</h2>が<h2 class="title">バナー</h2>になる
