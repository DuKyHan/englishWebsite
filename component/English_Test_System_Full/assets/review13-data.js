const REVIEW = {
  id: "test13",
  testFile: "test13.html",
  grade: "Grade 9 — Global Success",
  unit: "Unit 1: Local community",
  title: "Knowledge Review — Unit 1, Practice Test 1",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "community garden", pos: "n phr", ipa: "/kəˈmjuːnəti ˈɡɑːrdn/", meaning: "vườn cộng đồng", example: "The new community garden is great for selling local produce.", exampleVi: "Vườn cộng đồng mới rất tốt cho việc bán nông sản địa phương." },
    { word: "farmer's market", pos: "n phr", ipa: "/ˈfɑːrmərz ˈmɑːrkɪt/", meaning: "chợ nông sản", example: "The farmer's market is great for selling local produce.", exampleVi: "Chợ nông sản là nơi tuyệt vời để bán nông sản địa phương." },
    { word: "cut down on", pos: "phr v", ipa: "/kʌt daʊn ɒn/", meaning: "cắt giảm", example: "We need to cut down on our use of plastic to help the environment.", exampleVi: "Chúng ta cần cắt giảm việc sử dụng nhựa để bảo vệ môi trường." },
    { word: "take down", pos: "phr v", ipa: "/teɪk daʊn/", meaning: "dỡ bỏ, tháo dỡ", example: "We will take down the old benches and replace them with new ones.", exampleVi: "Chúng tôi sẽ dỡ bỏ những chiếc ghế cũ và thay bằng cái mới." },
    { word: "recycling initiative", pos: "n phr", ipa: "/riːˈsaɪklɪŋ ɪˈnɪʃətɪv/", meaning: "sáng kiến tái chế", example: "Nam isn't sure how to support the new recycling initiative.", exampleVi: "Nam không chắc phải ủng hộ sáng kiến tái chế mới bằng cách nào." },
    { word: "facility", pos: "n", ipa: "/fəˈsɪləti/", meaning: "tiện nghi, cơ sở vật chất", example: "There are not enough facilities for families with children.", exampleVi: "Không có đủ tiện nghi cho các gia đình có con nhỏ." },
    { word: "hand down", pos: "phr v", ipa: "/hænd daʊn/", meaning: "truyền lại (kỹ năng, đồ vật)", example: "My grandparents handed those pottery skills down to my parents years ago.", exampleVi: "Ông bà tôi đã truyền lại kỹ năng làm gốm đó cho cha mẹ tôi từ nhiều năm trước." },
    { word: "clean-up drive", pos: "n phr", ipa: "/kliːn ʌp draɪv/", meaning: "chiến dịch dọn dẹp", example: "Our neighborhood is much cleaner because everyone joined the clean-up drive.", exampleVi: "Khu phố của chúng tôi sạch hơn nhiều vì mọi người đã tham gia chiến dịch dọn dẹp." },
    { word: "handicraft", pos: "n", ipa: "/ˈhændikræft/", meaning: "đồ thủ công", example: "Lacquerware is a traditional Vietnamese handicraft.", exampleVi: "Đồ sơn mài là một loại đồ thủ công truyền thống của Việt Nam." },
    { word: "lacquerware", pos: "n", ipa: "/ˈlækərweər/", meaning: "đồ sơn mài", example: "The artisanal lacquerware of this village is famous nationwide.", exampleVi: "Đồ sơn mài thủ công của làng này nổi tiếng khắp cả nước." },
    { word: "artisan", pos: "n", ipa: "/ˌɑːrtɪˈzæn/", meaning: "nghệ nhân, thợ thủ công", example: "The artisans use traditional techniques to make these pots.", exampleVi: "Các nghệ nhân sử dụng kỹ thuật truyền thống để làm những chiếc bình này." },
    { word: "preserve", pos: "v", ipa: "/prɪˈzɜːrv/", meaning: "bảo tồn, gìn giữ", example: "The local government is trying to preserve the old village.", exampleVi: "Chính quyền địa phương đang cố gắng bảo tồn ngôi làng cổ." },
    { word: "collaboration", pos: "n", ipa: "/kəˌlæbəˈreɪʃn/", meaning: "sự hợp tác", example: "Clean-up drives foster a sense of pride and collaboration among residents.", exampleVi: "Các chiến dịch dọn dẹp nuôi dưỡng niềm tự hào và sự hợp tác giữa cư dân." },
    { word: "vitality", pos: "n", ipa: "/vaɪˈtæləti/", meaning: "sức sống, sự sôi động", example: "Supporting local businesses contributes to the economic and cultural vitality of our area.", exampleVi: "Ủng hộ doanh nghiệp địa phương góp phần vào sức sống kinh tế và văn hóa của khu vực." },
    { word: "resilient", pos: "adj", ipa: "/rɪˈzɪliənt/", meaning: "kiên cường, có khả năng phục hồi", example: "Engaging with our community helps create a more united and resilient neighborhood.", exampleVi: "Gắn kết với cộng đồng giúp tạo nên một khu phố đoàn kết và kiên cường hơn." },
    { word: "close-knit", pos: "adj", ipa: "/kloʊs nɪt/", meaning: "gắn kết chặt chẽ", example: "A close-knit community often has better communication and cooperation.", exampleVi: "Một cộng đồng gắn kết chặt chẽ thường có sự giao tiếp và hợp tác tốt hơn." },
    { word: "cooperation", pos: "n", ipa: "/koʊˌɒpəˈreɪʃn/", meaning: "sự hợp tác", example: "Better communication and cooperation can lead to improvements in local services.", exampleVi: "Giao tiếp và hợp tác tốt hơn có thể dẫn đến cải thiện các dịch vụ địa phương." },
    { word: "sense of belonging", pos: "n phr", ipa: "/sens əv bɪˈlɔːŋɪŋ/", meaning: "cảm giác thuộc về, gắn bó", example: "Local events help build relationships among residents and create a sense of belonging.", exampleVi: "Các sự kiện địa phương giúp xây dựng mối quan hệ giữa cư dân và tạo cảm giác gắn bó." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'chợ nông sản':", options: { A: "town hall", B: "farmer's market", C: "recycling program", D: "community outreach" }, correct: "B", explanation: "<b>farmer's market</b> (n phr) = chợ nông sản." },
      { id: "vp2", prompt: "Choose the word that means 'bảo tồn, gìn giữ':", options: { A: "preserve", B: "replace", C: "remove", D: "ignore" }, correct: "A", explanation: "<b>preserve</b> (v) = bảo tồn, gìn giữ." },
      { id: "vp3", prompt: "Choose the best word: \"We need to ______ our use of plastic to help the environment.\"", options: { A: "look for", B: "cut down on", C: "get on with", D: "remind" }, correct: "B", explanation: "\"<b>cut down on</b>\" (cắt giảm) là cụm động từ cố định." },
      { id: "vp4", prompt: "Choose the word that means 'gắn kết chặt chẽ':", options: { A: "resilient", B: "close-knit", C: "vitality", D: "handicraft" }, correct: "B", explanation: "<b>close-knit</b> (adj) = gắn kết chặt chẽ." },
      { id: "vp5", prompt: "\"Everyone joined the ______ drive last Sunday.\"", options: { A: "clean-up", B: "making", C: "building", D: "working" }, correct: "A", explanation: "\"<b>clean-up</b> drive\" (chiến dịch dọn dẹp) là cụm danh từ cố định." },
      { id: "vp6", prompt: "Choose the word that means 'nghệ nhân':", options: { A: "artisan", B: "resident", C: "officer", D: "volunteer" }, correct: "A", explanation: "<b>artisan</b> (n) = nghệ nhân, thợ thủ công." }
    ],
    fillblank: [
      { id: "vf1", prompt: "My grandparents ______________ (truyền lại) those pottery skills to my parents.", accepted: ["handed down"], correct: "handed down", explanation: "<b>hand down</b> (phr v) = truyền lại." },
      { id: "vf2", prompt: "There are not enough ______________ (tiện nghi) for families with children.", accepted: ["facilities"], correct: "facilities", explanation: "<b>facility/facilities</b> (n) = tiện nghi, cơ sở vật chất." },
      { id: "vf3", prompt: "The local government is trying to ______________ (bảo tồn) the old village.", accepted: ["preserve"], correct: "preserve", explanation: "<b>preserve</b> (v) = bảo tồn, gìn giữ." },
      { id: "vf4", prompt: "The ______________ (đồ sơn mài) of this village is famous nationwide.", accepted: ["lacquerware"], correct: "lacquerware", explanation: "<b>lacquerware</b> (n) = đồ sơn mài." },
      { id: "vf5", prompt: "A ______________ (gắn kết chặt chẽ) community often has better communication and cooperation.", accepted: ["close-knit"], correct: "close-knit", explanation: "<b>close-knit</b> (adj) = gắn kết chặt chẽ." },
      { id: "vf6", prompt: "Local events help create a ______________ (cảm giác gắn bó) among residents.", accepted: ["sense of belonging"], correct: "sense of belonging", explanation: "<b>sense of belonging</b> (n phr) = cảm giác thuộc về, gắn bó." }
    ],
    matching: {
      left: ["preserve", "resilient", "cooperation", "artisan", "facility", "close-knit"],
      right: ["bảo tồn, gìn giữ", "kiên cường, có khả năng phục hồi", "sự hợp tác", "nghệ nhân", "tiện nghi, cơ sở vật chất", "gắn kết chặt chẽ"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"We are looking for a ______ solution to the trash problem.\" (SPECIFY)", options: { A: "specify", B: "specific", C: "specifically", D: "specification" }, correct: "B", explanation: "Cần tính từ trước danh từ \"solution\" → specify (v) → <b>specific</b> (adj)." },
      { id: "cw2", prompt: "\"The new library provides excellent ______ for students.\" (FACILITATE)", options: { A: "facilitate", B: "facilitator", C: "facilities", D: "facilitating" }, correct: "C", explanation: "Cần danh từ số nhiều làm tân ngữ → facilitate (v) → <b>facilities</b> (n)." },
      { id: "cw3", prompt: "\"My brother is an ______; he loves painting community murals.\" (ART)", options: { A: "art", B: "artist", C: "artistic", D: "artistically" }, correct: "B", explanation: "Cần danh từ chỉ người sau \"an\" → art (n) → <b>artist</b> (n, +ist)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'vitality' mean?", options: { A: "sức sống, sự sôi động", B: "sự suy tàn", C: "sự im lặng", D: "sự trì trệ" }, correct: "A", explanation: "vitality (n) = sức sống, sự sôi động." },
      { id: "wm2", prompt: "What does 'hand down' mean?", options: { A: "vứt bỏ", B: "truyền lại", C: "mua lại", D: "sửa chữa" }, correct: "B", explanation: "hand down (phr v) = truyền lại." },
      { id: "wm3", prompt: "What does 'resilient' mean?", options: { A: "yếu đuối", B: "hào phóng", C: "kiên cường, có khả năng phục hồi", D: "nhút nhát" }, correct: "C", explanation: "resilient (adj) = kiên cường, có khả năng phục hồi." }
    ],
    wordForm: [
      { id: "wf1", prompt: "The annual talent show was very (EXCITE) ______________ this year.", accepted: ["exciting"], correct: "exciting", explanation: "Cần tính từ → excite (v) → <b>exciting</b> (adj)." },
      { id: "wf2", prompt: "The artisans use (TRADITION) ______________ techniques to make these pots.", accepted: ["traditional"], correct: "traditional", explanation: "Cần tính từ → tradition (n) → <b>traditional</b> (adj)." },
      { id: "wf3", prompt: "My brother is an (ART) ______________; he loves painting community murals.", accepted: ["artist"], correct: "artist", explanation: "Cần danh từ chỉ người → art (n) → <b>artist</b> (n)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "wonder/ask/tell + wh-word + should/can + V ⇄ wh-word + to-V",
      usage: "Khi hai mệnh đề (mệnh đề chính và mệnh đề wh-) có cùng chủ ngữ, cấu trúc \"wh-word + should/can + V\" trong câu hỏi gián tiếp có thể rút gọn thành \"wh-word + to-V\" mà không đổi nghĩa.",
      formulas: [
        "S1 + wonder/ask/tell + wh-word + S1 + should/can + V.  →  S1 + wonder/ask/tell + wh-word + to + V.",
        "She wondered what she should write in the final essay. → She wondered what to write in the final essay."
      ],
      signals: ["wonder", "ask", "tell", "not sure", "wh-word + to-V"],
      examples: [
        { en: "She wondered what she should write in the final essay.", vi: "Cô ấy tự hỏi nên viết gì trong bài luận cuối cùng." },
        { en: "She wondered what to write in the final essay.", vi: "Cô ấy tự hỏi phải viết gì trong bài luận cuối cùng." },
        { en: "Nam isn't sure how to support the new recycling initiative.", vi: "Nam không chắc phải ủng hộ sáng kiến tái chế mới bằng cách nào." }
      ],
      mistakes: [
        { wrong: "She wondered what to she write.", right: "She wondered what to write." }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "He didn't know where he should go. → He didn't know ______________ (where) go.", accepted: ["where to"], correct: "where to", explanation: "wh-word + should + V → wh-word + to-V." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'They asked what they should bring to the party.' → They asked ______________ (what to) bring to the party.", accepted: ["what to"], correct: "what to", explanation: "asked + wh-word + should + V → asked + wh-word + to-V." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'I don't know who I should invite to the meeting.' → I don't know ______________ (who to invite to the meeting).", accepted: ["who to invite to the meeting"], correct: "who to invite to the meeting", explanation: "wh-word + should + V → wh-word + to-V." }
        ]
      }
    },
    {
      id: "g2", name: "be famous for + N ⇄ Many people know + N + for + N",
      usage: "\"S + be famous for + N\" (nổi tiếng vì điều gì) có thể diễn đạt lại bằng \"Many people know + S + for + N\" (nhiều người biết đến S vì N) — cùng nêu lý do khiến điều gì đó được biết đến rộng rãi.",
      formulas: [
        "S + is/are famous for + N.  →  Many people know + S + for + N.",
        "My hometown is famous for a special kind of banh cuon. → Many people know my hometown for its special kind of banh cuon."
      ],
      signals: ["be famous for", "know ... for"],
      examples: [
        { en: "My hometown is famous for a special kind of banh cuon.", vi: "Quê tôi nổi tiếng với một loại bánh cuốn đặc biệt." },
        { en: "Many people know my hometown for its special kind of banh cuon.", vi: "Nhiều người biết đến quê tôi vì loại bánh cuốn đặc biệt của nó." }
      ],
      mistakes: [
        { wrong: "Many people know my hometown because its banh cuon.", right: "Many people know my hometown for its banh cuon." }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "This village is famous for its pottery. → Many people know this village ______________ (for) its pottery.", accepted: ["for"], correct: "for", explanation: "be famous for → know ... for." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'This town is famous for its traditional festival.' → Many people ______________ (know this town for) its traditional festival.", accepted: ["know this town for"], correct: "know this town for", explanation: "be famous for → know ... for." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Hoi An is famous for its lanterns.' → ______________ (Many people know Hoi An for its lanterns).", accepted: ["many people know hoi an for its lanterns"], correct: "Many people know Hoi An for its lanterns", explanation: "be famous for → know ... for." }
        ]
      }
    },
    {
      id: "g3", name: "Câu chủ động ⇄ Câu bị động (thì quá khứ đơn)",
      usage: "Khi chuyển câu chủ động sang bị động ở thì quá khứ đơn, tân ngữ của câu chủ động trở thành chủ ngữ của câu bị động, và động từ được chuyển thành \"was/were + V3/V-ed\".",
      formulas: [
        "S + V(ed) + O.  →  O + was/were + V3.",
        "They started the new community garden project last month. → The new community garden project was started last month."
      ],
      signals: ["was/were + V3", "by + tác nhân (nếu cần)"],
      examples: [
        { en: "They started the new community garden project last month.", vi: "Họ đã khởi động dự án vườn cộng đồng mới vào tháng trước." },
        { en: "The new community garden project was started last month.", vi: "Dự án vườn cộng đồng mới đã được khởi động vào tháng trước." }
      ],
      mistakes: [
        { wrong: "The project was start last month.", right: "The project was started last month." }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "They cleaned the park yesterday. → The park ______________ (clean) yesterday.", accepted: ["was cleaned"], correct: "was cleaned", explanation: "Chủ động → bị động: was + V3." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'The volunteers organized the charity event.' → The charity event ______________ (organize) by the volunteers.", accepted: ["was organized"], correct: "was organized", explanation: "Chủ động → bị động: was + V3 + by." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The residents built the new community center last year.' → ______________ (The new community center was built by the residents last year).", accepted: ["the new community center was built by the residents last year"], correct: "The new community center was built by the residents last year", explanation: "Chủ động → bị động: was + V3 + by." }
        ]
      }
    },
    {
      id: "g4", name: "but ⇄ Although (+ have no ... left ⇄ run out of)",
      usage: "Câu ghép nối bằng \"but\" (nêu sự tương phản) có thể diễn đạt lại bằng mệnh đề nhượng bộ \"Although + S + V, S + V\". Đồng thời, cụm \"have no + N + left\" (không còn N) có thể thay bằng \"run out of + N\" (hết sạch N).",
      formulas: [
        "S1 + V1, but + S2 + V2.  →  Although + S1 + V1, S2 + V2.",
        "We had no food left, but we continued to walk. → Although we had run out of food, we continued to walk."
      ],
      signals: ["but", "Although", "have no ... left", "run out of"],
      examples: [
        { en: "We had no food left, but we continued to walk.", vi: "Chúng tôi không còn thức ăn, nhưng vẫn tiếp tục đi bộ." },
        { en: "Although we had run out of food, we continued to walk.", vi: "Mặc dù đã hết sạch thức ăn, chúng tôi vẫn tiếp tục đi bộ." }
      ],
      mistakes: [
        { wrong: "Although we had no food left, but we continued.", right: "Although we had no food left, we continued." }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "We had no water left, but we kept climbing. → ______________ (Although) we had no water left, we kept climbing.", accepted: ["Although"], correct: "Although", explanation: "but → Although (bỏ \"but\" ở mệnh đề sau)." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'They had no money left, but they finished the trip.' → Although they had ______________ (run out of) money, they finished the trip.", accepted: ["run out of"], correct: "run out of", explanation: "have no ... left → run out of." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'We had no time left, but we managed to finish the project.' → ______________ (Although we had run out of time, we managed to finish the project).", accepted: ["although we had run out of time, we managed to finish the project"], correct: "Although we had run out of time, we managed to finish the project", explanation: "but → Although; have no ... left → run out of." }
        ]
      }
    },
    {
      id: "g5", name: "Mệnh đề quan hệ không xác định với \"which\" thay cho cả mệnh đề trước",
      usage: "\"which\" trong mệnh đề quan hệ không xác định (có dấu phẩy) có thể thay thế cho toàn bộ ý của mệnh đề đứng trước (chứ không chỉ một danh từ), dùng để bổ sung bình luận hoặc kết quả.",
      formulas: [
        "Mệnh đề chính, which + V...  (which = toàn bộ ý của mệnh đề chính)",
        "A close-knit community often has better communication and cooperation, which can lead to improvements in local services and facilities."
      ],
      signals: ["..., which ..."],
      examples: [
        { en: "A close-knit community often has better communication and cooperation, which can lead to improvements in local services and facilities.", vi: "Một cộng đồng gắn kết chặt chẽ thường có sự giao tiếp và hợp tác tốt hơn, điều này có thể dẫn đến việc cải thiện các dịch vụ và tiện ích địa phương." },
        { en: "She passed the exam with the highest score, which made her parents very proud.", vi: "Cô ấy đã vượt qua kỳ thi với điểm số cao nhất, điều đó khiến cha mẹ cô ấy rất tự hào." }
      ],
      mistakes: [
        { wrong: "..., that can lead to improvements.", right: "..., which can lead to improvements. (dùng \"which\", không dùng \"that\", sau dấu phẩy)" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "He won the competition, ______________ (which) surprised everyone.", accepted: ["which"], correct: "which", explanation: "\"which\" thay cho cả ý \"he won the competition\"." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Combine: 'The town built a new park. This made residents very happy.' → The town built a new park, ______________ (which) made residents very happy.", accepted: ["which"], correct: "which", explanation: "\"which\" thay cho cả mệnh đề trước." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Combine so it keeps the same meaning: 'The volunteers cleaned the whole street. This impressed the local officials.' → ______________ (The volunteers cleaned the whole street, which impressed the local officials).", accepted: ["the volunteers cleaned the whole street, which impressed the local officials"], correct: "The volunteers cleaned the whole street, which impressed the local officials", explanation: "\"which\" thay cho cả mệnh đề trước để nêu kết quả." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "In any towns and cities, local communities play an important role in everyday life. Local community groups often organize events and activities that bring people together. For example, they might hold festivals, farmers' markets, or clean-up days. These events help to build relationships among residents and create a sense of <mark data-w=\"belonging\">belonging</mark>.<br><br>Community centers are common places where people can join different classes and activities, such as sports, art, and language lessons. Many local communities also have volunteer groups that help those in need, such as food banks or <mark data-w=\"shelters\">shelters</mark> for the homeless. By participating in these activities, people can contribute to their community and make a positive impact.<br><br>Local businesses also benefit from a strong community. When residents support local shops and restaurants, they help <mark data-w=\"boost\">boost</mark> the local economy. A <mark data-w=\"close-knit\">close-knit</mark> community often has better communication and <mark data-w=\"cooperation\">cooperation</mark>, which can lead to improvements in local services and <mark data-w=\"facilities\">facilities</mark>.",
    vocabInContext: {
      belonging: "sự gắn bó, thuộc về",
      shelters: "nơi trú ẩn, mái ấm",
      boost: "thúc đẩy, tăng cường",
      "close-knit": "gắn kết chặt chẽ",
      cooperation: "sự hợp tác",
      facilities: "tiện nghi, cơ sở vật chất"
    },
    translation: "<b>VAI TRÒ CỦA CỘNG ĐỒNG ĐỊA PHƯƠNG</b><br><br>Ở bất kỳ thị trấn hay thành phố nào, cộng đồng địa phương đều đóng vai trò quan trọng trong cuộc sống hằng ngày. Các nhóm cộng đồng địa phương thường tổ chức các sự kiện và hoạt động để gắn kết mọi người. Ví dụ, họ có thể tổ chức lễ hội, chợ nông sản, hoặc các ngày dọn dẹp. Những sự kiện này giúp xây dựng mối quan hệ giữa các cư dân và tạo cảm giác gắn bó.<br><br>Trung tâm cộng đồng là nơi phổ biến để mọi người tham gia các lớp học và hoạt động khác nhau, như thể thao, nghệ thuật và các lớp học ngôn ngữ. Nhiều cộng đồng địa phương cũng có các nhóm tình nguyện giúp đỡ những người gặp khó khăn, chẳng hạn như ngân hàng thực phẩm hoặc nơi trú ẩn cho người vô gia cư. Bằng cách tham gia các hoạt động này, mọi người có thể đóng góp cho cộng đồng và tạo ra tác động tích cực.<br><br>Các doanh nghiệp địa phương cũng được hưởng lợi từ một cộng đồng vững mạnh. Khi cư dân ủng hộ các cửa hàng và nhà hàng địa phương, họ giúp thúc đẩy nền kinh tế địa phương. Một cộng đồng gắn kết chặt chẽ thường có sự giao tiếp và hợp tác tốt hơn, điều này có thể dẫn đến việc cải thiện các dịch vụ và tiện ích địa phương.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Local community groups arrange activities to help residents build relationships with each other.", correct: "True", explanation: "Bài đọc: 'These events help to build relationships among residents and create a sense of belonging.'" },
      { id: "r2", type: "truefalse", prompt: "People can only learn foreign languages at local community centers.", correct: "False", explanation: "Sai. Trung tâm cộng đồng có nhiều hoạt động khác như sports, art, không chỉ ngôn ngữ." },
      { id: "r3", type: "truefalse", prompt: "Volunteer groups in local communities provide support for people who do not have a home.", correct: "True", explanation: "Bài đọc: 'volunteer groups that help those in need, such as food banks or shelters for the homeless.'" },
      { id: "r4", type: "truefalse", prompt: "Supporting local shops and restaurants causes negative impacts on the local economy.", correct: "False", explanation: "Sai. Bài đọc: 'they help boost the local economy' — tác động tích cực." },
      { id: "r5", type: "mcq", prompt: "What is the main idea of the passage?", options: { A: "The various activities people can do at community centers.", B: "The importance and benefits of local communities in towns and cities.", C: "The role of local businesses in boosting the economy.", D: "How volunteer groups help homeless people in urban areas." }, correct: "B", explanation: "Bài đọc đề cập nhiều khía cạnh (sự kiện, trung tâm cộng đồng, tình nguyện viên, doanh nghiệp) đều xoay quanh lợi ích của cộng đồng địa phương." },
      { id: "r6", type: "mcq", prompt: "Which of the following is NOT true according to the passage?", options: { A: "Community events like festivals can create a sense of belonging for residents.", B: "People can participate in sports and art classes at community centers.", C: "Local services and facilities can be improved without communication and cooperation.", D: "Supporting local businesses helps make the local economy stronger." }, correct: "C", explanation: "Bài đọc nói ngược lại: sự cải thiện dịch vụ cần có giao tiếp và hợp tác tốt hơn." },
      { id: "r7", type: "fillblank", prompt: "Find the word in the passage that means 'nơi trú ẩn, mái ấm' (n, plural).", accepted: ["shelters"], correct: "shelters", explanation: "'shelters for the homeless' — shelter (n) = nơi trú ẩn." },
      { id: "r8", type: "mcq", prompt: "According to the passage, what do local community groups organize to bring people together?", options: { A: "Festivals, farmers' markets, or clean-up days.", B: "Only sports competitions.", C: "Only online meetings.", D: "Private parties for members only." }, correct: "A", explanation: "Bài đọc: 'they might hold festivals, farmers\\' markets, or clean-up days.'" },
      { id: "r9", type: "truefalse", prompt: "According to the passage, close-knit communities usually have worse communication than other communities.", correct: "False", explanation: "Sai. Bài đọc: 'A close-knit community often has better communication and cooperation.'" }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "Our local community plays a crucial role in shaping a vibrant and supportive environment for all residents.", suggested: "Cộng đồng địa phương của chúng ta đóng vai trò quan trọng trong việc tạo nên một môi trường sôi động và hỗ trợ cho tất cả cư dân.", notes: "'play a crucial role in doing something' (đóng vai trò quan trọng trong việc gì)." },
    { id: "t2", en: "Neighborhood clean-up drives not only enhance the beauty of our surroundings but also foster a sense of pride and collaboration.", suggested: "Các chiến dịch dọn dẹp khu phố không chỉ làm đẹp môi trường xung quanh mà còn nuôi dưỡng niềm tự hào và sự hợp tác.", notes: "'not only ... but also ...' (không những... mà còn...)." },
    { id: "t3", en: "By supporting local businesses and attending town festivals, we contribute to the economic and cultural vitality of our area.", suggested: "Bằng cách ủng hộ doanh nghiệp địa phương và tham gia các lễ hội thị trấn, chúng ta góp phần vào sức sống kinh tế và văn hóa của khu vực.", notes: "'contribute to something' (đóng góp cho điều gì)." },
    { id: "t4", en: "My grandparents handed those skills down to my parents many years ago.", suggested: "Ông bà tôi đã truyền lại những kỹ năng đó cho cha mẹ tôi từ nhiều năm trước.", notes: "'hand down' (truyền lại) thường dùng cho kỹ năng, đồ vật, truyền thống." },
    { id: "t5", en: "A close-knit community often has better communication and cooperation, which can lead to improvements in local services and facilities.", suggested: "Một cộng đồng gắn kết chặt chẽ thường có sự giao tiếp và hợp tác tốt hơn, điều này có thể dẫn đến việc cải thiện các dịch vụ và tiện ích địa phương.", notes: "'which' thay cho cả mệnh đề trước để nêu kết quả." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "wh-word + should/can + V ⇄ wh-word + to-V",
      formula: "S + wonder/ask/tell + wh-word + S + should/can + V  →  S + wonder/ask/tell + wh-word + to-V",
      example: { before: "She wondered what she should write in the final essay.", after: "She wondered what to write in the final essay." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "He didn't know where he should park his car. → He didn't know ______________ (where to) park his car.", accepted: ["where to"], correct: "where to", explanation: "wh-word + should + V → wh-word + to-V." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'I'm not sure what I should say to him.' → I'm not sure ______________ (what to) say to him.", accepted: ["what to"], correct: "what to", explanation: "wh-word + should + V → wh-word + to-V." }
      ]
    },
    {
      id: "tr2", name: "be famous for ⇄ Many people know ... for",
      formula: "S + is/are famous for + N  →  Many people know + S + for + N",
      example: { before: "My hometown is famous for a special kind of banh cuon.", after: "Many people know my hometown for its special kind of banh cuon." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "This region is famous for its silk. → Many people know this region ______________ (for) its silk.", accepted: ["for"], correct: "for", explanation: "be famous for → know ... for." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'This city is famous for its old temples.' → Many people ______________ (know this city for) its old temples.", accepted: ["know this city for"], correct: "know this city for", explanation: "be famous for → know ... for." }
      ]
    },
    {
      id: "tr3", name: "Chủ động ⇄ Bị động (quá khứ đơn)",
      formula: "S + V(ed) + O  →  O + was/were + V3",
      example: { before: "They started the new community garden project last month.", after: "The new community garden project was started last month." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "The council repaired the old bridge. → The old bridge ______________ (repair) by the council.", accepted: ["was repaired"], correct: "was repaired", explanation: "Chủ động → bị động: was + V3 + by." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'The students planted these trees last spring.' → These trees ______________ (plant) last spring.", accepted: ["were planted"], correct: "were planted", explanation: "Chủ động → bị động: were + V3." }
      ]
    },
    {
      id: "tr4", name: "but ⇄ Although (+ run out of)",
      formula: "S1 + V1, but + S2 + V2  →  Although + S1 + V1, S2 + V2",
      example: { before: "We had no food left, but we continued to walk.", after: "Although we had run out of food, we continued to walk." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "We had no petrol left, but we kept driving. → ______________ (Although) we had run out of petrol, we kept driving.", accepted: ["Although"], correct: "Although", explanation: "but → Although." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'They had no supplies left, but they finished the project.' → Although they had ______________ (run out of) supplies, they finished the project.", accepted: ["run out of"], correct: "run out of", explanation: "have no ... left → run out of." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Cooperation' means:", options: { A: "sự hợp tác", B: "sự chia rẽ", C: "sự cạnh tranh", D: "sự sợ hãi" }, correct: "A", explanation: "cooperation (n) = sự hợp tác." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Close-knit' means:", options: { A: "xa cách", B: "gắn kết chặt chẽ", C: "lỏng lẻo", D: "mới thành lập" }, correct: "B", explanation: "close-knit (adj) = gắn kết chặt chẽ." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "The local government is trying to ______________ (bảo tồn) the old village.", accepted: ["preserve"], correct: "preserve", explanation: "preserve (v) = bảo tồn, gìn giữ." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "She wondered what she should write. → She wondered what ______ write.", options: { A: "to", B: "should", C: "will", D: "did" }, correct: "A", explanation: "wh-word + should + V → wh-word + to-V." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "My hometown is famous for banh cuon. → Many people know my hometown ______ its banh cuon.", options: { A: "with", B: "for", C: "about", D: "on" }, correct: "B", explanation: "know ... for = biết đến ... vì." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "They started the project last month. → The project ______________ (start) last month.", accepted: ["was started"], correct: "was started", explanation: "Chủ động → bị động: was + V3." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "We had no food left, but we continued to walk. → ______________ (Although) we had run out of food, we continued to walk.", accepted: ["Although"], correct: "Although", explanation: "but → Although." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "Local community groups arrange activities to help residents build relationships with each other.", correct: "True", explanation: "Đúng theo bài đọc." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "Supporting local shops and restaurants causes negative impacts on the local economy.", correct: "False", explanation: "Sai. Bài đọc nói tác động tích cực (boost the local economy)." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "What is the main idea of the local community passage?", options: { A: "The importance and benefits of local communities in towns and cities.", B: "The history of farmers' markets.", C: "How to build a community center.", D: "The cost of running local businesses." }, correct: "A", explanation: "Bài đọc nói về vai trò và lợi ích của cộng đồng địa phương." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "The new library provides excellent ______________ (facilitate) for students.", accepted: ["facilities"], correct: "facilities", explanation: "facilitate (v) → facilities (n)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "My brother is an ______________ (art); he loves painting community murals.", accepted: ["artist"], correct: "artist", explanation: "art (n) → artist (n, +ist)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "We are looking for a ______________ (specify) solution to the trash problem.", accepted: ["specific"], correct: "specific", explanation: "specify (v) → specific (adj)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'nghệ nhân'?", options: { A: "artisan", B: "resident", C: "officer", D: "volunteer" }, correct: "A", explanation: "artisan (n) = nghệ nhân, thợ thủ công." }
  ]
};
