'use strict';

{
  let a = 0;
  let b = 0;
  document.body.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const ul = document.querySelector('ul');
      ul.remove();
      gacha();
    }
  });
  const btn = document.getElementById('btn');
  btn.addEventListener('click', () => {
      const ul = document.querySelector('ul');
      ul.remove();
      gacha();
  });

  function gacha() {
    const rResult = [];
    // const q1 = document.getElementsByName('q1');
    // console.log(q1.checked);
    let form = document.forms[0];
    //ラジオボタン取得
    let radio = form.radio;
    let pro = radio.value;
    b += 10;

    // console.log(pro);
  
    for (let i = 0; i < 10; i++) {
      let r = Math.random();
      if (r < pro) {
        rResult.push('★4');
      } else if (r < 0.3){
        rResult.push('★3');
      } else {
        rResult.push('★2')
      }
      if (i === 9) {
        if(rResult[9] === '★2') {
          rResult[9] = '★3';
        }
      }
    }
  
    let mem = ["潮紗理菜", "加藤史帆", "齊藤京子", "佐々木久美", "佐々木美玲", "高瀬愛奈", "高本彩花", "東村芽依", "金村美玖", "河田陽菜", "小坂菜緒", "富田鈴花", "丹生明里", "濱岸ひより", "松田好花", "宮田愛萌", "渡邉美穂", "上村ひなの"]
  
    const mResult = [];
    for (let i = 0; i < 10; i++) {
      let m = ~~(Math.random() * mem.length);
      mResult.push(mem[m]);
    }
    document.body.appendChild(document.createElement('ul'));
    const ul = document.querySelector('ul');
    for (let i = 0; i < 10; i++) {
      const li = document.createElement('li');
      ul.appendChild(li).textContent = `${rResult[i]} ${mResult[i]}`;
      switch (rResult[i]) {
        case '★4':
          li.classList.add('four');
          a++;
          break;
        case '★3':
          li.classList.add('three');
          break;
        case '★2':
          li.classList.add('two');
          break;
      }
    }
    const count = document.getElementById('count');
    count.textContent = `★4:${a}枚 / ${b}連`;
  }
}