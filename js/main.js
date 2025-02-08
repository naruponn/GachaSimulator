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
  
    let mem = ["小池美波", "井上梨名", "遠藤光莉", "大園玲", "大沼晶保", "幸阪茉里乃", "武元唯衣", "田村保乃", "藤吉夏鈴", "増本綺良", "松田里奈", "森田ひかる", "守屋麗奈", "山﨑天", "石森璃花", "遠藤理子", "小田倉麗奈", "小島凪紗", "谷口愛季", "中嶋優月", "的野美青", "向井純葉", "村井優", "村山美羽", "山下瞳月"]
  
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
