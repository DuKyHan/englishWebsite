const REVIEW = {
  id: "test21",
  testFile: "test21.html",
  grade: "Grade 9 — Global Success",
  unit: "Unit 5: Our experiences",
  title: "Knowledge Review — Unit 5, Practice Test 1",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "valuable", pos: "adj", ipa: "/ˈvæljuəbl/", meaning: "quý giá, bổ ích", example: "This experience taught me many valuable lessons about independence.", exampleVi: "Trải nghiệm này đã dạy tôi nhiều bài học quý giá về sự độc lập." },
    { word: "helpless", pos: "adj", ipa: "/ˈhelpləs/", meaning: "bất lực, không thể tự lo được", example: "I couldn't solve the problem, and I felt so helpless.", exampleVi: "Tôi không giải được bài toán và cảm thấy thật bất lực." },
    { word: "cautious", pos: "adj", ipa: "/ˈkɔːʃəs/", meaning: "thận trọng, cẩn trọng", example: "I have become more cautious about trusting people.", exampleVi: "Tôi đã trở nên thận trọng hơn khi tin tưởng người khác." },
    { word: "take advantage of", pos: "phr", ipa: "/teɪk ədˈvæntɪdʒ əv/", meaning: "lợi dụng", example: "Some bad people might take advantage of your trust.", exampleVi: "Một số người xấu có thể lợi dụng lòng tin của bạn." },
    { word: "by rote", pos: "phr", ipa: "/baɪ roʊt/", meaning: "học vẹt, học thuộc lòng máy móc", example: "The student learnt by rote, so he couldn't answer the question.", exampleVi: "Học sinh đó học vẹt nên không thể trả lời câu hỏi." },
    { word: "bamboo pole", pos: "n phr", ipa: "/bæmˈbuː poʊl/", meaning: "cây nêu", example: "It's a bamboo pole. We put it up to welcome Tet.", exampleVi: "Đó là cây nêu. Chúng tôi dựng nó lên để đón Tết." },
    { word: "seabed", pos: "n", ipa: "/ˈsiːbed/", meaning: "đáy biển", example: "The seabed was a large coral reef teeming with marine life.", exampleVi: "Đáy biển là một rạn san hô lớn với đầy sinh vật biển." },
    { word: "exchange programme", pos: "n phr", ipa: "/ɪksˈtʃeɪndʒ ˈproʊɡræm/", meaning: "chương trình trao đổi", example: "Last year, he went on an exchange programme in a foreign country.", exampleVi: "Năm ngoái, cậu ấy đã tham gia một chương trình trao đổi ở nước ngoài." },
    { word: "mistake ... for", pos: "v phr", ipa: "/mɪˈsteɪk fɔːr/", meaning: "nhầm lẫn cái gì/ai đó với cái khác", example: "Alex mistook a sheep for a friendly dog.", exampleVi: "Alex đã nhầm một con cừu thành một chú chó thân thiện." },
    { word: "burst into laughter", pos: "phr", ipa: "/bɜːrst ˈɪntuː ˈlæftər/", meaning: "phá lên cười, bật cười", example: "His classmates burst into laughter.", exampleVi: "Các bạn cùng lớp đã phá lên cười." },
    { word: "blush", pos: "v", ipa: "/blʌʃ/", meaning: "đỏ mặt (vì xấu hổ)", example: "Alex blushed in embarrassment.", exampleVi: "Alex đỏ mặt vì xấu hổ." },
    { word: "embarrassment", pos: "n", ipa: "/ɪmˈbærəsmənt/", meaning: "sự xấu hổ, bối rối", example: "Alex blushed in embarrassment after the sheep startled him.", exampleVi: "Alex đỏ mặt xấu hổ sau khi bị con cừu làm giật mình." },
    { word: "traditional dish", pos: "n phr", ipa: "/trəˈdɪʃənl dɪʃ/", meaning: "món ăn truyền thống", example: "Alex attempted to make a traditional dish in the cooking class.", exampleVi: "Alex đã cố gắng làm một món ăn truyền thống trong lớp học nấu ăn." },
    { word: "unbearable", pos: "adj", ipa: "/ʌnˈberəbl/", meaning: "không thể chịu đựng được", example: "The taste was so unbearable that even the chef couldn't help but laugh.", exampleVi: "Vị của món ăn không thể chịu nổi đến mức đầu bếp cũng phải bật cười." },
    { word: "mishap", pos: "n", ipa: "/ˈmɪshæp/", meaning: "sự cố nhỏ, tai nạn không may", example: "Despite these funny mishaps, his exchange programme was a memorable experience.", exampleVi: "Dù có những sự cố hài hước này, chương trình trao đổi của cậu ấy vẫn là một trải nghiệm đáng nhớ." },
    { word: "memorable experience", pos: "n phr", ipa: "/ˈmemərəbl ɪkˈspɪəriəns/", meaning: "trải nghiệm đáng nhớ", example: "Alex's exchange programme was a memorable experience.", exampleVi: "Chương trình trao đổi của Alex là một trải nghiệm đáng nhớ." },
    { word: "embrace", pos: "v", ipa: "/ɪmˈbreɪs/", meaning: "đón nhận, chấp nhận", example: "He learned to embrace unexpected moments with a sense of humour.", exampleVi: "Cậu ấy đã học cách đón nhận những khoảnh khắc bất ngờ với sự hài hước." },
    { word: "sense of humour", pos: "n phr", ipa: "/sens əv ˈhjuːmər/", meaning: "khiếu hài hước", example: "He learned to embrace unexpected moments with a sense of humour.", exampleVi: "Cậu ấy đã học cách đón nhận những khoảnh khắc bất ngờ với khiếu hài hước." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'bất lực':", options: { A: "helpless", B: "valuable", C: "cautious", D: "unbearable" }, correct: "A", explanation: "<b>helpless</b> (adj) = bất lực." },
      { id: "vp2", prompt: "Choose the phrase that means 'lợi dụng':", options: { A: "take advantage of", B: "burst into laughter", C: "step up", D: "by rote" }, correct: "A", explanation: "<b>take advantage of</b> (phr) = lợi dụng." },
      { id: "vp3", prompt: "\"His classmates ______ when the sheep bleated loudly.\"", options: { A: "burst into laughter", B: "took advantage", C: "learnt by rote", D: "felt helpless" }, correct: "A", explanation: "\"<b>burst into laughter</b>\" (phá lên cười) khớp với phản ứng của các bạn cùng lớp." },
      { id: "vp4", prompt: "Choose the word that means 'không thể chịu đựng được':", options: { A: "unbearable", B: "memorable", C: "valuable", D: "cautious" }, correct: "A", explanation: "<b>unbearable</b> (adj) = không thể chịu đựng được." },
      { id: "vp5", prompt: "\"The ______ was a large coral reef teeming with marine life.\"", options: { A: "seabed", B: "campsite", C: "bamboo pole", D: "workshop" }, correct: "A", explanation: "<b>seabed</b> (n) = đáy biển, nơi có rạn san hô." },
      { id: "vp6", prompt: "Choose the phrase that means 'trải nghiệm đáng nhớ':", options: { A: "memorable experience", B: "traditional dish", C: "exchange programme", D: "sense of humour" }, correct: "A", explanation: "<b>memorable experience</b> (n phr) = trải nghiệm đáng nhớ." }
    ],
    fillblank: [
      { id: "vf1", prompt: "I have become more ______________ (thận trọng) about trusting people.", accepted: ["cautious"], correct: "cautious", explanation: "<b>cautious</b> (adj) = thận trọng, cẩn trọng." },
      { id: "vf2", prompt: "It's a ______________ (cây nêu). We put it up to welcome Tet.", accepted: ["bamboo pole"], correct: "bamboo pole", explanation: "<b>bamboo pole</b> (n phr) = cây nêu." },
      { id: "vf3", prompt: "Alex ______________ (nhầm) a sheep ______________ (thành) a friendly dog.", accepted: ["mistook", "for"], correct: "mistook ... for", explanation: "<b>mistake ... for</b> (v phr) = nhầm lẫn cái gì/ai đó với cái khác." },
      { id: "vf4", prompt: "Alex ______________ (đỏ mặt) in embarrassment.", accepted: ["blushed"], correct: "blushed", explanation: "<b>blush</b> (v) = đỏ mặt (vì xấu hổ)." },
      { id: "vf5", prompt: "In a cooking class, Alex attempted to make a ______________ (món ăn truyền thống).", accepted: ["traditional dish"], correct: "traditional dish", explanation: "<b>traditional dish</b> (n phr) = món ăn truyền thống." },
      { id: "vf6", prompt: "He learned to ______________ (đón nhận) unexpected moments with a sense of humour.", accepted: ["embrace"], correct: "embrace", explanation: "<b>embrace</b> (v) = đón nhận, chấp nhận." }
    ],
    matching: {
      left: ["helpless", "cautious", "embarrassment", "mishap", "embrace", "seabed"],
      right: ["bất lực", "thận trọng", "sự xấu hổ, bối rối", "sự cố nhỏ, tai nạn không may", "đón nhận, chấp nhận", "đáy biển"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"We had an ______ trip to the mountainous area last summer.\" (AMAZE)", options: { A: "amaze", B: "amazed", C: "amazing", D: "amazement" }, correct: "C", explanation: "Cần tính từ trước danh từ \"trip\" → amaze (v) → <b>amazing</b> (adj)." },
      { id: "cw2", prompt: "\"The ______ of the traditional Tet pole is a common sight in villages.\" (ERECT)", options: { A: "erect", B: "erection", C: "erecting", D: "erected" }, correct: "B", explanation: "Cần danh từ làm chủ ngữ → erect (v) → <b>erection</b> (n)." },
      { id: "cw3", prompt: "\"______, he realized he was on the wrong bus route.\" (LUCK)", options: { A: "Luck", B: "Lucky", C: "Unluckily", D: "Luckiness" }, correct: "C", explanation: "Cần trạng từ đứng đầu câu → luck (n) → <b>unluckily</b> (adv)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'helpless' mean?", options: { A: "bất lực", B: "tự tin", C: "vui vẻ", D: "thận trọng" }, correct: "A", explanation: "helpless (adj) = bất lực." },
      { id: "wm2", prompt: "What does 'embrace' mean?", options: { A: "từ chối", B: "đón nhận, chấp nhận", C: "phá hủy", D: "trốn tránh" }, correct: "B", explanation: "embrace (v) = đón nhận, chấp nhận." },
      { id: "wm3", prompt: "What does 'mishap' mean?", options: { A: "sự cố nhỏ, tai nạn không may", B: "thành công lớn", C: "kế hoạch chi tiết", D: "lời khen ngợi" }, correct: "A", explanation: "mishap (n) = sự cố nhỏ, tai nạn không may." }
    ],
    wordForm: [
      { id: "wf1", prompt: "The experience of living alone was very ______________ (VALUE) for him.", accepted: ["valuable"], correct: "valuable", explanation: "value (n/v) → valuable (adj)." },
      { id: "wf2", prompt: "Teenagers need to seek diverse ______________ (EXPERIENTIAL) to shape their character.", accepted: ["experiences"], correct: "experiences", explanation: "experiential (adj) → experiences (n)." },
      { id: "wf3", prompt: "The company is looking for a candidate who has some previous ______________ (EXPERIENCE) in teaching children.", accepted: ["experience"], correct: "experience", explanation: "experience (n) đã đúng dạng cần thiết sau tính từ \"previous\"." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "S + started V-ing + at + thời điểm ⇄ S + has/have been + V-ing + since + thời điểm",
      usage: "Khi một hành động bắt đầu tại một thời điểm trong quá khứ và vẫn tiếp diễn đến hiện tại, ta dùng \"has/have been + V-ing + since + mốc thời gian\" — thì hiện tại hoàn thành tiếp diễn.",
      formulas: [
        "S + started + V-ing + at + thời điểm.  →  S + has/have been + V-ing + since + thời điểm.",
        "An started doing yoga at 6 o'clock. → An has been doing yoga since 6 o'clock."
      ],
      signals: ["started V-ing at + thời điểm", "has/have been + V-ing + since"],
      examples: [
        { en: "An started doing yoga at 6 o'clock.", vi: "An bắt đầu tập yoga lúc 6 giờ." },
        { en: "An has been doing yoga since 6 o'clock.", vi: "An đã tập yoga từ lúc 6 giờ (và vẫn đang tập)." }
      ],
      mistakes: [
        { wrong: "An has done yoga since 6 o'clock.", right: "An has been doing yoga since 6 o'clock. (nhấn mạnh tính liên tục nên dùng hiện tại hoàn thành tiếp diễn)" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "She started learning the piano at the age of 6. → She has ______________ (been learning) the piano since the age of 6.", accepted: ["been learning"], correct: "been learning", explanation: "started V-ing at + thời điểm → has/have been + V-ing + since." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'He started working at this company in 2020.' → He has ______________ (been working) at this company since 2020.", accepted: ["been working"], correct: "been working", explanation: "started V-ing at + thời điểm → has been + V-ing + since." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'They started living in this town in 2015.' → ______________ (They have been living in this town since 2015).", accepted: ["they have been living in this town since 2015"], correct: "They have been living in this town since 2015", explanation: "started V-ing at + thời điểm → have been + V-ing + since." }
        ]
      }
    },
    {
      id: "g2", name: "It's the first time + S + has/have + V3 ⇄ S + have/has never + V3 + before",
      usage: "\"It's the first time + S + has/have + V3\" (đây là lần đầu tiên ai làm gì) có nghĩa tương đương với \"S + have/has never + V3 + before\" (chưa từng làm gì trước đây).",
      formulas: [
        "It's the first time + S + has/have + V3.  →  S + have/has never + V3 + before.",
        "It's the first time her little son has tried Indian food. → Her little son has never tried Indian food before."
      ],
      signals: ["It's the first time + has/have + V3", "have/has never + V3 + before"],
      examples: [
        { en: "It's the first time her little son has tried Indian food.", vi: "Đây là lần đầu tiên con trai nhỏ của cô ấy ăn thử món Ấn Độ." },
        { en: "Her little son has never tried Indian food before.", vi: "Con trai nhỏ của cô ấy chưa từng ăn thử món Ấn Độ trước đây." }
      ],
      mistakes: [
        { wrong: "Her little son doesn't try Indian food before.", right: "Her little son has never tried Indian food before. (cần hiện tại hoàn thành + never)" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "It's the first time I have visited this museum. → I have ______________ (never visited) this museum before.", accepted: ["never visited"], correct: "never visited", explanation: "It's the first time + has/have + V3 → have/has never + V3 + before." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'It's the first time they have joined an exchange programme.' → They have ______________ (never joined) an exchange programme before.", accepted: ["never joined"], correct: "never joined", explanation: "It's the first time + has/have + V3 → have never + V3 + before." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'It's the first time he has cooked a traditional dish.' → ______________ (He has never cooked a traditional dish before).", accepted: ["he has never cooked a traditional dish before"], correct: "He has never cooked a traditional dish before", explanation: "It's the first time + has + V3 → has never + V3 + before." }
        ]
      }
    },
    {
      id: "g3", name: "S + haven't/hasn't + V3 + for + khoảng thời gian ⇄ The last time + S + V(quá khứ đơn) + was + khoảng thời gian + ago",
      usage: "\"S + haven't/hasn't + V3 + for + khoảng thời gian\" có thể viết lại bằng \"The last time + S + V(quá khứ đơn) + was + khoảng thời gian + ago\" — cùng diễn tả khoảng cách kể từ lần cuối một hành động xảy ra.",
      formulas: [
        "S + haven't/hasn't + V3 + for + khoảng thời gian.  →  The last time + S + V(quá khứ đơn) + was + khoảng thời gian + ago.",
        "They haven't met each other for two years. → The last time they met each other was two years ago."
      ],
      signals: ["haven't/hasn't + V3 + for", "The last time + quá khứ đơn + was + ... + ago"],
      examples: [
        { en: "They haven't met each other for two years.", vi: "Họ đã không gặp nhau trong hai năm." },
        { en: "The last time they met each other was two years ago.", vi: "Lần cuối họ gặp nhau là hai năm trước." }
      ],
      mistakes: [
        { wrong: "The last time they met each other was two years before.", right: "The last time they met each other was two years ago. (dùng \"ago\", không dùng \"before\" ở cuối câu này)" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "We haven't seen this film for a year. → The last time we ______________ (saw) this film was a year ago.", accepted: ["saw"], correct: "saw", explanation: "haven't + V3 + for → The last time + V(quá khứ đơn) + was + ... + ago." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'She hasn't visited her hometown for five years.' → The last time she ______________ (visited) her hometown was five years ago.", accepted: ["visited"], correct: "visited", explanation: "hasn't + V3 + for → The last time + V(quá khứ đơn) + was + ... + ago." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'They haven't spoken to each other for three months.' → ______________ (The last time they spoke to each other was three months ago).", accepted: ["the last time they spoke to each other was three months ago"], correct: "The last time they spoke to each other was three months ago", explanation: "haven't + V3 + for → The last time + quá khứ đơn + was + ... + ago." }
        ]
      }
    },
    {
      id: "g4", name: "join/enrol in + N ⇄ be a member of + N",
      usage: "\"join + N\" (tham gia vào một tổ chức, câu lạc bộ) có thể diễn đạt lại bằng \"be a member of + N\" (là thành viên của), khi cần nhấn mạnh tư cách thành viên đang có ở hiện tại.",
      formulas: [
        "S + have/has + joined + N (+ and + V-ed + ...).  →  S + have/has been + a member of + N (+ and + N).",
        "I have joined the English club and worked as a tutor for a semester. → I have been a member of the English club and a tutor for a semester."
      ],
      signals: ["have/has joined + N", "have/has been a member of + N"],
      examples: [
        { en: "I have joined the English club and worked as a tutor for a semester.", vi: "Tôi đã tham gia câu lạc bộ tiếng Anh và làm gia sư trong một học kỳ." },
        { en: "I have been a member of the English club and a tutor for a semester.", vi: "Tôi đã là thành viên của câu lạc bộ tiếng Anh và là một gia sư trong một học kỳ." }
      ],
      mistakes: [
        { wrong: "I have been member of the English club.", right: "I have been a member of the English club. (cần mạo từ \"a\" trước \"member\")" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "He has joined the football team for two years. → He has been a ______________ (member) of the football team for two years.", accepted: ["member"], correct: "member", explanation: "join + N → be a member of + N." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'They have joined the drama club since last year.' → They have been ______________ (members) of the drama club since last year.", accepted: ["members"], correct: "members", explanation: "join + N → be members of + N." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'She has joined the volunteer group and worked there for a year.' → ______________ (She has been a member of the volunteer group and worked there for a year).", accepted: ["she has been a member of the volunteer group and worked there for a year"], correct: "She has been a member of the volunteer group and worked there for a year", explanation: "join + N → be a member of + N." }
        ]
      }
    },
    {
      id: "g5", name: "Only after + S + had + V3 + did + S + V (đảo ngữ với quá khứ hoàn thành)",
      usage: "Khi \"Only after\" (chỉ sau khi) đứng đầu câu, mệnh đề chính phải đảo ngữ (trợ động từ \"did\" đứng trước chủ ngữ). Mệnh đề sau \"only after\" thường dùng quá khứ hoàn thành để nhấn mạnh hành động đã hoàn tất trước hành động được nhận ra.",
      formulas: [
        "Only after + S1 + had + V3 + did + S2 + V (nguyên mẫu).",
        "Only after the bus had run for a few miles did I realize I was on the wrong route."
      ],
      signals: ["Only after + had + V3 + did + S + V"],
      examples: [
        { en: "Only after the bus had run for a few miles did I realize I was on the wrong route.", vi: "Chỉ sau khi xe buýt chạy được vài dặm, tôi mới nhận ra mình đã đi nhầm đường." },
        { en: "Only after she had finished her work did she go home.", vi: "Chỉ sau khi hoàn thành công việc, cô ấy mới về nhà." }
      ],
      mistakes: [
        { wrong: "Only after the bus had run for a few miles I realized I was on the wrong route.", right: "Only after the bus had run for a few miles did I realize I was on the wrong route. (cần đảo ngữ \"did + S + V\" ở mệnh đề chính)" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "Only after he had left the house ______________ (did he realize) he had forgotten his keys.", accepted: ["did he realize"], correct: "did he realize", explanation: "Only after + had + V3 + did + S + V (đảo ngữ)." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Rewrite: 'Only after she had read the letter twice did she understand it.' — Identify the inverted part: ______________ (did she understand) it.", accepted: ["did she understand"], correct: "did she understand", explanation: "Only after + had + V3 + did + S + V (đảo ngữ)." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'They only realized their mistake after they had submitted the test.' → ______________ (Only after they had submitted the test did they realize their mistake).", accepted: ["only after they had submitted the test did they realize their mistake"], correct: "Only after they had submitted the test did they realize their mistake", explanation: "Only after + had + V3 + did + S + V (đảo ngữ)." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "Alex was a 13-year-old boy. Last year, he went on an <mark data-w=\"exchange programme\">exchange programme</mark> in a foreign country. He couldn't wait to experience new cultures and he aimed mostly at making international friends. Little did he know, his journey would be filled with hilarious moments. Instead of asking for directions to the nearest museum, he ended up asking for directions to the nearest ice cream parlour! During a group outing, Alex <mark data-w=\"mistook a sheep\">mistook a sheep</mark> for a friendly dog and tried to pet it. Much to his surprise, the sheep bleated loudly and startled him. His classmates <mark data-w=\"burst into laughter\">burst into laughter</mark>, and Alex blushed in embarrassment. In a cooking class, Alex attempted to make a <mark data-w=\"traditional dish\">traditional dish</mark>, but instead of putting in some sugar, he accidentally added way too much salt. The taste was so unbearable that even the chef couldn't help but laugh at his reaction. Despite these funny mishaps, Alex's exchange programme was a <mark data-w=\"memorable experience\">memorable experience</mark>. He made friends from around the world and learned to embrace unexpected moments with a sense of humour.",
    vocabInContext: {
      "exchange programme": "chương trình trao đổi",
      "mistook a sheep": "nhầm một con cừu (thành con chó)",
      "burst into laughter": "phá lên cười",
      "traditional dish": "món ăn truyền thống",
      "memorable experience": "trải nghiệm đáng nhớ"
    },
    translation: "<b>CHUYẾN TRAO ĐỔI HÀI HƯỚC CỦA ALEX</b><br><br>Alex là một cậu bé 13 tuổi. Năm ngoái, cậu ấy đã tham gia một chương trình trao đổi ở nước ngoài. Cậu không thể chờ đợi để trải nghiệm những nền văn hóa mới và chủ yếu muốn kết bạn quốc tế. Cậu đâu ngờ rằng hành trình của mình sẽ đầy ắp những khoảnh khắc hài hước. Thay vì hỏi đường đến bảo tàng gần nhất, cậu lại hỏi đường đến tiệm kem gần nhất! Trong một chuyến đi chơi nhóm, Alex đã nhầm một con cừu thành một chú chó thân thiện và cố gắng vuốt ve nó. Thật bất ngờ, con cừu kêu to và làm cậu giật mình. Các bạn cùng lớp đã phá lên cười, còn Alex thì đỏ mặt vì xấu hổ. Trong một lớp học nấu ăn, Alex đã cố gắng làm một món ăn truyền thống, nhưng thay vì cho đường, cậu lại vô tình cho quá nhiều muối. Vị của món ăn tệ đến mức ngay cả đầu bếp cũng phải bật cười trước phản ứng của cậu. Dù có những sự cố hài hước này, chương trình trao đổi của Alex vẫn là một trải nghiệm đáng nhớ. Cậu đã kết bạn với nhiều người trên khắp thế giới và học được cách đón nhận những khoảnh khắc bất ngờ với sự hài hước.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Alex's primary goal during the exchange programme was to visit as many museums as possible.", correct: "False", explanation: "Sai. Bài đọc: Alex \"aimed mostly at making international friends\", không phải đi thăm bảo tàng." },
      { id: "r2", type: "truefalse", prompt: "Alex felt embarrassed when his classmates laughed at his mistake with the sheep.", correct: "True", explanation: "Đúng. Bài đọc: \"His classmates burst into laughter, and Alex blushed in embarrassment.\"" },
      { id: "r3", type: "truefalse", prompt: "The cooking chef got angry because Alex ruined the traditional dish by adding too much salt.", correct: "False", explanation: "Sai. Bài đọc: \"even the chef couldn't help but laugh at his reaction\" — thầy bếp cười chứ không tức giận." },
      { id: "r4", type: "truefalse", prompt: "In the end, Alex successfully made international friends despite his funny mistakes.", correct: "True", explanation: "Đúng. Bài đọc: \"He made friends from around the world...\"" },
      { id: "r5", type: "mcq", prompt: "What is the main idea of the passage?", options: { A: "The difficulties of learning how to cook and speak a foreign language abroad.", B: "A young boy's funny experiences and positive outcomes during an exchange programme.", C: "Why exchange programmes are too difficult and embarrassing for 13-year-old students.", D: "The dangerous encounters with local animals during a school trip to a foreign country." }, correct: "B", explanation: "Bài đọc kể về những trải nghiệm hài hước và kết quả tích cực của Alex trong chương trình trao đổi." },
      { id: "r6", type: "mcq", prompt: "Which of the following is NOT true according to the passage?", options: { A: "Alex went to a foreign country on an exchange programme when he was 12 years old.", B: "Alex accidentally asked for directions to an ice cream shop instead of a museum.", C: "Alex tried to pet a sheep because he thought it was a friendly dog.", D: "The dish Alex made in the cooking class tasted terrible because it had too much salt." }, correct: "A", explanation: "Bài đọc nói Alex là \"a 13-year-old boy\", không phải 12 tuổi." },
      { id: "r7", type: "fillblank", prompt: "Find the phrase in the passage that means 'phá lên cười'.", accepted: ["burst into laughter"], correct: "burst into laughter", explanation: "'His classmates burst into laughter...' — burst into laughter = phá lên cười." },
      { id: "r8", type: "mcq", prompt: "What mistake did Alex make in the cooking class?", options: { A: "He added way too much salt instead of sugar.", B: "He forgot to turn off the stove.", C: "He used the wrong recipe completely.", D: "He refused to taste the dish." }, correct: "A", explanation: "Bài đọc: 'instead of putting in some sugar, he accidentally added way too much salt.'" },
      { id: "r9", type: "truefalse", prompt: "According to the passage, Alex's mishaps prevented him from having a memorable experience.", correct: "False", explanation: "Sai. Bài đọc: 'Despite these funny mishaps, Alex's exchange programme was a memorable experience.' — những sự cố không hề ngăn cản trải nghiệm đáng nhớ của cậu." }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "Last year, he went on an exchange programme in a foreign country.", suggested: "Năm ngoái, cậu ấy đã tham gia một chương trình trao đổi ở nước ngoài.", notes: "\"go on + a programme\" (tham gia một chương trình) là cách diễn đạt phổ biến." },
    { id: "t2", en: "During a group outing, Alex mistook a sheep for a friendly dog and tried to pet it.", suggested: "Trong một chuyến đi chơi nhóm, Alex đã nhầm một con cừu thành một chú chó thân thiện và cố gắng vuốt ve nó.", notes: "\"mistake A for B\" (nhầm A thành B) là cấu trúc cố định." },
    { id: "t3", en: "The taste was so unbearable that even the chef couldn't help but laugh at his reaction.", suggested: "Vị của món ăn tệ đến mức ngay cả đầu bếp cũng phải bật cười trước phản ứng của cậu.", notes: "\"so + adj + that + mệnh đề\" (quá... đến nỗi...) diễn tả kết quả." },
    { id: "t4", en: "Despite these funny mishaps, Alex's exchange programme was a memorable experience.", suggested: "Dù có những sự cố hài hước này, chương trình trao đổi của Alex vẫn là một trải nghiệm đáng nhớ.", notes: "\"despite + N/V-ing\" (mặc dù) diễn tả sự tương phản." },
    { id: "t5", en: "He made friends from around the world and learned to embrace unexpected moments with a sense of humour.", suggested: "Cậu đã kết bạn với nhiều người trên khắp thế giới và học được cách đón nhận những khoảnh khắc bất ngờ với sự hài hước.", notes: "\"learn to + V\" (học được cách làm gì) diễn tả một kỹ năng/thái độ mới có được." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "started V-ing at + thời điểm ⇄ has/have been + V-ing + since + thời điểm",
      formula: "S + started + V-ing + at + thời điểm  →  S + has/have been + V-ing + since + thời điểm",
      example: { before: "An started doing yoga at 6 o'clock.", after: "An has been doing yoga since 6 o'clock." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "She started teaching at this school in 2018. → She has ______________ (been teaching) at this school since 2018.", accepted: ["been teaching"], correct: "been teaching", explanation: "started V-ing at → has been + V-ing + since." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'We started saving money last January.' → We have ______________ (been saving) money since last January.", accepted: ["been saving"], correct: "been saving", explanation: "started V-ing at → have been + V-ing + since." }
      ]
    },
    {
      id: "tr2", name: "It's the first time + has/have + V3 ⇄ have/has never + V3 + before",
      formula: "It's the first time + S + has/have + V3  →  S + have/has never + V3 + before",
      example: { before: "It's the first time her little son has tried Indian food.", after: "Her little son has never tried Indian food before." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "It's the first time we have watched this film. → We have ______________ (never watched) this film before.", accepted: ["never watched"], correct: "never watched", explanation: "It's the first time + have + V3 → have never + V3 + before." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'It's the first time she has driven a car.' → She has ______________ (never driven) a car before.", accepted: ["never driven"], correct: "never driven", explanation: "It's the first time + has + V3 → has never + V3 + before." }
      ]
    },
    {
      id: "tr3", name: "haven't/hasn't + V3 + for ⇄ The last time + V(quá khứ đơn) + was + ... + ago",
      formula: "S + haven't/hasn't + V3 + for + khoảng thời gian  →  The last time + S + V(quá khứ đơn) + was + khoảng thời gian + ago",
      example: { before: "They haven't met each other for two years.", after: "The last time they met each other was two years ago." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "I haven't eaten at that restaurant for six months. → The last time I ______________ (ate) at that restaurant was six months ago.", accepted: ["ate"], correct: "ate", explanation: "haven't + V3 + for → The last time + quá khứ đơn + was + ... + ago." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'He hasn't called his grandmother for a month.' → The last time he ______________ (called) his grandmother was a month ago.", accepted: ["called"], correct: "called", explanation: "hasn't + V3 + for → The last time + quá khứ đơn + was + ... + ago." }
      ]
    },
    {
      id: "tr4", name: "join + N ⇄ be a member of + N",
      formula: "S + have/has + joined + N  →  S + have/has been + a member of + N",
      example: { before: "I have joined the English club and worked as a tutor for a semester.", after: "I have been a member of the English club and a tutor for a semester." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "She has joined the chess club for a year. → She has been a ______________ (member) of the chess club for a year.", accepted: ["member"], correct: "member", explanation: "join + N → be a member of + N." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'We have joined the swimming team since June.' → We have been ______________ (members) of the swimming team since June.", accepted: ["members"], correct: "members", explanation: "join + N → be members of + N." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Helpless' means:", options: { A: "bất lực", B: "vui vẻ", C: "tự tin", D: "thận trọng" }, correct: "A", explanation: "helpless (adj) = bất lực." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Take advantage of' means:", options: { A: "lợi dụng", B: "tôn trọng", C: "giúp đỡ", D: "chia sẻ" }, correct: "A", explanation: "take advantage of (phr) = lợi dụng." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "It's a ______________ (cây nêu). We put it up to welcome Tet.", accepted: ["bamboo pole"], correct: "bamboo pole", explanation: "bamboo pole (n phr) = cây nêu." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "An started doing yoga at 6 o'clock. → An ______ doing yoga since 6 o'clock.", options: { A: "has been", B: "had been", C: "is", D: "was" }, correct: "A", explanation: "started V-ing at → has been + V-ing + since." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "It's the first time her little son has tried Indian food. → Her little son has ______ tried Indian food before.", options: { A: "ever", B: "never", C: "already", D: "just" }, correct: "B", explanation: "It's the first time + has + V3 → has never + V3 + before." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "They haven't met each other for two years. → The last time they met each other was two years ______________ (ago).", accepted: ["ago"], correct: "ago", explanation: "haven't + V3 + for → The last time + quá khứ đơn + was + ... + ago." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "I have joined the English club and worked as a tutor for a semester. → I have been a ______________ (member) of the English club and a tutor.", accepted: ["member"], correct: "member", explanation: "join + N → be a member of + N." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "Alex felt embarrassed when his classmates laughed at his mistake with the sheep.", correct: "True", explanation: "Đúng theo bài đọc." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "The cooking chef got angry because Alex ruined the traditional dish.", correct: "False", explanation: "Sai. Đầu bếp bật cười chứ không tức giận." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "What is the main idea of the passage about Alex?", options: { A: "A young boy's funny experiences and positive outcomes during an exchange programme.", B: "The dangers of traveling to foreign countries.", C: "How to cook traditional dishes correctly.", D: "The rules of international exchange programmes." }, correct: "A", explanation: "Bài đọc kể về những trải nghiệm hài hước và kết quả tích cực của Alex." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "We had an ______________ (amaze) trip to the mountainous area last summer.", accepted: ["amazing"], correct: "amazing", explanation: "amaze (v) → amazing (adj)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "The ______________ (erect) of the traditional Tet pole is a common sight in villages.", accepted: ["erection"], correct: "erection", explanation: "erect (v) → erection (n)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "______________ (luck), he realized he was on the wrong bus route.", accepted: ["unluckily"], correct: "Unluckily", explanation: "luck (n) → unluckily (adv)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'chương trình trao đổi'?", options: { A: "exchange programme", B: "traditional dish", C: "sense of humour", D: "bamboo pole" }, correct: "A", explanation: "exchange programme (n phr) = chương trình trao đổi." }
  ]
};
