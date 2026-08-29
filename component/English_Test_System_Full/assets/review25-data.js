const REVIEW = {
  id: "test25",
  testFile: "test25.html",
  grade: "Grade 6 — Global Success",
  unit: "Unit 1: My new school",
  title: "Knowledge Review — Unit 1, Practice Test 1",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "excited", pos: "adj", ipa: "/ɪkˈsaɪtɪd/", meaning: "phấn khích, hào hứng", example: "We are very excited about it. It's so fun!", exampleVi: "Chúng tôi rất phấn khích về điều đó. Thật vui!" },
    { word: "author", pos: "n", ipa: "/ˈɔːθər/", meaning: "tác giả", example: "Who is the author of this history book?", exampleVi: "Ai là tác giả của cuốn sách lịch sử này?" },
    { word: "subject", pos: "n", ipa: "/ˈsʌbdʒɪkt/", meaning: "môn học", example: "Mathematics is my favorite subject at school.", exampleVi: "Toán học là môn học yêu thích của tôi ở trường." },
    { word: "break time", pos: "n phr", ipa: "/breɪk taɪm/", meaning: "giờ giải lao", example: "We only have time for a snack at break time.", exampleVi: "Chúng tôi chỉ có thời gian ăn nhẹ vào giờ giải lao." },
    { word: "keep quiet", pos: "v phr", ipa: "/kiːp ˈkwaɪət/", meaning: "giữ yên lặng", example: "This notice tells you to keep quiet in the library.", exampleVi: "Tấm biển này yêu cầu bạn giữ yên lặng trong thư viện." },
    { word: "lead to", pos: "phr v", ipa: "/liːd tuː/", meaning: "dẫn đến", example: "Missing classes can lead to problems during our exams.", exampleVi: "Nghỉ học có thể dẫn đến những vấn đề trong kỳ thi." },
    { word: "consistent", pos: "adj", ipa: "/kənˈsɪstənt/", meaning: "kiên định, nhất quán", example: "Schools teach us to be consistent, punctual, and obedient.", exampleVi: "Trường học dạy chúng ta cách kiên định, đúng giờ và ngoan ngoãn." },
    { word: "punctual", pos: "adj", ipa: "/ˈpʌŋktʃuəl/", meaning: "đúng giờ", example: "Schools teach us to be consistent, punctual, and obedient.", exampleVi: "Trường học dạy chúng ta cách kiên định, đúng giờ và ngoan ngoãn." },
    { word: "obedient", pos: "adj", ipa: "/əˈbiːdiənt/", meaning: "ngoan ngoãn, biết vâng lời", example: "Schools teach us to be consistent, punctual, and obedient.", exampleVi: "Trường học dạy chúng ta cách kiên định, đúng giờ và ngoan ngoãn." },
    { word: "treat ... with respect", pos: "v phr", ipa: "/triːt wɪð rɪˈspekt/", meaning: "đối xử với ai đó bằng sự tôn trọng", example: "We can treat our elders with respect.", exampleVi: "Chúng ta có thể đối xử với người lớn tuổi bằng sự tôn trọng." },
    { word: "decorate", pos: "v", ipa: "/ˈdekəreɪt/", meaning: "trang trí", example: "The teacher is decorating the walls with beautiful posters.", exampleVi: "Cô giáo đang trang trí các bức tường bằng những tấm áp phích đẹp." },
    { word: "colorful", pos: "adj", ipa: "/ˈkʌlərfl/", meaning: "nhiều màu sắc", example: "My pencil case is very colorful with many patterns.", exampleVi: "Hộp bút của tôi rất nhiều màu sắc với nhiều họa tiết." },
    { word: "device", pos: "n", ipa: "/dɪˈvaɪs/", meaning: "thiết bị", example: "There are many modern devices in our new classroom.", exampleVi: "Có rất nhiều thiết bị hiện đại trong lớp học mới của chúng tôi." },
    { word: "calculator", pos: "n", ipa: "/ˈkælkjuleɪtər/", meaning: "máy tính cầm tay", example: "We need a calculator to do these difficult math exercises.", exampleVi: "Chúng tôi cần một chiếc máy tính cầm tay để làm các bài toán khó này." },
    { word: "best-selling", pos: "adj", ipa: "/best ˈselɪŋ/", meaning: "bán chạy nhất", example: "He is the best-selling author of several thrillers.", exampleVi: "Ông ấy là tác giả bán chạy nhất của nhiều cuốn tiểu thuyết trinh thám." },
    { word: "public school", pos: "n phr", ipa: "/ˈpʌblɪk skuːl/", meaning: "trường công lập", example: "Mai goes to a public school called Nguyen Du Secondary School.", exampleVi: "Mai học ở một trường công lập tên là Trường THCS Nguyễn Du." },
    { word: "pencil case", pos: "n phr", ipa: "/ˈpensl keɪs/", meaning: "hộp bút", example: "My pencil case is on my desk. It's colorful.", exampleVi: "Hộp bút của tôi ở trên bàn. Nó rất nhiều màu sắc." },
    { word: "gym", pos: "n", ipa: "/dʒɪm/", meaning: "phòng/nhà tập thể dục", example: "We like our school because there are playgrounds and a big gym.", exampleVi: "Chúng tôi thích trường mình vì có sân chơi và một nhà tập thể dục lớn." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'tác giả':", options: { A: "author", B: "subject", C: "device", D: "calculator" }, correct: "A", explanation: "<b>author</b> (n) = tác giả." },
      { id: "vp2", prompt: "Choose the phrase that means 'giờ giải lao':", options: { A: "break time", B: "gym time", C: "lunch time", D: "free time" }, correct: "A", explanation: "<b>break time</b> (n phr) = giờ giải lao." },
      { id: "vp3", prompt: "\"Missing classes can ______ to problems during exams.\"", options: { A: "lead", B: "cause", C: "bring", D: "take" }, correct: "A", explanation: "\"<b>lead</b> to\" (dẫn đến) là cụm cố định khớp với câu này." },
      { id: "vp4", prompt: "Choose the word that means 'đúng giờ':", options: { A: "punctual", B: "obedient", C: "consistent", D: "excited" }, correct: "A", explanation: "<b>punctual</b> (adj) = đúng giờ." },
      { id: "vp5", prompt: "\"The teacher is decorating the walls with beautiful posters.\" — 'decorating' means:", options: { A: "đang trang trí", B: "đang dọn dẹp", C: "đang sơn", D: "đang treo" }, correct: "A", explanation: "<b>decorate</b> (v) = trang trí." },
      { id: "vp6", prompt: "Choose the phrase that means 'bán chạy nhất':", options: { A: "best-selling", B: "best-known", C: "best-loved", D: "best-selled" }, correct: "A", explanation: "<b>best-selling</b> (adj) = bán chạy nhất." }
    ],
    fillblank: [
      { id: "vf1", prompt: "Schools teach us to be consistent, ______________ (đúng giờ), and obedient.", accepted: ["punctual"], correct: "punctual", explanation: "<b>punctual</b> (adj) = đúng giờ." },
      { id: "vf2", prompt: "We must treat our elders with ______________ (sự tôn trọng).", accepted: ["respect"], correct: "respect", explanation: "\"treat ... with respect\" (v phr) = đối xử bằng sự tôn trọng." },
      { id: "vf3", prompt: "J.K. Rowling is a very famous ______________ (tác giả).", accepted: ["author"], correct: "author", explanation: "<b>author</b> (n) = tác giả." },
      { id: "vf4", prompt: "My pencil case is very ______________ (nhiều màu sắc) with many patterns.", accepted: ["colorful", "colourful"], correct: "colorful", explanation: "<b>colorful</b> (adj) = nhiều màu sắc." },
      { id: "vf5", prompt: "We need a ______________ (máy tính cầm tay) to do difficult math exercises.", accepted: ["calculator"], correct: "calculator", explanation: "<b>calculator</b> (n) = máy tính cầm tay." },
      { id: "vf6", prompt: "Mathematics is my favorite ______________ (môn học) at school.", accepted: ["subject"], correct: "subject", explanation: "<b>subject</b> (n) = môn học." }
    ],
    matching: {
      left: ["author", "punctual", "obedient", "consistent", "device", "calculator"],
      right: ["tác giả", "đúng giờ", "ngoan ngoãn, biết vâng lời", "kiên định, nhất quán", "thiết bị", "máy tính cầm tay"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"The children look very ______ during the school trip.\" (EXCITE)", options: { A: "excite", B: "excited", C: "exciting", D: "excitement" }, correct: "B", explanation: "Cần tính từ mô tả cảm xúc của trẻ em → excite (v) → <b>excited</b> (adj, +ed)." },
      { id: "cw2", prompt: "\"My pencil case is very ______ with many patterns.\" (COLOR)", options: { A: "color", B: "colored", C: "colorful", D: "colory" }, correct: "C", explanation: "Cần tính từ chỉ đặc điểm → color (n) → <b>colorful</b> (adj, +ful)." },
      { id: "cw3", prompt: "\"The teacher is ______ the walls with beautiful posters.\" (DECORATE)", options: { A: "decorate", B: "decoration", C: "decorative", D: "decorating" }, correct: "D", explanation: "Cấu trúc \"is + V-ing\" (hiện tại tiếp diễn) → decorate (v) → <b>decorating</b> (V-ing)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'obedient' mean?", options: { A: "ngoan ngoãn, biết vâng lời", B: "thông minh", C: "chăm chỉ", D: "trung thực" }, correct: "A", explanation: "obedient (adj) = ngoan ngoãn, biết vâng lời." },
      { id: "wm2", prompt: "What does 'consistent' mean?", options: { A: "vui vẻ", B: "kiên định, nhất quán", C: "tự tin", D: "sáng tạo" }, correct: "B", explanation: "consistent (adj) = kiên định, nhất quán." },
      { id: "wm3", prompt: "What does 'punctual' mean?", options: { A: "đúng giờ", B: "chậm trễ", C: "lười biếng", D: "cẩn thận" }, correct: "A", explanation: "punctual (adj) = đúng giờ." }
    ],
    wordForm: [
      { id: "wf1", prompt: "There are many modern ______________ (DEVICE) in our new classroom.", accepted: ["devices"], correct: "devices", explanation: "device (n) → devices (n, số nhiều)." },
      { id: "wf2", prompt: "We need a ______________ (CALCULATE) to do these difficult math exercises.", accepted: ["calculator"], correct: "calculator", explanation: "calculate (v) → calculator (n, +or)." },
      { id: "wf3", prompt: "The children look very ______________ (EXCITE) during the school trip.", accepted: ["excited"], correct: "excited", explanation: "excite (v) → excited (adj, +ed)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "There are + số lượng + N + in + nơi chốn ⇄ Nơi chốn + has/have + số lượng + N",
      usage: "Khi muốn nói một nơi chốn có bao nhiêu người/vật, ta có thể dùng \"There is/are\" hoặc chuyển nơi chốn lên làm chủ ngữ với động từ \"have/has\" — hai cách diễn đạt có nghĩa tương đương.",
      formulas: [
        "There are + số lượng + N1 + and + số lượng + N2 + in + nơi chốn.  →  Nơi chốn + has + số lượng + N1 + and + số lượng + N2.",
        "There are 150 students and 10 teachers in my school. → My school has 150 students and 10 teachers."
      ],
      signals: ["There are + N + in + nơi chốn", "Nơi chốn + has/have + N"],
      examples: [
        { en: "There are 150 students and 10 teachers in my school.", vi: "Có 150 học sinh và 10 giáo viên trong trường tôi." },
        { en: "My school has 150 students and 10 teachers.", vi: "Trường tôi có 150 học sinh và 10 giáo viên." }
      ],
      mistakes: [
        { wrong: "My school has 150 students and 10 teachers in it.", right: "My school has 150 students and 10 teachers. (không lặp lại \"in it\" sau khi đã chuyển nơi chốn lên làm chủ ngữ)" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "There are two libraries and one gym in our school. → Our school ______________ (has) two libraries and one gym.", accepted: ["has"], correct: "has", explanation: "There are + N + in + nơi chốn → Nơi chốn + has + N." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'There are 30 desks and 30 chairs in the classroom.' → The classroom ______________ (has) 30 desks and 30 chairs.", accepted: ["has"], correct: "has", explanation: "There are + N + in + nơi chốn → Nơi chốn + has + N." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'There are five computers and one printer in the school library.' → ______________ (The school library has five computers and one printer).", accepted: ["the school library has five computers and one printer"], correct: "The school library has five computers and one printer", explanation: "There are + N + in + nơi chốn → Nơi chốn + has + N." }
        ]
      }
    },
    {
      id: "g2", name: "S + V + well ⇄ S + be + good at + V-ing",
      usage: "\"S + V + well\" (làm gì đó giỏi/tốt) có nghĩa tương đương với \"S + be + good at + V-ing\" (giỏi về việc gì).",
      formulas: [
        "S + V + very well.  →  S + be + good at + V-ing.",
        "Mary plays the piano very well. → Mary is good at playing the piano."
      ],
      signals: ["V + well", "be good at + V-ing"],
      examples: [
        { en: "Mary plays the piano very well.", vi: "Mary chơi piano rất giỏi." },
        { en: "Mary is good at playing the piano.", vi: "Mary giỏi chơi piano." }
      ],
      mistakes: [
        { wrong: "Mary is good at play the piano.", right: "Mary is good at playing the piano. (sau giới từ \"at\" phải dùng V-ing)" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "He sings very well. → He is good at ______________ (singing).", accepted: ["singing"], correct: "singing", explanation: "V + well → be good at + V-ing." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'She draws pictures very well.' → She is good at ______________ (drawing) pictures.", accepted: ["drawing"], correct: "drawing", explanation: "V + well → be good at + V-ing." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'My brother plays football very well.' → ______________ (My brother is good at playing football).", accepted: ["my brother is good at playing football"], correct: "My brother is good at playing football", explanation: "V + well → be good at + V-ing." }
        ]
      }
    },
    {
      id: "g3", name: "My favorite + Ns + are + X and Y ⇄ I like + X and Y + best",
      usage: "\"My favorite + Ns + are + X and Y\" (X và Y là những... yêu thích nhất) có nghĩa tương đương với \"I like + X and Y + best\" (tôi thích X và Y nhất).",
      formulas: [
        "My favorite + Ns + are + X and Y.  →  I like + X and Y + best.",
        "My favorite subjects are Vietnamese and Maths. → I like Vietnamese and Maths best."
      ],
      signals: ["My favorite + Ns + are", "I like + ... + best"],
      examples: [
        { en: "My favorite subjects are Vietnamese and Maths.", vi: "Môn học yêu thích của tôi là Tiếng Việt và Toán." },
        { en: "I like Vietnamese and Maths best.", vi: "Tôi thích Tiếng Việt và Toán nhất." }
      ],
      mistakes: [
        { wrong: "I like best Vietnamese and Maths.", right: "I like Vietnamese and Maths best. (\"best\" đứng cuối câu, sau tân ngữ)" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "My favorite colors are blue and green. → I like ______________ (blue and green) best.", accepted: ["blue and green"], correct: "blue and green", explanation: "My favorite + Ns + are + X and Y → I like + X and Y + best." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'My favorite sports are football and swimming.' → I like ______________ (football and swimming) best.", accepted: ["football and swimming"], correct: "football and swimming", explanation: "My favorite + Ns + are + X and Y → I like + X and Y + best." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'My favorite animals are cats and dogs.' → ______________ (I like cats and dogs best).", accepted: ["i like cats and dogs best"], correct: "I like cats and dogs best", explanation: "My favorite + Ns + are + X and Y → I like + X and Y + best." }
        ]
      }
    },
    {
      id: "g4", name: "Don't forget to + V ⇄ Remember to + V",
      usage: "\"Don't forget to + V\" (đừng quên làm gì) có nghĩa tương đương với \"Remember to + V\" (hãy nhớ làm gì) — cả hai đều là lời nhắc nhở ai đó làm một việc trong tương lai.",
      formulas: [
        "Don't forget to + V.  →  Remember to + V.",
        "Don't forget to bring your raincoat today. → Remember to bring your raincoat today."
      ],
      signals: ["Don't forget to + V", "Remember to + V"],
      examples: [
        { en: "Don't forget to bring your raincoat today.", vi: "Đừng quên mang áo mưa hôm nay." },
        { en: "Remember to bring your raincoat today.", vi: "Hãy nhớ mang áo mưa hôm nay." }
      ],
      mistakes: [
        { wrong: "Remember bringing your raincoat today.", right: "Remember to bring your raincoat today. (\"remember to + V\" = nhớ để làm gì đó trong tương lai, khác với \"remember + V-ing\" = nhớ đã làm gì trong quá khứ)" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "Don't forget to do your homework tonight. → ______________ (Remember) to do your homework tonight.", accepted: ["remember"], correct: "Remember", explanation: "Don't forget to + V → Remember to + V." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'Don't forget to close the door.' → ______________ (Remember) to close the door.", accepted: ["remember"], correct: "Remember", explanation: "Don't forget to + V → Remember to + V." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Don't forget to feed the cat before you leave.' → ______________ (Remember to feed the cat before you leave).", accepted: ["remember to feed the cat before you leave"], correct: "Remember to feed the cat before you leave", explanation: "Don't forget to + V → Remember to + V." }
        ]
      }
    },
    {
      id: "g5", name: "Tính từ đuôi -ed (cảm giác của người) ⇄ Tính từ đuôi -ing (đặc điểm của sự vật/sự việc)",
      usage: "Nhiều tính từ có hai dạng bắt nguồn từ cùng một động từ: dạng \"-ed\" mô tả <b>cảm giác của người</b>, còn dạng \"-ing\" mô tả <b>đặc điểm của sự vật/sự việc gây ra cảm giác đó</b>. Ví dụ: \"excited\" (người cảm thấy phấn khích) khác với \"exciting\" (sự việc khiến người ta phấn khích).",
      formulas: [
        "S (người) + be + adj-ed.  ⇄  N (sự vật/sự việc) + be + adj-ing.",
        "We are excited about the school festival. ⇄ The school festival is exciting."
      ],
      signals: ["-ed → cảm giác của người", "-ing → đặc điểm của sự vật/sự việc"],
      examples: [
        { en: "We are very excited about the school festival.", vi: "Chúng tôi rất phấn khích về ngày hội trường." },
        { en: "The school festival is very exciting.", vi: "Ngày hội trường rất thú vị (khiến người ta phấn khích)." }
      ],
      mistakes: [
        { wrong: "I am very exciting about the trip.", right: "I am very excited about the trip. (\"I\" là người có cảm giác nên phải dùng \"-ed\", không dùng \"-ing\")" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "This new video game is very ______________ (EXCITE — miêu tả bản thân trò chơi).", accepted: ["exciting"], correct: "exciting", explanation: "Miêu tả đặc điểm của trò chơi (sự vật) → dùng dạng <b>-ing</b>." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "After hearing the good news, she felt extremely ______________ (EXCITE — miêu tả cảm xúc của cô ấy).", accepted: ["excited"], correct: "excited", explanation: "Miêu tả cảm giác của người (she) → dùng dạng <b>-ed</b>." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The trip made us feel very excited.' → ______________ (The trip was very exciting).", accepted: ["the trip was very exciting"], correct: "The trip was very exciting", explanation: "Chuyển từ mô tả cảm giác của người (excited) sang mô tả đặc điểm của sự việc (exciting)." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "Hello, my name is Mai. I am 11 years old. I go to a <mark data-w=\"public school\">public school</mark> called Nguyen Du Secondary School. I am in grade 6. In our class there are 27 students, 15 girls and 12 boys. My classroom is big and nice. Our teacher is Miss Thuy. She likes <mark data-w=\"decorating the walls\">decorating the walls</mark> of the class with posters and maps. In our class there is a computer and a blackboard. My desk and my chair are brown. My <mark data-w=\"pencil case\">pencil case</mark> is on my desk. It's colorful. I have lots of things in my pencil case: a pencil sharpener, two pencils, a rubber, three paper clips and a purple pen. I go to school <mark data-w=\"by bicycle\">by bicycle</mark> with my friends. We like our school because there are playgrounds, a <mark data-w=\"big gym\">big gym</mark> and a fantastic music room with many instruments.",
    vocabInContext: {
      "public school": "trường công lập",
      "decorating the walls": "trang trí các bức tường",
      "pencil case": "hộp bút",
      "by bicycle": "bằng xe đạp",
      "big gym": "nhà tập thể dục lớn"
    },
    translation: "<b>NGÔI TRƯỜNG CỦA MAI</b><br><br>Xin chào, tên tôi là Mai. Tôi 11 tuổi. Tôi học ở một trường công lập tên là Trường THCS Nguyễn Du. Tôi học lớp 6. Lớp tôi có 27 học sinh, gồm 15 bạn nữ và 12 bạn nam. Lớp học của tôi to và đẹp. Cô giáo của tôi là cô Thủy. Cô thích trang trí các bức tường của lớp bằng áp phích và bản đồ. Trong lớp có một máy tính và một bảng đen. Bàn và ghế của tôi màu nâu. Hộp bút của tôi ở trên bàn. Nó rất nhiều màu sắc. Tôi có rất nhiều thứ trong hộp bút: một cái gọt bút chì, hai cây bút chì, một cục tẩy, ba cái kẹp giấy và một cây bút màu tím. Tôi đi học bằng xe đạp cùng các bạn. Chúng tôi thích trường mình vì có sân chơi, một nhà tập thể dục lớn và một phòng nhạc tuyệt vời với nhiều loại nhạc cụ.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Mai is a student at Nguyen Du Secondary School.", correct: "True", explanation: "Đúng. Bài đọc: \"I go to a public school called Nguyen Du Secondary School.\"" },
      { id: "r2", type: "truefalse", prompt: "There are more boys than girls in Mai's class.", correct: "False", explanation: "Sai. Bài đọc: lớp có 15 bạn gái và 12 bạn trai — số bạn gái nhiều hơn." },
      { id: "r3", type: "truefalse", prompt: "Miss Thuy puts maps and posters on the classroom walls.", correct: "True", explanation: "Đúng. Bài đọc: \"She likes decorating the walls of the class with posters and maps.\"" },
      { id: "r4", type: "truefalse", prompt: "Mai travels to school by bus every day.", correct: "False", explanation: "Sai. Bài đọc: \"I go to school by bicycle with my friends.\"" },
      { id: "r5", type: "mcq", prompt: "What color is the pen in Mai's pencil case?", options: { A: "Brown", B: "Purple", C: "Pink", D: "Colorful" }, correct: "B", explanation: "Bài đọc: \"...three paper clips and a purple pen.\"" },
      { id: "r6", type: "mcq", prompt: "Why do Mai and her friends like their school?", options: { A: "Because the classroom has a computer.", B: "Because their teacher is very nice.", C: "Because it has playgrounds, a gym, and a music room.", D: "Because the school is near their houses." }, correct: "C", explanation: "Bài đọc: \"We like our school because there are playgrounds, a big gym and a fantastic music room...\"" },
      { id: "r7", type: "fillblank", prompt: "Find the word in the passage that means 'trang trí'.", accepted: ["decorating"], correct: "decorating", explanation: "\"She likes decorating the walls...\" — decorating = đang trang trí." },
      { id: "r8", type: "mcq", prompt: "How many students are there in Mai's class?", options: { A: "25", B: "27", C: "30", D: "32" }, correct: "B", explanation: "Bài đọc: \"there are 27 students, 15 girls and 12 boys.\"" },
      { id: "r9", type: "truefalse", prompt: "According to the passage, Mai's classroom has a computer and a blackboard.", correct: "True", explanation: "Đúng. Bài đọc: \"In our class there is a computer and a blackboard.\"" }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "I go to a public school called Nguyen Du Secondary School.", suggested: "Tôi học ở một trường công lập tên là Trường THCS Nguyễn Du.", notes: "\"a school called + tên riêng\" (một ngôi trường tên là...) là cách giới thiệu tên trường phổ biến." },
    { id: "t2", en: "She likes decorating the walls of the class with posters and maps.", suggested: "Cô ấy thích trang trí các bức tường của lớp bằng áp phích và bản đồ.", notes: "\"decorate + N + with + N\" (trang trí cái gì bằng cái gì) là cấu trúc cố định." },
    { id: "t3", en: "I have lots of things in my pencil case.", suggested: "Tôi có rất nhiều thứ trong hộp bút của mình.", notes: "\"lots of\" = \"a lot of\" (rất nhiều), dùng được với cả danh từ đếm được và không đếm được." },
    { id: "t4", en: "I go to school by bicycle with my friends.", suggested: "Tôi đi học bằng xe đạp cùng các bạn.", notes: "\"by + phương tiện\" (bằng phương tiện gì) diễn tả cách di chuyển." },
    { id: "t5", en: "We like our school because there are playgrounds, a big gym and a fantastic music room.", suggested: "Chúng tôi thích trường mình vì có sân chơi, một nhà tập thể dục lớn và một phòng nhạc tuyệt vời.", notes: "\"because + mệnh đề\" (bởi vì) dùng để nêu lý do." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "There are + N + in + nơi chốn ⇄ Nơi chốn + has/have + N",
      formula: "There are + số lượng + N + in + nơi chốn  →  Nơi chốn + has/have + số lượng + N",
      example: { before: "There are 150 students and 10 teachers in my school.", after: "My school has 150 students and 10 teachers." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "There are two libraries and one gym in our school. → Our school ______________ (has) two libraries and one gym.", accepted: ["has"], correct: "has", explanation: "There are + N + in + nơi chốn → Nơi chốn + has + N." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'There are 30 desks and 30 chairs in the classroom.' → The classroom ______________ (has) 30 desks and 30 chairs.", accepted: ["has"], correct: "has", explanation: "There are + N + in + nơi chốn → Nơi chốn + has + N." }
      ]
    },
    {
      id: "tr2", name: "V + well ⇄ be good at + V-ing",
      formula: "S + V + very well  →  S + be + good at + V-ing",
      example: { before: "Mary plays the piano very well.", after: "Mary is good at playing the piano." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "He sings very well. → He is good at ______________ (singing).", accepted: ["singing"], correct: "singing", explanation: "V + well → be good at + V-ing." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'She draws pictures very well.' → She is good at ______________ (drawing) pictures.", accepted: ["drawing"], correct: "drawing", explanation: "V + well → be good at + V-ing." }
      ]
    },
    {
      id: "tr3", name: "My favorite + Ns + are + X and Y ⇄ I like + X and Y + best",
      formula: "My favorite + Ns + are + X and Y  →  I like + X and Y + best",
      example: { before: "My favorite subjects are Vietnamese and Maths.", after: "I like Vietnamese and Maths best." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "My favorite colors are blue and green. → I like ______________ (blue and green) best.", accepted: ["blue and green"], correct: "blue and green", explanation: "My favorite + Ns + are + X and Y → I like + X and Y + best." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'My favorite sports are football and swimming.' → I like ______________ (football and swimming) best.", accepted: ["football and swimming"], correct: "football and swimming", explanation: "My favorite + Ns + are + X and Y → I like + X and Y + best." }
      ]
    },
    {
      id: "tr4", name: "Don't forget to + V ⇄ Remember to + V",
      formula: "Don't forget to + V  →  Remember to + V",
      example: { before: "Don't forget to bring your raincoat today.", after: "Remember to bring your raincoat today." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "Don't forget to do your homework tonight. → ______________ (Remember) to do your homework tonight.", accepted: ["remember"], correct: "Remember", explanation: "Don't forget to + V → Remember to + V." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'Don't forget to close the door.' → ______________ (Remember) to close the door.", accepted: ["remember"], correct: "Remember", explanation: "Don't forget to + V → Remember to + V." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Author' means:", options: { A: "tác giả", B: "học sinh", C: "giáo viên", D: "hiệu trưởng" }, correct: "A", explanation: "author (n) = tác giả." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Punctual' means:", options: { A: "đúng giờ", B: "chậm trễ", C: "vui vẻ", D: "buồn bã" }, correct: "A", explanation: "punctual (adj) = đúng giờ." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "We need a ______________ (máy tính cầm tay) to do difficult exercises.", accepted: ["calculator"], correct: "calculator", explanation: "calculator (n) = máy tính cầm tay." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "There are 150 students in my school. → My school ______ 150 students.", options: { A: "has", B: "have", C: "is", D: "are" }, correct: "A", explanation: "There are + N + in + nơi chốn → Nơi chốn + has + N." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "Mary plays the piano very well. → Mary is good ______ playing the piano.", options: { A: "in", B: "at", C: "on", D: "for" }, correct: "B", explanation: "be good at + V-ing (giỏi về việc gì)." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "My favorite subjects are Vietnamese and Maths. → I like Vietnamese and Maths ______________ (best).", accepted: ["best"], correct: "best", explanation: "My favorite + Ns + are + X and Y → I like + X and Y + best." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "Don't forget to bring your raincoat today. → ______________ (Remember) to bring your raincoat today.", accepted: ["remember"], correct: "Remember", explanation: "Don't forget to + V → Remember to + V." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "Mai is a student at Nguyen Du Secondary School.", correct: "True", explanation: "Đúng theo bài đọc." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "Mai travels to school by bus every day.", correct: "False", explanation: "Sai. Mai đi học bằng xe đạp." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "Why do Mai and her friends like their school?", options: { A: "Because the classroom has a computer.", B: "Because their teacher is very nice.", C: "Because it has playgrounds, a gym, and a music room.", D: "Because the school is near their houses." }, correct: "C", explanation: "Bài đọc nêu lý do là có sân chơi, nhà tập thể dục và phòng nhạc." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "The children look very ______________ (EXCITE) during the school trip.", accepted: ["excited"], correct: "excited", explanation: "excite (v) → excited (adj, +ed)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "My pencil case is very ______________ (COLOR) with many patterns.", accepted: ["colorful", "colourful"], correct: "colorful", explanation: "color (n) → colorful (adj, +ful)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "The teacher is ______________ (DECORATE) the walls with beautiful posters.", accepted: ["decorating"], correct: "decorating", explanation: "decorate (v) → decorating (V-ing, hiện tại tiếp diễn)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'ngoan ngoãn, biết vâng lời'?", options: { A: "obedient", B: "consistent", C: "punctual", D: "creative" }, correct: "A", explanation: "obedient (adj) = ngoan ngoãn, biết vâng lời." }
  ]
};
