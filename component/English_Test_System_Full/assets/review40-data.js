const REVIEW = {
  id: "test40",
  testFile: "test40.html",
  grade: "Grade 7 — Global Success",
  unit: "Unit 2: Healthy Living",
  title: "Knowledge Review — Unit 2, Practice Test 2",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "expert", pos: "adj/n", ipa: "/ˈekspɜːrt/", meaning: "chuyên gia, thuộc về chuyên gia", example: "The Healthy Living Club gives us a lot of expert advice on diet.", exampleVi: "Câu lạc bộ Sống Khỏe cho chúng ta rất nhiều lời khuyên của chuyên gia về chế độ ăn." },
    { word: "harmful", pos: "adj", ipa: "/ˈhɑːrmfl/", meaning: "có hại", example: "Fast food is very popular, but eating too much of it can be harmful to our health.", exampleVi: "Đồ ăn nhanh rất phổ biến, nhưng ăn quá nhiều có thể gây hại cho sức khỏe." },
    { word: "active", pos: "adj", ipa: "/ˈæktɪv/", meaning: "năng động", example: "Doing sports regularly helps students stay active and full of energy.", exampleVi: "Chơi thể thao thường xuyên giúp học sinh năng động và tràn đầy năng lượng." },
    { word: "medication", pos: "n", ipa: "/ˌmedɪˈkeɪʃn/", meaning: "thuốc, thuốc men", example: "The patient needs to take this medication after meals.", exampleVi: "Bệnh nhân cần uống loại thuốc này sau bữa ăn." },
    { word: "condition", pos: "n", ipa: "/kənˈdɪʃn/", meaning: "tình trạng; bệnh mãn tính", example: "My grandfather cannot run very fast because he has a permanent heart condition.", exampleVi: "Ông tôi không thể chạy nhanh vì ông bị bệnh tim mãn tính." },
    { word: "herbal medicine", pos: "phrase", ipa: "/ˈhɜːrbl ˈmedɪsn/", meaning: "thuốc thảo dược, thuốc nam", example: "Plants used to heal are called herbal medicine.", exampleVi: "Những loại cây được dùng để chữa bệnh được gọi là thuốc thảo dược." },
    { word: "gentle", pos: "adj", ipa: "/ˈdʒentl/", meaning: "nhẹ nhàng, dịu", example: "Many people think plants are gentle on the body.", exampleVi: "Nhiều người nghĩ rằng thực vật nhẹ nhàng đối với cơ thể." },
    { word: "poison", pos: "n", ipa: "/ˈpɔɪzn/", meaning: "chất độc", example: "Foxglove is a very pretty flower, but it also has poison in it.", exampleVi: "Foxglove là một loài hoa rất đẹp, nhưng nó cũng chứa chất độc." },
    { word: "bad breath", pos: "phrase", ipa: "/bæd breθ/", meaning: "hơi thở có mùi", example: "Parsley can stop bad breath.", exampleVi: "Rau mùi tây có thể ngăn hơi thở có mùi." },
    { word: "stomach", pos: "n", ipa: "/ˈstʌmək/", meaning: "dạ dày", example: "Too much rosemary can be very bad for your stomach.", exampleVi: "Quá nhiều hương thảo có thể rất có hại cho dạ dày." },
    { word: "no littering", pos: "phrase", ipa: "/noʊ ˈlɪtərɪŋ/", meaning: "cấm xả rác", example: "If you use this area, you must clean it.", exampleVi: "Nếu bạn sử dụng khu vực này, bạn phải dọn dẹp sạch sẽ." },
    { word: "calorie", pos: "n", ipa: "/ˈkæləri/", meaning: "calo", example: "We need calories or energy to do things every day.", exampleVi: "Chúng ta cần calo hoặc năng lượng để làm việc mỗi ngày." },
    { word: "diet", pos: "n", ipa: "/ˈdaɪət/", meaning: "chế độ ăn", example: "If people want to keep fit, they should have a balanced diet.", exampleVi: "Nếu muốn giữ dáng, mọi người nên có chế độ ăn cân bằng." },
    { word: "stay in shape", pos: "phrase", ipa: "/steɪ ɪn ʃeɪp/", meaning: "giữ dáng, giữ sức khỏe", example: "Playing sports or doing exercise regularly is the best way to stay in shape.", exampleVi: "Chơi thể thao hoặc tập thể dục thường xuyên là cách tốt nhất để giữ dáng." },
    { word: "sore eyes", pos: "phrase", ipa: "/sɔːr aɪz/", meaning: "mắt đau, khó chịu", example: "Sunscreen, hats, and gloves can protect your skin from sunburn.", exampleVi: "Kem chống nắng, mũ và găng tay có thể bảo vệ da khỏi cháy nắng." },
    { word: "lip balm", pos: "phrase", ipa: "/lɪp bɑːm/", meaning: "son dưỡng môi", example: "Should I also use lip balm for my dry lips, doctor?", exampleVi: "Tôi có nên dùng son dưỡng cho đôi môi khô của mình không, thưa bác sĩ?" },
    { word: "go jogging", pos: "phrase", ipa: "/ɡoʊ ˈdʒɒɡɪŋ/", meaning: "đi chạy bộ", example: "Does your father usually go jogging before breakfast?", exampleVi: "Bố bạn có thường đi chạy bộ trước bữa sáng không?" },
    { word: "lifestyle", pos: "n", ipa: "/ˈlaɪfstaɪl/", meaning: "lối sống", example: "I don't like his current lifestyle.", exampleVi: "Tôi không thích lối sống hiện tại của anh ấy." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'có hại':", options: { A: "harmful", B: "active", C: "gentle", D: "expert" }, correct: "A", explanation: "<b>harmful</b> (adj) = có hại." },
      { id: "vp2", prompt: "Choose the word that means 'thuốc thảo dược':", options: { A: "herbal medicine", B: "medication", C: "poison", D: "condition" }, correct: "A", explanation: "<b>herbal medicine</b> (phrase) = thuốc thảo dược." },
      { id: "vp3", prompt: "\"The patient needs to take this ______ after meals.\"", options: { A: "medication", B: "poison", C: "vitamin", D: "diet" }, correct: "A", explanation: "\"<b>medication</b>\" (thuốc) phù hợp với ngữ cảnh uống thuốc sau bữa ăn." },
      { id: "vp4", prompt: "Choose the word that means 'dạ dày':", options: { A: "stomach", B: "lung", C: "throat", D: "muscle" }, correct: "A", explanation: "<b>stomach</b> (n) = dạ dày." },
      { id: "vp5", prompt: "\"Parsley can stop ______.\"", options: { A: "bad breath", B: "sore eyes", C: "sunburn", D: "headache" }, correct: "A", explanation: "\"<b>bad breath</b>\" (hơi thở có mùi) khớp với công dụng của rau mùi tây trong bài đọc." },
      { id: "vp6", prompt: "Choose the word that means 'chất độc':", options: { A: "poison", B: "medicine", C: "vitamin", D: "nutrient" }, correct: "A", explanation: "<b>poison</b> (n) = chất độc." }
    ],
    fillblank: [
      { id: "vf1", prompt: "The Healthy Living Club gives us a lot of ______________ (chuyên gia) advice on diet.", accepted: ["expert"], correct: "expert", explanation: "<b>expert</b> (adj/n) = chuyên gia, thuộc về chuyên gia." },
      { id: "vf2", prompt: "My grandfather has a permanent heart ______________ (tình trạng bệnh).", accepted: ["condition"], correct: "condition", explanation: "<b>condition</b> (n) = tình trạng, bệnh mãn tính." },
      { id: "vf3", prompt: "Foxglove is a pretty flower, but it also has ______________ (chất độc) in it.", accepted: ["poison"], correct: "poison", explanation: "<b>poison</b> (n) = chất độc." },
      { id: "vf4", prompt: "Should I also use ______________ (son dưỡng môi) for my dry lips, doctor?", accepted: ["lip balm"], correct: "lip balm", explanation: "<b>lip balm</b> (phrase) = son dưỡng môi." },
      { id: "vf5", prompt: "Does your father usually ______________ (đi chạy bộ) before breakfast?", accepted: ["go jogging"], correct: "go jogging", explanation: "<b>go jogging</b> (phrase) = đi chạy bộ." },
      { id: "vf6", prompt: "It is the best way to ______________ (giữ dáng).", accepted: ["stay in shape"], correct: "stay in shape", explanation: "<b>stay in shape</b> (phrase) = giữ dáng, giữ sức khỏe." }
    ],
    matching: {
      left: ["gentle", "lifestyle", "stomach", "condition", "harmful", "expert"],
      right: ["nhẹ nhàng, dịu", "lối sống", "dạ dày", "tình trạng; bệnh mãn tính", "có hại", "chuyên gia"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"The doctor advised him to do exercise regularly because he was ______.\" (WEIGHT)", options: { A: "weight", B: "weighty", C: "overweight", D: "weighing" }, correct: "C", explanation: "Cần tính từ sau \"was\" → weight (n) → <b>overweight</b> (adj, over- + weight)." },
      { id: "cw2", prompt: "\"Fast food is very popular, but eating too much of it can be ______ to our health.\" (HARM)", options: { A: "harm", B: "harmful", C: "harmless", D: "harming" }, correct: "B", explanation: "Cần tính từ sau \"be\" mang nghĩa tiêu cực → harm (n) → <b>harmful</b> (adj, +ful, có hại)." },
      { id: "cw3", prompt: "\"Doing sports regularly helps students stay ______ and full of energy.\" (ACTIVITY)", options: { A: "activity", B: "active", C: "actively", D: "activate" }, correct: "B", explanation: "Cần tính từ sau \"stay\" → activity (n) → <b>active</b> (adj, năng động)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'harmful' mean?", options: { A: "có hại", B: "an toàn", C: "hữu ích", D: "dễ chịu" }, correct: "A", explanation: "harmful (adj) = có hại." },
      { id: "wm2", prompt: "What does 'gentle' mean?", options: { A: "mạnh mẽ", B: "nhẹ nhàng, dịu", C: "nhanh chóng", D: "phức tạp" }, correct: "B", explanation: "gentle (adj) = nhẹ nhàng, dịu." },
      { id: "wm3", prompt: "What does 'herbal medicine' mean?", options: { A: "thuốc thảo dược", B: "thuốc kháng sinh", C: "vitamin tổng hợp", D: "thực phẩm chức năng" }, correct: "A", explanation: "herbal medicine (phrase) = thuốc thảo dược." }
    ],
    wordForm: [
      { id: "wf1", prompt: "The doctor advised him to do exercise regularly because he was ______________ (WEIGHT).", accepted: ["overweight"], correct: "overweight", explanation: "weight (n) → overweight (adj, over- + weight)." },
      { id: "wf2", prompt: "Fast food is very popular, but eating too much of it can be ______________ (HARM) to our health.", accepted: ["harmful"], correct: "harmful", explanation: "harm (n) → harmful (adj, +ful)." },
      { id: "wf3", prompt: "The patient needs to take this ______________ (MEDICATE) after meals.", accepted: ["medication"], correct: "medication", explanation: "medicate (v) → medication (n, +ion)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "It's a good idea to V ⇄ You should V",
      usage: "\"It's a good idea to + V\" (nên làm gì đó, là ý hay) có thể viết lại bằng \"You + should + V\", giữ nguyên nghĩa khuyên nhủ.",
      formulas: [
        "It's a good idea to + V.  →  You should + V.",
        "It's a good idea to do exercise regularly to stay in shape. → You should do exercise regularly to stay in shape."
      ],
      signals: ["It's a good idea to V", "You should V"],
      examples: [
        { en: "It's a good idea to do exercise regularly to stay in shape.", vi: "Tập thể dục thường xuyên để giữ dáng là một ý hay." },
        { en: "You should do exercise regularly to stay in shape.", vi: "Bạn nên tập thể dục thường xuyên để giữ dáng." }
      ],
      mistakes: [
        { wrong: "You should to do exercise.", right: "You should do exercise. (\"should\" theo sau bởi động từ nguyên thể không có \"to\")" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "It's a good idea to drink more water. → You ______________ (should) drink more water.", accepted: ["should"], correct: "should", explanation: "It's a good idea to V → You should V." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'It's a good idea to eat more vegetables.' → You ______________ (should) eat more vegetables.", accepted: ["should"], correct: "should", explanation: "It's a good idea to V → You should V." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'It's a good idea to sleep early tonight.' → ______________ (You should sleep early tonight).", accepted: ["you should sleep early tonight"], correct: "You should sleep early tonight", explanation: "It's a good idea to V → You should V." }
        ]
      }
    },
    {
      id: "g2", name: "S1, but S2 ⇄ Although S1, S2",
      usage: "Câu có hai vế tương phản nối bằng \"but\" có thể viết lại bằng \"Although + S1, S2\", đưa liên từ tương phản lên đầu câu.",
      formulas: [
        "S1 + V, but + S2 + V.  →  Although + S1 + V, + S2 + V.",
        "She eats fruits and veggies every day, but she keeps gaining weight. → Although she eats fruits and veggies every day, she keeps gaining weight."
      ],
      signals: ["S1, but S2", "Although S1, S2"],
      examples: [
        { en: "She eats fruits and veggies every day, but she keeps gaining weight.", vi: "Cô ấy ăn rau củ quả mỗi ngày, nhưng vẫn tiếp tục tăng cân." },
        { en: "Although she eats fruits and veggies every day, she keeps gaining weight.", vi: "Mặc dù cô ấy ăn rau củ quả mỗi ngày, cô ấy vẫn tiếp tục tăng cân." }
      ],
      mistakes: [
        { wrong: "Although she eats fruits every day, but she keeps gaining weight.", right: "Although she eats fruits every day, she keeps gaining weight. (không dùng cả \"although\" và \"but\" trong cùng một câu)" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "He exercises every day, but he still feels tired. → ______________ (Although) he exercises every day, he still feels tired.", accepted: ["although"], correct: "Although", explanation: "S1, but S2 → Although S1, S2." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'She drinks a lot of water, but her skin is still dry.' → ______________ (Although) she drinks a lot of water, her skin is still dry.", accepted: ["although"], correct: "Although", explanation: "S1, but S2 → Although S1, S2." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'He takes medicine regularly, but he doesn't feel better.' → ______________ (Although he takes medicine regularly, he doesn't feel better).", accepted: ["although he takes medicine regularly, he doesn't feel better"], correct: "Although he takes medicine regularly, he doesn't feel better", explanation: "S1, but S2 → Although S1, S2." }
        ]
      }
    },
    {
      id: "g3", name: "if + S + V ⇄ Whenever + S + suffers from + N",
      usage: "\"if + S + V\" khi diễn tả một điều kiện lặp lại có thể viết lại bằng \"Whenever + S + suffers from + N\" (mỗi khi ai đó bị mắc phải điều gì), giữ nguyên nghĩa điều kiện lặp đi lặp lại.",
      formulas: [
        "S1 + V (thường xuyên) + if + S2 + V.  →  Whenever + S2 + suffers from + N, + S1 + V.",
        "She often takes paracetamol if she gets a bad headache. → Whenever she suffers from a bad headache, she often takes paracetamol."
      ],
      signals: ["if + S + get/have + N", "Whenever + S + suffers from + N"],
      examples: [
        { en: "She often takes paracetamol if she gets a bad headache.", vi: "Cô ấy thường uống paracetamol nếu bị đau đầu nặng." },
        { en: "Whenever she suffers from a bad headache, she often takes paracetamol.", vi: "Mỗi khi bị đau đầu nặng, cô ấy thường uống paracetamol." }
      ],
      mistakes: [
        { wrong: "Whenever she suffers a bad headache.", right: "Whenever she suffers from a bad headache. (\"suffer\" luôn theo sau bởi giới từ \"from\")" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "He takes cough syrup if he has a bad cough. → Whenever he suffers ______________ (from) a bad cough, he takes cough syrup.", accepted: ["from"], correct: "from", explanation: "suffer from + N." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'They stay home if they catch a cold.' → Whenever they suffer ______________ (from) a cold, they stay home.", accepted: ["from"], correct: "from", explanation: "suffer from + N." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'I drink herbal tea if I get a sore throat.' → ______________ (Whenever I suffer from a sore throat, I drink herbal tea).", accepted: ["whenever i suffer from a sore throat, i drink herbal tea"], correct: "Whenever I suffer from a sore throat, I drink herbal tea", explanation: "if + S + get + N → Whenever + S + suffers from + N." }
        ]
      }
    },
    {
      id: "g4", name: "S1, so S2 ⇄ Because S1, S2",
      usage: "Câu có \"S1, so S2\" (kết quả) có thể viết lại bằng \"Because + S1, S2\" (nguyên nhân), đổi vị trí liên từ nhưng giữ nguyên quan hệ nhân quả.",
      formulas: [
        "S1 + V, so + S2 + V.  →  Because + S1 + V, + S2 + V.",
        "Peter eats a lot of junk food, so he puts on weight. → Because Peter eats a lot of junk food, he puts on weight."
      ],
      signals: ["S1, so S2", "Because S1, S2"],
      examples: [
        { en: "Peter eats a lot of junk food, so he puts on weight.", vi: "Peter ăn nhiều đồ ăn vặt nên anh ấy tăng cân." },
        { en: "Because Peter eats a lot of junk food, he puts on weight.", vi: "Vì Peter ăn nhiều đồ ăn vặt nên anh ấy tăng cân." }
      ],
      mistakes: [
        { wrong: "Because Peter eats junk food, so he puts on weight.", right: "Because Peter eats junk food, he puts on weight. (không dùng cả \"because\" và \"so\")" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "He drinks a lot of soda, so he gains weight. → ______________ (Because) he drinks a lot of soda, he gains weight.", accepted: ["because"], correct: "Because", explanation: "S1, so S2 → Because S1, S2." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'She never exercises, so she feels weak.' → ______________ (Because) she never exercises, she feels weak.", accepted: ["because"], correct: "Because", explanation: "S1, so S2 → Because S1, S2." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'He eats too many sweets, so he has bad teeth.' → ______________ (Because he eats too many sweets, he has bad teeth).", accepted: ["because he eats too many sweets, he has bad teeth"], correct: "Because he eats too many sweets, he has bad teeth", explanation: "S1, so S2 → Because S1, S2." }
        ]
      }
    },
    {
      id: "g5", name: "(Bonus) work more slowly than + N",
      usage: "Cấu trúc so sánh hơn với trạng từ \"more slowly than\" dùng để so sánh tốc độ tác dụng/hoạt động giữa hai đối tượng.",
      formulas: [
        "S + V + more slowly than + N.",
        "Herbal medicine works more slowly than most pills."
      ],
      signals: ["more slowly than"],
      examples: [
        { en: "Herbal medicine works more slowly than most pills.", vi: "Thuốc thảo dược có tác dụng chậm hơn hầu hết các loại thuốc viên." },
        { en: "A bicycle moves more slowly than a car.", vi: "Xe đạp di chuyển chậm hơn xe hơi." }
      ],
      mistakes: [
        { wrong: "Herbal medicine works more slower than pills.", right: "Herbal medicine works more slowly than pills. (không dùng \"more\" cùng với dạng so sánh \"-er\")" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "A turtle moves more ______________ (slowly) than a rabbit.", accepted: ["slowly"], correct: "slowly", explanation: "more + slowly + than." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Rewrite: 'Natural remedies act (slow) than modern medicine.' → Natural remedies act more ______________ (slowly) than modern medicine.", accepted: ["slowly"], correct: "slowly", explanation: "more + slowly + than." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Complete: 'This old computer runs more ______________ (slowly) than the new one.'", accepted: ["slowly"], correct: "slowly", explanation: "more + slowly + than." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "Everyone wants to be healthy. People see doctors. They take pills to stay healthy. However, plants have been used to heal for thousands of years. More and more people are trying herbs to stay healthy. Plants used to heal are called \"herbal medicine\". There are many plants used in herbal medicine. Each plant is used in a certain way. <mark data-w=\"Herbal medicine works more slowly than most pills\">Herbal medicine works more slowly than most pills</mark>. Many people think plants are gentle on the body. There are a lot of examples of helpful plants. Ginger can help your body. Eating ginger often may help you stay healthy. Another helpful plant is parsley. It can stop bad breath. Herbs may be gentler than some pills. However, this does not mean that anyone can take them in any way. You should always be careful. <mark data-w=\"Some herbs can be harmful, too\">Some herbs can be harmful, too</mark>. Too much rosemary can be very bad for your stomach. It can make you sick. Foxglove is a very pretty flower. <mark data-w=\"It also has poison in it\">It also has poison in it</mark>. Nevertheless, if you are afraid of using herbs, you may be surprised. You have probably already used some kind of herbal medicine. Coffee, garlic, ginseng, and peppermint are all used in herbal medicine. <mark data-w=\"Herbal medicine is becoming popular again\">Herbal medicine is becoming popular again</mark>, as <mark data-w=\"people become more interested in their health\">people become more interested in their health</mark>.",
    vocabInContext: {
      "Herbal medicine works more slowly than most pills": "thuốc thảo dược có tác dụng chậm hơn hầu hết các loại thuốc viên",
      "Some herbs can be harmful, too": "một số loại thảo dược cũng có thể gây hại",
      "It also has poison in it": "nó cũng chứa chất độc",
      "Herbal medicine is becoming popular again": "thuốc thảo dược đang trở nên phổ biến trở lại",
      "people become more interested in their health": "mọi người ngày càng quan tâm hơn đến sức khỏe của mình"
    },
    translation: "<b>THUỐC THẢO DƯỢC</b><br><br>Ai cũng muốn khỏe mạnh. Mọi người đi khám bác sĩ. Họ uống thuốc để giữ sức khỏe. Tuy nhiên, thực vật đã được dùng để chữa bệnh từ hàng ngàn năm nay. Ngày càng có nhiều người thử dùng thảo dược để giữ sức khỏe. Những loại cây được dùng để chữa bệnh được gọi là \"thuốc thảo dược\". Có rất nhiều loại cây được dùng trong thuốc thảo dược. Mỗi loại cây được dùng theo một cách nhất định. Thuốc thảo dược có tác dụng chậm hơn hầu hết các loại thuốc viên. Nhiều người nghĩ rằng thực vật nhẹ nhàng đối với cơ thể. Có rất nhiều ví dụ về các loại cây có ích. Gừng có thể giúp ích cho cơ thể bạn. Ăn gừng thường xuyên có thể giúp bạn khỏe mạnh. Một loại cây có ích khác là rau mùi tây. Nó có thể ngăn hơi thở có mùi. Thảo dược có thể nhẹ nhàng hơn một số loại thuốc viên. Tuy nhiên, điều này không có nghĩa là ai cũng có thể dùng chúng theo bất kỳ cách nào. Bạn nên luôn cẩn thận. Một số loại thảo dược cũng có thể gây hại. Quá nhiều hương thảo có thể rất có hại cho dạ dày. Nó có thể khiến bạn bị ốm. Foxglove là một loài hoa rất đẹp. Nó cũng chứa chất độc. Tuy nhiên, nếu bạn sợ dùng thảo dược, bạn có thể sẽ ngạc nhiên. Bạn có lẽ đã từng dùng một loại thuốc thảo dược nào đó. Cà phê, tỏi, nhân sâm và bạc hà đều được dùng trong thuốc thảo dược. Thuốc thảo dược đang trở nên phổ biến trở lại, khi mọi người ngày càng quan tâm hơn đến sức khỏe của mình.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Herbal medicine works faster than most modern pills.", correct: "False", explanation: "Sai. Bài đọc: \"Herbal medicine works more slowly than most pills.\"" },
      { id: "r2", type: "truefalse", prompt: "Eating ginger on a regular basis can help people stay healthy.", correct: "True", explanation: "Đúng. Bài đọc: \"Ginger can help your body. Eating ginger often may help you stay healthy.\"" },
      { id: "r3", type: "truefalse", prompt: "It is safe to use any amount of rosemary because it is a plant.", correct: "False", explanation: "Sai. Bài đọc: \"Too much rosemary can be very bad for your stomach. It can make you sick.\"" },
      { id: "r4", type: "truefalse", prompt: "Common items like coffee and garlic are considered types of herbal medicine.", correct: "True", explanation: "Đúng. Bài đọc: \"Coffee, garlic, ginseng, and peppermint are all used in herbal medicine.\"" },
      { id: "r5", type: "mcq", prompt: "What is one specific benefit of using parsley mentioned in the text?", options: { A: "It helps you sleep better at night.", B: "It makes your breath smell better.", C: "It makes your stomach feel stronger.", D: "It helps you grow taller." }, correct: "B", explanation: "Bài đọc: \"Another helpful plant is parsley. It can stop bad breath.\"" },
      { id: "r6", type: "mcq", prompt: "According to the passage, why is herbal medicine becoming popular again?", options: { A: "Because it is much cheaper than seeing a doctor.", B: "Because people want to find pretty flowers like foxglove.", C: "Because people are more interested in their personal health.", D: "Because pills no longer work for most people." }, correct: "C", explanation: "Bài đọc: \"Herbal medicine is becoming popular again, as people become more interested in their health.\"" },
      { id: "r7", type: "fillblank", prompt: "Find the word in the passage that means 'chất độc'.", accepted: ["poison"], correct: "poison", explanation: "\"Foxglove... also has poison in it.\" — poison = chất độc." },
      { id: "r8", type: "mcq", prompt: "Which plant does the passage say can be very bad for your stomach if used too much?", options: { A: "Rosemary", B: "Ginger", C: "Parsley", D: "Peppermint" }, correct: "A", explanation: "Bài đọc: \"Too much rosemary can be very bad for your stomach.\"" },
      { id: "r9", type: "truefalse", prompt: "The passage says herbal medicine can be taken in any way without caution.", correct: "False", explanation: "Sai. Bài đọc: \"this does not mean that anyone can take them in any way. You should always be careful.\"" }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "Plants have been used to heal for thousands of years.", suggested: "Thực vật đã được dùng để chữa bệnh từ hàng ngàn năm nay.", notes: "Câu bị động hoàn thành \"have been used\" (đã được dùng)." },
    { id: "t2", en: "Herbal medicine works more slowly than most pills.", suggested: "Thuốc thảo dược có tác dụng chậm hơn hầu hết các loại thuốc viên.", notes: "So sánh hơn với trạng từ \"more slowly than\"." },
    { id: "t3", en: "Some herbs can be harmful, too.", suggested: "Một số loại thảo dược cũng có thể gây hại.", notes: "\"can be + adj\" (có thể gây ra điều gì)." },
    { id: "t4", en: "Foxglove is a very pretty flower, but it also has poison in it.", suggested: "Foxglove là một loài hoa rất đẹp, nhưng nó cũng chứa chất độc.", notes: "\"but\" nối hai ý tương phản." },
    { id: "t5", en: "Herbal medicine is becoming popular again, as people become more interested in their health.", suggested: "Thuốc thảo dược đang trở nên phổ biến trở lại, khi mọi người ngày càng quan tâm hơn đến sức khỏe của mình.", notes: "\"as\" giới thiệu lý do/hoàn cảnh song song." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "It's a good idea to V ⇄ You should V",
      formula: "It's a good idea to + V.  →  You should + V.",
      example: { before: "It's a good idea to do exercise regularly to stay in shape.", after: "You should do exercise regularly to stay in shape." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "It's a good idea to drink more water. → You ______________ (should) drink more water.", accepted: ["should"], correct: "should", explanation: "It's a good idea to V → You should V." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'It's a good idea to eat more vegetables.' → You ______________ (should) eat more vegetables.", accepted: ["should"], correct: "should", explanation: "It's a good idea to V → You should V." }
      ]
    },
    {
      id: "tr2", name: "S1, but S2 ⇄ Although S1, S2",
      formula: "S1 + V, but + S2 + V.  →  Although + S1 + V, + S2 + V.",
      example: { before: "She eats fruits and veggies every day, but she keeps gaining weight.", after: "Although she eats fruits and veggies every day, she keeps gaining weight." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "He exercises every day, but he still feels tired. → ______________ (Although) he exercises every day, he still feels tired.", accepted: ["although"], correct: "Although", explanation: "S1, but S2 → Although S1, S2." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'She drinks a lot of water, but her skin is still dry.' → ______________ (Although) she drinks a lot of water, her skin is still dry.", accepted: ["although"], correct: "Although", explanation: "S1, but S2 → Although S1, S2." }
      ]
    },
    {
      id: "tr3", name: "if + S + V ⇄ Whenever + S + suffers from + N",
      formula: "S1 + V (thường xuyên) + if + S2 + V.  →  Whenever + S2 + suffers from + N, + S1 + V.",
      example: { before: "She often takes paracetamol if she gets a bad headache.", after: "Whenever she suffers from a bad headache, she often takes paracetamol." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "He takes cough syrup if he has a bad cough. → Whenever he suffers ______________ (from) a bad cough, he takes cough syrup.", accepted: ["from"], correct: "from", explanation: "suffer from + N." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'They stay home if they catch a cold.' → Whenever they suffer ______________ (from) a cold, they stay home.", accepted: ["from"], correct: "from", explanation: "suffer from + N." }
      ]
    },
    {
      id: "tr4", name: "S1, so S2 ⇄ Because S1, S2",
      formula: "S1 + V, so + S2 + V.  →  Because + S1 + V, + S2 + V.",
      example: { before: "Peter eats a lot of junk food, so he puts on weight.", after: "Because Peter eats a lot of junk food, he puts on weight." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "He drinks a lot of soda, so he gains weight. → ______________ (Because) he drinks a lot of soda, he gains weight.", accepted: ["because"], correct: "Because", explanation: "S1, so S2 → Because S1, S2." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'She never exercises, so she feels weak.' → ______________ (Because) she never exercises, she feels weak.", accepted: ["because"], correct: "Because", explanation: "S1, so S2 → Because S1, S2." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Harmful' means:", options: { A: "có hại", B: "an toàn", C: "hữu ích", D: "dễ chịu" }, correct: "A", explanation: "harmful (adj) = có hại." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Poison' means:", options: { A: "chất độc", B: "thuốc bổ", C: "vitamin", D: "thực phẩm" }, correct: "A", explanation: "poison (n) = chất độc." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "The patient needs to take this ______________ (thuốc) after meals.", accepted: ["medication"], correct: "medication", explanation: "medication (n) = thuốc." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "It's a good idea to do exercise regularly. → You ______ do exercise regularly.", options: { A: "should", B: "must to", C: "ought", D: "need" }, correct: "A", explanation: "It's a good idea to V → You should V." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "She eats healthily, but she keeps gaining weight. → ______ she eats healthily, she keeps gaining weight.", options: { A: "Although", B: "Because", C: "Unless", D: "So" }, correct: "A", explanation: "S1, but S2 → Although S1, S2." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "She takes paracetamol if she gets a headache. → Whenever she suffers ______________ (from) a headache, she takes paracetamol.", accepted: ["from"], correct: "from", explanation: "suffer from + N." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "Peter eats junk food, so he puts on weight. → ______________ (Because) Peter eats junk food, he puts on weight.", accepted: ["because"], correct: "Because", explanation: "S1, so S2 → Because S1, S2." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "Herbal medicine works faster than most modern pills.", correct: "False", explanation: "Sai theo bài đọc — thuốc thảo dược có tác dụng chậm hơn." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "Common items like coffee and garlic are considered types of herbal medicine.", correct: "True", explanation: "Đúng theo bài đọc." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "According to the passage, why is herbal medicine becoming popular again?", options: { A: "Because it is much cheaper than seeing a doctor.", B: "Because people want to find pretty flowers.", C: "Because people are more interested in their personal health.", D: "Because pills no longer work." }, correct: "C", explanation: "Bài đọc nêu rõ lý do." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "The doctor advised him to do exercise regularly because he was ______________ (WEIGHT).", accepted: ["overweight"], correct: "overweight", explanation: "weight (n) → overweight (adj)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "Fast food can be ______________ (HARM) to our health.", accepted: ["harmful"], correct: "harmful", explanation: "harm (n) → harmful (adj, +ful)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "Doing sports regularly helps students stay ______________ (ACTIVITY).", accepted: ["active"], correct: "active", explanation: "activity (n) → active (adj)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'dạ dày'?", options: { A: "stomach", B: "lung", C: "throat", D: "heart" }, correct: "A", explanation: "stomach (n) = dạ dày." }
  ]
};
