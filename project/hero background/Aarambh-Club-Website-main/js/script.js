function backgroundAnimation() {
  const div = document.createElement('div');
  div.id = 'BackgroundAnimation';
  document.getElementById("background-animation").appendChild(div);

  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  const resizeCanvas = () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  };

    window.addEventListener('resize', () => {
    resizeCanvas();
    location.reload();
  });

  resizeCanvas();

  div.appendChild(canvas);

  const katakana = 'अआइईउऊऋएऐओऔकखगघचछजझटठडढतथदधनपफबभमयरलवशषसहळक्षज्ञअंअः';
  const latin = '{/};=+-;.()[]{}!@#$%^&*';
  const nums = '०१२३४५६७८९';

  const alphabet = katakana + latin + nums;

  const fontSize = canvas.width / canvas.height * 10;
  const columns = canvas.width / fontSize;

  const rainDrops = [];

  for (let x = 0; x < columns; x++) {
    rainDrops[x] = 1;
  }

  const draw = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.05)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#0A31BB';
    context.font = fontSize + 'px monospace';

    for (let i = 0; i < rainDrops.length; i++) {
      const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
      context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

      if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
        rainDrops[i] = 0;
      }
      rainDrops[i]++;
    }

    // Aarambh Logo Text in center of screen
    context.textAlign = 'center';

    var text = '    \n         ______                                              __        __       \n        /      \                                            /  |      /  |      \n       /$$$$$$  |  ______    ______   ______   _____  ____  $$ |____  $$ |____  \n    $$ |__$$ | /      \  /      \ /      \ /       \/  \/     \$$        $$    \ \n       $$    $$ | $$$$$$  |/$$$$$$  |$$$$$$  |$$$$$$ $$$$  |$$$$$$$  |$$$$$$$  |\n       $$$$$$$$ | /    $$ |$$ |  $$/ /    $$ |$$ | $$ | $$ |$$ |  $$ |$$ |  $$ |\n       $$ |  $$ |/$$$$$$$ |$$ |     /$$$$$$$ |$$ | $$ | $$ |$$ |__$$ |$$ |  $$ |\n       $$ |  $$ |$$    $$ |$$ |     $$    $$ |$$ | $$ | $$ |$$    $$/ $$ |  $$ |\n       $$/   $$/  $$$$$$$/ $$/       $$$$$$$/ $$/  $$/  $$/ $$$$$$$/  $$/   $$/';
    var lines = text.split('\n');

    var lineHeight = context.measureText("M").width * 1.8;
    var y = canvas.height / 2 - (lines.length / 2 * lineHeight);
    context.fillStyle = '#1943D8';
    for (var i = 0; i < lines.length; i++) {
      context.fillText(lines[i], canvas.width / 2, y + i * lineHeight);
    }

  };

  setInterval(draw, 30);
}
  /* Logo
"    
        ______                                              __        __       
        /      \                                            /  |      /  |      
      /$$$$$$  |  ______    ______   ______   _____  ____  $$ |____  $$ |____  
      $$ |__$$ | /      \  /      \ /      \ /     \/    \ $$      \ $$      \ 
      $$    $$ | $$$$$$  |/$$$$$$  |$$$$$$  |$$$$$$ $$$$  |$$$$$$$  |$$$$$$$  |
      $$$$$$$$ | /    $$ |$$ |  $$/ /    $$ |$$ | $$ | $$ |$$ |  $$ |$$ |  $$ |
      $$ |  $$ |/$$$$$$$ |$$ |     /$$$$$$$ |$$ | $$ | $$ |$$ |__$$ |$$ |  $$ |
      $$ |  $$ |$$    $$ |$$ |     $$    $$ |$$ | $$ | $$ |$$    $$/ $$ |  $$ |
      $$/   $$/  $$$$$$$/ $$/       $$$$$$$/ $$/  $$/  $$/ $$$$$$$/  $$/   $$/"
*/