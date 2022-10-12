var hadith = [
  `There are two words which are light on the tongue, heavy on the scale, and loved by the Most Merciful: SubhanAllahi wa
   bihamdi, SubhanAllahi al-azeem (Glorified is Allah and praised is He, Glorified is Allah the Most Great).`,
  `Beware of suspicion for it is the most untruthful type of speech.`,
  `No fatigue, illness, worry, sorrow, harm, grief, or even the prick of a thorn afflicts a Muslim except that Allah expiates
   some of his sins by it.`,
  `The fire is surrounded by [unlawful] desires and paradise by difficulties.`,
  `Allah is more joyous with the repentance of one of you than you are when you find your lost animal.`,
  `The five daily prayers, one Friday prayer to the next, and one Ramadan to the next are an expiation for whatever happened between them 
  as long as the major sins are avoided.`,
  `That I say: SubhanAllah, Alhamdulillah, La ilaaha illa Allah, and Allahu Akbar is more beloved to me than
   everything the sun rises on.`,
   `Whoever sent one prayer on me, Allah will send ten prayers on him.`,
   `Allah does not look at your faces and wealth but He looks at your hearts and deeds.`,
   `Whoever takes a path in pursuit of knowledge, Allah will make easy for him the path to paradise.`,
   `The world is a prison for the believer and a paradise for the disbeliever.`
];

function addFun() {
  var addHadith = Math.floor(Math.random() * hadith.length);
  document.getElementById("theHadith").innerText = hadith[addHadith];
}
