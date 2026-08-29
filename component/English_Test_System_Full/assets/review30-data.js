const REVIEW = {
  id: "test30",
  testFile: "test30.html",
  grade: "Grade 6 — Global Success",
  unit: "Unit 3: My friends",
  title: "Knowledge Review — Unit 3, Practice Test 2",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "suitable", pos: "adj", ipa: "/ˈsuːtəbl/", meaning: "phù hợp", example: "Is this summer camp suitable for my 8-year-old brother?", exampleVi: "Trại hè này có phù hợp với em trai 8 tuổi của tôi không?" },
    { word: "aged", pos: "adj", ipa: "/eɪdʒd/", meaning: "có độ tuổi là", example: "The summer camp is only for students aged between 10 and 15.", exampleVi: "Trại hè này chỉ dành cho học sinh có độ tuổi từ 10 đến 15." },
    { word: "hard-working", pos: "adj", ipa: "/hɑːrd ˈwɜːrkɪŋ/", meaning: "chăm chỉ", example: "Lan is always hard-working. She studies more than four hours a day.", exampleVi: "Lan luôn chăm chỉ. Cô ấy học hơn bốn giờ mỗi ngày." },
    { word: "kind", pos: "adj", ipa: "/kaɪnd/", meaning: "tốt bụng", example: "Kaity is really kind. She always enjoys helping other people.", exampleVi: "Kaity thực sự tốt bụng. Cô ấy luôn thích giúp đỡ người khác." },
    { word: "confident", pos: "adj", ipa: "/ˈkɑːnfɪdənt/", meaning: "tự tin", example: "I'm confident. I have studied very hard all week.", exampleVi: "Tôi tự tin. Tôi đã học rất chăm chỉ cả tuần." },
    { word: "sporty", pos: "adj", ipa: "/ˈspɔːrti/", meaning: "có tinh thần thể thao", example: "My best friend is very sporty, so he plays basketball and football every afternoon.", exampleVi: "Bạn thân của tôi rất thích thể thao, nên cậu ấy chơi bóng rổ và bóng đá mỗi buổi chiều." },
    { word: "camp", pos: "n", ipa: "/kæmp/", meaning: "trại (hè)", example: "Wickedly Wonderful is a very popular summer camp in the UK for children.", exampleVi: "Wickedly Wonderful là một trại hè rất nổi tiếng ở Anh dành cho trẻ em." },
    { word: "activities", pos: "n", ipa: "/ækˈtɪvətiz/", meaning: "các hoạt động", example: "The children love doing outdoor activities on the beach like surfing and riding bikes.", exampleVi: "Trẻ em rất thích các hoạt động ngoài trời trên bãi biển như lướt sóng và đạp xe." },
    { word: "generous", pos: "adj", ipa: "/ˈdʒenərəs/", meaning: "hào phóng", example: "Robert is fifteen and he's very funny and generous.", exampleVi: "Robert mười lăm tuổi và cậu ấy rất vui tính và hào phóng." },
    { word: "retired", pos: "adj", ipa: "/rɪˈtaɪərd/", meaning: "đã nghỉ hưu", example: "Anna's grandparents are old and retired.", exampleVi: "Ông bà của Anna đã già và đã nghỉ hưu." },
    { word: "gardening", pos: "n", ipa: "/ˈɡɑːrdnɪŋ/", meaning: "làm vườn", example: "Anna's grandparents love gardening and doing morning exercise.", exampleVi: "Ông bà của Anna thích làm vườn và tập thể dục buổi sáng." },
    { word: "secondary school", pos: "n", ipa: "/ˈsekənderi skuːl/", meaning: "trường trung học cơ sở", example: "Anna's mother teaches Art in a secondary school.", exampleVi: "Mẹ của Anna dạy môn Mỹ thuật ở một trường trung học cơ sở." },
    { word: "youngest", pos: "adj", ipa: "/ˈjʌŋɡɪst/", meaning: "nhỏ tuổi nhất", example: "I'm ten and I'm the youngest in my family.", exampleVi: "Tôi mười tuổi và là người nhỏ tuổi nhất trong gia đình." },
    { word: "pond", pos: "n", ipa: "/pɒnd/", meaning: "ao", example: "The house also has a big garden and a large pond behind it.", exampleVi: "Ngôi nhà còn có một khu vườn lớn và một cái ao lớn phía sau." },
    { word: "dairy", pos: "adj", ipa: "/ˈderi/", meaning: "(thuộc) sữa", example: "Tomorrow, our class will go on a field trip to visit a dairy farm.", exampleVi: "Ngày mai, lớp chúng tôi sẽ đi tham quan một nông trại sữa." },
    { word: "idea", pos: "n", ipa: "/aɪˈdɪə/", meaning: "ý tưởng", example: "If you don't know what to cook for dinner, I have a good idea.", exampleVi: "Nếu bạn không biết nấu gì cho bữa tối, tôi có một ý tưởng hay." },
    { word: "instrument", pos: "n", ipa: "/ˈɪnstrəmənt/", meaning: "nhạc cụ", example: "Robert plays the guitar and he is learning to play the piano, but I don't play any instruments.", exampleVi: "Robert chơi guitar và đang học chơi piano, nhưng tôi không chơi nhạc cụ nào cả." },
    { word: "treasure hunt", pos: "n", ipa: "/ˈtreʒər hʌnt/", meaning: "trò săn tìm kho báu", example: "We are going to visit a milk farm and do a treasure hunt in the field tomorrow.", exampleVi: "Ngày mai chúng tôi sẽ đi tham quan nông trại sữa và chơi trò săn tìm kho báu ở cánh đồng." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'chăm chỉ':", options: { A: "hard-working", B: "confident", C: "generous", D: "retired" }, correct: "A", explanation: "<b>hard-working</b> (adj) = chăm chỉ." },
      { id: "vp2", prompt: "Choose the word that means 'tốt bụng':", options: { A: "kind", B: "sporty", C: "aged", D: "suitable" }, correct: "A", explanation: "<b>kind</b> (adj) = tốt bụng." },
      { id: "vp3", prompt: "\"I'm ______. I have studied very hard all week.\"", options: { A: "confident", B: "retired", C: "generous", D: "aged" }, correct: "A", explanation: "\"<b>confident</b>\" (tự tin) khớp với việc đã học chăm chỉ cả tuần." },
      { id: "vp4", prompt: "Choose the word that means 'hào phóng':", options: { A: "generous", B: "sporty", C: "kind", D: "youngest" }, correct: "A", explanation: "<b>generous</b> (adj) = hào phóng." },
      { id: "vp5", prompt: "\"My best friend is very ______, so he plays basketball and football every afternoon.\"", options: { A: "sporty", B: "retired", C: "aged", D: "dairy" }, correct: "A", explanation: "\"<b>sporty</b>\" (có tinh thần thể thao) khớp với việc chơi nhiều môn thể thao." },
      { id: "vp6", prompt: "Choose the word that means 'nhỏ tuổi nhất':", options: { A: "youngest", B: "confident", C: "suitable", D: "kind" }, correct: "A", explanation: "<b>youngest</b> (adj) = nhỏ tuổi nhất." }
    ],
    fillblank: [
      { id: "vf1", prompt: "The summer camp is only for students ______________ (có độ tuổi là) between 10 and 15.", accepted: ["aged"], correct: "aged", explanation: "<b>aged</b> (adj) = có độ tuổi là." },
      { id: "vf2", prompt: "Anna's grandparents are old and ______________ (đã nghỉ hưu).", accepted: ["retired"], correct: "retired", explanation: "<b>retired</b> (adj) = đã nghỉ hưu." },
      { id: "vf3", prompt: "The children love doing outdoor ______________ (các hoạt động) on the beach.", accepted: ["activities"], correct: "activities", explanation: "<b>activities</b> (n) = các hoạt động." },
      { id: "vf4", prompt: "The house also has a big garden and a large ______________ (ao) behind it.", accepted: ["pond"], correct: "pond", explanation: "<b>pond</b> (n) = ao." },
      { id: "vf5", prompt: "Our class will visit a ______________ (thuộc sữa) farm tomorrow.", accepted: ["dairy"], correct: "dairy", explanation: "<b>dairy</b> (adj) = thuộc về sữa." },
      { id: "vf6", prompt: "Is this summer camp ______________ (phù hợp) for my 8-year-old brother?", accepted: ["suitable"], correct: "suitable", explanation: "<b>suitable</b> (adj) = phù hợp." }
    ],
    matching: {
      left: ["generous", "gardening", "secondary school", "instrument", "treasure hunt", "idea"],
      right: ["hào phóng", "làm vườn", "trường trung học cơ sở", "nhạc cụ", "trò săn tìm kho báu", "ý tưởng"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"My best friend is very ______, so he plays sports every afternoon.\" (SPORT)", options: { A: "sport", B: "sports", C: "sporty", D: "sporting" }, correct: "C", explanation: "Cần tính từ sau \"very\" → sport (n) → <b>sporty</b> (adj, +y)." },
      { id: "cw2", prompt: "\"Lan is a ______ student who always does her homework carefully.\" (HARD)", options: { A: "hard", B: "hardly", C: "hard-working", D: "harder" }, correct: "C", explanation: "Cần tính từ ghép trước \"student\" → hard → <b>hard-working</b> (adj)." },
      { id: "cw3", prompt: "\"The students answered all the questions ______.\" (CONFIDENT)", options: { A: "confident", B: "confidence", C: "confidently", D: "unconfident" }, correct: "C", explanation: "Cần trạng từ bổ nghĩa cho động từ \"answered\" → confident (adj) → <b>confidently</b> (adv, +ly)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'suitable' mean?", options: { A: "phù hợp", B: "nguy hiểm", C: "hào phóng", D: "chán nản" }, correct: "A", explanation: "suitable (adj) = phù hợp." },
      { id: "wm2", prompt: "What does 'retired' mean?", options: { A: "đang đi làm", B: "đã nghỉ hưu", C: "còn trẻ", D: "bị sa thải" }, correct: "B", explanation: "retired (adj) = đã nghỉ hưu." },
      { id: "wm3", prompt: "What does 'treasure hunt' mean?", options: { A: "cuộc thi nấu ăn", B: "buổi cắm trại", C: "trò săn tìm kho báu", D: "buổi dã ngoại" }, correct: "C", explanation: "treasure hunt (n) = trò săn tìm kho báu." }
    ],
    wordForm: [
      { id: "wf1", prompt: "The children love doing outdoor ______________ (ACTIVE) on the beach.", accepted: ["activities"], correct: "activities", explanation: "active (adj) → activity (n) → activities (số nhiều)." },
      { id: "wf2", prompt: "My best friend is very ______________ (SPORT), so he plays sports every afternoon.", accepted: ["sporty"], correct: "sporty", explanation: "sport (n) → sporty (adj, +y)." },
      { id: "wf3", prompt: "The students answered all the questions ______________ (CONFIDENT).", accepted: ["confidently"], correct: "confidently", explanation: "confident (adj) → confidently (adv, +ly)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "like + V-ing ⇄ be fond of + V-ing",
      usage: "\"like + V-ing\" (thích làm gì) có nghĩa tương đương với \"be fond of + V-ing\" (yêu thích làm gì), một cách diễn đạt trang trọng hơn.",
      formulas: [
        "S + likes + V-ing.  →  S + is/are fond of + V-ing.",
        "My best friend likes playing football after school. → My best friend is fond of playing football after school."
      ],
      signals: ["like + V-ing", "be fond of + V-ing"],
      examples: [
        { en: "My best friend likes playing football after school.", vi: "Bạn thân của tôi thích chơi bóng đá sau giờ học." },
        { en: "My best friend is fond of playing football after school.", vi: "Bạn thân của tôi yêu thích việc chơi bóng đá sau giờ học." }
      ],
      mistakes: [
        { wrong: "My best friend is fond to play football.", right: "My best friend is fond of playing football. (\"be fond of\" đi với giới từ \"of\" + V-ing, không dùng \"to + V\")" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "I like reading comic books. → I am fond ______________ (of) reading comic books.", accepted: ["of"], correct: "of", explanation: "like V-ing → be fond of V-ing." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'She likes singing English songs.' → She is fond ______________ (of) singing English songs.", accepted: ["of"], correct: "of", explanation: "like V-ing → be fond of V-ing." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'They like playing video games.' → ______________ (They are fond of playing video games).", accepted: ["they are fond of playing video games"], correct: "They are fond of playing video games", explanation: "like V-ing → be fond of V-ing." }
        ]
      }
    },
    {
      id: "g2", name: "S + has + N1 (adj + hair) and N2 ⇄ S's hair is + adj, and S + has + N2",
      usage: "Câu miêu tả ngoại hình dạng \"S + has + tóc + và + mắt\" có thể tách thành hai vế riêng biệt, đưa \"hair\" lên làm chủ ngữ ở vế đầu, để nhấn mạnh từng đặc điểm.",
      formulas: [
        "S + has + adj + hair and + N2.  →  S's hair is + adj, and S + has + N2.",
        "She has blonde hair and blue eyes. → Her hair is blonde and she has blue eyes."
      ],
      signals: ["S has adj hair and N2", "S's hair is adj, and S has N2"],
      examples: [
        { en: "She has blonde hair and blue eyes.", vi: "Cô ấy có mái tóc vàng và đôi mắt xanh." },
        { en: "Her hair is blonde and she has blue eyes.", vi: "Tóc của cô ấy màu vàng và cô ấy có đôi mắt xanh." }
      ],
      mistakes: [
        { wrong: "Her hair is blonde and has blue eyes.", right: "Her hair is blonde and she has blue eyes. (vế sau cần nhắc lại chủ ngữ \"she\" trước \"has\")" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "He has short black hair and brown eyes. → His hair is black and ______________ (he) has brown eyes.", accepted: ["he"], correct: "he", explanation: "Vế sau cần nhắc lại chủ ngữ trước \"has\"." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'My sister has long brown hair and green eyes.' → My sister's hair is brown and ______________ (she) has green eyes.", accepted: ["she"], correct: "she", explanation: "Vế sau cần nhắc lại chủ ngữ trước \"has\"." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Tom has curly red hair and blue eyes.' → ______________ (Tom's hair is red and he has blue eyes).", accepted: ["tom's hair is red and he has blue eyes"], correct: "Tom's hair is red and he has blue eyes", explanation: "S has adj hair and N2 → S's hair is adj, and S has N2." }
        ]
      }
    },
    {
      id: "g3", name: "play + môn thể thao + well ⇄ be a good + môn thể thao + player",
      usage: "\"play + môn thể thao + well\" (chơi giỏi môn gì) có nghĩa tương đương với \"be a good + môn thể thao + player\" (là một tay chơi giỏi môn gì).",
      formulas: [
        "S + plays + môn thể thao + well.  →  S + is a good + môn thể thao + player.",
        "He plays basketball very well. → He is a good basketball player."
      ],
      signals: ["play + sport + well", "be a good + sport + player"],
      examples: [
        { en: "He plays basketball very well and he is a sporty boy.", vi: "Cậu ấy chơi bóng rổ rất giỏi và là một cậu bé thích thể thao." },
        { en: "He is a good basketball player and he is a sporty boy.", vi: "Cậu ấy là một tay chơi bóng rổ giỏi và là một cậu bé thích thể thao." }
      ],
      mistakes: [
        { wrong: "He is a good player basketball.", right: "He is a good basketball player. (tên môn thể thao đứng trước \"player\", không đứng sau)" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "She plays tennis very well. → She is a good tennis ______________ (player).", accepted: ["player"], correct: "player", explanation: "play + sport + well → be a good + sport + player." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'They play volleyball very well.' → They are good volleyball ______________ (players).", accepted: ["players"], correct: "players", explanation: "play + sport + well → be a good + sport + player." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'My brother plays football very well.' → ______________ (My brother is a good football player).", accepted: ["my brother is a good football player"], correct: "My brother is a good football player", explanation: "play + sport + well → be a good + sport + player." }
        ]
      }
    },
    {
      id: "g4", name: "have a plan to + V ⇄ be going to + V",
      usage: "\"have a plan to + V\" (có kế hoạch làm gì) có nghĩa tương đương với \"be going to + V\" (dự định, sắp làm gì) khi diễn tả một dự định trong tương lai gần.",
      formulas: [
        "S + have/has a plan to + V.  →  S + am/is/are going to + V.",
        "We have a plan to visit a milk farm tomorrow. → We are going to visit a milk farm tomorrow."
      ],
      signals: ["have a plan to + V", "be going to + V"],
      examples: [
        { en: "We have a plan to visit a milk farm and do a treasure hunt in the field tomorrow.", vi: "Chúng tôi có kế hoạch tham quan nông trại sữa và chơi trò săn tìm kho báu ở cánh đồng vào ngày mai." },
        { en: "We are going to visit a milk farm and do a treasure hunt in the field tomorrow.", vi: "Chúng tôi sắp đi tham quan nông trại sữa và chơi trò săn tìm kho báu ở cánh đồng vào ngày mai." }
      ],
      mistakes: [
        { wrong: "We are going visit a milk farm tomorrow.", right: "We are going to visit a milk farm tomorrow. (cấu trúc đầy đủ là \"be going to + V\", không bỏ \"to\")" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "I have a plan to travel to Da Lat next month. → I am ______________ (going) to travel to Da Lat next month.", accepted: ["going"], correct: "going", explanation: "have a plan to V → be going to V." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'They have a plan to build a new library.' → They are ______________ (going) to build a new library.", accepted: ["going"], correct: "going", explanation: "have a plan to V → be going to V." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'She has a plan to study abroad next year.' → ______________ (She is going to study abroad next year).", accepted: ["she is going to study abroad next year"], correct: "She is going to study abroad next year", explanation: "have a plan to V → be going to V." }
        ]
      }
    },
    {
      id: "g5", name: "It's time to + V (đã đến lúc làm gì)",
      usage: "Cấu trúc \"It's time to + V\" dùng để nói rằng đã đến lúc thích hợp để làm một việc gì đó.",
      formulas: [
        "It's + time + to + V.",
        "It's time to go home. It's very late now."
      ],
      signals: ["It's time to + V"],
      examples: [
        { en: "No, it's time to go home. It's very late now.", vi: "Không, đã đến lúc về nhà rồi. Bây giờ đã rất muộn." },
        { en: "It's time to do our homework.", vi: "Đã đến lúc làm bài tập về nhà rồi." }
      ],
      mistakes: [
        { wrong: "It's time for go home.", right: "It's time to go home. (\"It's time\" đi với \"to + V\", không dùng \"for + V\")" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "It's very late. It's time ______________ (to) go to bed.", accepted: ["to"], correct: "to", explanation: "It's time + to + V." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Rewrite: 'We should start the meeting now.' → It's time ______________ (to) start the meeting.", accepted: ["to"], correct: "to", explanation: "It's time + to + V." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'We should leave for school now.' → ______________ (It's time to leave for school).", accepted: ["it's time to leave for school"], correct: "It's time to leave for school", explanation: "It's time + to + V." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "Hi, my name is Anna. This is the photo of my family. There are six people in my family: my grandmother, my grandfather, my mother, my father, my elder brother and me. These are my grandparents. They are <mark data-w=\"old and retired\">old and retired</mark>. They love gardening and doing morning exercise. This is my father. He is forty-one and he is a doctor. He works in a big hospital. This is my mother. She is thirty-eight. She is an <mark data-w=\"Art teacher\">Art teacher</mark>. She teaches in a secondary school. This is my elder brother. His name is Jack. He is sixteen and he is a high school student. I'm ten and I'm <mark data-w=\"the youngest\">the youngest</mark> in my family. Our family lives in a house on Nguyen Hue Street. The house is <mark data-w=\"a little small but it's lovely\">a little small but it's lovely</mark>. There is a living room, two bedrooms, a bathroom and a kitchen. However, the thing I love most is that the house also has a big garden and a large pond behind it. These are the places where my family likes to <mark data-w=\"relax or fish\">relax or fish</mark> on weekends.",
    vocabInContext: {
      "old and retired": "già và đã nghỉ hưu",
      "Art teacher": "giáo viên Mỹ thuật",
      "the youngest": "người nhỏ tuổi nhất",
      "a little small but it's lovely": "hơi nhỏ nhưng xinh xắn",
      "relax or fish": "thư giãn hoặc câu cá"
    },
    translation: "<b>GIA ĐÌNH CỦA ANNA</b><br><br>Xin chào, tôi tên là Anna. Đây là bức ảnh gia đình tôi. Gia đình tôi có sáu người: bà, ông, mẹ, bố, anh trai và tôi. Đây là ông bà tôi. Họ đã già và nghỉ hưu. Họ thích làm vườn và tập thể dục buổi sáng. Đây là bố tôi. Ông ấy bốn mốt tuổi và là bác sĩ. Ông ấy làm việc ở một bệnh viện lớn. Đây là mẹ tôi. Bà ấy ba mươi tám tuổi. Bà ấy là giáo viên Mỹ thuật. Bà ấy dạy ở một trường trung học cơ sở. Đây là anh trai tôi. Anh ấy tên là Jack. Anh ấy mười sáu tuổi và là học sinh trung học phổ thông. Tôi mười tuổi và là người nhỏ tuổi nhất trong gia đình. Gia đình tôi sống trong một ngôi nhà trên phố Nguyễn Huệ. Ngôi nhà hơi nhỏ nhưng xinh xắn. Nhà có một phòng khách, hai phòng ngủ, một phòng tắm và một nhà bếp. Tuy nhiên, điều tôi thích nhất là ngôi nhà còn có một khu vườn lớn và một cái ao lớn phía sau. Đó là những nơi gia đình tôi thích thư giãn hoặc câu cá vào cuối tuần.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Anna's grandparents enjoy working in the garden and exercising in the morning.", correct: "True", explanation: "Đúng. \"They love gardening and doing morning exercise.\"" },
      { id: "r2", type: "truefalse", prompt: "Anna's father is a doctor who works in a small hospital near their house.", correct: "False", explanation: "Sai. Bố của Anna làm việc ở một bệnh viện lớn, không phải nhỏ." },
      { id: "r3", type: "truefalse", prompt: "Jack is older than Anna.", correct: "True", explanation: "Đúng. Jack mười sáu tuổi, còn Anna chỉ mười tuổi." },
      { id: "r4", type: "truefalse", prompt: "There are three bedrooms in Anna's house.", correct: "False", explanation: "Sai. Nhà Anna chỉ có hai phòng ngủ." },
      { id: "r5", type: "mcq", prompt: "What does Anna's mother do?", options: { A: "She is an Art teacher.", B: "She is a doctor.", C: "She is a high school student.", D: "She stays at home to do gardening." }, correct: "A", explanation: "Bài đọc: \"She is an Art teacher.\"" },
      { id: "r6", type: "mcq", prompt: "Where does Anna's family like to relax or fish on weekends?", options: { A: "In the garden and the large pond behind their house.", B: "In a secondary school.", C: "On Nguyen Hue Street.", D: "In a big hospital." }, correct: "A", explanation: "Bài đọc nêu rõ họ thích thư giãn/câu cá ở khu vườn và ao phía sau nhà." },
      { id: "r7", type: "fillblank", prompt: "Find the word in the passage that means 'ao'.", accepted: ["pond"], correct: "pond", explanation: "\"a large pond behind it\" — pond = ao." },
      { id: "r8", type: "mcq", prompt: "How many people are there in Anna's family?", options: { A: "Four", B: "Five", C: "Six", D: "Seven" }, correct: "C", explanation: "Bài đọc: \"There are six people in my family.\"" },
      { id: "r9", type: "truefalse", prompt: "Anna is the oldest child in her family.", correct: "False", explanation: "Sai. Bài đọc: \"I'm the youngest in my family\" — Anna là người nhỏ tuổi nhất, không phải lớn tuổi nhất." }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "There are six people in my family: my grandmother, my grandfather, my mother, my father, my elder brother and me.", suggested: "Gia đình tôi có sáu người: bà, ông, mẹ, bố, anh trai và tôi.", notes: "\"There are + số lượng + N\" dùng để giới thiệu số thành viên trong gia đình." },
    { id: "t2", en: "They love gardening and doing morning exercise.", suggested: "Họ thích làm vườn và tập thể dục buổi sáng.", notes: "\"love + V-ing\" (thích làm gì) là cấu trúc quen thuộc." },
    { id: "t3", en: "This is my mother. She is an Art teacher. She teaches in a secondary school.", suggested: "Đây là mẹ tôi. Bà ấy là giáo viên Mỹ thuật. Bà ấy dạy ở một trường trung học cơ sở.", notes: "\"teach in + nơi chốn\" (dạy học ở đâu)." },
    { id: "t4", en: "I'm ten and I'm the youngest in my family.", suggested: "Tôi mười tuổi và là người nhỏ tuổi nhất trong gia đình.", notes: "\"the youngest\" là dạng so sánh nhất của \"young\"." },
    { id: "t5", en: "The house also has a big garden and a large pond behind it.", suggested: "Ngôi nhà còn có một khu vườn lớn và một cái ao lớn phía sau.", notes: "\"behind + N\" (phía sau) là giới từ chỉ vị trí." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "like V-ing ⇄ be fond of V-ing",
      formula: "S + likes + V-ing  →  S + is fond of + V-ing",
      example: { before: "My best friend likes playing football after school.", after: "My best friend is fond of playing football after school." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "I like reading comic books. → I am fond ______________ (of) reading comic books.", accepted: ["of"], correct: "of", explanation: "like V-ing → be fond of V-ing." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'She likes singing English songs.' → She is fond ______________ (of) singing English songs.", accepted: ["of"], correct: "of", explanation: "like V-ing → be fond of V-ing." }
      ]
    },
    {
      id: "tr2", name: "S has adj hair and N2 ⇄ S's hair is adj, and S has N2",
      formula: "S + has + adj + hair and + N2  →  S's hair is + adj, and S + has + N2",
      example: { before: "She has blonde hair and blue eyes.", after: "Her hair is blonde and she has blue eyes." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "He has short black hair and brown eyes. → His hair is black and ______________ (he) has brown eyes.", accepted: ["he"], correct: "he", explanation: "Vế sau cần nhắc lại chủ ngữ trước \"has\"." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'My sister has long brown hair and green eyes.' → My sister's hair is brown and ______________ (she) has green eyes.", accepted: ["she"], correct: "she", explanation: "Vế sau cần nhắc lại chủ ngữ trước \"has\"." }
      ]
    },
    {
      id: "tr3", name: "play sport well ⇄ be a good sport player",
      formula: "S + plays + sport + well  →  S + is a good + sport + player",
      example: { before: "He plays basketball very well and he is a sporty boy.", after: "He is a good basketball player and he is a sporty boy." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "She plays tennis very well. → She is a good tennis ______________ (player).", accepted: ["player"], correct: "player", explanation: "play + sport + well → be a good + sport + player." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'They play volleyball very well.' → They are good volleyball ______________ (players).", accepted: ["players"], correct: "players", explanation: "play + sport + well → be a good + sport + player." }
      ]
    },
    {
      id: "tr4", name: "have a plan to V ⇄ be going to V",
      formula: "S + have/has a plan to + V  →  S + am/is/are going to + V",
      example: { before: "We have a plan to visit a milk farm tomorrow.", after: "We are going to visit a milk farm tomorrow." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "I have a plan to travel to Da Lat next month. → I am ______________ (going) to travel to Da Lat next month.", accepted: ["going"], correct: "going", explanation: "have a plan to V → be going to V." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'They have a plan to build a new library.' → They are ______________ (going) to build a new library.", accepted: ["going"], correct: "going", explanation: "have a plan to V → be going to V." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Generous' means:", options: { A: "hào phóng", B: "nhút nhát", C: "chăm chỉ", D: "nguy hiểm" }, correct: "A", explanation: "generous (adj) = hào phóng." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Retired' means:", options: { A: "đang đi làm", B: "đã nghỉ hưu", C: "còn trẻ", D: "bị sa thải" }, correct: "B", explanation: "retired (adj) = đã nghỉ hưu." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "My best friend is very ______________ (SPORT), so he plays sports every afternoon.", accepted: ["sporty"], correct: "sporty", explanation: "sport (n) → sporty (adj, +y)." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "My best friend likes playing football. → My best friend is ______ of playing football.", options: { A: "fond", B: "keen", C: "interest", D: "fan" }, correct: "A", explanation: "like V-ing → be fond of V-ing." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "He plays basketball very well. → He is a good basketball ______.", options: { A: "play", B: "player", C: "playing", D: "played" }, correct: "B", explanation: "play + sport + well → be a good + sport + player." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "We have a plan to visit a milk farm tomorrow. → We are ______________ (going) to visit a milk farm tomorrow.", accepted: ["going"], correct: "going", explanation: "have a plan to V → be going to V." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "It's very late now. It's ______________ (time) to go home.", accepted: ["time"], correct: "time", explanation: "It's time + to + V (đã đến lúc làm gì)." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "Anna's father is a doctor who works in a small hospital near their house.", correct: "False", explanation: "Sai. Ông ấy làm việc ở một bệnh viện lớn." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "There are three bedrooms in Anna's house.", correct: "False", explanation: "Sai. Nhà Anna chỉ có hai phòng ngủ." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "What does Anna's mother do?", options: { A: "She is an Art teacher.", B: "She is a doctor.", C: "She is a high school student.", D: "She stays at home to do gardening." }, correct: "A", explanation: "Bài đọc nêu rõ mẹ của Anna là giáo viên Mỹ thuật." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "The children love doing outdoor ______________ (ACTIVE) on the beach.", accepted: ["activities"], correct: "activities", explanation: "active (adj) → activities (n, số nhiều)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "Lan is a ______________ (HARD) student who always does her homework carefully.", accepted: ["hard-working"], correct: "hard-working", explanation: "hard → hard-working (adj)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "The students answered all the questions ______________ (CONFIDENT).", accepted: ["confidently"], correct: "confidently", explanation: "confident (adj) → confidently (adv, +ly)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'trò săn tìm kho báu'?", options: { A: "treasure hunt", B: "cooking class", C: "summer camp", D: "field trip" }, correct: "A", explanation: "treasure hunt (n) = trò săn tìm kho báu." }
  ]
};
