document.addEventListener("DOMContentLoaded", () => {
  const mermaid = document.getElementById("mermaid");
  const shark = document.getElementById("shark");
  const mermaidSpeechBubble = document.querySelector("#mermaid-container .speech-bubble");
  const sharkSpeechBubble = document.querySelector("#shark-container .speech-bubble");

  let mermaidDialogueIndex = 0;
  let sharkDialogueIndex = 0;

  const mermaidDialogue = [
    "You are not from these waters. What brings you to the deep, land-dweller?",
    "We are as real as the waves that kiss your shores. But beware, not all deep-sea mysteries welcome strangers so kindly."
  ];

  const sharkDialogue = [
    "You do not belong here, outsider.",
    "The ocean is not for the timid. Tread carefully, or you may find yourself lost in its depths."
  ];

  // Change speech bubble text when mermaid is clicked
  mermaid.addEventListener("click", () => {
    mermaidDialogueIndex = (mermaidDialogueIndex + 1) % mermaidDialogue.length;
    mermaidSpeechBubble.textContent = mermaidDialogue[mermaidDialogueIndex];
  });

  // Change speech bubble text when shark is clicked
  shark.addEventListener("click", () => {
    sharkDialogueIndex = (sharkDialogueIndex + 1) % sharkDialogue.length;
    sharkSpeechBubble.textContent = sharkDialogue[sharkDialogueIndex];
  });
});
