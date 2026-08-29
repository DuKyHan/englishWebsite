const REVIEW = {
  id: "test46",
  testFile: "test46.html",
  grade: "Grade 7 — Global Success",
  unit: "Unit 5: Vietnamese Food and Drink",
  title: "Knowledge Review — Unit 5, Practice Test 2",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "paddy", pos: "n", ipa: "/ˈpædi/", meaning: "ruộng lúa nước", example: "Rice plants are moved to fields covered with muddy water called paddies.", exampleVi: "Cây lúa được chuyển đến những cánh đồng phủ đầy nước bùn gọi là ruộng lúa nước." },
    { word: "harvest", pos: "v/n", ipa: "/ˈhɑːrvɪst/", meaning: "thu hoạch", example: "People often drain away water before harvesting rice.", exampleVi: "Người ta thường tháo nước trước khi thu hoạch lúa." },
    { word: "chopsticks", pos: "n", ipa: "/ˈtʃɒpstɪks/", meaning: "đũa", example: "They use two short sticks known as chopsticks to put rice into their mouths.", exampleVi: "Họ dùng hai chiếc que ngắn được gọi là đũa để đưa cơm vào miệng." },
    { word: "cuisine", pos: "n", ipa: "/kwɪˈziːn/", meaning: "nền ẩm thực", example: "Northern Vietnam is seen to be the cradle of Vietnamese cuisine.", exampleVi: "Miền Bắc Việt Nam được xem là cái nôi của nền ẩm thực Việt Nam." },
    { word: "cradle", pos: "n", ipa: "/ˈkreɪdl/", meaning: "cái nôi (nơi khởi nguồn)", example: "Northern Vietnam is seen to be the cradle of Vietnamese cuisine.", exampleVi: "Miền Bắc Việt Nam được xem là cái nôi của nền ẩm thực Việt Nam." },
    { word: "characterized", pos: "adj", ipa: "/ˈkærəktəraɪzd/", meaning: "được đặc trưng bởi", example: "In Northern Vietnam, food is characterized by light and balanced flavors.", exampleVi: "Ở miền Bắc Việt Nam, ẩm thực được đặc trưng bởi hương vị nhẹ nhàng và cân bằng." },
    { word: "regional", pos: "adj", ipa: "/ˈriːdʒənl/", meaning: "thuộc vùng miền", example: "The regional cuisine of Central Vietnam is famous for its spicy food.", exampleVi: "Ẩm thực vùng miền Trung Việt Nam nổi tiếng với món ăn cay." },
    { word: "spicy", pos: "adj", ipa: "/ˈspaɪsi/", meaning: "cay", example: "The regional cuisine of Central Vietnam is famous for its spicy food.", exampleVi: "Ẩm thực vùng miền Trung Việt Nam nổi tiếng với món ăn cay." },
    { word: "chili pepper", pos: "phrase", ipa: "/ˈtʃɪli ˈpepər/", meaning: "ớt", example: "Food in the region is often used with chili peppers and shrimp sauces.", exampleVi: "Món ăn trong vùng thường được nêm ớt và mắm tôm." },
    { word: "shrimp sauce", pos: "phrase", ipa: "/ʃrɪmp sɔːs/", meaning: "mắm tôm", example: "Food in the region is often used with chili peppers and shrimp sauces.", exampleVi: "Món ăn trong vùng thường được nêm ớt và mắm tôm." },
    { word: "fertile", pos: "adj", ipa: "/ˈfɜːrtl/", meaning: "màu mỡ", example: "The warm weather and fertile soil create an ideal condition for planting.", exampleVi: "Thời tiết ấm áp và đất đai màu mỡ tạo điều kiện lý tưởng để trồng trọt." },
    { word: "livestock", pos: "n", ipa: "/ˈlaɪvstɒk/", meaning: "gia súc, vật nuôi", example: "Southern Vietnam has ideal conditions for planting fruit, vegetables and livestock.", exampleVi: "Miền Nam Việt Nam có điều kiện lý tưởng để trồng trái cây, rau củ và chăn nuôi gia súc." },
    { word: "shallot", pos: "n", ipa: "/ʃəˈlɒt/", meaning: "hành tím", example: "Food in the region is often added with garlic, shallots and fresh herbs.", exampleVi: "Món ăn trong vùng thường được thêm tỏi, hành tím và rau thơm tươi." },
    { word: "signature dish", pos: "phrase", ipa: "/ˈsɪɡnətʃər dɪʃ/", meaning: "món ăn đặc trưng", example: "Some signature dishes from Southern Vietnam include Banh Khot and Bun Mam.", exampleVi: "Một số món ăn đặc trưng của miền Nam Việt Nam gồm bánh khọt và bún mắm." },
    { word: "tablespoon", pos: "n", ipa: "/ˈteɪblspuːn/", meaning: "muỗng canh", example: "Remember to add two tablespoons of water into the pot.", exampleVi: "Nhớ cho thêm hai muỗng canh nước vào nồi." },
    { word: "fizzy drink", pos: "phrase", ipa: "/ˈfɪzi drɪŋk/", meaning: "nước ngọt có ga", example: "How often do you have fizzy drinks?", exampleVi: "Bạn uống nước ngọt có ga thường xuyên như thế nào?" },
    { word: "mineral water", pos: "phrase", ipa: "/ˈmɪnərəl ˈwɔːtər/", meaning: "nước khoáng", example: "I prefer fresh fruit juice or mineral water.", exampleVi: "Tôi thích nước ép trái cây tươi hoặc nước khoáng hơn." },
    { word: "snack", pos: "n", ipa: "/snæk/", meaning: "đồ ăn nhẹ", example: "Many children eat a quick snack when they get home from school.", exampleVi: "Nhiều trẻ em ăn một món ăn nhẹ nhanh khi về nhà từ trường." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'thu hoạch':", options: { A: "harvest", B: "plant", C: "water", D: "grow" }, correct: "A", explanation: "<b>harvest</b> (v) = thu hoạch." },
      { id: "vp2", prompt: "Choose the word that means 'đũa':", options: { A: "chopsticks", B: "spoons", C: "forks", D: "bowls" }, correct: "A", explanation: "<b>chopsticks</b> (n) = đũa." },
      { id: "vp3", prompt: "\"Northern Vietnam is seen to be the ______ of Vietnamese cuisine.\"", options: { A: "cradle", B: "border", C: "edge", D: "corner" }, correct: "A", explanation: "\"the <b>cradle</b> of Vietnamese cuisine\" (cái nôi của nền ẩm thực) phù hợp nhất khi nói về nơi khởi nguồn." },
      { id: "vp4", prompt: "Choose the word that means 'cay':", options: { A: "spicy", B: "sweet", C: "sour", D: "salty" }, correct: "A", explanation: "<b>spicy</b> (adj) = cay." },
      { id: "vp5", prompt: "\"The warm weather and ______ soil create an ideal condition for planting.\"", options: { A: "fertile", B: "dry", C: "rocky", D: "poor" }, correct: "A", explanation: "\"<b>fertile</b> soil\" (đất màu mỡ) phù hợp với ngữ cảnh trồng trọt thuận lợi." },
      { id: "vp6", prompt: "Choose the word that means 'món ăn đặc trưng':", options: { A: "signature dish", B: "fast food", C: "leftover", D: "side dish" }, correct: "A", explanation: "<b>signature dish</b> (phrase) = món ăn đặc trưng." }
    ],
    fillblank: [
      { id: "vf1", prompt: "Rice plants are moved to fields covered with muddy water called ______________ (ruộng lúa nước).", accepted: ["paddies"], correct: "paddies", explanation: "<b>paddy</b> (n) = ruộng lúa nước (số nhiều: paddies)." },
      { id: "vf2", prompt: "They use two short sticks known as ______________ (đũa) to put rice into their mouths.", accepted: ["chopsticks"], correct: "chopsticks", explanation: "<b>chopsticks</b> (n) = đũa." },
      { id: "vf3", prompt: "The regional ______________ (nền ẩm thực) of Central Vietnam is famous for its spicy food.", accepted: ["cuisine"], correct: "cuisine", explanation: "<b>cuisine</b> (n) = nền ẩm thực." },
      { id: "vf4", prompt: "Food in the region is often used with ______________ (ớt) and shrimp sauces.", accepted: ["chili peppers"], correct: "chili peppers", explanation: "<b>chili pepper</b> (phrase) = ớt." },
      { id: "vf5", prompt: "Food in the region is often added with garlic, ______________ (hành tím) and fresh herbs.", accepted: ["shallots"], correct: "shallots", explanation: "<b>shallot</b> (n) = hành tím." },
      { id: "vf6", prompt: "Some ______________ (món ăn đặc trưng) from Southern Vietnam include Banh Khot and Bun Mam.", accepted: ["signature dishes"], correct: "signature dishes", explanation: "<b>signature dish</b> (phrase) = món ăn đặc trưng." }
    ],
    matching: {
      left: ["cradle", "characterized", "regional", "livestock", "tablespoon", "mineral water"],
      right: ["cái nôi", "được đặc trưng bởi", "thuộc vùng miền", "gia súc, vật nuôi", "muỗng canh", "nước khoáng"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"The food at the school festival was ______ prepared by the students.\" (CARE)", options: { A: "care", B: "careful", C: "carefully", D: "careless" }, correct: "C", explanation: "Cần trạng từ bổ nghĩa cho động từ \"prepared\" → care (n) → <b>carefully</b> (adv, +ful+ly)." },
      { id: "cw2", prompt: "\"Pho is one of the ______ traditional dishes in Vietnam.\" (TASTE)", options: { A: "taste", B: "tasty", C: "tastiest", D: "tasteless" }, correct: "C", explanation: "Cần tính từ so sánh nhất sau \"one of the\" → taste (n) → <b>tastiest</b> (adj so sánh nhất)." },
      { id: "cw3", prompt: "\"The warm weather in the South creates ______ conditions for agriculture.\" (IDEA)", options: { A: "idea", B: "ideal", C: "ideally", D: "idealize" }, correct: "B", explanation: "Cần tính từ trước \"conditions\" → idea (n) → <b>ideal</b> (adj, lý tưởng)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'cuisine' mean?", options: { A: "nền ẩm thực", B: "công thức nấu ăn", C: "nhà hàng", D: "đầu bếp" }, correct: "A", explanation: "cuisine (n) = nền ẩm thực." },
      { id: "wm2", prompt: "What does 'fertile' mean?", options: { A: "màu mỡ", B: "khô cằn", C: "đá sỏi", D: "ngập nước" }, correct: "A", explanation: "fertile (adj) = màu mỡ." },
      { id: "wm3", prompt: "What does 'livestock' mean?", options: { A: "gia súc, vật nuôi", B: "cây trồng", C: "hạt giống", D: "phân bón" }, correct: "A", explanation: "livestock (n) = gia súc, vật nuôi." }
    ],
    wordForm: [
      { id: "wf1", prompt: "The food at the school festival was ______________ (CARE) prepared by the students.", accepted: ["carefully"], correct: "carefully", explanation: "care (n) → carefully (adv)." },
      { id: "wf2", prompt: "Pho is one of the ______________ (TASTE) traditional dishes in Vietnam.", accepted: ["tastiest"], correct: "tastiest", explanation: "taste (n) → tastiest (adj so sánh nhất)." },
      { id: "wf3", prompt: "The warm weather in the South creates ______________ (IDEA) conditions for agriculture.", accepted: ["ideal"], correct: "ideal", explanation: "idea (n) → ideal (adj)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "How much is + N? ⇄ How much does + N + cost?",
      usage: "\"How much is + N?\" (cái gì giá bao nhiêu) có thể viết lại bằng \"How much does + N + cost?\", giữ nguyên nghĩa hỏi về giá cả.",
      formulas: [
        "How much is + N?  →  How much does + N + cost?",
        "How much is a bag of popcorn? → How much does a bag of popcorn cost?"
      ],
      signals: ["How much is N?", "How much does N cost?"],
      examples: [
        { en: "How much is a bag of popcorn at the school canteen?", vi: "Một túi bỏng ngô ở căng tin trường giá bao nhiêu?" },
        { en: "How much does a bag of popcorn cost at the school canteen?", vi: "Một túi bỏng ngô ở căng tin trường giá bao nhiêu?" }
      ],
      mistakes: [
        { wrong: "How much does a bag of popcorn?", right: "How much does a bag of popcorn cost? (cần động từ \"cost\" ở cuối câu khi dùng trợ động từ \"does\")" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "How much is this drink? → How much does this drink ______________ (cost)?", accepted: ["cost"], correct: "cost", explanation: "How much is N? → How much does N cost?" }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'How much is a bowl of Pho?' → How much does a bowl of Pho ______________ (cost)?", accepted: ["cost"], correct: "cost", explanation: "How much is N? → How much does N cost?" }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'How much is a bottle of fish sauce?' → ______________ (How much does a bottle of fish sauce cost?).", accepted: ["how much does a bottle of fish sauce cost"], correct: "How much does a bottle of fish sauce cost?", explanation: "How much is N? → How much does N cost?" }
        ]
      }
    },
    {
      id: "g2", name: "S + want(s) + N ⇄ S + would like + to have + N",
      usage: "\"S + want(s) + N\" (muốn cái gì) có thể viết lại lịch sự hơn bằng \"S + would like + to have + N\", giữ nguyên nghĩa.",
      formulas: [
        "S + want(s) + N.  →  S + would like + to have + N.",
        "Mr. Long wants a cold drink. → Mr. Long would like to have a cold drink."
      ],
      signals: ["want(s) N", "would like to have N"],
      examples: [
        { en: "Mr. Long wants a cold drink after working under the hot sun.", vi: "Ông Long muốn có một ly nước lạnh sau khi làm việc dưới nắng gắt." },
        { en: "Mr. Long would like to have a cold drink after working under the hot sun.", vi: "Ông Long muốn có một ly nước lạnh sau khi làm việc dưới nắng gắt." }
      ],
      mistakes: [
        { wrong: "Mr. Long would like have a cold drink.", right: "Mr. Long would like to have a cold drink. (cần \"to\" trước động từ nguyên thể sau \"would like\")" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "She wants a bowl of noodles. → She would like ______________ (to have) a bowl of noodles.", accepted: ["to have"], correct: "to have", explanation: "want N → would like to have N." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'They want some fresh fruit.' → They would like ______________ (to have) some fresh fruit.", accepted: ["to have"], correct: "to have", explanation: "want N → would like to have N." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The guest wants a hot cup of tea.' → ______________ (The guest would like to have a hot cup of tea).", accepted: ["the guest would like to have a hot cup of tea"], correct: "The guest would like to have a hot cup of tea", explanation: "want N → would like to have N." }
        ]
      }
    },
    {
      id: "g3", name: "No other + N + more + adj + than + S ⇄ superlative",
      usage: "Câu so sánh phủ định \"No other + N + is more + adj + than + S\" (không có gì hơn S) có thể viết lại bằng so sánh nhất \"S + is the most + adj + N\", giữ nguyên nghĩa.",
      formulas: [
        "No other + N + is more + adj + than + S.  →  S + is the most + adj + N.",
        "No other dish in the restaurant is more popular than beef noodle soup. → Beef noodle soup is the most popular dish in the restaurant."
      ],
      signals: ["No other N is more adj than S", "S is the most adj N"],
      examples: [
        { en: "No other dish in the restaurant is more popular than beef noodle soup.", vi: "Không món ăn nào khác trong nhà hàng phổ biến hơn phở bò." },
        { en: "Beef noodle soup is the most popular dish in the restaurant.", vi: "Phở bò là món ăn phổ biến nhất trong nhà hàng." }
      ],
      mistakes: [
        { wrong: "Beef noodle soup is the most popularest dish.", right: "Beef noodle soup is the most popular dish. (không dùng \"the most\" cùng lúc với đuôi \"-est\")" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "No other cake in the shop is more delicious than this one. → This cake is the ______________ (most delicious) in the shop.", accepted: ["most delicious"], correct: "most delicious", explanation: "No other N is more adj than S → S is the most adj N." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'No other drink in the café is more popular than iced tea.' → Iced tea is the ______________ (most popular) drink in the café.", accepted: ["most popular"], correct: "most popular", explanation: "No other N is more adj than S → S is the most adj N." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'No other dish is more famous than Pho.' → ______________ (Pho is the most famous dish).", accepted: ["pho is the most famous dish"], correct: "Pho is the most famous dish", explanation: "No other N is more adj than S → S is the most adj N." }
        ]
      }
    },
    {
      id: "g4", name: "produce a solution ⇄ come up with a solution",
      usage: "\"produce a solution\" (tạo ra một giải pháp) có thể viết lại bằng cụm động từ \"come up with a solution\" (nghĩ ra một giải pháp), giữ nguyên nghĩa.",
      formulas: [
        "S + produce(d) + a solution.  →  S + come/came up with + a solution.",
        "The chef finally produced a good solution. → The chef finally came up with a good solution."
      ],
      signals: ["produce a solution", "come up with a solution"],
      examples: [
        { en: "The chef finally produced a good solution to make the soup less salty.", vi: "Cuối cùng đầu bếp cũng tạo ra một giải pháp tốt để làm nước súp bớt mặn." },
        { en: "The chef finally came up with a good solution to make the soup less salty.", vi: "Cuối cùng đầu bếp cũng nghĩ ra một giải pháp tốt để làm nước súp bớt mặn." }
      ],
      mistakes: [
        { wrong: "The chef came up a good solution.", right: "The chef came up with a good solution. (cụm động từ \"come up with\" cần đủ ba từ, không được bỏ \"with\")" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "The team produced a great idea. → The team came ______________ (up with) a great idea.", accepted: ["up with"], correct: "up with", explanation: "produce a solution/idea → come up with a solution/idea." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'She produced a clever plan.' → She came ______________ (up with) a clever plan.", accepted: ["up with"], correct: "up with", explanation: "produce a solution/idea → come up with a solution/idea." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The scientists produced a new solution to the problem.' → ______________ (The scientists came up with a new solution to the problem).", accepted: ["the scientists came up with a new solution to the problem"], correct: "The scientists came up with a new solution to the problem", explanation: "produce a solution → come up with a solution." }
        ]
      }
    },
    {
      id: "g5", name: "(Bonus) preposition + which (relative clause)",
      usage: "Khi đại từ quan hệ \"which\" đứng ngay sau một giới từ (in, on, with, at, ...) để bổ nghĩa cho danh từ chỉ nơi chốn/sự việc, không dùng \"that\" ngay sau giới từ.",
      formulas: [
        "N (+ giới từ + which + S + V).",
        "China and Vietnam are two countries in which people use chopsticks very well."
      ],
      signals: ["N + preposition + which + S + V"],
      examples: [
        { en: "China and Vietnam are two countries in which people use chopsticks very well.", vi: "Trung Quốc và Việt Nam là hai quốc gia mà ở đó người dân sử dụng đũa rất thành thạo." },
        { en: "Hue is a city in which many spicy dishes were created.", vi: "Huế là thành phố mà ở đó nhiều món ăn cay đã ra đời." }
      ],
      mistakes: [
        { wrong: "...countries in that people use chopsticks well.", right: "...countries in which people use chopsticks well. (không dùng \"that\" ngay sau giới từ, chỉ dùng \"which\")" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "This is the restaurant in ______________ (which) we had Pho last week.", accepted: ["which"], correct: "which", explanation: "preposition + which (không dùng that sau giới từ)." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Rewrite: 'That is the market in that people buy fresh seafood.' → That is the market in ______________ (which) people buy fresh seafood.", accepted: ["which"], correct: "which", explanation: "preposition + which (không dùng that sau giới từ)." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Complete: 'Hoi An is a town ______________ (in which) many traditional dishes are made.'", accepted: ["in which"], correct: "in which", explanation: "preposition + which." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "<mark data-w=\"Vietnamese food culture varies by regions from the north to the south\">Vietnamese food culture varies by regions from the north to the south</mark>. In Northern Vietnam, food is characterized by light and balanced. <mark data-w=\"Northern Vietnam is seen to be the cradle of Vietnamese cuisine\">Northern Vietnam is seen to be the cradle of Vietnamese cuisine</mark> with many notable dishes like Pho, Bun Rieu, Bun Thang, Bun Cha, Banh Cuon, etc. Then, food culture in Northern Vietnam became popular in Central and Southern Vietnam with suitable flavors in each regions. <mark data-w=\"The regional cuisine of Central Vietnam is famous for its spicy food\">The regional cuisine of Central Vietnam is famous for its spicy food</mark>. Hue cuisine is typical Central Vietnam's food culture. Food in the region is often used with chili peppers and shrimp sauces, namely, Bun Bo Hue, Banh Khoai, Banh Beo, etc. In Southern Vietnam, <mark data-w=\"the warm weather and fertile soil create an ideal condition for planting a variety of fruit, vegetables and livestock\">the warm weather and fertile soil create an ideal condition for planting a variety of fruit, vegetables and livestock</mark>. Thus, food in the region is often added with garlic, shallots and fresh herbs. Particularly, Southerners are favored of sugar; they add sugar in almost dishes. <mark data-w=\"Some signature dishes from Southern Vietnam include Banh Khot and Bun Mam\">Some signature dishes from Southern Vietnam include Banh Khot and Bun Mam</mark>.",
    vocabInContext: {
      "Vietnamese food culture varies by regions from the north to the south": "văn hóa ẩm thực Việt Nam thay đổi theo từng vùng miền từ bắc vào nam",
      "Northern Vietnam is seen to be the cradle of Vietnamese cuisine": "miền Bắc Việt Nam được xem là cái nôi của nền ẩm thực Việt Nam",
      "The regional cuisine of Central Vietnam is famous for its spicy food": "ẩm thực vùng miền Trung Việt Nam nổi tiếng với món ăn cay",
      "the warm weather and fertile soil create an ideal condition for planting a variety of fruit, vegetables and livestock": "thời tiết ấm áp và đất đai màu mỡ tạo điều kiện lý tưởng để trồng nhiều loại trái cây, rau củ và chăn nuôi gia súc",
      "Some signature dishes from Southern Vietnam include Banh Khot and Bun Mam": "một số món ăn đặc trưng của miền Nam Việt Nam gồm có bánh khọt và bún mắm"
    },
    translation: "<b>VĂN HÓA ẨM THỰC VIỆT NAM</b><br><br>Văn hóa ẩm thực Việt Nam thay đổi theo từng vùng miền từ bắc vào nam. Ở miền Bắc Việt Nam, ẩm thực được đặc trưng bởi hương vị nhẹ nhàng và cân bằng. Miền Bắc Việt Nam được xem là cái nôi của nền ẩm thực Việt Nam với nhiều món ăn nổi tiếng như Phở, Bún riêu, Bún thang, Bún chả, Bánh cuốn, v.v. Sau đó, văn hóa ẩm thực miền Bắc trở nên phổ biến ở miền Trung và miền Nam với hương vị phù hợp ở mỗi vùng. Ẩm thực vùng miền Trung nổi tiếng với món ăn cay. Ẩm thực Huế là nét đặc trưng điển hình của văn hóa ẩm thực miền Trung. Món ăn trong vùng thường được nêm với ớt và mắm tôm, chẳng hạn như Bún bò Huế, Bánh khoái, Bánh bèo, v.v. Ở miền Nam Việt Nam, thời tiết ấm áp và đất đai màu mỡ tạo điều kiện lý tưởng để trồng nhiều loại trái cây, rau củ và chăn nuôi gia súc. Vì vậy, món ăn trong vùng thường được thêm tỏi, hành tím và rau thơm tươi. Đặc biệt, người miền Nam rất thích vị ngọt; họ cho đường vào hầu hết các món ăn. Một số món ăn đặc trưng của miền Nam gồm có Bánh khọt và Bún mắm.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Northern Vietnamese food is famous for being very spicy.", correct: "False", explanation: "Sai. Bài đọc: \"In Northern Vietnam, food is characterized by light and balanced.\"" },
      { id: "r2", type: "truefalse", prompt: "Pho and Bun Cha are well-known dishes from Northern Vietnam.", correct: "True", explanation: "Đúng. Bài đọc: \"Northern Vietnam is seen to be the cradle of Vietnamese cuisine with many notable dishes like Pho, Bun Rieu, Bun Thang, Bun Cha, Banh Cuon, etc.\"" },
      { id: "r3", type: "truefalse", prompt: "People in Central Vietnam often use chili peppers and shrimp sauces in their food.", correct: "True", explanation: "Đúng. Bài đọc: \"Food in the region is often used with chili peppers and shrimp sauces.\"" },
      { id: "r4", type: "truefalse", prompt: "Southern Vietnamese people rarely use sugar when they cook.", correct: "False", explanation: "Sai. Bài đọc: \"Southerners are favored of sugar; they add sugar in almost dishes.\"" },
      { id: "r5", type: "mcq", prompt: "Why is Southern Vietnam a great place for growing fruits and vegetables?", options: { A: "Because it has warm weather and rich soil.", B: "Because people use a lot of garlic and herbs.", C: "Because it is the cradle of Vietnamese cuisine.", D: "Because it has the same weather as Northern Vietnam." }, correct: "A", explanation: "Bài đọc: \"the warm weather and fertile soil create an ideal condition for planting.\"" },
      { id: "r6", type: "mcq", prompt: "Which dish is a signature food of Southern Vietnam?", options: { A: "Bun Rieu", B: "Bun Bo Hue", C: "Banh Khot", D: "Banh Cuon" }, correct: "C", explanation: "Bài đọc: \"Some signature dishes from Southern Vietnam include Banh Khot and Bun Mam.\"" },
      { id: "r7", type: "fillblank", prompt: "Find the phrase in the passage that means 'cái nôi của nền ẩm thực'.", accepted: ["the cradle of vietnamese cuisine", "cradle of vietnamese cuisine"], correct: "the cradle of Vietnamese cuisine", explanation: "\"Northern Vietnam is seen to be the cradle of Vietnamese cuisine.\" — cradle = cái nôi." },
      { id: "r8", type: "mcq", prompt: "What is Hue cuisine typical of?", options: { A: "Central Vietnam's food culture.", B: "Northern Vietnam's food culture.", C: "Southern Vietnam's food culture.", D: "No particular region." }, correct: "A", explanation: "Bài đọc: \"Hue cuisine is typical Central Vietnam's food culture.\"" },
      { id: "r9", type: "truefalse", prompt: "Vietnamese food culture is exactly the same in every region.", correct: "False", explanation: "Sai. Bài đọc mở đầu: \"Vietnamese food culture varies by regions from the north to the south.\"" }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "Vietnamese food culture varies by regions from the north to the south.", suggested: "Văn hóa ẩm thực Việt Nam thay đổi theo từng vùng miền từ bắc vào nam.", notes: "\"vary by + N\" (thay đổi theo)." },
    { id: "t2", en: "Northern Vietnam is seen to be the cradle of Vietnamese cuisine.", suggested: "Miền Bắc Việt Nam được xem là cái nôi của nền ẩm thực Việt Nam.", notes: "\"be seen to be + N\" (được xem là) — cấu trúc bị động." },
    { id: "t3", en: "The regional cuisine of Central Vietnam is famous for its spicy food.", suggested: "Ẩm thực vùng miền Trung Việt Nam nổi tiếng với món ăn cay.", notes: "\"be famous for + N\" (nổi tiếng vì)." },
    { id: "t4", en: "The warm weather and fertile soil create an ideal condition for planting.", suggested: "Thời tiết ấm áp và đất đai màu mỡ tạo điều kiện lý tưởng để trồng trọt.", notes: "\"create a condition for + N/V-ing\" (tạo điều kiện cho)." },
    { id: "t5", en: "Some signature dishes from Southern Vietnam include Banh Khot and Bun Mam.", suggested: "Một số món ăn đặc trưng của miền Nam Việt Nam gồm có bánh khọt và bún mắm.", notes: "\"include + N\" (bao gồm) để liệt kê ví dụ." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "How much is N? ⇄ How much does N cost?",
      formula: "How much is + N?  →  How much does + N + cost?",
      example: { before: "How much is a bag of popcorn at the school canteen?", after: "How much does a bag of popcorn cost at the school canteen?" },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "How much is this drink? → How much does this drink ______________ (cost)?", accepted: ["cost"], correct: "cost", explanation: "How much is N? → How much does N cost?" },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'How much is a bowl of Pho?' → How much does a bowl of Pho ______________ (cost)?", accepted: ["cost"], correct: "cost", explanation: "How much is N? → How much does N cost?" }
      ]
    },
    {
      id: "tr2", name: "S + want(s) + N ⇄ S + would like + to have + N",
      formula: "S + want(s) + N.  →  S + would like + to have + N.",
      example: { before: "Mr. Long wants a cold drink.", after: "Mr. Long would like to have a cold drink." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "She wants a bowl of noodles. → She would like ______________ (to have) a bowl of noodles.", accepted: ["to have"], correct: "to have", explanation: "want N → would like to have N." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'They want some fresh fruit.' → They would like ______________ (to have) some fresh fruit.", accepted: ["to have"], correct: "to have", explanation: "want N → would like to have N." }
      ]
    },
    {
      id: "tr3", name: "No other + N + more + adj + than + S ⇄ superlative",
      formula: "No other + N + is more + adj + than + S.  →  S + is the most + adj + N.",
      example: { before: "No other dish in the restaurant is more popular than beef noodle soup.", after: "Beef noodle soup is the most popular dish in the restaurant." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "No other cake in the shop is more delicious than this one. → This cake is the ______________ (most delicious) in the shop.", accepted: ["most delicious"], correct: "most delicious", explanation: "No other N is more adj than S → S is the most adj N." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'No other drink in the café is more popular than iced tea.' → Iced tea is the ______________ (most popular) drink in the café.", accepted: ["most popular"], correct: "most popular", explanation: "No other N is more adj than S → S is the most adj N." }
      ]
    },
    {
      id: "tr4", name: "produce a solution ⇄ come up with a solution",
      formula: "S + produce(d) + a solution.  →  S + come/came up with + a solution.",
      example: { before: "The chef finally produced a good solution to make the soup less salty.", after: "The chef finally came up with a good solution to make the soup less salty." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "The team produced a great idea. → The team came ______________ (up with) a great idea.", accepted: ["up with"], correct: "up with", explanation: "produce a solution/idea → come up with a solution/idea." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'She produced a clever plan.' → She came ______________ (up with) a clever plan.", accepted: ["up with"], correct: "up with", explanation: "produce a solution/idea → come up with a solution/idea." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Cuisine' means:", options: { A: "nền ẩm thực", B: "công thức nấu ăn", C: "nhà hàng", D: "đầu bếp" }, correct: "A", explanation: "cuisine (n) = nền ẩm thực." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Fertile' means:", options: { A: "màu mỡ", B: "khô cằn", C: "đá sỏi", D: "ngập nước" }, correct: "A", explanation: "fertile (adj) = màu mỡ." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "They use two short sticks known as ______________ (đũa) to put rice into their mouths.", accepted: ["chopsticks"], correct: "chopsticks", explanation: "chopsticks (n) = đũa." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "How much is this drink? → How much does this drink ______?", options: { A: "cost", B: "price", C: "pay", D: "buy" }, correct: "A", explanation: "How much does N cost?" },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "Mr. Long wants a cold drink. → Mr. Long would like ______ have a cold drink.", options: { A: "to", B: "for", C: "of", D: "at" }, correct: "A", explanation: "would like to have N." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "No other dish is more popular than Pho. → Pho is the ______________ (most popular) dish.", accepted: ["most popular"], correct: "most popular", explanation: "No other N is more adj than S → S is the most adj N." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "The chef produced a good solution. → The chef came ______________ (up with) a good solution.", accepted: ["up with"], correct: "up with", explanation: "produce a solution → come up with a solution." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "Northern Vietnamese food is famous for being very spicy.", correct: "False", explanation: "Sai theo bài đọc — ẩm thực miền Bắc nhẹ nhàng, cân bằng." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "Southern Vietnamese people rarely use sugar when they cook.", correct: "False", explanation: "Sai theo bài đọc — người miền Nam rất thích vị ngọt." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "Which dish is a signature food of Southern Vietnam?", options: { A: "Bun Rieu", B: "Bun Bo Hue", C: "Banh Khot", D: "Banh Cuon" }, correct: "C", explanation: "Bài đọc nêu rõ đây là món đặc trưng miền Nam." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "The food at the school festival was ______________ (CARE) prepared by the students.", accepted: ["carefully"], correct: "carefully", explanation: "care (n) → carefully (adv)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "Pho is one of the ______________ (TASTE) traditional dishes in Vietnam.", accepted: ["tastiest"], correct: "tastiest", explanation: "taste (n) → tastiest (adj so sánh nhất)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "The warm weather in the South creates ______________ (IDEA) conditions for agriculture.", accepted: ["ideal"], correct: "ideal", explanation: "idea (n) → ideal (adj)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'ruộng lúa nước'?", options: { A: "paddy", B: "field", C: "farm", D: "garden" }, correct: "A", explanation: "paddy (n) = ruộng lúa nước." }
  ]
};
