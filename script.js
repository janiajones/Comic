document.addEventListener("DOMContentLoaded", () => {
  // === Existing Movement / Dialogue Code ===
  const mermaid = document.getElementById("mermaid");
  const mermaidContainer = document.getElementById("mermaid-container");
  const shark = document.getElementById("shark");
  const sharkContainer = document.getElementById("shark-container");

  const travellerTop = document.getElementById("traveller-top");
  const travellerBottom = document.getElementById("traveller-bottom");

  const mermaidSpeechBubble = mermaidContainer.querySelector(".speech-bubble");
  const sharkSpeechBubble = sharkContainer.querySelector(".speech-bubble");
  const travellerSpeechBubbleTop = document.querySelector("#traveller-container-top .speech-bubble");
  const travellerSpeechBubbleBottom = document.querySelector("#traveller-container-bottom .speech-bubble");

  const mermaidDialogue = [
    "You are not from these waters. What brings you to the deep, land-dweller?",
    "We are as real as the waves that kiss your shores. But beware, not all deep-sea mysteries welcome strangers so kindly."
  ];
  const sharkDialogue = [
    "You do not belong here, outsider.",
    "The ocean is not for the timid. Tread carefully, or you may find yourself lost in its depths."
  ];
  const travellerDialogueTop = [
    "This world is unlike anything I’ve ever seen...",
    "I have no clue, a book? Are you real, or just a dream?"
  ];
  const travellerDialogueBottom = [
    "I—I mean no harm! I only wish to explore.",
    "I think I’ve seen enough for today…"
  ];

  let mermaidIndex = 0;
  let sharkIndex = 0;
  let travellerIndexTop = 0;
  let travellerIndexBottom = 0;

  mermaid.addEventListener("click", () => {
    mermaidIndex = (mermaidIndex + 1) % mermaidDialogue.length;
    mermaidSpeechBubble.textContent = mermaidDialogue[mermaidIndex];
  });

  shark.addEventListener("click", () => {
    sharkIndex = (sharkIndex + 1) % sharkDialogue.length;
    sharkSpeechBubble.textContent = sharkDialogue[sharkIndex];
  });

  travellerTop.addEventListener("click", () => {
    travellerIndexTop = (travellerIndexTop + 1) % travellerDialogueTop.length;
    travellerSpeechBubbleTop.textContent = travellerDialogueTop[travellerIndexTop];
  });

  travellerBottom.addEventListener("click", () => {
    travellerIndexBottom = (travellerIndexBottom + 1) % travellerDialogueBottom.length;
    travellerSpeechBubbleBottom.textContent = travellerDialogueBottom[travellerIndexBottom];
  });

  // === Mermaid & Shark Movement Logic ===
  let mermaidX = window.innerWidth - mermaid.clientWidth;
  let mermaidDirection = -1;
  let sharkX = 0;
  let sharkDirection = 1;
  const speed = 2;

  function moveMermaid() {
    mermaidX += mermaidDirection * speed;
    if (mermaidDirection === -1 && mermaidX <= 0) {
      mermaidDirection = 1;
      mermaid.style.transform = "scaleX(1)";
    } else if (mermaidDirection === 1 && mermaidX >= window.innerWidth - mermaid.clientWidth) {
      mermaidDirection = -1;
      mermaid.style.transform = "scaleX(-1)";
    }
    mermaidContainer.style.left = `${mermaidX}px`;
    requestAnimationFrame(moveMermaid);
  }

  function moveShark() {
    sharkX += sharkDirection * speed;
    if (sharkDirection === 1 && sharkX >= window.innerWidth - shark.clientWidth) {
      sharkDirection = -1;
      shark.style.transform = "scaleX(-1)";
    } else if (sharkDirection === -1 && sharkX <= 0) {
      sharkDirection = 1;
      shark.style.transform = "scaleX(1)";
    }
    sharkContainer.style.left = `${sharkX}px`;
    requestAnimationFrame(moveShark);
  }

  moveMermaid();
  moveShark();

  // === Audio Button Logic for Each Frame ===
  const topAudioButton = document.getElementById("top-audio-button");
  const topAudio = document.getElementById("top-audio");
  const bottomAudioButton = document.getElementById("bottom-audio-button");
  const bottomAudio = document.getElementById("bottom-audio");

  // Toggles audio in top frame
  topAudioButton.addEventListener("click", () => {
    if (topAudio.paused) {
      topAudio.play();
      topAudioButton.textContent = "Pause Water Sound";
    } else {
      topAudio.pause();
      topAudioButton.textContent = "Play Water Sound";
    }
  });

  // Toggles audio in bottom frame
  bottomAudioButton.addEventListener("click", () => {
    if (bottomAudio.paused) {
      bottomAudio.play();
      bottomAudioButton.textContent = "Pause Water Sound";
    } else {
      bottomAudio.pause();
      bottomAudioButton.textContent = "Play Water Sound";
    }
  });
  //Jania's code starting here
  //newButton.style.whiteSpace = "pre-line";

  const openBookButton = document.getElementById("open-book-button");
  const scene1 = document.getElementById("scene1");

  openBookButton.addEventListener("click", () => {
    // Change the background image of scene1 to book.png
    openBookButton.style.display = "none";
    scene1.style.backgroundImage = "url('book.png')";

     if (!document.getElementById("button1")) {
      // Create and append three new buttons directly to scene1
      for (let i = 1; i <= 4; i++) {
        const newButton = document.createElement("button");
        if (i == 1){
          newButton.textContent = `Let's go\nswimming!`;
          newButton.id = `ocean`;
          newButton.style.position = "absolute";
          newButton.style.top = "410px";    // 50px from the top of the container
          newButton.style.left = "380px";
          newButton.addEventListener("click", () => {
          //should jump to that part of the story
            document.getElementById("top-frame").scrollIntoView({ behavior: "smooth" });
        });
        }
        if (i == 2){
          newButton.innerHTML = `I'm ready<br>to go hiking!`;
          newButton.id = `forest`;
          newButton.style.position = "absolute";
          newButton.style.top = "575px";    // 50px from the top of the container
          newButton.style.left = "410px";
          newButton.addEventListener("click", () => {
          //should jump to that part of the story
        });
        }
        if (i == 3){
          newButton.innerHTML = `A safari in the desert, nice!`;
          newButton.id = `desert`;
          newButton.style.position = "absolute";
          newButton.style.top = "115px";    // 50px from the top of the container
          newButton.style.left = "820px";
          newButton.addEventListener("click", () => {
          //should jump to that part of the story
        });
        }
        if (i == 4){
          newButton.innerHTML = `Return to library`;
          newButton.id = `home`;
          newButton.style.position = "absolute";
          newButton.style.top = "20px";    // 50px from the top of the container
          newButton.style.left = "10px";
          newButton.addEventListener("click", () => {
          scene1.style.backgroundImage = "url('homepage.png')";
          desert.style.display = "none";
          forest.style.display = "none";
          ocean.style.display = "none";
          home.style.display = "none";
        });
        }
        scene1.appendChild(newButton);
      }
    }
  });
});