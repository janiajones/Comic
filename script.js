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

  // Mermaid & Shark Movement Logic
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
});
