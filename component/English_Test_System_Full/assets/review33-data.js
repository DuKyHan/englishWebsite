const REVIEW = {
  id: "test33",
  testFile: "test33.html",
  grade: "Grade 6 — Global Success",
  unit: "Unit 5: Natural wonders of Viet Nam",
  title: "Knowledge Review — Unit 5, Practice Test 1",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "wonderful", pos: "adj", ipa: "/ˈwʌndərfl/", meaning: "tuyệt vời", example: "Sapa is famous for its stunning mountains and wonderful landscapes.", exampleVi: "Sapa nổi tiếng với những dãy núi hùng vĩ và cảnh quan tuyệt vời." },
    { word: "unforgettable", pos: "adj", ipa: "/ˌʌnfərˈɡetəbl/", meaning: "khó quên", example: "We had an unforgettable trip to Ba Vi National Park last autumn.", exampleVi: "Chúng tôi đã có một chuyến đi khó quên đến Vườn quốc gia Ba Vì mùa thu năm ngoái." },
    { word: "excitement", pos: "n", ipa: "/ɪkˈsaɪtmənt/", meaning: "sự phấn khích", example: "The natural beauty of Ha Long Bay brings a lot of excitement to visitors.", exampleVi: "Vẻ đẹp tự nhiên của Vịnh Hạ Long mang lại nhiều sự phấn khích cho du khách." },
    { word: "naturally", pos: "adv", ipa: "/ˈnætʃrəli/", meaning: "một cách tự nhiên", example: "Fansipan is naturally located in Lao Cai province, Vietnam.", exampleVi: "Fansipan nằm ở tỉnh Lào Cai, Việt Nam một cách tự nhiên." },
    { word: "traditional", pos: "adj", ipa: "/trəˈdɪʃənl/", meaning: "truyền thống", example: "There are many traditional wonders that you should explore in Vietnam.", exampleVi: "Có nhiều kỳ quan truyền thống mà bạn nên khám phá ở Việt Nam." },
    { word: "useful", pos: "adj", ipa: "/ˈjuːsfl/", meaning: "hữu ích", example: "The guide gave us some useful tips before we went into the forest.", exampleVi: "Hướng dẫn viên đã cho chúng tôi vài lời khuyên hữu ích trước khi vào rừng." },
    { word: "backpack", pos: "n", ipa: "/ˈbækpæk/", meaning: "ba lô", example: "Walking for hours with a heavy backpack can cause a lot of shoulder and back pain.", exampleVi: "Đi bộ nhiều giờ với chiếc ba lô nặng có thể gây đau vai và lưng." },
    { word: "sleeping bag", pos: "n", ipa: "/ˈsliːpɪŋ bæɡ/", meaning: "túi ngủ", example: "It is a kind of large warm bag for sleeping in, used by campers.", exampleVi: "Đó là loại túi lớn, ấm để chui vào ngủ, thường dùng khi cắm trại." },
    { word: "participate", pos: "v", ipa: "/pɑːrˈtɪsɪpeɪt/", meaning: "tham gia", example: "Two hundred and sixty students participated in the action-research study.", exampleVi: "Hai trăm sáu mươi học sinh đã tham gia vào nghiên cứu hành động này." },
    { word: "mount", pos: "n", ipa: "/maʊnt/", meaning: "núi (dùng trước tên riêng)", example: "Mount Fansipan is located in Lao Cai province, about 9km southwest of Sapa town.", exampleVi: "Núi Fansipan nằm ở tỉnh Lào Cai, cách thị trấn Sapa khoảng 9km về phía Tây Nam." },
    { word: "exciting", pos: "adj", ipa: "/ɪkˈsaɪtɪŋ/", meaning: "thú vị, hấp dẫn", example: "Visitors can join many exciting activities there.", exampleVi: "Du khách có thể tham gia nhiều hoạt động thú vị ở đó." },
    { word: "tropical paradise", pos: "n", ipa: "/ˈtrɒpɪkl ˈpærədaɪs/", meaning: "thiên đường nhiệt đới", example: "People often think of Nha Trang as a tropical paradise.", exampleVi: "Mọi người thường nghĩ về Nha Trang như một thiên đường nhiệt đới." },
    { word: "coastline", pos: "n", ipa: "/ˈkoʊstlaɪn/", meaning: "bờ biển, đường bờ biển", example: "Nha Trang has a long coastline and beautiful white sandy beaches.", exampleVi: "Nha Trang có bờ biển dài và những bãi cát trắng đẹp." },
    { word: "scuba diving", pos: "n", ipa: "/ˈskuːbə ˌdaɪvɪŋ/", meaning: "lặn bình dưỡng khí", example: "Tourists can take part in outdoor activities such as scuba diving and snorkeling.", exampleVi: "Du khách có thể tham gia các hoạt động ngoài trời như lặn bình dưỡng khí và lặn ống thở." },
    { word: "snorkeling", pos: "n", ipa: "/ˈsnɔːrkəlɪŋ/", meaning: "lặn ống thở", example: "Scuba diving and snorkeling are both interesting sports.", exampleVi: "Lặn bình dưỡng khí và lặn ống thở đều là những môn thể thao thú vị." },
    { word: "aquarium", pos: "n", ipa: "/əˈkweəriəm/", meaning: "thủy cung, bể cá", example: "Tri Nguyen Aquarium is now home to different kinds of colourful fish.", exampleVi: "Thủy cung Trí Nguyên hiện là nơi sinh sống của nhiều loài cá đầy màu sắc." },
    { word: "seafood", pos: "n", ipa: "/ˈsiːfuːd/", meaning: "hải sản", example: "Tourists eat a lot of local seafood such as crabs, shrimps and several kinds of fish.", exampleVi: "Du khách ăn rất nhiều hải sản địa phương như cua, tôm và nhiều loại cá." },
    { word: "fresh", pos: "adj", ipa: "/freʃ/", meaning: "tươi", example: "All the seafood in the fishing village is fresh and delicious.", exampleVi: "Tất cả hải sản trong làng chài đều tươi và ngon." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'khó quên':", options: { A: "unforgettable", B: "wonderful", C: "traditional", D: "useful" }, correct: "A", explanation: "<b>unforgettable</b> (adj) = khó quên." },
      { id: "vp2", prompt: "Choose the word that means 'tham gia':", options: { A: "participate", B: "explore", C: "travel", D: "visit" }, correct: "A", explanation: "<b>participate</b> (v) = tham gia." },
      { id: "vp3", prompt: "\"It is a kind of large warm bag for sleeping in, used by campers.\" → It's a ______.", options: { A: "sleeping bag", B: "backpack", C: "aquarium", D: "coastline" }, correct: "A", explanation: "\"<b>sleeping bag</b>\" (túi ngủ) khớp với định nghĩa được đưa ra." },
      { id: "vp4", prompt: "Choose the word that means 'hải sản':", options: { A: "seafood", B: "fresh", C: "coastline", D: "paradise" }, correct: "A", explanation: "<b>seafood</b> (n) = hải sản." },
      { id: "vp5", prompt: "\"Visitors can join many ______ activities there.\"", options: { A: "exciting", B: "excitement", C: "excite", D: "excitingly" }, correct: "A", explanation: "Cần tính từ đứng trước danh từ \"activities\" → <b>exciting</b> (adj, +ing)." },
      { id: "vp6", prompt: "Choose the word that means 'tươi':", options: { A: "fresh", B: "traditional", C: "wonderful", D: "useful" }, correct: "A", explanation: "<b>fresh</b> (adj) = tươi." }
    ],
    fillblank: [
      { id: "vf1", prompt: "The natural beauty of Ha Long Bay brings a lot of ______________ (sự phấn khích) to visitors.", accepted: ["excitement"], correct: "excitement", explanation: "<b>excitement</b> (n) = sự phấn khích." },
      { id: "vf2", prompt: "There are many ______________ (truyền thống) wonders that you should explore in Vietnam.", accepted: ["traditional"], correct: "traditional", explanation: "<b>traditional</b> (adj) = truyền thống." },
      { id: "vf3", prompt: "Two hundred and sixty students ______________ (đã tham gia) in the action-research study.", accepted: ["participated"], correct: "participated", explanation: "<b>participate</b> (v) → participated (quá khứ) = đã tham gia." },
      { id: "vf4", prompt: "Tourists can take part in ______________ (lặn bình dưỡng khí) and snorkeling.", accepted: ["scuba diving"], correct: "scuba diving", explanation: "<b>scuba diving</b> (n) = lặn bình dưỡng khí." },
      { id: "vf5", prompt: "Tri Nguyen ______________ (thủy cung) is now home to different kinds of colourful fish.", accepted: ["aquarium"], correct: "aquarium", explanation: "<b>aquarium</b> (n) = thủy cung, bể cá." },
      { id: "vf6", prompt: "All the seafood in the fishing village is ______________ (tươi) and delicious.", accepted: ["fresh"], correct: "fresh", explanation: "<b>fresh</b> (adj) = tươi." }
    ],
    matching: {
      left: ["mount", "coastline", "sleeping bag", "snorkeling", "useful", "naturally"],
      right: ["núi (dùng trước tên riêng)", "bờ biển", "túi ngủ", "lặn ống thở", "hữu ích", "một cách tự nhiên"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"We had an ______ trip to Ba Vi National Park.\" (FORGET)", options: { A: "forget", B: "forgetful", C: "unforgettable", D: "forgotten" }, correct: "C", explanation: "Cần tính từ đứng trước danh từ \"trip\" → forget (v) → <b>unforgettable</b> (adj, un- + -able)." },
      { id: "cw2", prompt: "\"Fansipan is ______ located in Lao Cai province.\" (NATURE)", options: { A: "nature", B: "natural", C: "naturally", D: "unnatural" }, correct: "C", explanation: "Cần trạng từ bổ nghĩa động từ \"is located\" → nature (n) → natural (adj) → <b>naturally</b> (adv)." },
      { id: "cw3", prompt: "\"The guide gave us some ______ tips.\" (USE)", options: { A: "use", B: "useful", C: "useless", D: "user" }, correct: "B", explanation: "Cần tính từ mang nghĩa tích cực trước \"tips\" → use (n/v) → <b>useful</b> (adj, +ful)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'seafood' mean?", options: { A: "hải sản", B: "rau củ", C: "trái cây", D: "thịt bò" }, correct: "A", explanation: "seafood (n) = hải sản." },
      { id: "wm2", prompt: "What does 'aquarium' mean?", options: { A: "sân vận động", B: "thủy cung, bể cá", C: "công viên", D: "bảo tàng" }, correct: "B", explanation: "aquarium (n) = thủy cung, bể cá." },
      { id: "wm3", prompt: "What does 'unforgettable' mean?", options: { A: "dễ quên", B: "bình thường", C: "khó quên", D: "nhàm chán" }, correct: "C", explanation: "unforgettable (adj) = khó quên." }
    ],
    wordForm: [
      { id: "wf1", prompt: "We had an ______________ (FORGET) trip to Ba Vi National Park last autumn.", accepted: ["unforgettable"], correct: "unforgettable", explanation: "forget (v) → unforgettable (adj, un- + -able)." },
      { id: "wf2", prompt: "Sapa is famous for its stunning mountains and ______________ (WONDER) landscapes.", accepted: ["wonderful"], correct: "wonderful", explanation: "wonder (n/v) → wonderful (adj, +ful)." },
      { id: "wf3", prompt: "The guide gave us some ______________ (USE) tips before we went into the forest.", accepted: ["useful"], correct: "useful", explanation: "use (n/v) → useful (adj, +ful)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "I'm sure + S + V ⇄ S + must + V (nguyên thể)",
      usage: "\"I'm sure + mệnh đề\" (tôi chắc chắn rằng) diễn tả sự suy đoán chắc chắn, có thể viết lại bằng \"S + must + V nguyên thể\" (chắc hẳn là) với cùng nghĩa suy đoán.",
      formulas: [
        "I'm sure + S + is/are + adj.  →  S + must be + adj.",
        "I'm sure you are very tired after working so hard. → You must be very tired after working so hard."
      ],
      signals: ["I'm sure that...", "S + must + V (suy đoán chắc chắn)"],
      examples: [
        { en: "I'm sure you are very tired after working so hard.", vi: "Tôi chắc chắn là bạn rất mệt sau khi làm việc vất vả." },
        { en: "You must be very tired after working so hard.", vi: "Chắc hẳn là bạn rất mệt sau khi làm việc vất vả." }
      ],
      mistakes: [
        { wrong: "You must very tired after working so hard.", right: "You must be very tired after working so hard. (cần động từ \"be\" giữa \"must\" và tính từ)" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "I'm sure he is at home now. → He ______________ (must) be at home now.", accepted: ["must"], correct: "must", explanation: "I'm sure + S + V → S + must + V." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'I'm sure they are having a great time.' → They ______________ (must) be having a great time.", accepted: ["must"], correct: "must", explanation: "I'm sure + S + V → S + must + V." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'I'm sure this backpack is very heavy.' → ______________ (This backpack must be very heavy).", accepted: ["this backpack must be very heavy"], correct: "This backpack must be very heavy", explanation: "I'm sure + S + V → S + must + V." }
        ]
      }
    },
    {
      id: "g2", name: "Remember to + V ⇄ Don't forget to + V",
      usage: "\"Remember to + V nguyên thể\" (hãy nhớ làm gì) có nghĩa tương đương với \"Don't forget to + V nguyên thể\" (đừng quên làm gì).",
      formulas: [
        "Remember to + V.  →  Don't forget to + V.",
        "Remember to wear suncream and bring water during the trip. → Don't forget to wear suncream and bring water during the trip."
      ],
      signals: ["Remember to + V", "Don't forget to + V"],
      examples: [
        { en: "Remember to wear suncream and bring water during the trip.", vi: "Hãy nhớ thoa kem chống nắng và mang nước theo trong chuyến đi." },
        { en: "Don't forget to wear suncream and bring water during the trip.", vi: "Đừng quên thoa kem chống nắng và mang nước theo trong chuyến đi." }
      ],
      mistakes: [
        { wrong: "Don't forget wearing suncream.", right: "Don't forget to wear suncream. (\"forget to + V\" = quên phải làm gì đó chưa làm)" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "Remember to lock the door. → Don't forget ______________ (to lock) the door.", accepted: ["to lock"], correct: "to lock", explanation: "Remember to V → Don't forget to V." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'Remember to bring your backpack.' → Don't forget ______________ (to bring) your backpack.", accepted: ["to bring"], correct: "to bring", explanation: "Remember to V → Don't forget to V." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Remember to pack a sleeping bag.' → ______________ (Don't forget to pack a sleeping bag).", accepted: ["don't forget to pack a sleeping bag"], correct: "Don't forget to pack a sleeping bag", explanation: "Remember to V → Don't forget to V." }
        ]
      }
    },
    {
      id: "g3", name: "A is shorter than B ⇄ B is longer than A",
      usage: "So sánh hơn \"A + is + shorter + than + B\" (A ngắn hơn B) có thể đảo chủ ngữ và tính từ trái nghĩa thành \"B + is + longer + than + A\" (B dài hơn A), giữ nguyên nghĩa.",
      formulas: [
        "A + is shorter than + B.  →  B + is longer than + A.",
        "The Red River is shorter than the Mekong River. → The Mekong River is longer than the Red River."
      ],
      signals: ["A is shorter than B", "B is longer than A"],
      examples: [
        { en: "The Red River is shorter than the Mekong River.", vi: "Sông Hồng ngắn hơn sông Mê Kông." },
        { en: "The Mekong River is longer than the Red River.", vi: "Sông Mê Kông dài hơn sông Hồng." }
      ],
      mistakes: [
        { wrong: "The Mekong River is more long than the Red River.", right: "The Mekong River is longer than the Red River. (\"long\" là tính từ ngắn, thêm \"-er\", không dùng \"more\")" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "This street is shorter than that one. → That street is ______________ (longer) than this one.", accepted: ["longer"], correct: "longer", explanation: "A is shorter than B → B is longer than A." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'The old bridge is shorter than the new one.' → The new bridge is ______________ (longer) than the old one.", accepted: ["longer"], correct: "longer", explanation: "A is shorter than B → B is longer than A." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'This trail is shorter than that mountain path.' → ______________ (That mountain path is longer than this trail).", accepted: ["that mountain path is longer than this trail"], correct: "That mountain path is longer than this trail", explanation: "A is shorter than B → B is longer than A." }
        ]
      }
    },
    {
      id: "g4", name: "There is/are + N + in + N2 ⇄ N2 + has/have + N",
      usage: "Câu giới thiệu sự tồn tại \"There is/are + N + in + N2\" có thể viết lại bằng \"N2 + has/have + N\", đổi chủ ngữ nhưng giữ nguyên nghĩa.",
      formulas: [
        "There is/are + N + in + N2.  →  N2 + has/have + N.",
        "There is a compass, a sleeping bag, and some plasters in their backpack. → Their backpack has a compass, a sleeping bag, and some plasters."
      ],
      signals: ["There is/are + N + in + N2", "N2 + has/have + N"],
      examples: [
        { en: "There is a compass, a sleeping bag, and some plasters in their backpack.", vi: "Có một cái la bàn, một túi ngủ và vài miếng băng dán trong ba lô của họ." },
        { en: "Their backpack has a compass, a sleeping bag, and some plasters.", vi: "Ba lô của họ có một cái la bàn, một túi ngủ và vài miếng băng dán." }
      ],
      mistakes: [
        { wrong: "Their backpack have a compass.", right: "Their backpack has a compass. (chủ ngữ số ít \"backpack\" cần động từ \"has\")" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "There is a map and a torch in his bag. → His bag ______________ (has) a map and a torch.", accepted: ["has"], correct: "has", explanation: "There is/are + N + in + N2 → N2 + has/have + N." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'There are three bedrooms in our house.' → Our house ______________ (has) three bedrooms.", accepted: ["has"], correct: "has", explanation: "There is/are + N + in + N2 → N2 + has/have + N." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'There is a lot of fresh seafood in this fishing village.' → ______________ (This fishing village has a lot of fresh seafood).", accepted: ["this fishing village has a lot of fresh seafood"], correct: "This fishing village has a lot of fresh seafood", explanation: "There is/are + N + in + N2 → N2 + has/have + N." }
        ]
      }
    },
    {
      id: "g5", name: "(Bonus) one of the + tính từ so sánh nhất + danh từ số nhiều",
      usage: "Cấu trúc \"one of the + tính từ so sánh nhất (the + adj-est/most adj) + danh từ số nhiều\" nghĩa là \"một trong những... nhất\", luôn dùng giới từ \"of\" và danh từ ở dạng số nhiều.",
      formulas: [
        "one of the + adj-est/most adj + N (số nhiều)",
        "Tuan Chau is one of the largest islands in Ha Long Bay."
      ],
      signals: ["one of the + so sánh nhất + N (số nhiều)"],
      examples: [
        { en: "Tuan Chau is one of the largest islands in Ha Long Bay.", vi: "Tuần Châu là một trong những hòn đảo lớn nhất ở Vịnh Hạ Long." },
        { en: "Nha Trang is one of the most beautiful cities in Viet Nam.", vi: "Nha Trang là một trong những thành phố đẹp nhất Việt Nam." }
      ],
      mistakes: [
        { wrong: "Tuan Chau is one of the largest island in Ha Long Bay.", right: "Tuan Chau is one of the largest islands in Ha Long Bay. (danh từ sau cấu trúc này luôn ở dạng số nhiều)" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "Fansipan is one of the highest ______________ (mountain) in South-East Asia.", accepted: ["mountains"], correct: "mountains", explanation: "Danh từ sau \"one of the + so sánh nhất\" phải ở số nhiều." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Rewrite: 'Non Nuoc is a very beautiful beach.' → Non Nuoc is one of the most beautiful ______________ (beach) in the world.", accepted: ["beaches"], correct: "beaches", explanation: "\"one of the + so sánh nhất + N số nhiều\"." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The Mekong River is a very long river.' → ______________ (The Mekong River is one of the longest rivers in South-East Asia).", accepted: ["the mekong river is one of the longest rivers in south-east asia", "the mekong river is one of the longest rivers in southeast asia"], correct: "The Mekong River is one of the longest rivers in South-East Asia", explanation: "\"one of the + so sánh nhất + N số nhiều\"." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "When people talk about Nha Trang, <mark data-w=\"the biggest city in Khanh Hoa Province\">the biggest city in Khanh Hoa Province</mark>, they often think of a tropical paradise with a long coastline and beautiful white sandy beaches. In the morning or afternoon, tourists can take part in various outdoor activities such as <mark data-w=\"mud bathing, swimming, scuba diving and snorkeling\">mud bathing, swimming, scuba diving and snorkeling</mark>. Scuba diving and snorkeling are both interesting sports as swimmers swim underwater and <mark data-w=\"admire the lives at the bottom of the sea\">admire the lives at the bottom of the sea</mark>. Tourists can also take boat trips to the islands. One of the most enjoyable things is the trip to Mieu island, where <mark data-w=\"Tri Nguyen Aquarium\">Tri Nguyen Aquarium</mark> was built in 19th century. This aquarium is now home to different kinds of colourful fish. Tourists can spend an evening visiting a fishing village where they eat a lot of <mark data-w=\"local seafood such as crabs, shrimps and several kinds of fish\">local seafood such as crabs, shrimps and several kinds of fish</mark>. All are fresh and delicious.",
    vocabInContext: {
      "the biggest city in Khanh Hoa Province": "thành phố lớn nhất tỉnh Khánh Hòa",
      "mud bathing, swimming, scuba diving and snorkeling": "tắm bùn, bơi lội, lặn bình dưỡng khí và lặn ống thở",
      "admire the lives at the bottom of the sea": "ngắm nhìn sự sống dưới đáy biển",
      "Tri Nguyen Aquarium": "Thủy cung Trí Nguyên",
      "local seafood such as crabs, shrimps and several kinds of fish": "hải sản địa phương như cua, tôm và nhiều loại cá"
    },
    translation: "<b>NHA TRANG</b><br><br>Khi nhắc đến Nha Trang, thành phố lớn nhất tỉnh Khánh Hòa, người ta thường nghĩ đến một thiên đường nhiệt đới với đường bờ biển dài và những bãi cát trắng tuyệt đẹp. Vào buổi sáng hoặc chiều, du khách có thể tham gia nhiều hoạt động ngoài trời như tắm bùn, bơi lội, lặn bình dưỡng khí và lặn ống thở. Lặn bình dưỡng khí và lặn ống thở đều là những môn thể thao thú vị vì người bơi có thể bơi dưới nước và ngắm nhìn sự sống dưới đáy biển. Du khách cũng có thể đi thuyền ra các đảo. Một trong những trải nghiệm thú vị nhất là chuyến đi đến đảo Mieu, nơi Thủy cung Trí Nguyên được xây dựng vào thế kỷ 19. Thủy cung này hiện là nơi sinh sống của nhiều loài cá đầy màu sắc. Du khách có thể dành buổi tối ghé thăm một làng chài, nơi họ thưởng thức rất nhiều hải sản địa phương như cua, tôm và nhiều loại cá. Tất cả đều tươi và ngon.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Nha Trang is a small town in Khanh Hoa Province.", correct: "False", explanation: "Sai. Nha Trang là thành phố lớn nhất tỉnh Khánh Hòa, không phải thị trấn nhỏ." },
      { id: "r2", type: "truefalse", prompt: "Tourists can go swimming and mud bathing in Nha Trang.", correct: "True", explanation: "Đúng. Bài đọc liệt kê \"mud bathing, swimming, scuba diving and snorkeling\"." },
      { id: "r3", type: "truefalse", prompt: "Tri Nguyen Aquarium is located on Mieu island.", correct: "True", explanation: "Đúng. \"the trip to Mieu island, where Tri Nguyen Aquarium was built\"." },
      { id: "r4", type: "truefalse", prompt: "There is no seafood for tourists to eat in the fishing village.", correct: "False", explanation: "Sai. Có rất nhiều hải sản: cua, tôm và nhiều loại cá." },
      { id: "r5", type: "mcq", prompt: "What can swimmers do when they go scuba diving and snorkeling?", options: { A: "They can buy colourful fish.", B: "They can build an aquarium.", C: "They can see life under the sea.", D: "They can take a boat trip to town." }, correct: "C", explanation: "Bài đọc: \"swimmers swim underwater and admire the lives at the bottom of the sea\"." },
      { id: "r6", type: "mcq", prompt: "The word \"fresh\" in the last paragraph is closest in meaning to __________.", options: { A: "recently caught or made", B: "very expensive to buy", C: "cooked a long time ago", D: "difficult to find locally" }, correct: "A", explanation: "\"fresh\" nghĩa là mới được đánh bắt/chế biến gần đây." },
      { id: "r7", type: "fillblank", prompt: "Find the word in the passage that means 'ngắm nhìn, thán phục'.", accepted: ["admire"], correct: "admire", explanation: "\"admire the lives at the bottom of the sea\" — admire = ngắm nhìn, thán phục." },
      { id: "r8", type: "mcq", prompt: "In which century was Tri Nguyen Aquarium built?", options: { A: "18th century", B: "19th century", C: "20th century", D: "21st century" }, correct: "B", explanation: "Bài đọc: \"Tri Nguyen Aquarium was built in 19th century.\"" },
      { id: "r9", type: "truefalse", prompt: "Tourists can only visit the islands near Nha Trang by plane.", correct: "False", explanation: "Sai. Bài đọc: \"Tourists can also take boat trips to the islands\" — du khách đi thuyền, không phải máy bay." }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "Viet Nam is in South-East Asia. It has a lot of beautiful mountains, rivers and beaches.", suggested: "Việt Nam nằm ở Đông Nam Á. Đất nước có rất nhiều núi non, sông ngòi và bãi biển đẹp.", notes: "\"a lot of\" (rất nhiều) đi với danh từ đếm được và không đếm được." },
    { id: "t2", en: "The Mekong River starts at Tibet and flows to the East Sea.", suggested: "Sông Mê Kông bắt nguồn từ Tây Tạng và chảy ra Biển Đông.", notes: "\"starts at\" (bắt nguồn từ), \"flows to\" (chảy vào/ra)." },
    { id: "t3", en: "Tourists can take part in various outdoor activities such as mud bathing, swimming, scuba diving and snorkeling.", suggested: "Du khách có thể tham gia nhiều hoạt động ngoài trời khác nhau như tắm bùn, bơi lội, lặn bình dưỡng khí và lặn ống thở.", notes: "\"take part in\" (tham gia vào) = \"participate in\"." },
    { id: "t4", en: "Tourists can spend an evening visiting a fishing village where they eat a lot of local seafood.", suggested: "Du khách có thể dành một buổi tối ghé thăm làng chài, nơi họ thưởng thức rất nhiều hải sản địa phương.", notes: "\"where\" là đại từ quan hệ chỉ nơi chốn." },
    { id: "t5", en: "Walking for hours with a heavy backpack can cause a lot of shoulder and back pain.", suggested: "Đi bộ nhiều giờ với chiếc ba lô nặng có thể gây đau vai và lưng nhiều.", notes: "\"cause\" (gây ra) đi với danh từ chỉ hậu quả." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "I'm sure + S + V ⇄ S + must + V",
      formula: "I'm sure + S + is/are + adj  →  S + must be + adj",
      example: { before: "I'm sure you are very tired after working so hard.", after: "You must be very tired after working so hard." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "I'm sure he is at home now. → He ______________ (must) be at home now.", accepted: ["must"], correct: "must", explanation: "I'm sure + S + V → S + must + V." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'I'm sure they are having a great time.' → They ______________ (must) be having a great time.", accepted: ["must"], correct: "must", explanation: "I'm sure + S + V → S + must + V." }
      ]
    },
    {
      id: "tr2", name: "Remember to + V ⇄ Don't forget to + V",
      formula: "Remember to + V  →  Don't forget to + V",
      example: { before: "Remember to wear suncream and bring water during the trip.", after: "Don't forget to wear suncream and bring water during the trip." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "Remember to lock the door. → Don't forget ______________ (to lock) the door.", accepted: ["to lock"], correct: "to lock", explanation: "Remember to V → Don't forget to V." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'Remember to bring your backpack.' → Don't forget ______________ (to bring) your backpack.", accepted: ["to bring"], correct: "to bring", explanation: "Remember to V → Don't forget to V." }
      ]
    },
    {
      id: "tr3", name: "A is shorter than B ⇄ B is longer than A",
      formula: "A + is shorter than + B  →  B + is longer than + A",
      example: { before: "The Red River is shorter than the Mekong River.", after: "The Mekong River is longer than the Red River." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "This street is shorter than that one. → That street is ______________ (longer) than this one.", accepted: ["longer"], correct: "longer", explanation: "A is shorter than B → B is longer than A." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'The old bridge is shorter than the new one.' → The new bridge is ______________ (longer) than the old one.", accepted: ["longer"], correct: "longer", explanation: "A is shorter than B → B is longer than A." }
      ]
    },
    {
      id: "tr4", name: "There is/are + N + in + N2 ⇄ N2 + has/have + N",
      formula: "There is/are + N + in + N2  →  N2 + has/have + N",
      example: { before: "There is a compass, a sleeping bag, and some plasters in their backpack.", after: "Their backpack has a compass, a sleeping bag, and some plasters." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "There is a map and a torch in his bag. → His bag ______________ (has) a map and a torch.", accepted: ["has"], correct: "has", explanation: "There is/are + N + in + N2 → N2 + has/have + N." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'There are three bedrooms in our house.' → Our house ______________ (has) three bedrooms.", accepted: ["has"], correct: "has", explanation: "There is/are + N + in + N2 → N2 + has/have + N." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Unforgettable' means:", options: { A: "khó quên", B: "dễ quên", C: "bình thường", D: "nhàm chán" }, correct: "A", explanation: "unforgettable (adj) = khó quên." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Seafood' means:", options: { A: "rau củ", B: "hải sản", C: "trái cây", D: "thịt gà" }, correct: "B", explanation: "seafood (n) = hải sản." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "Two hundred and sixty students ______________ (đã tham gia) in the action-research study.", accepted: ["participated"], correct: "participated", explanation: "participate (v) → participated (đã tham gia)." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "I'm sure you are very tired. → You ______ be very tired.", options: { A: "must", B: "can", C: "should", D: "may" }, correct: "A", explanation: "I'm sure + S + V → S + must + V (suy đoán chắc chắn)." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "Remember to wear suncream. → Don't forget ______ wear suncream.", options: { A: "to", B: "for", C: "at", D: "with" }, correct: "A", explanation: "\"Don't forget to + V\" là cấu trúc tương đương của \"Remember to + V\"." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "The Red River is shorter than the Mekong River. → The Mekong River is ______________ (longer) than the Red River.", accepted: ["longer"], correct: "longer", explanation: "A is shorter than B → B is longer than A." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "There is a compass in their backpack. → Their backpack ______________ (has) a compass.", accepted: ["has"], correct: "has", explanation: "There is/are + N + in + N2 → N2 + has/have + N." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "Nha Trang is a small town in Khanh Hoa Province.", correct: "False", explanation: "Sai theo bài đọc — Nha Trang là thành phố lớn nhất tỉnh Khánh Hòa." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "Tri Nguyen Aquarium is located on Mieu island.", correct: "True", explanation: "Đúng theo bài đọc." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "What can swimmers do when they go scuba diving and snorkeling?", options: { A: "They can buy colourful fish.", B: "They can build an aquarium.", C: "They can see life under the sea.", D: "They can take a boat trip to town." }, correct: "C", explanation: "Bài đọc nêu rõ họ có thể ngắm nhìn sự sống dưới đáy biển." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "Sapa is famous for its stunning mountains and ______________ (WONDER) landscapes.", accepted: ["wonderful"], correct: "wonderful", explanation: "wonder (n/v) → wonderful (adj, +ful)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "We had an ______________ (FORGET) trip to Ba Vi National Park last autumn.", accepted: ["unforgettable"], correct: "unforgettable", explanation: "forget (v) → unforgettable (adj, un- + -able)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "The guide gave us some ______________ (USE) tips before we went into the forest.", accepted: ["useful"], correct: "useful", explanation: "use (n/v) → useful (adj, +ful)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'túi ngủ'?", options: { A: "sleeping bag", B: "backpack", C: "aquarium", D: "coastline" }, correct: "A", explanation: "sleeping bag (n) = túi ngủ." }
  ]
};
