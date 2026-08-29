const REVIEW = {
  id: "test34",
  testFile: "test34.html",
  grade: "Grade 6 — Global Success",
  unit: "Unit 5: Natural wonders of Viet Nam",
  title: "Knowledge Review — Unit 5, Practice Test 2",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "thrilling", pos: "adj", ipa: "/ˈθrɪlɪŋ/", meaning: "ly kỳ, hồi hộp", example: "We are organizing a thrilling trip to explore the natural wonders of Vietnam.", exampleVi: "Chúng tôi đang tổ chức một chuyến đi ly kỳ để khám phá các kỳ quan thiên nhiên của Việt Nam." },
    { word: "natural", pos: "adj", ipa: "/ˈnætʃrəl/", meaning: "tự nhiên", example: "Wild animals are happier in their natural state than in a zoo cage.", exampleVi: "Động vật hoang dã hạnh phúc hơn trong môi trường tự nhiên của chúng so với trong lồng ở sở thú." },
    { word: "polluted", pos: "adj", ipa: "/pəˈluːtɪd/", meaning: "bị ô nhiễm", example: "The air in many big cities is heavily polluted by vehicle exhaust fumes.", exampleVi: "Không khí ở nhiều thành phố lớn bị ô nhiễm nặng bởi khí thải xe cộ." },
    { word: "beautiful", pos: "adj", ipa: "/ˈbjuːtɪfl/", meaning: "đẹp", example: "The mountain waterfall will become radiant and beautiful in the moonlight.", exampleVi: "Thác nước trên núi sẽ trở nên rực rỡ và đẹp đẽ dưới ánh trăng." },
    { word: "traditional", pos: "adj", ipa: "/trəˈdɪʃənl/", meaning: "truyền thống", example: "Banh cuon and Pho are two famous traditional dishes that you must try in Hanoi.", exampleVi: "Bánh cuốn và Phở là hai món ăn truyền thống nổi tiếng mà bạn phải thử ở Hà Nội." },
    { word: "cuisine", pos: "n", ipa: "/kwɪˈziːn/", meaning: "nền ẩm thực", example: "Banh cuon is a famous traditional cuisine of Ha Noi.", exampleVi: "Bánh cuốn là một món ăn truyền thống nổi tiếng của ẩm thực Hà Nội." },
    { word: "aquarium", pos: "n", ipa: "/əˈkweəriəm/", meaning: "thủy cung, bể cá", example: "You can visit the Blue Reef aquarium and see a lot of different fish and even sharks.", exampleVi: "Bạn có thể ghé thăm thủy cung Blue Reef và xem nhiều loại cá khác nhau, thậm chí cả cá mập." },
    { word: "coasteering", pos: "n", ipa: "/koʊˈstɪərɪŋ/", meaning: "môn thể thao leo đá, nhảy biển và bơi kết hợp", example: "Coasteering is different because it is rock climbing, jumping into the sea and swimming in the same activity.", exampleVi: "Coasteering rất khác biệt vì nó kết hợp leo đá, nhảy xuống biển và bơi lội trong cùng một hoạt động." },
    { word: "kayaking", pos: "n", ipa: "/ˈkaɪækɪŋ/", meaning: "chèo thuyền kayak", example: "If you like water sports, you can go kayaking, water-skiing or coasteering.", exampleVi: "Nếu bạn thích các môn thể thao dưới nước, bạn có thể chèo thuyền kayak, trượt ván nước hoặc coasteering." },
    { word: "instructor", pos: "n", ipa: "/ɪnˈstrʌktər/", meaning: "huấn luyện viên", example: "You should always go coasteering with a special instructor.", exampleVi: "Bạn nên luôn đi coasteering cùng một huấn luyện viên chuyên biệt." },
    { word: "population", pos: "n", ipa: "/ˌpɒpjuˈleɪʃn/", meaning: "dân số", example: "Da Nang has a population of nearly 800,000 people.", exampleVi: "Đà Nẵng có dân số gần 800.000 người." },
    { word: "spacious", pos: "adj", ipa: "/ˈspeɪʃəs/", meaning: "rộng rãi", example: "The city part on the east bank is the newest and spacious.", exampleVi: "Khu vực bờ Đông của thành phố là mới nhất và rộng rãi." },
    { word: "crowded", pos: "adj", ipa: "/ˈkraʊdɪd/", meaning: "đông đúc", example: "The city part on the west bank is more crowded.", exampleVi: "Khu vực bờ Tây của thành phố đông đúc hơn." },
    { word: "bridge", pos: "n", ipa: "/brɪdʒ/", meaning: "cầu", example: "There are five bridges across the Han River.", exampleVi: "Có năm cây cầu bắc qua sông Hàn." },
    { word: "cost of living", pos: "n", ipa: "/kɒst əv ˈlɪvɪŋ/", meaning: "chi phí sinh hoạt", example: "The cost of living in Da Nang is the lowest in Central Viet Nam.", exampleVi: "Chi phí sinh hoạt ở Đà Nẵng thấp nhất miền Trung Việt Nam." },
    { word: "shade", pos: "n", ipa: "/ʃeɪd/", meaning: "bóng râm", example: "There are not many trees to provide shade in Da Nang in summer.", exampleVi: "Ở Đà Nẵng vào mùa hè có ít cây để tạo bóng râm." },
    { word: "exhaust fumes", pos: "n", ipa: "/ɪɡˈzɔːst fjuːmz/", meaning: "khí thải", example: "The air is heavily polluted with vehicle exhaust fumes.", exampleVi: "Không khí bị ô nhiễm nặng bởi khí thải xe cộ." },
    { word: "adventure", pos: "n", ipa: "/ədˈventʃər/", meaning: "cuộc phiêu lưu", example: "It's going to be a thrilling adventure.", exampleVi: "Đó sẽ là một cuộc phiêu lưu ly kỳ." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'bị ô nhiễm':", options: { A: "polluted", B: "crowded", C: "spacious", D: "natural" }, correct: "A", explanation: "<b>polluted</b> (adj) = bị ô nhiễm." },
      { id: "vp2", prompt: "Choose the word that means 'dân số':", options: { A: "population", B: "cuisine", C: "instructor", D: "adventure" }, correct: "A", explanation: "<b>population</b> (n) = dân số." },
      { id: "vp3", prompt: "\"The cost of living in Da Nang is the lowest in Central Viet Nam.\" → 'cost of living' means:", options: { A: "chi phí sinh hoạt", B: "dân số", C: "khí hậu", D: "diện tích" }, correct: "A", explanation: "\"<b>cost of living</b>\" (n) = chi phí sinh hoạt." },
      { id: "vp4", prompt: "Choose the word that means 'huấn luyện viên':", options: { A: "instructor", B: "tourist", C: "resident", D: "agent" }, correct: "A", explanation: "<b>instructor</b> (n) = huấn luyện viên." },
      { id: "vp5", prompt: "\"It's going to be a thrilling ______.\"", options: { A: "adventure", B: "shade", C: "bridge", D: "cuisine" }, correct: "A", explanation: "\"thrilling <b>adventure</b>\" (cuộc phiêu lưu ly kỳ) là cụm từ tự nhiên trong tiếng Anh." },
      { id: "vp6", prompt: "Choose the word that means 'rộng rãi':", options: { A: "spacious", B: "crowded", C: "polluted", D: "thrilling" }, correct: "A", explanation: "<b>spacious</b> (adj) = rộng rãi." }
    ],
    fillblank: [
      { id: "vf1", prompt: "The air in many big cities is heavily ______________ (bị ô nhiễm) by vehicle exhaust fumes.", accepted: ["polluted"], correct: "polluted", explanation: "<b>polluted</b> (adj) = bị ô nhiễm." },
      { id: "vf2", prompt: "Da Nang has a ______________ (dân số) of nearly 800,000 people.", accepted: ["population"], correct: "population", explanation: "<b>population</b> (n) = dân số." },
      { id: "vf3", prompt: "The city part on the west bank is more ______________ (đông đúc) than the east bank.", accepted: ["crowded"], correct: "crowded", explanation: "<b>crowded</b> (adj) = đông đúc." },
      { id: "vf4", prompt: "There are five ______________ (cây cầu) across the Han River.", accepted: ["bridges"], correct: "bridges", explanation: "<b>bridge</b> (n) → bridges (số nhiều) = cầu." },
      { id: "vf5", prompt: "You should always go coasteering with a special ______________ (huấn luyện viên).", accepted: ["instructor"], correct: "instructor", explanation: "<b>instructor</b> (n) = huấn luyện viên." },
      { id: "vf6", prompt: "There are not many trees to provide ______________ (bóng râm) in Da Nang in summer.", accepted: ["shade"], correct: "shade", explanation: "<b>shade</b> (n) = bóng râm." }
    ],
    matching: {
      left: ["cuisine", "kayaking", "spacious", "cost of living", "aquarium", "adventure"],
      right: ["nền ẩm thực", "chèo thuyền kayak", "rộng rãi", "chi phí sinh hoạt", "thủy cung, bể cá", "cuộc phiêu lưu"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"The air is heavily ______ with vehicle exhaust fumes.\" (POLLUTE)", options: { A: "pollute", B: "pollution", C: "polluted", D: "polluting" }, correct: "C", explanation: "Cần tính từ/quá khứ phân từ sau \"is heavily\" → pollute (v) → <b>polluted</b> (adj, +ed)." },
      { id: "cw2", prompt: "\"The mountain waterfall will become radiant and ______.\" (BEAUTY)", options: { A: "beauty", B: "beautiful", C: "beautifully", D: "beautify" }, correct: "B", explanation: "Cần tính từ song song với \"radiant\" → beauty (n) → <b>beautiful</b> (adj, +ful)." },
      { id: "cw3", prompt: "\"We are organizing a ______ trip.\" (THRILL)", options: { A: "thrill", B: "thrilled", C: "thrilling", D: "thriller" }, correct: "C", explanation: "Cần tính từ đứng trước danh từ \"trip\" → thrill (v/n) → <b>thrilling</b> (adj, +ing)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'polluted' mean?", options: { A: "trong lành", B: "bị ô nhiễm", C: "yên tĩnh", D: "sạch sẽ" }, correct: "B", explanation: "polluted (adj) = bị ô nhiễm." },
      { id: "wm2", prompt: "What does 'population' mean?", options: { A: "diện tích", B: "khí hậu", C: "dân số", D: "văn hóa" }, correct: "C", explanation: "population (n) = dân số." },
      { id: "wm3", prompt: "What does 'crowded' mean?", options: { A: "đông đúc", B: "vắng vẻ", C: "rộng rãi", D: "yên bình" }, correct: "A", explanation: "crowded (adj) = đông đúc." }
    ],
    wordForm: [
      { id: "wf1", prompt: "We are organizing a ______________ (THRILL) trip to explore the natural wonders of Vietnam.", accepted: ["thrilling"], correct: "thrilling", explanation: "thrill (v/n) → thrilling (adj, +ing)." },
      { id: "wf2", prompt: "The mountain waterfall will become radiant and ______________ (BEAUTY) in the moonlight.", accepted: ["beautiful"], correct: "beautiful", explanation: "beauty (n) → beautiful (adj, +ful)." },
      { id: "wf3", prompt: "The air in many big cities is heavily ______________ (POLLUTE) by vehicle exhaust fumes.", accepted: ["polluted"], correct: "polluted", explanation: "pollute (v) → polluted (adj, +ed)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "..., so + kết quả ⇄ Because + nguyên nhân, + kết quả",
      usage: "Câu ghép với \"..., so + kết quả\" (vì vậy) có thể viết lại bằng \"Because + nguyên nhân, + kết quả\", đảo trật tự hai vế nhưng giữ nguyên quan hệ nhân quả.",
      formulas: [
        "Nguyên nhân, so + kết quả.  →  Because + nguyên nhân, + kết quả.",
        "It can be quite cold at night in Da Lat, so take some warm clothes with you. → Because it can be quite cold at night in Da Lat, you should take some warm clothes with you."
      ],
      signals: ["..., so + kết quả", "Because + nguyên nhân, + kết quả"],
      examples: [
        { en: "It can be quite cold at night in Da Lat, so take some warm clothes with you.", vi: "Trời có thể khá lạnh vào ban đêm ở Đà Lạt, vì vậy hãy mang theo vài bộ quần áo ấm." },
        { en: "Because it can be quite cold at night in Da Lat, you should take some warm clothes with you.", vi: "Vì trời có thể khá lạnh vào ban đêm ở Đà Lạt, bạn nên mang theo vài bộ quần áo ấm." }
      ],
      mistakes: [
        { wrong: "Because it can be cold, so you should take warm clothes.", right: "Because it can be cold, you should take warm clothes. (không dùng cả \"because\" và \"so\" trong cùng một câu)" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "The road was icy, so we drove slowly. → ______________ (Because) the road was icy, we drove slowly.", accepted: ["because"], correct: "Because", explanation: "..., so + kết quả → Because + nguyên nhân, + kết quả." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'It was hot, so we went swimming.' → ______________ (Because) it was hot, we went swimming.", accepted: ["because"], correct: "Because", explanation: "..., so + kết quả → Because + nguyên nhân, + kết quả." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The air is polluted, so you should wear a mask.' → ______________ (Because the air is polluted, you should wear a mask).", accepted: ["because the air is polluted, you should wear a mask"], correct: "Because the air is polluted, you should wear a mask", explanation: "..., so + kết quả → Because + nguyên nhân, + kết quả." }
        ]
      }
    },
    {
      id: "g2", name: "Their strict rule is V-ing ⇄ You must + V",
      usage: "\"Their strict rule is + V-ing\" (quy định nghiêm ngặt của họ là...) có thể viết lại bằng \"You must + V nguyên thể\" để diễn tả sự bắt buộc mang cùng ý nghĩa.",
      formulas: [
        "Their strict rule is + V-ing.  →  You must + V nguyên thể.",
        "Their strict rule is wearing a swimsuit in the public pool. → You must wear a swimsuit in the public pool."
      ],
      signals: ["Their strict rule is + V-ing", "You must + V"],
      examples: [
        { en: "Their strict rule is wearing a swimsuit in the public pool.", vi: "Quy định nghiêm ngặt của họ là phải mặc đồ bơi ở hồ bơi công cộng." },
        { en: "You must wear a swimsuit in the public pool.", vi: "Bạn phải mặc đồ bơi ở hồ bơi công cộng." }
      ],
      mistakes: [
        { wrong: "You must to wear a swimsuit.", right: "You must wear a swimsuit. (\"must\" là động từ khiếm khuyết, theo sau bằng V nguyên thể không \"to\")" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "Their strict rule is arriving on time. → You ______________ (must) arrive on time.", accepted: ["must"], correct: "must", explanation: "Their strict rule is V-ing → You must + V." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'Their strict rule is keeping quiet in the library.' → You ______________ (must) keep quiet in the library.", accepted: ["must"], correct: "must", explanation: "Their strict rule is V-ing → You must + V." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Their strict rule is bringing warm clothes to Sapa in winter.' → ______________ (You must bring warm clothes to Sapa in winter).", accepted: ["you must bring warm clothes to sapa in winter"], correct: "You must bring warm clothes to Sapa in winter", explanation: "Their strict rule is V-ing → You must + V." }
        ]
      }
    },
    {
      id: "g3", name: "be famous for ⇄ have a reputation for",
      usage: "\"be famous for + N/V-ing\" (nổi tiếng vì) có thể viết lại bằng \"have a reputation for + N/V-ing\" (có danh tiếng vì), giữ nguyên nghĩa.",
      formulas: [
        "S + is/are famous for + N.  →  S + has/have a reputation for + N.",
        "This site is famous for its thrilling scenery. → This site has a reputation for its thrilling scenery."
      ],
      signals: ["be famous for", "have a reputation for"],
      examples: [
        { en: "This site is famous for its thrilling scenery.", vi: "Địa điểm này nổi tiếng vì cảnh quan ly kỳ của nó." },
        { en: "This site has a reputation for its thrilling scenery.", vi: "Địa điểm này có danh tiếng vì cảnh quan ly kỳ của nó." }
      ],
      mistakes: [
        { wrong: "This site has a reputation of its thrilling scenery.", right: "This site has a reputation for its thrilling scenery. (giới từ đi cùng \"reputation\" là \"for\", không phải \"of\")" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "This city is famous for its beaches. → This city has a reputation ______________ (for) its beaches.", accepted: ["for"], correct: "for", explanation: "have a reputation for = be famous for." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'This restaurant is famous for its seafood.' → This restaurant has a reputation ______________ (for) its seafood.", accepted: ["for"], correct: "for", explanation: "have a reputation for = be famous for." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Da Nang is famous for its bridges.' → ______________ (Da Nang has a reputation for its bridges).", accepted: ["da nang has a reputation for its bridges"], correct: "Da Nang has a reputation for its bridges", explanation: "be famous for → have a reputation for." }
        ]
      }
    },
    {
      id: "g4", name: "How much money do you need for + N? ⇄ What is the price/cost of + N?",
      usage: "Câu hỏi \"How much money do you need for + N?\" (bạn cần bao nhiêu tiền cho...) có thể viết lại bằng \"What is the price/cost of + N?\" (giá của... là bao nhiêu), cùng hỏi về chi phí.",
      formulas: [
        "How much money do you need for + N?  →  What is the price/cost of + N?",
        "How much money do you need for a tour to Mui Ne? → What is the price of a tour to Mui Ne?"
      ],
      signals: ["How much money do you need for...?", "What is the price/cost of...?"],
      examples: [
        { en: "How much money do you need for a tour to Mui Ne?", vi: "Bạn cần bao nhiêu tiền cho một chuyến du lịch đến Mũi Né?" },
        { en: "What is the price of a tour to Mui Ne?", vi: "Giá của một chuyến du lịch đến Mũi Né là bao nhiêu?" }
      ],
      mistakes: [
        { wrong: "What is the price for a tour to Mui Ne?", right: "What is the price of a tour to Mui Ne? (giới từ đi cùng \"price\" là \"of\", không phải \"for\")" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "How much money do you need for a ticket? → What is the price ______________ (of) a ticket?", accepted: ["of"], correct: "of", explanation: "\"the price of + N\" luôn dùng giới từ \"of\"." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'How much money do you need for the trip?' → What is the cost ______________ (of) the trip?", accepted: ["of"], correct: "of", explanation: "\"the cost of + N\" luôn dùng giới từ \"of\"." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'How much money do you need for a room in this hotel?' → ______________ (What is the price of a room in this hotel?).", accepted: ["what is the price of a room in this hotel"], correct: "What is the price of a room in this hotel?", explanation: "How much money do you need for N? → What is the price of N?" }
        ]
      }
    },
    {
      id: "g5", name: "(Bonus) Dùng \"some\" thay vì \"any\" trong câu hỏi mang tính đề nghị/mời",
      usage: "Thông thường \"any\" được dùng trong câu hỏi và câu phủ định, còn \"some\" dùng trong câu khẳng định. Tuy nhiên, khi câu hỏi là một lời đề nghị hoặc lời mời và người hỏi mong đợi câu trả lời \"có\", ta dùng \"some\" thay vì \"any\".",
      formulas: [
        "Have you got some + N...? (lời đề nghị/mời, mong đợi câu trả lời đồng ý)",
        "Have you got some time for coffee after the lecture?"
      ],
      signals: ["Have you got some...?", "Would you like some...?", "Can I have some...?"],
      examples: [
        { en: "Have you got some time for coffee after the lecture?", vi: "Bạn có chút thời gian để uống cà phê sau buổi giảng không?" },
        { en: "Would you like some tea?", vi: "Bạn có muốn dùng chút trà không?" }
      ],
      mistakes: [
        { wrong: "Have you got any time for coffee? (khi đây là một lời mời)", right: "Have you got some time for coffee? (dùng \"some\" khi câu hỏi mang tính mời, mong đợi câu trả lời \"có\")" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "Would you like ______________ (some) more cake?", accepted: ["some"], correct: "some", explanation: "Câu mời dùng \"some\" thay vì \"any\"." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Rewrite: 'Do you want any help?' (as an offer) → Would you like ______________ (some) help?", accepted: ["some"], correct: "some", explanation: "Câu đề nghị/mời dùng \"some\"." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Complete: 'Can I have ______________ (some) water, please?' (a polite request)", accepted: ["some"], correct: "some", explanation: "Lời đề nghị/yêu cầu lịch sự dùng \"some\"." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "Da Nang has <mark data-w=\"a population of nearly 800,000 people\">a population of nearly 800,000 people</mark>. The Han River flows through the city. The city part on the east bank is the newest and spacious. <mark data-w=\"The city part on the west bank is more crowded\">The city part on the west bank is more crowded</mark>. There are <mark data-w=\"five bridges across the river\">five bridges across the river</mark>. The Han River Bridge is the newest one now. <mark data-w=\"The cost of living in Da Nang is the lowest in Central Viet Nam\">The cost of living in Da Nang is the lowest in Central Viet Nam</mark>. Da Nang has many beaches. Among them, Non Nuoc Beach is one of the beautiful beaches in the world. But walking in the street on a summer afternoon is not a good idea in Da Nang. <mark data-w=\"There are not many trees so there are not many shadows\">There are not many trees so there are not many shadows</mark>. It is often very hot at noon.",
    vocabInContext: {
      "a population of nearly 800,000 people": "dân số gần 800.000 người",
      "The city part on the west bank is more crowded": "khu vực bờ Tây của thành phố đông đúc hơn",
      "five bridges across the river": "năm cây cầu bắc qua sông",
      "The cost of living in Da Nang is the lowest in Central Viet Nam": "chi phí sinh hoạt ở Đà Nẵng thấp nhất miền Trung Việt Nam",
      "There are not many trees so there are not many shadows": "có ít cây nên có ít bóng râm"
    },
    translation: "<b>ĐÀ NẴNG</b><br><br>Đà Nẵng có dân số gần 800.000 người. Sông Hàn chảy qua thành phố. Khu vực bờ Đông của thành phố là mới nhất và rộng rãi. Khu vực bờ Tây của thành phố đông đúc hơn. Có năm cây cầu bắc qua sông. Cầu Sông Hàn hiện là cây cầu mới nhất. Chi phí sinh hoạt ở Đà Nẵng thấp nhất miền Trung Việt Nam. Đà Nẵng có nhiều bãi biển. Trong số đó, bãi biển Non Nước là một trong những bãi biển đẹp trên thế giới. Nhưng đi bộ trên đường vào một buổi chiều mùa hè không phải là ý hay ở Đà Nẵng. Có ít cây nên có ít bóng râm. Trời thường rất nóng vào buổi trưa.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "There are fewer than 800,000 people living in Da Nang.", correct: "True", explanation: "Đúng. \"Da Nang has a population of nearly 800,000 people\" — \"nearly\" nghĩa là ít hơn 800.000." },
      { id: "r2", type: "truefalse", prompt: "The west bank of the city is less crowded than the east bank.", correct: "False", explanation: "Sai. Bờ Tây đông đúc hơn bờ Đông, không phải ít đông đúc hơn." },
      { id: "r3", type: "truefalse", prompt: "Da Nang is the cheapest place to live in Central Viet Nam.", correct: "True", explanation: "Đúng. \"The cost of living in Da Nang is the lowest in Central Viet Nam.\"" },
      { id: "r4", type: "truefalse", prompt: "Walking around the city on a summer afternoon is highly recommended.", correct: "False", explanation: "Sai. \"walking in the street on a summer afternoon is not a good idea in Da Nang.\"" },
      { id: "r5", type: "mcq", prompt: "How many bridges are there across the Han River in Da Nang?", options: { A: "Five", B: "Three", C: "Four", D: "Six" }, correct: "A", explanation: "Bài đọc: \"There are five bridges across the river.\"" },
      { id: "r6", type: "mcq", prompt: "Why is it not a good idea to walk in the street on a summer afternoon?", options: { A: "Because there are not many trees to provide shade.", B: "Because there are too many beaches.", C: "Because the cost of living is too low.", D: "Because the city is too crowded." }, correct: "A", explanation: "Bài đọc: \"There are not many trees so there are not many shadows.\"" },
      { id: "r7", type: "fillblank", prompt: "Find the word in the passage that means 'sông' (dòng nước chảy qua thành phố).", accepted: ["river"], correct: "river", explanation: "\"The Han River flows through the city.\" — river = sông." },
      { id: "r8", type: "mcq", prompt: "What is the name of the newest bridge in Da Nang mentioned in the passage?", options: { A: "The Han River Bridge", B: "The Dragon Bridge", C: "The Love Bridge", D: "The Golden Bridge" }, correct: "A", explanation: "Bài đọc: \"The Han River Bridge is the newest one now.\"" },
      { id: "r9", type: "truefalse", prompt: "Non Nuoc Beach is considered one of the beautiful beaches in the world.", correct: "True", explanation: "Đúng. Bài đọc: \"Non Nuoc Beach is one of the beautiful beaches in the world.\"" }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "Da Nang has a population of nearly 800,000 people.", suggested: "Đà Nẵng có dân số gần 800.000 người.", notes: "\"a population of + số lượng\" chỉ quy mô dân số." },
    { id: "t2", en: "The city part on the west bank is more crowded.", suggested: "Khu vực bờ Tây của thành phố đông đúc hơn.", notes: "\"more crowded\" là so sánh hơn của tính từ dài \"crowded\"." },
    { id: "t3", en: "The cost of living in Da Nang is the lowest in Central Viet Nam.", suggested: "Chi phí sinh hoạt ở Đà Nẵng thấp nhất miền Trung Việt Nam.", notes: "\"the lowest\" là so sánh nhất của tính từ \"low\"." },
    { id: "t4", en: "There are not many trees so there are not many shadows.", suggested: "Có ít cây nên có ít bóng râm.", notes: "\"so\" nối nguyên nhân và kết quả." },
    { id: "t5", en: "In Newquay, there are lots of other things to do as well as surfing.", suggested: "Ở Newquay, có rất nhiều hoạt động khác để làm ngoài môn lướt sóng.", notes: "\"as well as\" (cũng như, ngoài ra còn) nối hai ý." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "..., so + kết quả ⇄ Because + nguyên nhân, + kết quả",
      formula: "Nguyên nhân, so + kết quả  →  Because + nguyên nhân, + kết quả",
      example: { before: "It can be quite cold at night in Da Lat, so take some warm clothes with you.", after: "Because it can be quite cold at night in Da Lat, you should take some warm clothes with you." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "The road was icy, so we drove slowly. → ______________ (Because) the road was icy, we drove slowly.", accepted: ["because"], correct: "Because", explanation: "..., so + kết quả → Because + nguyên nhân, + kết quả." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'It was hot, so we went swimming.' → ______________ (Because) it was hot, we went swimming.", accepted: ["because"], correct: "Because", explanation: "..., so + kết quả → Because + nguyên nhân, + kết quả." }
      ]
    },
    {
      id: "tr2", name: "Their strict rule is V-ing ⇄ You must + V",
      formula: "Their strict rule is + V-ing  →  You must + V nguyên thể",
      example: { before: "Their strict rule is wearing a swimsuit in the public pool.", after: "You must wear a swimsuit in the public pool." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "Their strict rule is arriving on time. → You ______________ (must) arrive on time.", accepted: ["must"], correct: "must", explanation: "Their strict rule is V-ing → You must + V." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'Their strict rule is keeping quiet in the library.' → You ______________ (must) keep quiet in the library.", accepted: ["must"], correct: "must", explanation: "Their strict rule is V-ing → You must + V." }
      ]
    },
    {
      id: "tr3", name: "be famous for ⇄ have a reputation for",
      formula: "S + is/are famous for + N  →  S + has/have a reputation for + N",
      example: { before: "This site is famous for its thrilling scenery.", after: "This site has a reputation for its thrilling scenery." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "This city is famous for its beaches. → This city has a reputation ______________ (for) its beaches.", accepted: ["for"], correct: "for", explanation: "have a reputation for = be famous for." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'This restaurant is famous for its seafood.' → This restaurant has a reputation ______________ (for) its seafood.", accepted: ["for"], correct: "for", explanation: "have a reputation for = be famous for." }
      ]
    },
    {
      id: "tr4", name: "How much money do you need for + N? ⇄ What is the price/cost of + N?",
      formula: "How much money do you need for + N?  →  What is the price/cost of + N?",
      example: { before: "How much money do you need for a tour to Mui Ne?", after: "What is the price of a tour to Mui Ne?" },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "How much money do you need for a ticket? → What is the price ______________ (of) a ticket?", accepted: ["of"], correct: "of", explanation: "\"the price of + N\" luôn dùng giới từ \"of\"." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'How much money do you need for the trip?' → What is the cost ______________ (of) the trip?", accepted: ["of"], correct: "of", explanation: "\"the cost of + N\" luôn dùng giới từ \"of\"." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Polluted' means:", options: { A: "trong lành", B: "bị ô nhiễm", C: "yên tĩnh", D: "sạch sẽ" }, correct: "B", explanation: "polluted (adj) = bị ô nhiễm." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Crowded' means:", options: { A: "vắng vẻ", B: "đông đúc", C: "rộng rãi", D: "yên bình" }, correct: "B", explanation: "crowded (adj) = đông đúc." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "Da Nang has a ______________ (dân số) of nearly 800,000 people.", accepted: ["population"], correct: "population", explanation: "population (n) = dân số." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "It was hot, so we went swimming. → ______ it was hot, we went swimming.", options: { A: "Because", B: "So", C: "But", D: "Although" }, correct: "A", explanation: "..., so + kết quả → Because + nguyên nhân, + kết quả." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "Their strict rule is wearing a swimsuit. → You ______ wear a swimsuit.", options: { A: "must", B: "can", C: "may", D: "should to" }, correct: "A", explanation: "Their strict rule is V-ing → You must + V." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "This site is famous for its scenery. → This site has a reputation ______________ (for) its scenery.", accepted: ["for"], correct: "for", explanation: "have a reputation for = be famous for." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "How much money do you need for a tour? → What is the price ______________ (of) a tour?", accepted: ["of"], correct: "of", explanation: "\"the price of + N\" luôn dùng giới từ \"of\"." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "The west bank of the city is less crowded than the east bank.", correct: "False", explanation: "Sai theo bài đọc — bờ Tây đông đúc hơn." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "Da Nang is the cheapest place to live in Central Viet Nam.", correct: "True", explanation: "Đúng theo bài đọc." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "Why is it not a good idea to walk in the street on a summer afternoon in Da Nang?", options: { A: "Because there are not many trees to provide shade.", B: "Because there are too many beaches.", C: "Because the cost of living is too low.", D: "Because the city is too crowded." }, correct: "A", explanation: "Bài đọc nêu rõ thiếu cây xanh nên thiếu bóng râm." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "We are organizing a ______________ (THRILL) trip to explore the natural wonders of Vietnam.", accepted: ["thrilling"], correct: "thrilling", explanation: "thrill (v/n) → thrilling (adj, +ing)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "The mountain waterfall will become radiant and ______________ (BEAUTY) in the moonlight.", accepted: ["beautiful"], correct: "beautiful", explanation: "beauty (n) → beautiful (adj, +ful)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "Ha Long Bay is famous for its magnificent caves and unique ______________ (NATURE) wonders.", accepted: ["natural"], correct: "natural", explanation: "nature (n) → natural (adj)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'nền ẩm thực'?", options: { A: "cuisine", B: "instructor", C: "population", D: "adventure" }, correct: "A", explanation: "cuisine (n) = nền ẩm thực." }
  ]
};
