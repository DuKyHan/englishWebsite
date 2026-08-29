const REVIEW = {
  id: "test39",
  testFile: "test39.html",
  grade: "Grade 7 — Global Success",
  unit: "Unit 2: Healthy Living",
  title: "Knowledge Review — Unit 2, Practice Test 1",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "fit", pos: "adj", ipa: "/fɪt/", meaning: "khỏe mạnh, cân đối", example: "Doing outdoor activities regularly helps us keep fit.", exampleVi: "Thường xuyên tham gia hoạt động ngoài trời giúp chúng ta giữ dáng khỏe mạnh." },
    { word: "sunburn", pos: "n", ipa: "/ˈsʌnbɜːrn/", meaning: "cháy nắng", example: "I forgot to wear a hat and put on suncream to avoid sunburn.", exampleVi: "Tôi quên đội mũ và bôi kem chống nắng để tránh bị cháy nắng." },
    { word: "sore", pos: "adj", ipa: "/sɔːr/", meaning: "đau, khó chịu (một bộ phận cơ thể)", example: "Do you have sore eyes? Why don't you use eyedrops?", exampleVi: "Bạn có bị đau mắt không? Sao bạn không dùng thuốc nhỏ mắt?" },
    { word: "put on weight", pos: "phrase", ipa: "/pʊt ɒn weɪt/", meaning: "tăng cân", example: "Rob eats a lot of fast food and he puts on a lot of weight.", exampleVi: "Rob ăn nhiều đồ ăn nhanh và tăng cân rất nhiều." },
    { word: "reduce", pos: "v", ipa: "/rɪˈdjuːs/", meaning: "giảm bớt", example: "It's necessary for you to reduce the amount of sugar you have in tea and coffee.", exampleVi: "Bạn cần giảm lượng đường trong trà và cà phê." },
    { word: "unhealthy", pos: "adj", ipa: "/ʌnˈhelθi/", meaning: "không lành mạnh, có hại cho sức khỏe", example: "Fast food is very convenient, but eating it too often is unhealthy for our bodies.", exampleVi: "Đồ ăn nhanh rất tiện lợi, nhưng ăn quá thường xuyên thì không tốt cho cơ thể." },
    { word: "strengthen", pos: "v", ipa: "/ˈstreŋθn/", meaning: "làm cho khỏe mạnh hơn", example: "Doing regular exercise helps to strengthen your muscles and keep you fit.", exampleVi: "Tập thể dục thường xuyên giúp làm khỏe cơ bắp và giữ dáng." },
    { word: "consumption", pos: "n", ipa: "/kənˈsʌmpʃn/", meaning: "sự tiêu thụ", example: "The doctor told him to reduce his consumption of fast food and soda.", exampleVi: "Bác sĩ khuyên anh ấy giảm tiêu thụ đồ ăn nhanh và nước ngọt." },
    { word: "tidy", pos: "adj", ipa: "/ˈtaɪdi/", meaning: "gọn gàng, ngăn nắp", example: "My father always keeps his room tidy and clean every weekend.", exampleVi: "Bố tôi luôn giữ phòng gọn gàng và sạch sẽ mỗi cuối tuần." },
    { word: "difficulty", pos: "n", ipa: "/ˈdɪfɪkəlti/", meaning: "khó khăn", example: "The spread of the virus caused a lot of difficulties for the local community.", exampleVi: "Sự lây lan của virus đã gây ra nhiều khó khăn cho cộng đồng địa phương." },
    { word: "nutrition", pos: "n", ipa: "/njuːˈtrɪʃn/", meaning: "dinh dưỡng", example: "A balanced diet is essential for good nutrition.", exampleVi: "Chế độ ăn cân bằng rất cần thiết cho dinh dưỡng tốt." },
    { word: "calorie", pos: "n", ipa: "/ˈkæləri/", meaning: "calo", example: "Junk food contains a lot of calories but very few nutrients.", exampleVi: "Đồ ăn vặt chứa nhiều calo nhưng rất ít chất dinh dưỡng." },
    { word: "nutrient", pos: "n", ipa: "/ˈnjuːtriənt/", meaning: "chất dinh dưỡng", example: "Junk food contains a lot of calories but very few nutrients.", exampleVi: "Đồ ăn vặt chứa nhiều calo nhưng rất ít chất dinh dưỡng." },
    { word: "overweight", pos: "adj", ipa: "/ˌoʊvərˈweɪt/", meaning: "thừa cân", example: "Junk food can increase your risk of becoming overweight or even obese.", exampleVi: "Đồ ăn vặt có thể làm tăng nguy cơ bị thừa cân hoặc thậm chí béo phì." },
    { word: "obese", pos: "adj", ipa: "/oʊˈbiːs/", meaning: "béo phì", example: "Junk food can increase your risk of becoming overweight or even obese.", exampleVi: "Đồ ăn vặt có thể làm tăng nguy cơ bị thừa cân hoặc thậm chí béo phì." },
    { word: "balanced diet", pos: "phrase", ipa: "/ˈbælənst ˈdaɪət/", meaning: "chế độ ăn cân bằng", example: "A balanced diet and enough sleep will help you recover from illness more quickly.", exampleVi: "Chế độ ăn cân bằng và ngủ đủ giấc sẽ giúp bạn hồi phục bệnh nhanh hơn." },
    { word: "skip meals", pos: "phrase", ipa: "/skɪp miːlz/", meaning: "bỏ bữa", example: "You should also try to break bad habits like skipping meals or staying up too late.", exampleVi: "Bạn cũng nên cố gắng từ bỏ những thói quen xấu như bỏ bữa hoặc thức khuya." },
    { word: "recover", pos: "v", ipa: "/rɪˈkʌvər/", meaning: "hồi phục", example: "A balanced diet and enough sleep will help you recover from illness more quickly.", exampleVi: "Chế độ ăn cân bằng và ngủ đủ giấc sẽ giúp bạn hồi phục bệnh nhanh hơn." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'thừa cân':", options: { A: "overweight", B: "fit", C: "tidy", D: "sore" }, correct: "A", explanation: "<b>overweight</b> (adj) = thừa cân." },
      { id: "vp2", prompt: "Choose the word that means 'béo phì':", options: { A: "obese", B: "healthy", C: "active", D: "strong" }, correct: "A", explanation: "<b>obese</b> (adj) = béo phì." },
      { id: "vp3", prompt: "\"Rob eats a lot of fast food and he ______ a lot of weight.\"", options: { A: "puts on", B: "takes off", C: "gets down", D: "brings up" }, correct: "A", explanation: "\"<b>put on</b> weight\" (tăng cân) là cụm động từ cố định." },
      { id: "vp4", prompt: "Choose the word that means 'chất dinh dưỡng':", options: { A: "nutrient", B: "calorie", C: "chemical", D: "vitamin" }, correct: "A", explanation: "<b>nutrient</b> (n) = chất dinh dưỡng." },
      { id: "vp5", prompt: "\"You should also try to break bad habits like ______ meals.\"", options: { A: "skipping", B: "cooking", C: "sharing", D: "ordering" }, correct: "A", explanation: "\"<b>skip</b> meals\" (bỏ bữa) là cụm cố định." },
      { id: "vp6", prompt: "Choose the word that means 'hồi phục':", options: { A: "recover", B: "reduce", C: "remove", D: "repeat" }, correct: "A", explanation: "<b>recover</b> (v) = hồi phục." }
    ],
    fillblank: [
      { id: "vf1", prompt: "I forgot to wear a hat and put on suncream to avoid ______________ (cháy nắng).", accepted: ["sunburn"], correct: "sunburn", explanation: "<b>sunburn</b> (n) = cháy nắng." },
      { id: "vf2", prompt: "Do you have ______________ (đau) eyes? Why don't you use eyedrops?", accepted: ["sore"], correct: "sore", explanation: "<b>sore</b> (adj) = đau, khó chịu." },
      { id: "vf3", prompt: "It's necessary for you to ______________ (giảm bớt) the amount of sugar you have in tea.", accepted: ["reduce"], correct: "reduce", explanation: "<b>reduce</b> (v) = giảm bớt." },
      { id: "vf4", prompt: "My father always keeps his room ______________ (gọn gàng) and clean every weekend.", accepted: ["tidy"], correct: "tidy", explanation: "<b>tidy</b> (adj) = gọn gàng, ngăn nắp." },
      { id: "vf5", prompt: "A ______________ (chế độ ăn cân bằng) and enough sleep will help you recover more quickly.", accepted: ["balanced diet"], correct: "balanced diet", explanation: "<b>balanced diet</b> (phrase) = chế độ ăn cân bằng." },
      { id: "vf6", prompt: "The doctor told him to reduce his ______________ (sự tiêu thụ) of fast food and soda.", accepted: ["consumption"], correct: "consumption", explanation: "<b>consumption</b> (n) = sự tiêu thụ." }
    ],
    matching: {
      left: ["nutrition", "calorie", "recover", "fit", "difficulty", "strengthen"],
      right: ["dinh dưỡng", "calo", "hồi phục", "khỏe mạnh, cân đối", "khó khăn", "làm cho khỏe mạnh hơn"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"Fast food is very convenient, but eating it too often is ______ for our bodies.\" (HEALTH)", options: { A: "health", B: "healthy", C: "unhealthy", D: "healthily" }, correct: "C", explanation: "Cần tính từ mang nghĩa phủ định → health (n) → healthy (adj) → <b>unhealthy</b> (un- + adj)." },
      { id: "cw2", prompt: "\"Doing regular exercise helps to ______ your muscles and keep you fit.\" (STRONG)", options: { A: "strong", B: "strength", C: "strongly", D: "strengthen" }, correct: "D", explanation: "Cần động từ sau \"help to\" → strong (adj) → <b>strengthen</b> (v, +en)." },
      { id: "cw3", prompt: "\"The spread of the virus caused a lot of ______ for the local community.\" (DIFFICULT)", options: { A: "difficult", B: "difficulties", C: "difficultly", D: "difficulting" }, correct: "B", explanation: "Cần danh từ số nhiều sau \"a lot of\" → difficult (adj) → difficulty (n) → <b>difficulties</b>." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'overweight' mean?", options: { A: "gầy gò", B: "thừa cân", C: "khỏe mạnh", D: "năng động" }, correct: "B", explanation: "overweight (adj) = thừa cân." },
      { id: "wm2", prompt: "What does 'skip meals' mean?", options: { A: "ăn nhiều bữa", B: "bỏ bữa", C: "nấu ăn", D: "chia sẻ đồ ăn" }, correct: "B", explanation: "skip meals (phrase) = bỏ bữa." },
      { id: "wm3", prompt: "What does 'recover' mean?", options: { A: "hồi phục", B: "lây lan", C: "phòng ngừa", D: "chẩn đoán" }, correct: "A", explanation: "recover (v) = hồi phục." }
    ],
    wordForm: [
      { id: "wf1", prompt: "Fast food is very convenient, but eating it too often is ______________ (HEALTH) for our bodies.", accepted: ["unhealthy"], correct: "unhealthy", explanation: "health (n) → healthy (adj) → unhealthy (phủ định)." },
      { id: "wf2", prompt: "Doing regular exercise helps to ______________ (STRONG) your muscles and keep you fit.", accepted: ["strengthen"], correct: "strengthen", explanation: "strong (adj) → strengthen (v, +en)." },
      { id: "wf3", prompt: "The doctor told him to reduce his ______________ (CONSUME) of fast food and soda.", accepted: ["consumption"], correct: "consumption", explanation: "consume (v) → consumption (n, +ion)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "S1, so S2 ⇄ Because S1, S2",
      usage: "Câu có \"S1, so S2\" (kết quả) có thể viết lại bằng \"Because + S1, S2\" (nguyên nhân), đổi vị trí liên từ nhưng giữ nguyên quan hệ nhân quả.",
      formulas: [
        "S1 + V, so + S2 + V.  →  Because + S1 + V, + S2 + V.",
        "Ben watches TV too much, so he has a headache. → Because Ben watches TV too much, he has a headache."
      ],
      signals: ["S1, so S2", "Because S1, S2"],
      examples: [
        { en: "Ben watches TV too much, so he has a headache.", vi: "Ben xem TV quá nhiều nên bị đau đầu." },
        { en: "Because Ben watches TV too much, he has a headache.", vi: "Vì Ben xem TV quá nhiều nên cậu ấy bị đau đầu." }
      ],
      mistakes: [
        { wrong: "Because Ben watches TV too much, so he has a headache.", right: "Because Ben watches TV too much, he has a headache. (không dùng cả \"because\" và \"so\" trong cùng một câu)" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "She eats too much junk food, so she feels sick. → ______________ (Because) she eats too much junk food, she feels sick.", accepted: ["because"], correct: "Because", explanation: "S1, so S2 → Because S1, S2." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'He skips breakfast, so he feels tired.' → ______________ (Because) he skips breakfast, he feels tired.", accepted: ["because"], correct: "Because", explanation: "S1, so S2 → Because S1, S2." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'She drinks a lot of water, so her skin looks healthy.' → ______________ (Because she drinks a lot of water, her skin looks healthy).", accepted: ["because she drinks a lot of water, her skin looks healthy"], correct: "Because she drinks a lot of water, her skin looks healthy", explanation: "S1, so S2 → Because S1, S2." }
        ]
      }
    },
    {
      id: "g2", name: "It is not necessary for sb to V ⇄ sb + don't/doesn't need to V",
      usage: "\"It is not necessary for sb to + V\" (không cần thiết để ai làm gì) có thể viết lại bằng \"sb + don't/doesn't need to + V\", giữ nguyên nghĩa không bắt buộc.",
      formulas: [
        "It is not necessary for sb + to V.  →  Sb + don't/doesn't need to + V.",
        "It is not necessary for you to finish the exercise layout now. → You don't need to finish the exercise layout now."
      ],
      signals: ["It is not necessary for sb to V", "don't/doesn't need to V"],
      examples: [
        { en: "It is not necessary for you to finish the exercise layout now.", vi: "Bạn không cần phải hoàn thành bố cục bài tập ngay bây giờ." },
        { en: "You don't need to finish the exercise layout now.", vi: "Bạn không cần hoàn thành bố cục bài tập ngay bây giờ." }
      ],
      mistakes: [
        { wrong: "You don't need finish the exercise.", right: "You don't need to finish the exercise. (\"need\" trong câu phủ định cần \"to V\")" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "It is not necessary for him to buy new shoes. → He doesn't need ______________ (to buy) new shoes.", accepted: ["to buy"], correct: "to buy", explanation: "It is not necessary for sb to V → sb don't/doesn't need to V." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'It is not necessary for us to bring an umbrella.' → We don't need ______________ (to bring) an umbrella.", accepted: ["to bring"], correct: "to bring", explanation: "It is not necessary for sb to V → sb don't/doesn't need to V." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'It is not necessary for Mai to cook dinner tonight.' → ______________ (Mai doesn't need to cook dinner tonight).", accepted: ["mai doesn't need to cook dinner tonight"], correct: "Mai doesn't need to cook dinner tonight", explanation: "It is not necessary for sb to V → sb don't/doesn't need to V." }
        ]
      }
    },
    {
      id: "g3", name: "should + V ⇄ ought to + V",
      usage: "\"S + should + V\" (nên làm gì) có thể viết lại bằng \"S + ought to + V\", giữ nguyên nghĩa khuyên nhủ ở mức độ tương đương.",
      formulas: [
        "S + should + V.  →  S + ought to + V.",
        "Elena should sleep more and try to relax more. → Elena ought to sleep more and try to relax more."
      ],
      signals: ["should + V", "ought to + V"],
      examples: [
        { en: "Elena should sleep more and try to relax more.", vi: "Elena nên ngủ nhiều hơn và cố gắng thư giãn nhiều hơn." },
        { en: "Elena ought to sleep more and try to relax more.", vi: "Elena nên ngủ nhiều hơn và cố gắng thư giãn nhiều hơn." }
      ],
      mistakes: [
        { wrong: "Elena ought sleep more.", right: "Elena ought to sleep more. (\"ought\" luôn theo sau bởi \"to + V\")" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "You should drink more water. → You ought ______________ (to) drink more water.", accepted: ["to"], correct: "to", explanation: "should + V → ought to + V." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'They should eat more vegetables.' → They ought ______________ (to) eat more vegetables.", accepted: ["to"], correct: "to", explanation: "should + V → ought to + V." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'He should see a doctor soon.' → ______________ (He ought to see a doctor soon).", accepted: ["he ought to see a doctor soon"], correct: "He ought to see a doctor soon", explanation: "should + V → ought to + V." }
        ]
      }
    },
    {
      id: "g4", name: "V-ing...is a good way to avoid V-ing ⇄ You can avoid V-ing by V-ing",
      usage: "\"V-ing... is a good way to avoid + V-ing\" (là cách tốt để tránh) có thể viết lại bằng \"You can avoid + V-ing + by + V-ing\", giữ nguyên nghĩa về cách phòng tránh.",
      formulas: [
        "V-ing + is a good way to avoid + V-ing.  →  You can avoid + V-ing + by + V-ing.",
        "Brushing your teeth twice a day is a good way to avoid getting cavities. → You can avoid getting cavities by brushing your teeth twice a day."
      ],
      signals: ["is a good way to avoid + V-ing", "avoid + V-ing + by + V-ing"],
      examples: [
        { en: "Brushing your teeth twice a day is a good way to avoid getting cavities.", vi: "Đánh răng hai lần một ngày là cách tốt để tránh bị sâu răng." },
        { en: "You can avoid getting cavities by brushing your teeth twice a day.", vi: "Bạn có thể tránh bị sâu răng bằng cách đánh răng hai lần một ngày." }
      ],
      mistakes: [
        { wrong: "You can avoid get cavities by brush your teeth.", right: "You can avoid getting cavities by brushing your teeth. (cả hai chỗ đều cần V-ing)" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "Washing your hands often is a good way to avoid getting sick. → You can avoid getting sick by ______________ (washing) your hands often.", accepted: ["washing"], correct: "washing", explanation: "is a good way to avoid V-ing → avoid V-ing by V-ing." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'Wearing a helmet is a good way to avoid head injuries.' → You can avoid head injuries by ______________ (wearing) a helmet.", accepted: ["wearing"], correct: "wearing", explanation: "is a good way to avoid V-ing → avoid V-ing by V-ing." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Eating more vegetables is a good way to avoid getting overweight.' → ______________ (You can avoid getting overweight by eating more vegetables).", accepted: ["you can avoid getting overweight by eating more vegetables"], correct: "You can avoid getting overweight by eating more vegetables", explanation: "is a good way to avoid V-ing → avoid V-ing by V-ing." }
        ]
      }
    },
    {
      id: "g5", name: "(Bonus) risk of + V-ing",
      usage: "Cấu trúc \"risk of + V-ing\" (nguy cơ làm gì / bị gì) dùng để nói về khả năng xảy ra điều không tốt.",
      formulas: [
        "increase/reduce + the risk of + V-ing",
        "Junk food can increase your risk of becoming overweight or even obese."
      ],
      signals: ["risk of + V-ing"],
      examples: [
        { en: "Junk food can increase your risk of becoming overweight or even obese.", vi: "Đồ ăn vặt có thể làm tăng nguy cơ bị thừa cân hoặc thậm chí béo phì." },
        { en: "Regular exercise can reduce your risk of getting sick.", vi: "Tập thể dục thường xuyên có thể giảm nguy cơ bị ốm." }
      ],
      mistakes: [
        { wrong: "the risk to become overweight", right: "the risk of becoming overweight (\"risk of\" theo sau bởi V-ing, không phải \"to V\")" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "Smoking increases the risk of ______________ (getting) lung disease.", accepted: ["getting"], correct: "getting", explanation: "risk of + V-ing." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Rewrite: 'Eating too much sugar increases the risk of (gain) weight.' → Eating too much sugar increases the risk of ______________ (gaining) weight.", accepted: ["gaining"], correct: "gaining", explanation: "risk of + V-ing." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Complete: 'A balanced diet can reduce the risk of ______________ (develop) heart problems.'", accepted: ["developing"], correct: "developing", explanation: "risk of + V-ing." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "Meliha and her children live in St. Paul. She is from Somalia and came to the US five years ago. Many things are different in America. You can buy junk food with lots of salt, sugar, and oil here. Americans don't walk as much as people in Somalia. Instead, you can drive a car or take the bus. Meliha notices that <mark data-w=\"many people in America are overweight\">many people in America are overweight</mark>. Her children like junk food such as hamburgers and French fries, and she does too. She has noticed that <mark data-w=\"she has gained weight since moving to America\">she has gained weight since moving to America</mark>. Her children prefer watching TV rather than playing outside. Meliha doesn't walk very much because she has a car. Her doctor advises her to <mark data-w=\"eat more fruits and vegetables\">eat more fruits and vegetables</mark>. He also says that <mark data-w=\"eating too much junk food like chips, fries, and sugary snacks is bad for her health\">eating too much junk food like chips, fries, and sugary snacks is bad for her health</mark> and that <mark data-w=\"she needs to get more exercise\">she needs to get more exercise</mark>.",
    vocabInContext: {
      "many people in America are overweight": "nhiều người ở Mỹ bị thừa cân",
      "she has gained weight since moving to America": "cô ấy đã tăng cân kể từ khi chuyển đến Mỹ",
      "eat more fruits and vegetables": "ăn nhiều rau củ quả hơn",
      "eating too much junk food like chips, fries, and sugary snacks is bad for her health": "ăn quá nhiều đồ ăn vặt như khoai tây chiên, snack ngọt có hại cho sức khỏe của cô ấy",
      "she needs to get more exercise": "cô ấy cần tập thể dục nhiều hơn"
    },
    translation: "<b>MELIHA VÀ CUỘC SỐNG MỚI Ở MỸ</b><br><br>Meliha và các con sống ở St. Paul. Cô đến từ Somalia và chuyển đến Mỹ năm năm trước. Nhiều thứ khác biệt ở Mỹ. Ở đây bạn có thể mua đồ ăn vặt với nhiều muối, đường và dầu mỡ. Người Mỹ không đi bộ nhiều như người Somalia. Thay vào đó, bạn có thể lái xe hơi hoặc đi xe buýt. Meliha nhận thấy rằng nhiều người ở Mỹ bị thừa cân. Các con của cô thích đồ ăn vặt như hamburger và khoai tây chiên, và cô cũng vậy. Cô nhận ra rằng mình đã tăng cân kể từ khi chuyển đến Mỹ. Các con cô thích xem TV hơn là chơi bên ngoài. Meliha không đi bộ nhiều vì cô có xe hơi. Bác sĩ khuyên cô nên ăn nhiều rau củ quả hơn. Ông cũng nói rằng ăn quá nhiều đồ ăn vặt như khoai tây chiên, snack ngọt có hại cho sức khỏe của cô và cô cần tập thể dục nhiều hơn.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Meliha moved to the US from Somalia five years ago.", correct: "True", explanation: "Đúng. Bài đọc: \"She is from Somalia and came to the US five years ago.\"" },
      { id: "r2", type: "truefalse", prompt: "Meliha's children love playing outside more than watching TV.", correct: "False", explanation: "Sai. Bài đọc: \"Her children prefer watching TV rather than playing outside.\"" },
      { id: "r3", type: "truefalse", prompt: "Meliha walks a lot every day to stay healthy.", correct: "False", explanation: "Sai. Bài đọc: \"Meliha doesn't walk very much because she has a car.\"" },
      { id: "r4", type: "truefalse", prompt: "The doctor tells Meliha that she should eat more fruits and vegetables.", correct: "True", explanation: "Đúng. Bài đọc: \"Her doctor advises her to eat more fruits and vegetables.\"" },
      { id: "r5", type: "mcq", prompt: "What kind of food do Meliha and her children like?", options: { A: "Junk food like hamburgers and French fries", B: "Fresh fruits and vegetables", C: "Healthy food from Somalia", D: "Fish and chips" }, correct: "A", explanation: "Bài đọc: \"Her children like junk food such as hamburgers and French fries, and she does too.\"" },
      { id: "r6", type: "mcq", prompt: "Why has Meliha gained weight since moving to America?", options: { A: "Because she eats a lot of junk food and does not walk much.", B: "Because she only eats traditional food from Somalia.", C: "Because she plays sports outside with her children every day.", D: "Because she follows her doctor's advice perfectly." }, correct: "A", explanation: "Bài đọc: \"she does too... has gained weight... doesn't walk very much because she has a car.\"" },
      { id: "r7", type: "fillblank", prompt: "Find the phrase in the passage that means 'lối sống không lành mạnh phổ biến ở Mỹ' (gợi ý: liên quan đến cân nặng).", accepted: ["many people in america are overweight"], correct: "many people in America are overweight", explanation: "\"Meliha notices that many people in America are overweight.\"" },
      { id: "r8", type: "mcq", prompt: "According to the passage, what does Meliha's doctor say about junk food?", options: { A: "It is bad for her health.", B: "It is good in small amounts.", C: "It has no effect on health.", D: "It is cheaper than fresh food." }, correct: "A", explanation: "Bài đọc: \"eating too much junk food... is bad for her health.\"" },
      { id: "r9", type: "truefalse", prompt: "The passage says Meliha's doctor is satisfied with her current lifestyle.", correct: "False", explanation: "Sai. Bác sĩ khuyên cô ăn nhiều rau củ quả hơn và tập thể dục nhiều hơn, nghĩa là chưa hài lòng với lối sống hiện tại." }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "Meliha and her children live in St. Paul.", suggested: "Meliha và các con sống ở St. Paul.", notes: "Câu đơn giản với động từ \"live\" (sống ở đâu)." },
    { id: "t2", en: "Meliha notices that many people in America are overweight.", suggested: "Meliha nhận thấy rằng nhiều người ở Mỹ bị thừa cân.", notes: "\"notice that + mệnh đề\" (nhận thấy rằng)." },
    { id: "t3", en: "She has noticed that she has gained weight since moving to America.", suggested: "Cô nhận ra rằng mình đã tăng cân kể từ khi chuyển đến Mỹ.", notes: "\"since + V-ing\" (kể từ khi làm gì)." },
    { id: "t4", en: "Her doctor advises her to eat more fruits and vegetables.", suggested: "Bác sĩ khuyên cô nên ăn nhiều rau củ quả hơn.", notes: "\"advise sb to V\" (khuyên ai làm gì)." },
    { id: "t5", en: "She needs to get more exercise.", suggested: "Cô cần tập thể dục nhiều hơn.", notes: "\"need to V\" (cần làm gì)." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "S1, so S2 ⇄ Because S1, S2",
      formula: "S1 + V, so + S2 + V.  →  Because + S1 + V, + S2 + V.",
      example: { before: "Ben watches TV too much, so he has a headache.", after: "Because Ben watches TV too much, he has a headache." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "She eats too much junk food, so she feels sick. → ______________ (Because) she eats too much junk food, she feels sick.", accepted: ["because"], correct: "Because", explanation: "S1, so S2 → Because S1, S2." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'He skips breakfast, so he feels tired.' → ______________ (Because) he skips breakfast, he feels tired.", accepted: ["because"], correct: "Because", explanation: "S1, so S2 → Because S1, S2." }
      ]
    },
    {
      id: "tr2", name: "It is not necessary for sb to V ⇄ sb + don't/doesn't need to V",
      formula: "It is not necessary for sb + to V.  →  Sb + don't/doesn't need to + V.",
      example: { before: "It is not necessary for you to finish the exercise layout now.", after: "You don't need to finish the exercise layout now." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "It is not necessary for him to buy new shoes. → He doesn't need ______________ (to buy) new shoes.", accepted: ["to buy"], correct: "to buy", explanation: "It is not necessary for sb to V → sb don't/doesn't need to V." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'It is not necessary for us to bring an umbrella.' → We don't need ______________ (to bring) an umbrella.", accepted: ["to bring"], correct: "to bring", explanation: "It is not necessary for sb to V → sb don't/doesn't need to V." }
      ]
    },
    {
      id: "tr3", name: "should + V ⇄ ought to + V",
      formula: "S + should + V.  →  S + ought to + V.",
      example: { before: "Elena should sleep more and try to relax more.", after: "Elena ought to sleep more and try to relax more." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "You should drink more water. → You ought ______________ (to) drink more water.", accepted: ["to"], correct: "to", explanation: "should + V → ought to + V." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'They should eat more vegetables.' → They ought ______________ (to) eat more vegetables.", accepted: ["to"], correct: "to", explanation: "should + V → ought to + V." }
      ]
    },
    {
      id: "tr4", name: "V-ing...is a good way to avoid V-ing ⇄ You can avoid V-ing by V-ing",
      formula: "V-ing + is a good way to avoid + V-ing.  →  You can avoid + V-ing + by + V-ing.",
      example: { before: "Brushing your teeth twice a day is a good way to avoid getting cavities.", after: "You can avoid getting cavities by brushing your teeth twice a day." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "Washing your hands often is a good way to avoid getting sick. → You can avoid getting sick by ______________ (washing) your hands often.", accepted: ["washing"], correct: "washing", explanation: "is a good way to avoid V-ing → avoid V-ing by V-ing." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'Wearing a helmet is a good way to avoid head injuries.' → You can avoid head injuries by ______________ (wearing) a helmet.", accepted: ["wearing"], correct: "wearing", explanation: "is a good way to avoid V-ing → avoid V-ing by V-ing." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Overweight' means:", options: { A: "thừa cân", B: "gầy gò", C: "khỏe mạnh", D: "năng động" }, correct: "A", explanation: "overweight (adj) = thừa cân." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Recover' means:", options: { A: "hồi phục", B: "lây lan", C: "phòng ngừa", D: "chẩn đoán" }, correct: "A", explanation: "recover (v) = hồi phục." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "I forgot to wear a hat and put on suncream to avoid ______________ (cháy nắng).", accepted: ["sunburn"], correct: "sunburn", explanation: "sunburn (n) = cháy nắng." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "Ben watches TV too much, so he has a headache. → ______ Ben watches TV too much, he has a headache.", options: { A: "Because", B: "Although", C: "Unless", D: "Since (thời gian)" }, correct: "A", explanation: "S1, so S2 → Because S1, S2." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "It is not necessary for you to finish now. → You don't ______ to finish now.", options: { A: "need", B: "have", C: "must", D: "should" }, correct: "A", explanation: "It is not necessary for sb to V → sb don't/doesn't need to V." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "Elena should sleep more. → Elena ought ______________ (to) sleep more.", accepted: ["to"], correct: "to", explanation: "should + V → ought to + V." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "Brushing your teeth is a good way to avoid cavities. → You can avoid cavities ______________ (by) brushing your teeth.", accepted: ["by"], correct: "by", explanation: "avoid V-ing by V-ing." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "Meliha's children love playing outside more than watching TV.", correct: "False", explanation: "Sai theo bài đọc — các con của Meliha thích xem TV hơn." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "The doctor tells Meliha that she should eat more fruits and vegetables.", correct: "True", explanation: "Đúng theo bài đọc." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "Why has Meliha gained weight since moving to America?", options: { A: "Because she eats a lot of junk food and does not walk much.", B: "Because she only eats traditional food from Somalia.", C: "Because she plays sports outside every day.", D: "Because she follows her doctor's advice perfectly." }, correct: "A", explanation: "Bài đọc nêu rõ nguyên nhân tăng cân." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "Fast food is very convenient, but eating it too often is ______________ (HEALTH) for our bodies.", accepted: ["unhealthy"], correct: "unhealthy", explanation: "health (n) → healthy (adj) → unhealthy." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "Doing regular exercise helps to ______________ (STRONG) your muscles and keep you fit.", accepted: ["strengthen"], correct: "strengthen", explanation: "strong (adj) → strengthen (v, +en)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "The doctor told him to reduce his ______________ (CONSUME) of fast food and soda.", accepted: ["consumption"], correct: "consumption", explanation: "consume (v) → consumption (n, +ion)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'bỏ bữa'?", options: { A: "skip meals", B: "cook meals", C: "share meals", D: "order meals" }, correct: "A", explanation: "skip meals (phrase) = bỏ bữa." }
  ]
};
