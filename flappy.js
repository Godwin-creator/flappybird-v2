// flappy.js
    const cvs = document.getElementById("zone_de_dessin");
    const pauseBtn = document.getElementById("pause-btn");
    cvs.width = 300;
    cvs.height = 400;
    cvs.style.cursor = "pointer";
    const ctx = cvs.getContext("2d");

    const imageArrierePlan = new Image(); imageArrierePlan.src = "images/arrierePlan.png";
    const imageAvantPlan = new Image(); imageAvantPlan.src = "images/avantPlan.png";
    const imageOiseau1 = new Image(); imageOiseau1.src = "images/oiseau1.png";
    const imageOiseau2 = new Image(); imageOiseau2.src = "images/oiseau2.png";
    const imageTuyauBas = new Image(); imageTuyauBas.src = "images/tuyauBas.png";
    const imageTuyauHaut = new Image(); imageTuyauHaut.src = "images/tuyauHaut.png";

    const sonVole = new Audio("sons/sonVole.mp3");
    const sonScore = new Audio("sons/sonScore.mp3");
    const sonChoc = new Audio("sons/sonChoc.mp3");

    const largeurTuyau = 40;
    const ecartTuyaux = 80;
    const largeurOiseau = 34;
    const hauteurOiseau = 24;
    const gravite = 1;

    let xoiseau = 100;
    let yoiseau = 150;
    let oiseauMonte = 0;
    let tabTuyaux = [{ x: cvs.width, y: cvs.height - 150 }];
    let score = 0;
    let record = getDecryptedRecord();
    let finDuJeu = false;
    let pause = false;
    let frame = 0;

    document.addEventListener("click", () => {
      if (!finDuJeu && !pause) {
        oiseauMonte = 10;
        yoiseau -= 25;
        sonVole.play();
      } else if (finDuJeu) {
        setTimeout(replay, 500);
      }
    });

    function toggleDarkMode() {
      document.body.classList.toggle("dark-mode");
    }

    function startGame() {
      document.getElementById("start-screen").style.display = "none";
      cvs.style.display = "block";
      pauseBtn.style.display = "block";
      dessine();
    }

    function togglePause() {
      pause = !pause;
      if (!pause) dessine();
    }

    function resetRecord() {
      localStorage.removeItem("record");
      record = 0;
      alert("Record réinitialisé !");
    }

    function replay() {
      location.reload();
    }

    function encryptRecord(score) {
      return btoa(score + "_gwinsecure");
    }

    function decryptRecord(data) {
      try {
        return parseInt(atob(data).split("_")[0]);
      } catch {
        return 0;
      }
    }

    function getDecryptedRecord() {
      const stored = localStorage.getItem("record");
      return stored ? decryptRecord(stored) : 0;
    }

    function dessine() {
      if (pause || finDuJeu) return;

      ctx.drawImage(imageArrierePlan, 0, 0);

      for (let i = 0; i < tabTuyaux.length; i++) {
        tabTuyaux[i].x--;

        ctx.drawImage(imageTuyauBas, tabTuyaux[i].x, tabTuyaux[i].y);
        ctx.drawImage(
          imageTuyauHaut,
          tabTuyaux[i].x,
          tabTuyaux[i].y - ecartTuyaux - imageTuyauHaut.height
        );

        if (tabTuyaux[i].x === 100) {
          tabTuyaux.push({ x: cvs.width, y: Math.floor(100 + Math.random() * 180) });
        } else if (tabTuyaux[i].x + largeurTuyau < 0) {
          tabTuyaux.splice(i, 1);
        }

        const toucheTuyau =
          xoiseau + largeurOiseau >= tabTuyaux[i].x &&
          xoiseau <= tabTuyaux[i].x + largeurTuyau &&
          (yoiseau + hauteurOiseau >= tabTuyaux[i].y ||
            yoiseau + ecartTuyaux <= tabTuyaux[i].y);

        const horsEcran = yoiseau < 0 || yoiseau + hauteurOiseau > 300;

        if (toucheTuyau || horsEcran) {
          sonChoc.play();
          finDuJeu = true;
        }

        if (xoiseau === tabTuyaux[i].x + largeurTuyau + 5) {
          score++;
          if (score > record) {
            record = score;
            localStorage.setItem("record", encryptRecord(record));
          }
          sonScore.play();
        }
      }

      ctx.drawImage(imageAvantPlan, 0, cvs.height - imageAvantPlan.height);

      yoiseau += gravite;
      frame++;

      const imageOiseauActuel = frame % 20 < 10 ? imageOiseau1 : imageOiseau2;
      ctx.drawImage(imageOiseauActuel, xoiseau, yoiseau);

      ctx.lineWidth = 3;
      ctx.strokeRect(0, 0, cvs.width, cvs.height);

      ctx.fillStyle = "green";
      ctx.font = "18px Verdana";
      ctx.fillText("Score : " + score, 10, cvs.height - 40);
      ctx.fillText("Record : " + record, 10, cvs.height - 15);

      if (!finDuJeu) {
        requestAnimationFrame(dessine);
      } else {
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        ctx.fillRect(0, 0, cvs.width, cvs.height);
        ctx.fillStyle = "white";
        ctx.font = "30px Verdana";
        ctx.fillText("GAME OVER", 60, 180);
        ctx.font = "18px Verdana";
        ctx.fillText("Score : " + score, 100, 210);
        ctx.fillText("Record : " + record, 95, 240);
        ctx.fillText("Clique pour rejouer", 70, 270);
        pauseBtn.style.display = "none";
      }
    }