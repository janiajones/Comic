document.addEventListener("DOMContentLoaded", () => {
  const mermaid = document.getElementById("mermaid");
  const shark = document.getElementById("shark");
  const mermaidContainer = document.getElementById("mermaid-container");
  const sharkContainer = document.getElementById("shark-container");

  const travellerTop = document.getElementById("traveller-top");
  const travellerBottom = document.getElementById("traveller-bottom");

  const mermaidSpeechBubble = document.querySelector("#mermaid-container .speech-bubble");
  const sharkSpeechBubble = document.querySelector("#shark-container .speech-bubble");
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
  const travellerDialogue = [
    "This world is unlike anything I’ve ever seen...",
    "I have no clue, a book? Are you real, or just a dream?"
  ];

  let mermaidIndex = 0, sharkIndex = 0, travellerIndex = 0;

  mermaid.addEventListener("click", () => {
    mermaidIndex = (mermaidIndex + 1) % mermaidDialogue.length;
    mermaidSpeechBubble.textContent = mermaidDialogue[mermaidIndex];
  });

  shark.addEventListener("click", () => {
    sharkIndex = (sharkIndex + 1) % sharkDialogue.length;
    sharkSpeechBubble.textContent = sharkDialogue[sharkIndex];
  });

  function travellerToggle() {
    travellerIndex = (travellerIndex + 1) % travellerDialogue.length;
    travellerSpeechBubbleTop.textContent = travellerDialogue[travellerIndex];
    travellerSpeechBubbleBottom.textContent = travellerDialogue[travellerIndex];
  }
  travellerTop.addEventListener("click", travellerToggle);
  travellerBottom.addEventListener("click", travellerToggle);

  // --- Movement Logic for Mermaid and Shark ---
  // Reverse the starting positions and directions:
  // Mermaid now starts from the right and moves left.
  let mermaidX = window.innerWidth - mermaid.clientWidth;
  let mermaidDirection = -1; // moving left

  // Shark now starts from the left and moves right.
  let sharkX = 0;
  let sharkDirection = 1; // moving right

  const speed = 2; // pixels per frame

  function moveMermaid() {
    mermaidX += mermaidDirection * speed;

    // When moving left and hit left edge:
    if (mermaidDirection === -1 && mermaidX <= 0) {
      mermaidDirection = 1; // reverse to right
      mermaid.style.transform = "scaleX(1)"; // flip to face right
    }
    // When moving right and hit right edge:
    else if (mermaidDirection === 1 && mermaidX >= window.innerWidth - mermaid.clientWidth) {
      mermaidDirection = -1; // reverse to left
      mermaid.style.transform = "scaleX(-1)"; // flip to face left
    }

    mermaidContainer.style.left = mermaidX + "px";
    requestAnimationFrame(moveMermaid);
  }

  function moveShark() {
    sharkX += sharkDirection * speed;

    // When moving right and hit right edge:
    if (sharkDirection === 1 && sharkX >= window.innerWidth - shark.clientWidth) {
      sharkDirection = -1; // reverse to left
      shark.style.transform = "scaleX(-1)"; // flip to face left
    }
    // When moving left and hit left edge:
    else if (sharkDirection === -1 && sharkX <= 0) {
      sharkDirection = 1; // reverse to right
      shark.style.transform = "scaleX(1)"; // flip to face right
    }

    sharkContainer.style.left = sharkX + "px";
    requestAnimationFrame(moveShark);
  }

  moveMermaid();
  moveShark();
});
