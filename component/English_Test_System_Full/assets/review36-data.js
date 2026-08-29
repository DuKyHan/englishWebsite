const REVIEW = {
  id: "test36",
  testFile: "test36.html",
  grade: "Grade 6 — Global Success",
  unit: "Unit 6: Our Tet holiday",
  title: "Knowledge Review — Unit 6, Practice Test 2",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "different", pos: "adj", ipa: "/ˈdɪfrənt/", meaning: "khác nhau", example: "Lucy and I have different opinions, but we still get on well with each other.", exampleVi: "Lucy và tôi có những ý kiến khác nhau, nhưng chúng tôi vẫn hòa hợp với nhau." },
    { word: "candies", pos: "n", ipa: "/ˈkændiz/", meaning: "kẹo", example: "The Easter Bunny brings children Easter baskets with eggs and candies.", exampleVi: "Thỏ Phục Sinh mang đến cho trẻ em những giỏ quà Phục Sinh với trứng và kẹo." },
    { word: "religious", pos: "adj", ipa: "/rɪˈlɪdʒəs/", meaning: "thuộc về tôn giáo", example: "Easter is a religious holiday for Christians around the world.", exampleVi: "Lễ Phục Sinh là một ngày lễ tôn giáo đối với các tín đồ Cơ Đốc giáo trên toàn thế giới." },
    { word: "beginning", pos: "n", ipa: "/bɪˈɡɪnɪŋ/", meaning: "sự bắt đầu", example: "For many people, Easter celebrates the beginning of spring.", exampleVi: "Đối với nhiều người, lễ Phục Sinh đánh dấu sự bắt đầu của mùa xuân." },
    { word: "wonderful", pos: "adj", ipa: "/ˈwʌndərfl/", meaning: "tuyệt vời", example: "On Easter Sunday, families often come together for a wonderful dinner.", exampleVi: "Vào Chủ nhật Phục Sinh, các gia đình thường quây quần bên nhau trong một bữa tối tuyệt vời." },
    { word: "bloom", pos: "v", ipa: "/bluːm/", meaning: "nở hoa", example: "The earth wears \"new clothes\" when beautiful flowers bloom in the spring.", exampleVi: "Trái đất khoác lên mình \"chiếc áo mới\" khi những bông hoa đẹp nở rộ vào mùa xuân." },
    { word: "crowded", pos: "adj", ipa: "/ˈkraʊdɪd/", meaning: "đông đúc", example: "Pubs and restaurants are very crowded on New Year's Eve.", exampleVi: "Các quán rượu và nhà hàng rất đông đúc vào đêm giao thừa." },
    { word: "atmosphere", pos: "n", ipa: "/ˈætməsfɪr/", meaning: "bầu không khí", example: "There is a great atmosphere when everyone waits for Big Ben to strike midnight.", exampleVi: "Có một bầu không khí tuyệt vời khi mọi người chờ đợi tiếng chuông Big Ben điểm nửa đêm." },
    { word: "fine", pos: "n", ipa: "/faɪn/", meaning: "tiền phạt", example: "Books returned after the due date will incur a fee of $1 per day per book.", exampleVi: "Sách trả sau ngày hẹn sẽ bị phạt 1 đô la mỗi ngày cho mỗi cuốn sách." },
    { word: "hard hat", pos: "n", ipa: "/hɑːrd hæt/", meaning: "mũ bảo hộ", example: "You must wear a hard hat in this area.", exampleVi: "Bạn phải đội mũ bảo hộ trong khu vực này." },
    { word: "respect", pos: "n", ipa: "/rɪˈspekt/", meaning: "sự tôn trọng", example: "The young members of the family pay their respects to the elders.", exampleVi: "Các thành viên trẻ trong gia đình bày tỏ lòng tôn kính với người lớn tuổi." },
    { word: "lucky money", pos: "n", ipa: "/ˈlʌki ˈmʌni/", meaning: "tiền lì xì", example: "The children receive lucky money wrapped in red tiny envelopes.", exampleVi: "Trẻ em nhận được tiền lì xì được gói trong những phong bao đỏ nhỏ." },
    { word: "reunion dinner", pos: "n", ipa: "/riˈjuːniən ˈdɪnər/", meaning: "bữa cơm đoàn tụ", example: "On New Year's Eve, the whole family get together for a reunion dinner.", exampleVi: "Vào đêm giao thừa, cả gia đình sum họp cho bữa cơm đoàn tụ." },
    { word: "elder", pos: "n", ipa: "/ˈeldər/", meaning: "người lớn tuổi", example: "The young members of the family pay their respects to the elders.", exampleVi: "Các thành viên trẻ trong gia đình bày tỏ lòng tôn kính với người lớn tuổi." },
    { word: "relative", pos: "n", ipa: "/ˈrelətɪv/", meaning: "người thân", example: "Then people go to visit their neighbors, friends and relatives.", exampleVi: "Sau đó mọi người đi thăm hàng xóm, bạn bè và người thân." },
    { word: "wish for", pos: "v", ipa: "/wɪʃ fɔːr/", meaning: "mong ước, cầu chúc", example: "Many people present rice to wish for enough food throughout the year.", exampleVi: "Nhiều người tặng gạo để cầu mong đủ thức ăn suốt cả năm." },
    { word: "look forward to", pos: "v", ipa: "/lʊk ˈfɔːrwərd tuː/", meaning: "mong chờ, mong đợi", example: "Many people watch fireworks and look forward to the new year with hope and joy.", exampleVi: "Nhiều người xem pháo hoa và mong chờ năm mới với hy vọng và niềm vui." },
    { word: "gathering", pos: "n", ipa: "/ˈɡæðərɪŋ/", meaning: "sự tụ họp", example: "Tet is a wonderful time for family gathering.", exampleVi: "Tết là thời điểm tuyệt vời để gia đình tụ họp." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'tiền lì xì':", options: { A: "lucky money", B: "fine", C: "candies", D: "respect" }, correct: "A", explanation: "<b>lucky money</b> (n) = tiền lì xì." },
      { id: "vp2", prompt: "Choose the word that means 'người lớn tuổi':", options: { A: "elder", B: "relative", C: "resident", D: "footer" }, correct: "A", explanation: "<b>elder</b> (n) = người lớn tuổi." },
      { id: "vp3", prompt: "\"You must wear a ______ in this area.\"", options: { A: "hard hat", B: "lucky money", C: "reunion dinner", D: "atmosphere" }, correct: "A", explanation: "\"<b>hard hat</b>\" (mũ bảo hộ) phù hợp với ngữ cảnh biển báo an toàn lao động." },
      { id: "vp4", prompt: "Choose the word that means 'bầu không khí':", options: { A: "atmosphere", B: "gathering", C: "respect", D: "fine" }, correct: "A", explanation: "<b>atmosphere</b> (n) = bầu không khí." },
      { id: "vp5", prompt: "\"The earth wears 'new clothes' when beautiful flowers ______ in the spring.\"", options: { A: "bloom", B: "blooming", C: "bloomed", D: "blooms" }, correct: "A", explanation: "Chủ ngữ số nhiều \"flowers\" ở thì hiện tại đơn cần động từ nguyên thể → <b>bloom</b>." },
      { id: "vp6", prompt: "Choose the word that means 'người thân':", options: { A: "relative", B: "tourist", C: "resident", D: "instructor" }, correct: "A", explanation: "<b>relative</b> (n) = người thân." }
    ],
    fillblank: [
      { id: "vf1", prompt: "The young members of the family pay their ______________ (sự tôn trọng) to the elders.", accepted: ["respects", "respect"], correct: "respects", explanation: "<b>respect</b> (n) = sự tôn trọng, \"pay respects to\" = bày tỏ lòng tôn kính." },
      { id: "vf2", prompt: "The children receive ______________ (tiền lì xì) wrapped in red tiny envelopes.", accepted: ["lucky money"], correct: "lucky money", explanation: "<b>lucky money</b> (n) = tiền lì xì." },
      { id: "vf3", prompt: "On New Year's Eve, the whole family get together for a ______________ (bữa cơm đoàn tụ).", accepted: ["reunion dinner"], correct: "reunion dinner", explanation: "<b>reunion dinner</b> (n) = bữa cơm đoàn tụ." },
      { id: "vf4", prompt: "There is a great ______________ (bầu không khí) when everyone waits for Big Ben to strike midnight.", accepted: ["atmosphere"], correct: "atmosphere", explanation: "<b>atmosphere</b> (n) = bầu không khí." },
      { id: "vf5", prompt: "Many people ______________ (mong chờ) the new year with hope and joy.", accepted: ["look forward to"], correct: "look forward to", explanation: "<b>look forward to</b> (v) = mong chờ, mong đợi." },
      { id: "vf6", prompt: "Then people go to visit their neighbors, friends and ______________ (người thân).", accepted: ["relatives"], correct: "relatives", explanation: "<b>relative</b> (n) → relatives (số nhiều) = người thân." }
    ],
    matching: {
      left: ["candies", "religious", "crowded", "gathering", "wish for", "fine"],
      right: ["kẹo", "thuộc về tôn giáo", "đông đúc", "sự tụ họp", "mong ước, cầu chúc", "tiền phạt"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"Lucy and I have ______ opinions.\" (DIFFER)", options: { A: "differ", B: "different", C: "differently", D: "difference" }, correct: "B", explanation: "Cần tính từ đứng trước danh từ \"opinions\" → differ (v) → <b>different</b> (adj)." },
      { id: "cw2", prompt: "\"Easter is a ______ holiday for Christians.\" (RELIGION)", options: { A: "religion", B: "religious", C: "religiously", D: "religions" }, correct: "B", explanation: "Cần tính từ đứng trước danh từ \"holiday\" → religion (n) → <b>religious</b> (adj, +ous)." },
      { id: "cw3", prompt: "\"Easter celebrates the ______ of spring.\" (BEGIN)", options: { A: "begin", B: "began", C: "beginning", D: "begun" }, correct: "C", explanation: "Cần danh từ sau mạo từ \"the\" → begin (v) → <b>beginning</b> (n, +ing)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'crowded' mean?", options: { A: "vắng vẻ", B: "đông đúc", C: "yên tĩnh", D: "sạch sẽ" }, correct: "B", explanation: "crowded (adj) = đông đúc." },
      { id: "wm2", prompt: "What does 'look forward to' mean?", options: { A: "mong chờ, mong đợi", B: "quên lãng", C: "từ chối", D: "hối tiếc" }, correct: "A", explanation: "look forward to (v) = mong chờ, mong đợi." },
      { id: "wm3", prompt: "What does 'lucky money' mean?", options: { A: "tiền tiết kiệm", B: "tiền lì xì", C: "tiền lương", D: "tiền phạt" }, correct: "B", explanation: "lucky money (n) = tiền lì xì." }
    ],
    wordForm: [
      { id: "wf1", prompt: "Lucy and I have ______________ (DIFFER) opinions.", accepted: ["different"], correct: "different", explanation: "differ (v) → different (adj)." },
      { id: "wf2", prompt: "Easter is a ______________ (RELIGION) holiday for Christians around the world.", accepted: ["religious"], correct: "religious", explanation: "religion (n) → religious (adj, +ous)." },
      { id: "wf3", prompt: "On Easter Sunday, families come together for a ______________ (WONDER) dinner.", accepted: ["wonderful"], correct: "wonderful", explanation: "wonder (n/v) → wonderful (adj, +ful)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "S + should + V ⇄ It's a good idea/thing to + V",
      usage: "Lời khuyên \"S + should + V\" (nên làm gì) có thể viết lại bằng \"It's a good idea/thing to + V\", giữ nguyên nghĩa khuyên nhủ.",
      formulas: [
        "S + should + V.  →  It's a good idea/thing to + V.",
        "You should behave well during Tet. → It's a good idea to behave well during Tet."
      ],
      signals: ["S + should + V", "It's a good idea/thing to + V"],
      examples: [
        { en: "You should behave well during Tet.", vi: "Bạn nên cư xử tốt trong dịp Tết." },
        { en: "It's a good idea to behave well during Tet.", vi: "Cư xử tốt trong dịp Tết là một ý hay." }
      ],
      mistakes: [
        { wrong: "It's a good idea behave well during Tet.", right: "It's a good idea to behave well during Tet. (cần \"to V\" sau \"a good idea\")" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "You should arrive early. → It's a good idea ______________ (to arrive) early.", accepted: ["to arrive"], correct: "to arrive", explanation: "S + should + V → It's a good idea to + V." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'You should save some money.' → It's a good idea ______________ (to save) some money.", accepted: ["to save"], correct: "to save", explanation: "S + should + V → It's a good idea to + V." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'You should respect your elders.' → ______________ (It's a good idea to respect your elders).", accepted: ["it's a good idea to respect your elders", "it is a good idea to respect your elders"], correct: "It's a good idea to respect your elders", explanation: "S + should + V → It's a good idea to + V." }
        ]
      }
    },
    {
      id: "g2", name: "S + is/are + V-ing ⇄ S + is/are busy + V-ing",
      usage: "Câu tiếp diễn \"S + is/are + V-ing\" có thể viết lại bằng \"S + is/are busy + V-ing\" để nhấn mạnh sự bận rộn, giữ nguyên nghĩa hành động đang diễn ra.",
      formulas: [
        "S + is/are + V-ing.  →  S + is/are busy + V-ing.",
        "John is cleaning some furniture in his room. → John is busy cleaning some furniture in his room."
      ],
      signals: ["S + is/are + V-ing", "S + is/are busy + V-ing"],
      examples: [
        { en: "John is cleaning some furniture in his room.", vi: "John đang lau dọn một vài món đồ nội thất trong phòng." },
        { en: "John is busy cleaning some furniture in his room.", vi: "John đang bận lau dọn một vài món đồ nội thất trong phòng." }
      ],
      mistakes: [
        { wrong: "John is busy to clean furniture.", right: "John is busy cleaning furniture. (\"busy\" đi với V-ing, không phải \"to V\")" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "She is cooking dinner. → She is busy ______________ (cooking) dinner.", accepted: ["cooking"], correct: "cooking", explanation: "S + is/are + V-ing → S + is/are busy + V-ing." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'They are decorating the house.' → They are busy ______________ (decorating) the house.", accepted: ["decorating"], correct: "decorating", explanation: "S + is/are + V-ing → S + is/are busy + V-ing." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Lan is wrapping Chung cakes with her grandma.' → ______________ (Lan is busy wrapping Chung cakes with her grandma).", accepted: ["lan is busy wrapping chung cakes with her grandma"], correct: "Lan is busy wrapping Chung cakes with her grandma", explanation: "S + is/are + V-ing → S + is/are busy + V-ing." }
        ]
      }
    },
    {
      id: "g3", name: "suggest + V-ing ⇄ suggest that + S + should + V",
      usage: "\"suggest + V-ing\" (đề nghị làm gì) có thể viết lại bằng \"suggest that + S + should + V\", giữ nguyên nghĩa đề nghị.",
      formulas: [
        "S + suggested + V-ing.  →  S + suggested that + S2 + should + V.",
        "Laura suggested going skiing in the Alps at Christmas. → Laura suggested that we should go skiing in the Alps at Christmas."
      ],
      signals: ["suggest + V-ing", "suggest that + S + should + V"],
      examples: [
        { en: "Laura suggested going skiing in the Alps at Christmas.", vi: "Laura đề nghị đi trượt tuyết ở dãy Alps vào dịp Giáng sinh." },
        { en: "Laura suggested that we should go skiing in the Alps at Christmas.", vi: "Laura đề nghị rằng chúng tôi nên đi trượt tuyết ở dãy Alps vào dịp Giáng sinh." }
      ],
      mistakes: [
        { wrong: "Laura suggested us to go skiing.", right: "Laura suggested that we should go skiing. (\"suggest\" không đi với \"O + to V\")" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "He suggested visiting the museum. → He suggested that we ______________ (should) visit the museum.", accepted: ["should"], correct: "should", explanation: "suggest + V-ing → suggest that + S + should + V." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'Mai suggested watching the parade.' → Mai suggested that we ______________ (should) watch the parade.", accepted: ["should"], correct: "should", explanation: "suggest + V-ing → suggest that + S + should + V." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Nam suggested making Banh Chung together.' → ______________ (Nam suggested that we should make Banh Chung together).", accepted: ["nam suggested that we should make banh chung together"], correct: "Nam suggested that we should make Banh Chung together", explanation: "suggest + V-ing → suggest that + S + should + V." }
        ]
      }
    },
    {
      id: "g4", name: "A is more + adj + than any other N ⇄ No other N is as + adj + as A",
      usage: "So sánh hơn nhất kiểu \"A is more + adj + than any other N\" (A hơn bất kỳ N nào khác) có thể viết lại bằng \"No other N is as + adj + as A\" (không N nào khác bằng A), giữ nguyên nghĩa so sánh nhất.",
      formulas: [
        "A + is more + adj + than any other N.  →  No other N + is as + adj + as + A.",
        "My grandparents' house is more beautiful than any other house in the village. → No other house in the village is as beautiful as my grandparents' house."
      ],
      signals: ["A is more + adj + than any other N", "No other N is as + adj + as A"],
      examples: [
        { en: "My grandparents' house is more beautiful than any other house in the village.", vi: "Nhà ông bà tôi đẹp hơn bất kỳ ngôi nhà nào khác trong làng." },
        { en: "No other house in the village is as beautiful as my grandparents' house.", vi: "Không ngôi nhà nào khác trong làng đẹp bằng nhà ông bà tôi." }
      ],
      mistakes: [
        { wrong: "No other house is beautiful as my grandparents' house.", right: "No other house is as beautiful as my grandparents' house. (cần đủ cấu trúc \"as...as\")" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "This river is longer than any other river in the country. → No other river in the country is as ______________ (long) as this one.", accepted: ["long"], correct: "long", explanation: "A is more + adj + than any other N → No other N is as + adj + as A." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'This mountain is higher than any other mountain in Vietnam.' → No other mountain in Vietnam is as ______________ (high) as this one.", accepted: ["high"], correct: "high", explanation: "A is more + adj + than any other N → No other N is as + adj + as A." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Tet is more important than any other festival in Viet Nam.' → ______________ (No other festival in Viet Nam is as important as Tet).", accepted: ["no other festival in viet nam is as important as tet"], correct: "No other festival in Viet Nam is as important as Tet", explanation: "A is more + adj + than any other N → No other N is as + adj + as A." }
        ]
      }
    },
    {
      id: "g5", name: "(Bonus) look forward to + N/V-ing",
      usage: "\"look forward to\" (mong chờ, mong đợi) luôn được theo sau bởi một danh từ hoặc động từ dạng V-ing, không phải động từ nguyên thể.",
      formulas: [
        "look forward to + N/V-ing",
        "Many people look forward to the new year with hope and joy."
      ],
      signals: ["look forward to + N/V-ing"],
      examples: [
        { en: "Many people look forward to the new year with hope and joy.", vi: "Nhiều người mong chờ năm mới với hy vọng và niềm vui." },
        { en: "I'm looking forward to seeing you again.", vi: "Tôi rất mong được gặp lại bạn." }
      ],
      mistakes: [
        { wrong: "I look forward to see you.", right: "I look forward to seeing you. (\"to\" ở đây là giới từ, theo sau bởi V-ing, không phải V nguyên thể)" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "We look forward to ______________ (see/seeing) you soon.", accepted: ["seeing"], correct: "seeing", explanation: "look forward to + V-ing (không dùng V nguyên thể)." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Rewrite: 'She hopes to receive your reply soon.' → She is looking forward to ______________ (receiving) your reply.", accepted: ["receiving"], correct: "receiving", explanation: "look forward to + V-ing." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Complete: 'Children look forward to ______________ (receive) lucky money during Tet.'", accepted: ["receiving"], correct: "receiving", explanation: "look forward to + V-ing." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "Tet holiday is celebrated on the first day of the Lunar New Year in Viet Nam. <mark data-w=\"Some weeks before the New Year, the Vietnamese clean their houses and paint the walls\">Some weeks before the New Year, the Vietnamese clean their houses and paint the walls</mark>. New clothes are bought for the occasion. <mark data-w=\"One or two days before the festival, people make Banh chung\">One or two days before the festival, people make Banh chung</mark>, which is the traditional cake, and kinds of jam. On New Year's Eve, <mark data-w=\"the whole family get together for a reunion dinner\">the whole family get together for a reunion dinner</mark>. Every member of the family should be present during the dinner in which many different kinds of dishes are served. On the New Year morning, <mark data-w=\"the young members of the family pay their respects to the elders\">the young members of the family pay their respects to the elders</mark>. And <mark data-w=\"the children receive lucky money wrapped in red tiny envelopes\">the children receive lucky money wrapped in red tiny envelopes</mark>. Then people go to visit their neighbors, friends and relatives.",
    vocabInContext: {
      "Some weeks before the New Year, the Vietnamese clean their houses and paint the walls": "vài tuần trước Tết, người Việt dọn nhà và sơn tường",
      "One or two days before the festival, people make Banh chung": "một hoặc hai ngày trước lễ hội, mọi người gói bánh chưng",
      "the whole family get together for a reunion dinner": "cả gia đình sum họp cho bữa cơm đoàn tụ",
      "the young members of the family pay their respects to the elders": "các thành viên trẻ trong gia đình bày tỏ lòng tôn kính với người lớn tuổi",
      "the children receive lucky money wrapped in red tiny envelopes": "trẻ em nhận được tiền lì xì được gói trong những phong bao đỏ nhỏ"
    },
    translation: "<b>NGÀY TẾT Ở VIỆT NAM</b><br><br>Tết được tổ chức vào ngày đầu tiên của năm âm lịch ở Việt Nam. Vài tuần trước Tết, người Việt dọn dẹp nhà cửa và sơn lại tường. Quần áo mới được mua sắm cho dịp này. Một hoặc hai ngày trước lễ hội, mọi người gói bánh chưng — loại bánh truyền thống, và làm các loại mứt. Vào đêm giao thừa, cả gia đình sum họp cho bữa cơm đoàn tụ. Mỗi thành viên trong gia đình nên có mặt trong bữa ăn với nhiều món khác nhau được phục vụ. Vào buổi sáng năm mới, các thành viên trẻ trong gia đình bày tỏ lòng tôn kính với người lớn tuổi. Và trẻ em nhận được tiền lì xì được gói trong những phong bao đỏ nhỏ. Sau đó mọi người đi thăm hàng xóm, bạn bè và người thân.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "Vietnamese people paint their walls and clean their houses a few weeks before Tet.", correct: "True", explanation: "Đúng. Bài đọc nêu rõ điều này diễn ra vài tuần trước Tết." },
      { id: "r2", type: "truefalse", prompt: "Banh chung is made about a week before New Year's Eve.", correct: "False", explanation: "Sai. Bánh chưng được gói một hoặc hai ngày trước lễ, không phải một tuần." },
      { id: "r3", type: "truefalse", prompt: "It is important for all family members to attend the reunion dinner.", correct: "True", explanation: "Đúng. Mỗi thành viên trong gia đình nên có mặt trong bữa ăn." },
      { id: "r4", type: "truefalse", prompt: "Children give lucky money to the elders on the New Year morning.", correct: "False", explanation: "Sai. Trẻ em NHẬN tiền lì xì, không phải cho." },
      { id: "r5", type: "mcq", prompt: "What do people do one or two days before Tet?", options: { A: "They make traditional cake and jam.", B: "They buy new clothes.", C: "They paint their houses.", D: "They visit their neighbors and friends." }, correct: "A", explanation: "Bài đọc: \"One or two days before the festival, people make Banh chung... and kinds of jam.\"" },
      { id: "r6", type: "mcq", prompt: "The lucky money for children is put inside __________.", options: { A: "small red envelopes", B: "large boxes", C: "traditional cakes", D: "new clothes" }, correct: "A", explanation: "Bài đọc: \"the children receive lucky money wrapped in red tiny envelopes.\"" },
      { id: "r7", type: "fillblank", prompt: "Find the word in the passage that means 'người lớn tuổi'.", accepted: ["elders"], correct: "elders", explanation: "\"pay their respects to the elders\" — elders = người lớn tuổi." },
      { id: "r8", type: "mcq", prompt: "Who does the family visit after the New Year morning, according to the passage?", options: { A: "Neighbors, friends and relatives", B: "Only close relatives", C: "Teachers and classmates", D: "Government officials" }, correct: "A", explanation: "Bài đọc: \"people go to visit their neighbors, friends and relatives.\"" },
      { id: "r9", type: "truefalse", prompt: "Banh chung is a kind of modern, Western-style cake.", correct: "False", explanation: "Sai. Bài đọc: \"Banh chung, which is the traditional cake\" — bánh chưng là bánh truyền thống, không phải kiểu phương Tây hiện đại." }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "In some Asian countries, people celebrate the New Year for four or five days.", suggested: "Ở một số nước châu Á, người ta đón năm mới trong bốn hoặc năm ngày.", notes: "\"for + khoảng thời gian\" chỉ độ dài thời gian." },
    { id: "t2", en: "There is a great atmosphere when everyone waits for Big Ben to strike midnight.", suggested: "Có một bầu không khí tuyệt vời khi mọi người chờ đợi tiếng chuông Big Ben điểm nửa đêm.", notes: "\"wait for + N + to V\" (chờ đợi ai/cái gì làm gì)." },
    { id: "t3", en: "Many people watch fireworks and look forward to the new year with hope and joy.", suggested: "Nhiều người xem pháo hoa và mong chờ năm mới với hy vọng và niềm vui.", notes: "\"look forward to + N\" (mong chờ điều gì)." },
    { id: "t4", en: "On the New Year morning, the young members of the family pay their respects to the elders.", suggested: "Vào buổi sáng năm mới, các thành viên trẻ trong gia đình bày tỏ lòng tôn kính với người lớn tuổi.", notes: "\"pay respects to\" (bày tỏ lòng tôn kính)." },
    { id: "t5", en: "Then people go to visit their neighbors, friends and relatives.", suggested: "Sau đó mọi người đi thăm hàng xóm, bạn bè và người thân.", notes: "\"go to visit\" (đi thăm) diễn tả hành động nối tiếp." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "S + should + V ⇄ It's a good idea/thing to + V",
      formula: "S + should + V  →  It's a good idea/thing to + V",
      example: { before: "You should behave well during Tet.", after: "It's a good idea to behave well during Tet." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "You should arrive early. → It's a good idea ______________ (to arrive) early.", accepted: ["to arrive"], correct: "to arrive", explanation: "S + should + V → It's a good idea to + V." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'You should save some money.' → It's a good idea ______________ (to save) some money.", accepted: ["to save"], correct: "to save", explanation: "S + should + V → It's a good idea to + V." }
      ]
    },
    {
      id: "tr2", name: "S + is/are + V-ing ⇄ S + is/are busy + V-ing",
      formula: "S + is/are + V-ing  →  S + is/are busy + V-ing",
      example: { before: "John is cleaning some furniture in his room.", after: "John is busy cleaning some furniture in his room." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "She is cooking dinner. → She is busy ______________ (cooking) dinner.", accepted: ["cooking"], correct: "cooking", explanation: "S + is/are + V-ing → S + is/are busy + V-ing." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'They are decorating the house.' → They are busy ______________ (decorating) the house.", accepted: ["decorating"], correct: "decorating", explanation: "S + is/are + V-ing → S + is/are busy + V-ing." }
      ]
    },
    {
      id: "tr3", name: "suggest + V-ing ⇄ suggest that + S + should + V",
      formula: "S + suggested + V-ing  →  S + suggested that + S2 + should + V",
      example: { before: "Laura suggested going skiing in the Alps at Christmas.", after: "Laura suggested that we should go skiing in the Alps at Christmas." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "He suggested visiting the museum. → He suggested that we ______________ (should) visit the museum.", accepted: ["should"], correct: "should", explanation: "suggest + V-ing → suggest that + S + should + V." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'Mai suggested watching the parade.' → Mai suggested that we ______________ (should) watch the parade.", accepted: ["should"], correct: "should", explanation: "suggest + V-ing → suggest that + S + should + V." }
      ]
    },
    {
      id: "tr4", name: "A is more + adj + than any other N ⇄ No other N is as + adj + as A",
      formula: "A + is more + adj + than any other N  →  No other N + is as + adj + as + A",
      example: { before: "My grandparents' house is more beautiful than any other house in the village.", after: "No other house in the village is as beautiful as my grandparents' house." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "This river is longer than any other river in the country. → No other river in the country is as ______________ (long) as this one.", accepted: ["long"], correct: "long", explanation: "A is more + adj + than any other N → No other N is as + adj + as A." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'This mountain is higher than any other mountain in Vietnam.' → No other mountain in Vietnam is as ______________ (high) as this one.", accepted: ["high"], correct: "high", explanation: "A is more + adj + than any other N → No other N is as + adj + as A." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Lucky money' means:", options: { A: "tiền lì xì", B: "tiền tiết kiệm", C: "tiền lương", D: "tiền phạt" }, correct: "A", explanation: "lucky money (n) = tiền lì xì." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Elder' means:", options: { A: "trẻ em", B: "người lớn tuổi", C: "hàng xóm", D: "khách du lịch" }, correct: "B", explanation: "elder (n) = người lớn tuổi." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "The children receive ______________ (tiền lì xì) wrapped in red tiny envelopes.", accepted: ["lucky money"], correct: "lucky money", explanation: "lucky money (n) = tiền lì xì." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "You should behave well during Tet. → It's a good idea ______ behave well during Tet.", options: { A: "to", B: "for", C: "of", D: "at" }, correct: "A", explanation: "S + should + V → It's a good idea to + V." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "John is cleaning furniture. → John is busy ______ furniture.", options: { A: "to clean", B: "cleaning", C: "clean", D: "cleaned" }, correct: "B", explanation: "S + is/are busy + V-ing (không dùng \"to V\")." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "Laura suggested going skiing. → Laura suggested that we ______________ (should) go skiing.", accepted: ["should"], correct: "should", explanation: "suggest + V-ing → suggest that + S + should + V." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "My grandparents' house is more beautiful than any other house in the village. → No other house in the village is as ______________ (beautiful) as my grandparents' house.", accepted: ["beautiful"], correct: "beautiful", explanation: "A is more + adj + than any other N → No other N is as + adj + as A." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "Banh chung is made about a week before New Year's Eve.", correct: "False", explanation: "Sai theo bài đọc — chỉ một hoặc hai ngày trước lễ." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "It is important for all family members to attend the reunion dinner.", correct: "True", explanation: "Đúng theo bài đọc." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "What do people do one or two days before Tet?", options: { A: "They make traditional cake and jam.", B: "They buy new clothes.", C: "They paint their houses.", D: "They visit their neighbors and friends." }, correct: "A", explanation: "Bài đọc nêu rõ họ gói bánh chưng và làm mứt." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "Lucy and I have ______________ (DIFFER) opinions.", accepted: ["different"], correct: "different", explanation: "differ (v) → different (adj)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "Easter is a ______________ (RELIGION) holiday for Christians around the world.", accepted: ["religious"], correct: "religious", explanation: "religion (n) → religious (adj, +ous)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "On Easter Sunday, families come together for a ______________ (WONDER) dinner.", accepted: ["wonderful"], correct: "wonderful", explanation: "wonder (n/v) → wonderful (adj, +ful)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'mũ bảo hộ'?", options: { A: "hard hat", B: "lucky money", C: "reunion dinner", D: "atmosphere" }, correct: "A", explanation: "hard hat (n) = mũ bảo hộ." }
  ]
};
