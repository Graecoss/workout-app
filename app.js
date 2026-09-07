const workout = [

  // CARDIO — 5 MIN

  {
    section: "Cardio",
    name: "Sauts sur place",
    duration: 60,
    icon: "🏃",
    instruction: "Petits rebonds souples"
  },

  {
    section: "Cardio",
    name: "10 squats",
    duration: 30,
    icon: "🧎",
    instruction: "Fais 10 squats, puis reprends de petits sauts"
  },

  {
    section: "Cardio",
    name: "Sauts sur place",
    duration: 50,
    icon: "🏃",
    instruction: "Garde un rythme régulier"
  },

  {
    section: "Cardio",
    name: "Talons-fesses",
    duration: 30,
    icon: "🏃",
    instruction: "Monte les talons vers les fesses"
  },

  {
    section: "Cardio",
    name: "Sauts sur place",
    duration: 50,
    icon: "🏃",
    instruction: "Respire régulièrement"
  },

  {
    section: "Cardio",
    name: "Montées de genoux",
    duration: 30,
    icon: "🏃",
    instruction: "Monte les genoux sans forcer sur le dos"
  },

  {
    section: "Cardio",
    name: "Sauts sur place",
    duration: 50,
    icon: "🏃",
    instruction: "Dernière série de sauts"
  },

  // TRANSITION

  {
    section: "Transition",
    name: "Prépare-toi pour les pompes",
    duration: 5,
    icon: "👇",
    instruction: "Mets-toi en position"
  },

  // CIRCUIT HAUT DU CORPS — SERIE 1

  {
    section: "Circuit haut du corps",
    name: "Pompes",
    duration: 30,
    icon: "🤸",
    instruction: "Objectif : environ 10 répétitions",
    circuit: true
  },

  {
    section: "Transition",
    name: "Prépare les crunches",
    duration: 5,
    icon: "5️⃣",
    instruction: "Allonge-toi sur le dos",
    circuit: true
  },

  {
    section: "Circuit haut du corps",
    name: "Crunches",
    duration: 30,
    icon: "🧍",
    instruction: "Objectif : environ 10 répétitions",
    circuit: true
  },

  {
    section: "Transition",
    name: "Prépare le développé couché",
    duration: 5,
    icon: "5️⃣",
    instruction: "Prends les haltères",
    circuit: true
  },

  {
    section: "Circuit haut du corps",
    name: "Développé couché",
    duration: 30,
    icon: "🏋️",
    instruction: "Objectif : environ 10 répétitions",
    circuit: true
  },

  {
    section: "Transition",
    name: "Prépare le rowing",
    duration: 5,
    icon: "5️⃣",
    instruction: "Relève-toi et place-toi",
    circuit: true
  },

  {
    section: "Circuit haut du corps",
    name: "Rowing penché",
    duration: 30,
    icon: "🏋️‍♂️",
    instruction: "Dos droit, tire les haltères vers le nombril",
    circuit: true
  },

  {
    section: "Transition",
    name: "Prépare le développé militaire",
    duration: 5,
    icon: "5️⃣",
    instruction: "Redresse-toi",
    circuit: true
  },

  {
    section: "Circuit haut du corps",
    name: "Développé militaire",
    duration: 30,
    icon: "🙆",
    instruction: "Pousse les haltères au-dessus de la tête",
    circuit: true
  },

  // PAUSE

  {
    section: "Repos",
    name: "Pause",
    duration: 60,
    icon: "💧",
    instruction: "Récupère. Deuxième série juste après.",
    circuit: true
  },

  // SERIE 2

  {
    section: "Circuit haut du corps",
    name: "Pompes",
    duration: 30,
    icon: "🤸",
    instruction: "Deuxième série",
    circuit: true
  },

  {
    section: "Transition",
    name: "Prépare les crunches",
    duration: 5,
    icon: "5️⃣",
    instruction: "Allonge-toi sur le dos",
    circuit: true
  },

  {
    section: "Circuit haut du corps",
    name: "Crunches",
    duration: 30,
    icon: "🧍",
    instruction: "Deuxième série",
    circuit: true
  },

  {
    section: "Transition",
    name: "Prépare le développé couché",
    duration: 5,
    icon: "5️⃣",
    instruction: "Prends les haltères",
    circuit: true
  },

  {
    section: "Circuit haut du corps",
    name: "Développé couché",
    duration: 30,
    icon: "🏋️",
    instruction: "Deuxième série",
    circuit: true
  },

  {
    section: "Transition",
    name: "Prépare le rowing",
    duration: 5,
    icon: "5️⃣",
    instruction: "Relève-toi",
    circuit: true
  },

  {
    section: "Circuit haut du corps",
    name: "Rowing penché",
    duration: 30,
    icon: "🏋️‍♂️",
    instruction: "Deuxième série",
    circuit: true
  },

  {
    section: "Transition",
    name: "Prépare le développé militaire",
    duration: 5,
    icon: "5️⃣",
    instruction: "Redresse-toi",
    circuit: true
  },

  {
    section: "Circuit haut du corps",
    name: "Développé militaire",
    duration: 30,
    icon: "🙆",
    instruction: "Deuxième série",
    circuit: true
  },

  // TRANSITION GAINAGE

  {
    section: "Transition",
    name: "Prépare-toi pour la planche",
    duration: 5,
    icon: "👇",
    instruction: "Pose les haltères"
  },

  // GAINAGE

  {
    section: "Gainage",
    name: "Planche classique",
    duration: 30,
    icon: "🧍",
    instruction: "Corps aligné"
  },

  {
    section: "Gainage",
    name: "Planche latérale gauche",
    duration: 30,
    icon: "↙️",
    instruction: "Bassin relevé"
  },

  {
    section: "Gainage",
    name: "Planche latérale droite",
    duration: 30,
    icon: "↘️",
    instruction: "Bassin relevé"
  },

  {
    section: "Gainage",
    name: "Planche classique",
    duration: 30,
    icon: "🧍",
    instruction: "Deuxième tour"
  },

  {
    section: "Gainage",
    name: "Planche latérale gauche",
    duration: 30,
    icon: "↙️",
    instruction: "Deuxième tour"
  },

  {
    section: "Gainage",
    name: "Planche latérale droite",
    duration: 30,
    icon: "↘️",
    instruction: "Deuxième tour"
  },

  // TRANSITION ETIREMENTS

  {
    section: "Transition",
    name: "Prépare les étirements",
    duration: 5,
    icon: "🧘",
    instruction: "Respire calmement"
  },

  // ETIREMENTS

  {
    section: "Étirements",
    name: "Quadriceps gauche",
    duration: 45,
    icon: "🦵",
    instruction: "Couché sur le côté"
  },

  {
    section: "Étirements",
    name: "Quadriceps droit",
    duration: 45,
    icon: "🦵",
    instruction: "Couché sur le côté"
  },

  {
    section: "Étirements",
    name: "Papillon",
    duration: 60,
    icon: "🦋",
    instruction: "Plantes des pieds l'une contre l'autre"
  },

  {
    section: "Étirements",
    name: "Posture de l'enfant",
    duration: 30,
    icon: "🧘",
    instruction: "Bras loin devant, dos relâché"
  },

  // TRANSITION KEGELS

  {
    section: "Transition",
    name: "Prépare-toi pour les Kegels",
    duration: 5,
    icon: "👇",
    instruction: "Allonge-toi sur le dos"
  },

  // KEGELS LENTS

  ...Array.from({ length: 10 }, (_, i) => [
    {
      section: "Kegels",
      name: "Contracte",
      duration: 5,
      icon: "🔴",
      instruction: `Contraction lente ${i + 1}/10`
    },
    {
      section: "Kegels",
      name: "Relâche",
      duration: 5,
      icon: "🟢",
      instruction: `Relâchement ${i + 1}/10`
    }
  ]).flat(),

  // KEGELS RAPIDES

  ...Array.from({ length: 10 }, (_, i) => [
    {
      section: "Kegels rapides",
      name: "Contracte",
      duration: 1,
      icon: "🔴",
      instruction: `Rapide ${i + 1}/10`
    },
    {
      section: "Kegels rapides",
      name: "Relâche",
      duration: 1,
      icon: "🟢",
      instruction: `Rapide ${i + 1}/10`
    }
  ]).flat()
];

const globalTimer = document.getElementById("globalTimer");
const exerciseTimer = document.getElementById("exerciseTimer");
const sectionName = document.getElementById("sectionName");
const exerciseName = document.getElementById("exerciseName");
const illustration = document.getElementById("illustration");
const instruction = document.getElementById("instruction");
const nextExercise = document.getElementById("nextExercise");

const startPauseBtn = document.getElementById("startPauseBtn");
const restartBtn = document.getElementById("restartBtn");

const circuitPanel = document.getElementById("circuitPanel");
const circuitRemaining = document.getElementById("circuitRemaining");

let currentIndex = 0;
let remainingExerciseTime = workout[0].duration;
let interval = null;
let running = false;

const totalWorkoutTime = workout.reduce(
  (sum, exercise) => sum + exercise.duration,
  0
);

let totalRemaining = totalWorkoutTime;

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

function beep(frequency = 700, duration = 120) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const ctx = new AudioContext();

    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();

    oscillator.connect(gain);
    gain.connect(ctx.destination);

    oscillator.frequency.value = frequency;
    oscillator.start();

    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(
      0.001,
      ctx.currentTime + duration / 1000
    );

    oscillator.stop(ctx.currentTime + duration / 1000);
  } catch (e) {
    console.log("Audio indisponible");
  }
}

function getCircuitRemaining() {
  let seconds = 0;

  for (let i = currentIndex; i < workout.length; i++) {
    if (workout[i].circuit) {
      seconds += i === currentIndex
        ? remainingExerciseTime
        : workout[i].duration;
    } else if (seconds > 0) {
      break;
    }
  }

  return seconds;
}

function updateCircuitHighlight() {
  document.querySelectorAll(".circuit-item").forEach(item => {
    item.classList.remove("active");
  });

  const current = workout[currentIndex];

  if (!current) return;

  const item = document.querySelector(
    `.circuit-item[data-exercise="${current.name}"]`
  );

  if (item) {
    item.classList.add("active");
  }
}

function updateDisplay() {
  const current = workout[currentIndex];

  if (!current) return;

  globalTimer.textContent = formatTime(totalRemaining);
  exerciseTimer.textContent = formatTime(remainingExerciseTime);

  sectionName.textContent = current.section;
  exerciseName.textContent = current.name;
  illustration.textContent = current.icon;
  instruction.textContent = current.instruction;

  const next = workout[currentIndex + 1];

  nextExercise.textContent = next
    ? `Ensuite : ${next.name}`
    : "Dernier exercice";

  document.body.classList.remove("transition", "rest", "finished");

  if (current.section === "Transition") {
    document.body.classList.add("transition");
  }

  if (current.section === "Repos") {
    document.body.classList.add("rest");
  }

  if (current.circuit) {
    circuitPanel.classList.remove("hidden");
    circuitRemaining.textContent =
      `${formatTime(getCircuitRemaining())} restantes`;
  } else {
    circuitPanel.classList.add("hidden");
  }

  updateCircuitHighlight();
}

function nextStep() {
  currentIndex++;

  if (currentIndex >= workout.length) {
    finishWorkout();
    return;
  }

  remainingExerciseTime = workout[currentIndex].duration;

  beep(900, 150);

  updateDisplay();
}

function tick() {
  if (!running) return;

  remainingExerciseTime--;
  totalRemaining--;

  if (remainingExerciseTime <= 0) {
    nextStep();
  }

  updateDisplay();
}

function startPause() {
  if (!running) {
    running = true;
    startPauseBtn.textContent = "Pause";

    if (!interval) {
      interval = setInterval(tick, 1000);
    }

    beep(600, 100);

  } else {
    running = false;
    startPauseBtn.textContent = "Reprendre";
  }
}

function restartWorkout() {
  clearInterval(interval);

  interval = null;
  running = false;

  currentIndex = 0;
  remainingExerciseTime = workout[0].duration;
  totalRemaining = totalWorkoutTime;

  startPauseBtn.textContent = "Démarrer";

  updateDisplay();
}

function finishWorkout() {
  running = false;

  clearInterval(interval);
  interval = null;

  globalTimer.textContent = "0:00";
  exerciseTimer.textContent = "✓";

  sectionName.textContent = "Terminé";
  exerciseName.textContent = "Séance terminée";
  illustration.textContent = "🏆";
  instruction.textContent = "20 minutes terminées";
  nextExercise.textContent = "";

  circuitPanel.classList.add("hidden");

  startPauseBtn.textContent = "Recommencer";

  document.body.classList.add("finished");

  beep(1200, 500);
}

startPauseBtn.addEventListener("click", () => {
  if (currentIndex >= workout.length) {
    restartWorkout();
    return;
  }

  startPause();
});

restartBtn.addEventListener("click", restartWorkout);

updateDisplay();