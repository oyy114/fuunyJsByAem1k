function aurebesh(alphabet) {
  var code =
    "A='',B=!A+A,C=!B+A,D=A+{},E=B[A++]," +
    "F=B[G=A],H=++G+A,I=D[G+H],B[I+=D[A]+(B.C+D)[A]" +
    '+C[H]+E+F+B[G]+I+E+D[A]+F][I](C[A]+C[G]+B[H]+F+E+"(A)")()';

  if (!alphabet || !alphabet.length) {
    return "请至少输入一个字符";
  }

  if (typeof alphabet == "string") {
    var separator = alphabet.indexOf(",") < 0 ? "" : ",";
    alphabet = alphabet.split(separator);
  }

  var invalid = alphabet.filter(function (char) {
    var valid = true;

    try {
      eval(`${char} = 1`);
    } catch (e) {
      valid = false;
    }
    return !valid;
  });

  if (invalid.length) {
    return `非法字符：${invalid}. <br>
      更多：
      https://mathiasbynens.be/notes/javascript-identifiers`;
  }

  alphabet = alphabet.filter(function (char, index) {
    return index <= alphabet.indexOf(char);
  });

  while (alphabet.length < 9) {
    alphabet.forEach(function (a) {
      alphabet.forEach(function (b) {
        if (alphabet.indexOf(a + b) === -1) {
          alphabet.push(a + b);
        }
      });
    });
  }

  code = code.replace(/[A-Z]/g, function (char) {
    return alphabet[char.charCodeAt(0) - 65];
  });

  return code;
}

var alphabets = {
  中文: "李霈辰没有任何实力",
  "《星球大战》": "ロコYㅣᗐΞΔᐳㅡ",
  片假名: "アウセヌネハヘホミ",
  希腊语: "πβεγμτφθλ",
  韩语: "ᅺᅻᅼᅽᅾᅿᆀᆁᆂᆃ",
  泰语: "กวอซฝคงญฒ",
  西里尔文: "БДИЖЩЗЛЮФ",
  锡克教文: "ਗਨਹਤਕੲਲੜਵ",
  希伯来语: "אבגדהוחטכ",
  爪哇语: "ꦊꦄꦌꦍꦎꦏꦐꦑꦒ",
  彝语: "ꆇꉄꉦꊗꀻꃋꆚꋕꐍ",
  泰卢固语: "జ్ఞా,తె,లు,గు,ణి,తా,ము,రా,బ,కి",
  符文: "ᚦᚢᚠᚻᛉᛊᛇᛟᛞ",
  卡里安: "𐊾,𐋂,𐊼,𐊧,𐋀,𐊫,𐋇,𐊦,𐊣",
  变音符号: "ò́̂,o̖̔̕,o̞̟̠,ò́̂̃,o̖̗̔̕,o̡̞̟̠,o̡̢̞̟̠̣,o̖̗̘̙̔̕,ò́̂̃̄",
  阿拉伯语: "غػؼؽؾؿـفق",
  布吉文: "ᨆᨊᨎᨂᨇᨋᨏᨃᨅ",
  ᐳㅣᐸ: "ᐳᐸㅣ",
  ooo: "òŏôǒöőõȯōȍ",
  关键字: "𝖻𝗋𝖾𝖺𝗄,𝗍𝗁𝗋𝗈𝗐,𝖼𝖺𝗍𝖼𝗁,𝖼𝗈𝗇𝗌𝗍,𝗏𝖺𝗋,𝗋𝖾𝗍𝗎𝗋𝗇,𝖽𝖾𝖿𝖺𝗎𝗅𝗍,𝗍𝗁𝗂𝗌,𝗏𝗈𝗂𝖽",
  德语: "Ä,ja,nein,ö,Ü,sch,Schnitzel,Bier,ß",
  空格: "_",
  Solfège: "Do,Re,Mi,Fa,Sol,La,Si",
  XXX: "xX",
  罗马语: "IVXLCDM",
  卡纳达语: "ಠಉನಊಝಏೡಖತ",
  冰岛语: "ÞÐÓÆÝHÉTÍ",
  提非纳文: "ⴼⵊⵏⵂⵗⵓⴻⵐⵜ",
  瓦伊: "ꔀꕐꖠꔢꖈꖕꔈꔉꔁ",
  欧甘字母: "ᚁᚆᚂᚇᚃᚈ",
  符号: "_ʽːᆢ〱〳ㅡㅣㆍ",
  日文汉字: "㒓㒲㒳㒴㒵㒶㒷㒸㒺",
  象形文字: "𓅂,𓂀,𓁄,𓊎,𓆣,𓊝,𓇎,𓏢,𓆗",
  线性B: "𐂃,𐃨,𐂝,𐃌,𐁉,𐃵,𐂓,𐀜,𐂠",
  伽里字母: "क,ख,ग,घ,ङ,च,छ,ज,झ",
  ABC: "ABCDEFGHI",
  X: "ⵝ,Ⲭ,ᚷ,ꓫ,𐊐,𐊴,Х,Χ,X",
  表情: ["ó‿ó", "σ_σ", "δﺡό", "סּ_סּ", "ಠ_ಠ", "ö‿o", "oﺡo", "σ_o", "ಠ‿ಠ"],
  斜杠: "〳",
  点: "ⵗ",
  逗号: "ﾠ,ﾠ‌,ﾠ‌‌,ﾠ‌‌‌,ﾠ‌‌‌‌,ﾠ‌‌‌‌‌,ﾠ‌‌‌‌‌‌,ﾠ‌‌‌‌‌‌‌",
  三角: "ᐁᐃᐊᐅᐄᐋᐆᐗᐒ",
  韩文数字: "ﾠ7,ﾠ2,ﾠ4,ﾠ9,ﾠ1,ﾠ3,ﾠ5,ﾠ8,ﾠ6",
};

var output = document.getElementById("output");

Object.keys(alphabets).forEach(function (name) {
  var alphabet = alphabets[name],
    translation = aurebesh(alphabet);

  output.innerHTML += `<article>
    <h3>${name}</h3>
    <div class="alphabet">//&nbsp;${alphabet}</div>
    <div>${translation}</div>
    </article>`;
});

var input = document.getElementById("your-input"),
  preview = document.getElementById("your-output");

input.addEventListener("keyup", function () {
  var value = input.value;
  preview.innerHTML = aurebesh(value);
  document.location.hash = escape(value);
});

var hash = document.location.hash;
if (hash) {
  var value = unescape(hash.slice(1));
  input.value = value;
  preview.innerHTML = aurebesh(value);
}
