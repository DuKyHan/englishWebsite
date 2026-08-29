const REVIEW = {
  id: "test27",
  testFile: "test27.html",
  grade: "Grade 6 — Global Success",
  unit: "Unit 2: My house",
  title: "Knowledge Review — Unit 2, Practice Test 1",

  // ---------------------------------------------------------
  // PART 1 — VOCABULARY REVIEW
  // ---------------------------------------------------------
  vocabulary: [
    { word: "classroom", pos: "n", ipa: "/ˈklæsruːm/", meaning: "phòng học", example: "Cambridge College has a lot of pupils and many modern classrooms.", exampleVi: "Trường Cao đẳng Cambridge có rất nhiều học sinh và nhiều phòng học hiện đại." },
    { word: "kitchen", pos: "n", ipa: "/ˈkɪtʃɪn/", meaning: "nhà bếp", example: "She is in the kitchen. It is the best place to prepare family meals.", exampleVi: "Cô ấy đang ở trong bếp. Đó là nơi tốt nhất để chuẩn bị bữa ăn gia đình." },
    { word: "messy", pos: "adj", ipa: "/ˈmesi/", meaning: "bừa bộn", example: "Your room is so messy! Dirty clothes, toys, and books are everywhere.", exampleVi: "Phòng của con bừa bộn quá! Quần áo bẩn, đồ chơi và sách vở khắp nơi." },
    { word: "located", pos: "adj", ipa: "/loʊˈkeɪtɪd/", meaning: "nằm ở, tọa lạc", example: "My grandparents live in a town house located in the suburb of the city.", exampleVi: "Ông bà tôi sống trong một ngôi nhà phố nằm ở ngoại ô thành phố." },
    { word: "balcony", pos: "n", ipa: "/ˈbælkəni/", meaning: "ban công", example: "My house is too small, but it has a nice balcony where I can read books.", exampleVi: "Nhà tôi hơi nhỏ, nhưng có một ban công đẹp để tôi đọc sách." },
    { word: "villa", pos: "n", ipa: "/ˈvɪlə/", meaning: "biệt thự", example: "Nam is twelve years old and he lives in a big, beautiful villa.", exampleVi: "Nam mười hai tuổi và cậu ấy sống trong một biệt thự lớn, đẹp." },
    { word: "suburb", pos: "n", ipa: "/ˈsʌbɜːrb/", meaning: "ngoại ô", example: "He lives in a big villa in the suburb of the city.", exampleVi: "Cậu ấy sống trong một biệt thự lớn ở ngoại ô thành phố." },
    { word: "engineer", pos: "n", ipa: "/ˌendʒɪˈnɪr/", meaning: "kỹ sư", example: "Nam's father works as an engineer.", exampleVi: "Bố của Nam làm kỹ sư." },
    { word: "pupil", pos: "n", ipa: "/ˈpjuːpl/", meaning: "học sinh (nhỏ tuổi)", example: "Nam's younger sister is a pupil.", exampleVi: "Em gái của Nam là một học sinh." },
    { word: "favorite", pos: "adj, n", ipa: "/ˈfeɪvərɪt/", meaning: "yêu thích; điều/vật được yêu thích nhất", example: "The living room is Nam's favorite place to watch television.", exampleVi: "Phòng khách là nơi yêu thích của Nam để xem ti vi." },
    { word: "separate", pos: "adj", ipa: "/ˈsepərət/", meaning: "riêng biệt", example: "Mr. Brown's house has a living room, a kitchen, a bathroom and a separate toilet.", exampleVi: "Nhà ông Brown có phòng khách, bếp, phòng tắm và một nhà vệ sinh riêng biệt." },
    { word: "narrow", pos: "adj", ipa: "/ˈnæroʊ/", meaning: "hẹp", example: "There is a garden in front of the house too, but it is very narrow.", exampleVi: "Phía trước nhà cũng có một khu vườn, nhưng nó rất hẹp." },
    { word: "peaceful", pos: "adj", ipa: "/ˈpiːsfl/", meaning: "yên bình", example: "My house is in a small village, so it is very quiet and peaceful.", exampleVi: "Nhà tôi ở một ngôi làng nhỏ nên rất yên tĩnh và yên bình." },
    { word: "delightful", pos: "adj", ipa: "/dɪˈlaɪtfl/", meaning: "ngon tuyệt, dễ chịu", example: "My mother cooks very well; she always makes delightful meals.", exampleVi: "Mẹ tôi nấu ăn rất giỏi; mẹ luôn làm những bữa ăn ngon tuyệt." },
    { word: "happiness", pos: "n", ipa: "/ˈhæpinəs/", meaning: "hạnh phúc", example: "My house is a place full of love and happiness.", exampleVi: "Nhà tôi là nơi tràn đầy tình yêu thương và hạnh phúc." },
    { word: "member", pos: "n", ipa: "/ˈmembər/", meaning: "thành viên", example: "There are four members in my family: my parents, my sister, and me.", exampleVi: "Gia đình tôi có bốn thành viên: bố mẹ, em gái và tôi." },
    { word: "fan", pos: "n", ipa: "/fæn/", meaning: "quạt", example: "Please turn the fan on. It's really hot in this classroom.", exampleVi: "Làm ơn bật quạt lên. Lớp học này nóng quá." },
    { word: "armchair", pos: "n", ipa: "/ˈɑːrmtʃer/", meaning: "ghế bành", example: "Nam can sit on the armchair and watch television with his family.", exampleVi: "Nam có thể ngồi trên ghế bành và xem ti vi cùng gia đình." }
  ],

  vocabPractice: {
    mcq: [
      { id: "vp1", prompt: "Choose the word that means 'biệt thự':", options: { A: "villa", B: "balcony", C: "armchair", D: "fan" }, correct: "A", explanation: "<b>villa</b> (n) = biệt thự." },
      { id: "vp2", prompt: "Choose the word that means 'kỹ sư':", options: { A: "engineer", B: "pupil", C: "member", D: "author" }, correct: "A", explanation: "<b>engineer</b> (n) = kỹ sư." },
      { id: "vp3", prompt: "\"Your room is so ______! Dirty clothes, toys, and books are everywhere.\"", options: { A: "messy", B: "tidy", C: "cozy", D: "peaceful" }, correct: "A", explanation: "\"<b>messy</b>\" (bừa bộn) khớp với hình ảnh đồ đạc vứt khắp nơi." },
      { id: "vp4", prompt: "Choose the word that means 'ngoại ô':", options: { A: "suburb", B: "village", C: "balcony", D: "garden" }, correct: "A", explanation: "<b>suburb</b> (n) = ngoại ô." },
      { id: "vp5", prompt: "\"My mother cooks very well; she always makes ______ meals.\"", options: { A: "delightful", B: "narrow", C: "separate", D: "located" }, correct: "A", explanation: "\"<b>delightful</b> meals\" (những bữa ăn ngon tuyệt) khớp với việc mẹ nấu ăn giỏi." },
      { id: "vp6", prompt: "Choose the word that means 'hẹp':", options: { A: "narrow", B: "peaceful", C: "messy", D: "delightful" }, correct: "A", explanation: "<b>narrow</b> (adj) = hẹp." }
    ],
    fillblank: [
      { id: "vf1", prompt: "My grandparents live in a town house ______________ (nằm ở) in the suburb of the city.", accepted: ["located"], correct: "located", explanation: "<b>located</b> (adj) = nằm ở, tọa lạc." },
      { id: "vf2", prompt: "My house has a nice ______________ (ban công) where I can read books.", accepted: ["balcony"], correct: "balcony", explanation: "<b>balcony</b> (n) = ban công." },
      { id: "vf3", prompt: "There are four ______________ (thành viên) in my family.", accepted: ["members"], correct: "members", explanation: "<b>member</b> (n) → members (số nhiều) = thành viên." },
      { id: "vf4", prompt: "Nam's younger sister is a ______________ (học sinh nhỏ tuổi).", accepted: ["pupil"], correct: "pupil", explanation: "<b>pupil</b> (n) = học sinh (nhỏ tuổi)." },
      { id: "vf5", prompt: "Mr. Brown's house has a bathroom and a ______________ (riêng biệt) toilet.", accepted: ["separate"], correct: "separate", explanation: "<b>separate</b> (adj) = riêng biệt." },
      { id: "vf6", prompt: "My house is full of love and ______________ (hạnh phúc).", accepted: ["happiness"], correct: "happiness", explanation: "<b>happiness</b> (n) = hạnh phúc." }
    ],
    matching: {
      left: ["villa", "suburb", "engineer", "pupil", "peaceful", "delightful"],
      right: ["biệt thự", "ngoại ô", "kỹ sư", "học sinh (nhỏ tuổi)", "yên bình", "ngon tuyệt, dễ chịu"],
      correctMap: [0, 1, 2, 3, 4, 5]
    },
    chooseWord: [
      { id: "cw1", prompt: "\"My house is in a small village, so it is very quiet and ______.\" (PEACE)", options: { A: "peace", B: "peaceful", C: "peacefully", D: "peaceless" }, correct: "B", explanation: "Cần tính từ song song với \"quiet\" → peace (n) → <b>peaceful</b> (adj, +ful)." },
      { id: "cw2", prompt: "\"My mother cooks very well; she always makes ______ meals.\" (DELIGHT)", options: { A: "delight", B: "delighted", C: "delightful", D: "delightfully" }, correct: "C", explanation: "Cần tính từ đứng trước danh từ \"meals\" → delight (n/v) → <b>delightful</b> (adj, +ful)." },
      { id: "cw3", prompt: "\"In conclusion, my house is a place full of love and ______.\" (HAPPY)", options: { A: "happy", B: "happily", C: "happiness", D: "unhappy" }, correct: "C", explanation: "Cần danh từ song song với \"love\" → happy (adj) → <b>happiness</b> (n, +ness)." }
    ],
    wordMeaning: [
      { id: "wm1", prompt: "What does 'suburb' mean?", options: { A: "ngoại ô", B: "trung tâm", C: "làng quê", D: "hải đảo" }, correct: "A", explanation: "suburb (n) = ngoại ô." },
      { id: "wm2", prompt: "What does 'narrow' mean?", options: { A: "rộng rãi", B: "hẹp", C: "sạch sẽ", D: "an toàn" }, correct: "B", explanation: "narrow (adj) = hẹp." },
      { id: "wm3", prompt: "What does 'located' mean?", options: { A: "nằm ở, tọa lạc", B: "bị phá hủy", C: "được xây mới", D: "bị bỏ hoang" }, correct: "A", explanation: "located (adj) = nằm ở, tọa lạc." }
    ],
    wordForm: [
      { id: "wf1", prompt: "My house is in a small village, so it is very quiet and ______________ (PEACE).", accepted: ["peaceful"], correct: "peaceful", explanation: "peace (n) → peaceful (adj, +ful)." },
      { id: "wf2", prompt: "In conclusion, my house is a place full of love and ______________ (HAPPY).", accepted: ["happiness"], correct: "happiness", explanation: "happy (adj) → happiness (n, +ness)." },
      { id: "wf3", prompt: "This living room is Nam's ______________ (FAVOR) place to watch television.", accepted: ["favorite"], correct: "favorite", explanation: "favor (n) → favorite (adj)." }
    ]
  },

  // ---------------------------------------------------------
  // PART 2 — GRAMMAR REVIEW & PRACTICE
  // ---------------------------------------------------------
  grammar: [
    {
      id: "g1", name: "There are + N1, N2, and N3 + in + nơi chốn ⇄ Nơi chốn + has + N1, N2, and N3",
      usage: "Khi liệt kê nhiều đồ vật có trong một nơi chốn, ta có thể dùng \"There are\" hoặc chuyển nơi chốn lên làm chủ ngữ với động từ \"has\" — hai cách diễn đạt có nghĩa tương đương.",
      formulas: [
        "There are + N1, N2, and N3 + in + nơi chốn.  →  Nơi chốn + has + N1, N2, and N3.",
        "There are a sink, a fridge, and a cooker in our kitchen. → Our kitchen has a sink, a fridge, and a cooker."
      ],
      signals: ["There are + N + in + nơi chốn", "Nơi chốn + has + N"],
      examples: [
        { en: "There are a sink, a fridge, and a cooker in our kitchen.", vi: "Có một bồn rửa, một tủ lạnh và một bếp nấu trong bếp nhà tôi." },
        { en: "Our kitchen has a sink, a fridge, and a cooker.", vi: "Bếp nhà tôi có một bồn rửa, một tủ lạnh và một bếp nấu." }
      ],
      mistakes: [
        { wrong: "Our kitchen have a sink, a fridge, and a cooker.", right: "Our kitchen has a sink, a fridge, and a cooker. (chủ ngữ số ít \"Our kitchen\" dùng \"has\", không dùng \"have\")" }
      ],
      practice: {
        level1: [
          { id: "g1l1a", type: "fillblank", prompt: "There are two sofas and a TV in the living room. → The living room ______________ (has) two sofas and a TV.", accepted: ["has"], correct: "has", explanation: "There are + N + in + nơi chốn → Nơi chốn + has + N." }
        ],
        level2: [
          { id: "g1l2a", type: "fillblank", prompt: "Rewrite: 'There are a bed, a wardrobe, and a desk in my bedroom.' → My bedroom ______________ (has) a bed, a wardrobe, and a desk.", accepted: ["has"], correct: "has", explanation: "There are + N + in + nơi chốn → Nơi chốn + has + N." }
        ],
        level3: [
          { id: "g1l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'There are a shower, a sink, and a mirror in the bathroom.' → ______________ (The bathroom has a shower, a sink, and a mirror).", accepted: ["the bathroom has a shower, a sink, and a mirror"], correct: "The bathroom has a shower, a sink, and a mirror", explanation: "There are + N + in + nơi chốn → Nơi chốn + has + N." }
        ]
      }
    },
    {
      id: "g2", name: "A + isn't/aren't + far from + B ⇄ B + is/are + close to + A",
      usage: "\"A + isn't far from + B\" (A không xa B) có nghĩa tương đương với \"B + is close to + A\" (B gần A) — chỉ đổi chiều chủ ngữ và tính từ trái nghĩa.",
      formulas: [
        "A + isn't far from + B.  →  B + is close to + A.",
        "The bus station isn't far from the new shopping center. → The new shopping center is close to the bus station."
      ],
      signals: ["isn't/aren't far from", "is/are close to"],
      examples: [
        { en: "The bus station isn't far from the new shopping center.", vi: "Trạm xe buýt không xa trung tâm mua sắm mới." },
        { en: "The new shopping center is close to the bus station.", vi: "Trung tâm mua sắm mới ở gần trạm xe buýt." }
      ],
      mistakes: [
        { wrong: "The new shopping center is close from the bus station.", right: "The new shopping center is close to the bus station. (\"close\" đi với giới từ \"to\", không dùng \"from\")" }
      ],
      practice: {
        level1: [
          { id: "g2l1a", type: "fillblank", prompt: "The park isn't far from my house. → My house is close ______________ (to) the park.", accepted: ["to"], correct: "to", explanation: "isn't far from → is close to." }
        ],
        level2: [
          { id: "g2l2a", type: "fillblank", prompt: "Rewrite: 'The school isn't far from the market.' → The market is close ______________ (to) the school.", accepted: ["to"], correct: "to", explanation: "isn't far from → is close to." }
        ],
        level3: [
          { id: "g2l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'Her office isn't far from the train station.' → ______________ (The train station is close to her office).", accepted: ["the train station is close to her office"], correct: "The train station is close to her office", explanation: "isn't far from → is close to." }
        ]
      }
    },
    {
      id: "g3", name: "A + is between + B and C ⇄ B and C + have + A + between them",
      usage: "\"A + is between + B and C\" (A nằm giữa B và C) có thể viết lại bằng \"B and C + have + A + between them\" (B và C có A nằm giữa chúng), nhấn mạnh B và C là chủ ngữ.",
      formulas: [
        "A + is between + B and C.  →  B and C + have + A + between them.",
        "My bedroom is between the bathroom and my parents' bedroom. → The bathroom and my parents' bedroom have my bedroom between them."
      ],
      signals: ["A is between B and C", "B and C have A between them"],
      examples: [
        { en: "My bedroom is between the bathroom and my parents' bedroom.", vi: "Phòng ngủ của tôi nằm giữa phòng tắm và phòng ngủ của bố mẹ." },
        { en: "The bathroom and my parents' bedroom have my bedroom between them.", vi: "Phòng tắm và phòng ngủ của bố mẹ có phòng ngủ của tôi nằm giữa chúng." }
      ],
      mistakes: [
        { wrong: "The bathroom and my parents' bedroom has my bedroom between them.", right: "The bathroom and my parents' bedroom have my bedroom between them. (chủ ngữ ghép \"the bathroom and my parents' bedroom\" số nhiều nên dùng \"have\")" }
      ],
      practice: {
        level1: [
          { id: "g3l1a", type: "fillblank", prompt: "The kitchen is between the living room and the garden. → The living room and the garden ______________ (have) the kitchen between them.", accepted: ["have"], correct: "have", explanation: "A is between B and C → B and C have A between them." }
        ],
        level2: [
          { id: "g3l2a", type: "fillblank", prompt: "Rewrite: 'The bathroom is between Tom's bedroom and Mary's bedroom.' → Tom's bedroom and Mary's bedroom ______________ (have) the bathroom between them.", accepted: ["have"], correct: "have", explanation: "A is between B and C → B and C have A between them." }
        ],
        level3: [
          { id: "g3l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'The dining room is between the kitchen and the living room.' → ______________ (The kitchen and the living room have the dining room between them).", accepted: ["the kitchen and the living room have the dining room between them"], correct: "The kitchen and the living room have the dining room between them", explanation: "A is between B and C → B and C have A between them." }
        ]
      }
    },
    {
      id: "g4", name: "No + N + in + nơi chốn + is + more + adj + than + X ⇄ X + is + the most + adj + N + in + nơi chốn",
      usage: "So sánh hơn dạng phủ định \"No + N + is + more + adj + than + X\" có nghĩa tương đương với so sánh nhất \"X + is + the most + adj + N\" — cả hai đều khẳng định X là nhất.",
      formulas: [
        "No + N + in + nơi chốn + is + more + adj + than + X.  →  X + is + the most + adj + N + in + nơi chốn.",
        "No house in the village is more comfortable than my house. → My house is the most comfortable house in the village."
      ],
      signals: ["No + N + is + more + adj + than", "the most + adj + N"],
      examples: [
        { en: "No house in the village is more comfortable than my house.", vi: "Không ngôi nhà nào trong làng thoải mái hơn nhà tôi." },
        { en: "My house is the most comfortable house in the village.", vi: "Nhà tôi là ngôi nhà thoải mái nhất trong làng." }
      ],
      mistakes: [
        { wrong: "My house is the most comfortable in the village house.", right: "My house is the most comfortable house in the village. (\"house\" đứng ngay sau tính từ so sánh nhất, trước cụm \"in the village\")" }
      ],
      practice: {
        level1: [
          { id: "g4l1a", type: "fillblank", prompt: "No garden in the city is more beautiful than this garden. → This garden is ______________ (the most) beautiful garden in the city.", accepted: ["the most"], correct: "the most", explanation: "No + N + is + more + adj + than → the most + adj + N." }
        ],
        level2: [
          { id: "g4l2a", type: "fillblank", prompt: "Rewrite: 'No street in the town is busier than this street.' → This street is ______________ (the busiest) street in the town.", accepted: ["the busiest"], correct: "the busiest", explanation: "No + N + is + more + adj + than → the + adj-est + N (tính từ ngắn)." }
        ],
        level3: [
          { id: "g4l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning: 'No room in the house is bigger than the living room.' → ______________ (The living room is the biggest room in the house).", accepted: ["the living room is the biggest room in the house"], correct: "The living room is the biggest room in the house", explanation: "No + N + is + more/adj-er + than → the + most/adj-est + N." }
        ]
      }
    },
    {
      id: "g5", name: "There is/are + N (khẳng định) ⇄ There isn't/aren't + any + N (phủ định)",
      usage: "Ở dạng phủ định của cấu trúc \"There is/are\", ta dùng \"There isn't/aren't + any + N\" (không có... nào) thay vì \"a/an/some\". \"any\" cũng được dùng trong câu hỏi.",
      formulas: [
        "There is/are + N.  ⇄  There isn't/aren't + any + N.",
        "There are some children in the pitch. ⇄ There aren't any children in the pitch."
      ],
      signals: ["There is/are + some + N", "There isn't/aren't + any + N"],
      examples: [
        { en: "There are some children in the pitch.", vi: "Có vài đứa trẻ ở trong sân bóng." },
        { en: "There aren't any children in the pitch right now.", vi: "Hiện tại không có đứa trẻ nào trong sân bóng." }
      ],
      mistakes: [
        { wrong: "There aren't some children in the pitch.", right: "There aren't any children in the pitch. (câu phủ định dùng \"any\", không dùng \"some\")" }
      ],
      practice: {
        level1: [
          { id: "g5l1a", type: "fillblank", prompt: "There are some books on the shelf. → There aren't ______________ (any) magazines on the shelf.", accepted: ["any"], correct: "any", explanation: "Câu phủ định với There is/are dùng \"any\", không dùng \"some\"." }
        ],
        level2: [
          { id: "g5l2a", type: "fillblank", prompt: "Rewrite as a question: 'There are some posters on the wall.' → Are there ______________ (any) posters on the wall?", accepted: ["any"], correct: "any", explanation: "Câu hỏi với There is/are cũng dùng \"any\"." }
        ],
        level3: [
          { id: "g5l3a", type: "fillblank", prompt: "Rewrite so it keeps the same meaning in the negative: 'There is a ruler on the desk.' → ______________ (There isn't a ruler on the desk) — Hoặc phủ định với 'any' cho danh từ số nhiều tương ứng.", accepted: ["there isn't a ruler on the desk"], correct: "There isn't a ruler on the desk", explanation: "There is + N (số ít) → There isn't + N ở dạng phủ định." }
        ]
      }
    }
  ],

  // ---------------------------------------------------------
  // PART 3 — READING PRACTICE
  // ---------------------------------------------------------
  reading: {
    passage: "Mr. Brown's house has got four bedrooms, a living room, a dining room, a kitchen, a bathroom and a <mark data-w=\"separate toilet\">separate toilet</mark>. There is a toilet in the bathroom too. The bedrooms and the bathroom are upstairs, and the living room, the dining room, the kitchen and the toilet are downstairs. The first bedroom is Mr. and Mrs. Brown's, the second one is Tom's, the third one is Mary's, and the last one is Anne's. There is a <mark data-w=\"baby bed\">baby bed</mark> in her bedroom too, but there is no baby living there. When you enter Mr. Brown's house, the room on the left is the living room, and the room on the right is the dining room. Where is the kitchen? It is <mark data-w=\"behind the dining room\">behind the dining room</mark>. And where is the toilet? It is <mark data-w=\"straight on\">straight on</mark>, in front of you. There is a garden behind the house, but it is not big. Is there a garden in front of the house too? Yes, there is, but it is <mark data-w=\"very narrow\">very narrow</mark>. When you go upstairs, Mr. and Mrs. Brown's bedroom is on the left. The bedroom on your right is Tom's, and the bathroom is between his bedroom and Mary's. Anne's bedroom is behind Mary's.",
    vocabInContext: {
      "separate toilet": "nhà vệ sinh riêng biệt",
      "baby bed": "nôi/giường trẻ em",
      "behind the dining room": "phía sau phòng ăn",
      "straight on": "đi thẳng",
      "very narrow": "rất hẹp"
    },
    translation: "<b>NGÔI NHÀ CỦA ÔNG BROWN</b><br><br>Nhà ông Brown có bốn phòng ngủ, một phòng khách, một phòng ăn, một nhà bếp, một phòng tắm và một nhà vệ sinh riêng biệt. Trong phòng tắm cũng có một nhà vệ sinh. Các phòng ngủ và phòng tắm ở trên tầng, còn phòng khách, phòng ăn, nhà bếp và nhà vệ sinh ở tầng trệt. Phòng ngủ đầu tiên là của ông bà Brown, phòng thứ hai là của Tom, phòng thứ ba là của Mary, và phòng cuối cùng là của Anne. Trong phòng của Anne cũng có một chiếc nôi trẻ em, nhưng không có em bé nào sống ở đó. Khi bước vào nhà ông Brown, căn phòng bên trái là phòng khách, và căn phòng bên phải là phòng ăn. Nhà bếp ở đâu? Nó nằm phía sau phòng ăn. Còn nhà vệ sinh ở đâu? Nó ở ngay phía trước, đi thẳng là tới. Phía sau nhà có một khu vườn, nhưng không lớn. Vậy phía trước nhà có vườn không? Có, nhưng nó rất hẹp. Khi lên tầng trên, phòng ngủ của ông bà Brown ở bên trái. Căn phòng bên phải là của Tom, và phòng tắm nằm giữa phòng của cậu ấy và phòng của Mary. Phòng của Anne ở phía sau phòng của Mary.",
    practice: [
      { id: "r1", type: "truefalse", prompt: "There are two toilets in Mr. Brown's house.", correct: "True", explanation: "Đúng. Nhà có một nhà vệ sinh riêng biệt và một nhà vệ sinh trong phòng tắm — tổng cộng hai." },
      { id: "r2", type: "truefalse", prompt: "The dining room is on the left when you enter the house.", correct: "False", explanation: "Sai. Phòng ăn ở bên phải, phòng khách mới ở bên trái." },
      { id: "r3", type: "truefalse", prompt: "Tom's bedroom and Mary's bedroom are next to each other.", correct: "False", explanation: "Sai. Phòng tắm nằm giữa hai phòng nên chúng không liền kề." },
      { id: "r4", type: "truefalse", prompt: "There is a small garden behind the house.", correct: "True", explanation: "Đúng. Bài đọc: \"There is a garden behind the house, but it is not big.\"" },
      { id: "r5", type: "mcq", prompt: "Where is the kitchen located?", options: { A: "Next to the living room.", B: "In front of the toilet.", C: "Behind the dining room.", D: "Upstairs, near the bathroom." }, correct: "C", explanation: "Bài đọc: \"Where is the kitchen? It is behind the dining room.\"" },
      { id: "r6", type: "mcq", prompt: "Whose bedroom is located behind Mary's bedroom?", options: { A: "Tom's", B: "Anne's", C: "Mr. and Mrs. Brown's", D: "The baby's" }, correct: "B", explanation: "Bài đọc: \"Anne's bedroom is behind Mary's.\"" },
      { id: "r7", type: "fillblank", prompt: "Find the phrase in the passage that means 'đi thẳng'.", accepted: ["straight on"], correct: "straight on", explanation: "\"It is straight on, in front of you.\" — straight on = đi thẳng." },
      { id: "r8", type: "mcq", prompt: "Whose bedroom is the first one in Mr. Brown's house?", options: { A: "Tom's", B: "Mary's", C: "Mr. and Mrs. Brown's", D: "Anne's" }, correct: "C", explanation: "Bài đọc: \"The first bedroom is Mr. and Mrs. Brown's.\"" },
      { id: "r9", type: "truefalse", prompt: "According to the passage, there is a baby living in Anne's bedroom.", correct: "False", explanation: "Sai. Bài đọc: \"There is a baby bed in her bedroom too, but there is no baby living there.\" — có nôi nhưng không có em bé nào sống ở đó." }
    ]
  },

  // ---------------------------------------------------------
  // PART 4 — TRANSLATION PRACTICE
  // ---------------------------------------------------------
  translation: [
    { id: "t1", en: "Mr. Brown's house has got four bedrooms, a living room, a dining room, a kitchen, a bathroom and a separate toilet.", suggested: "Nhà ông Brown có bốn phòng ngủ, một phòng khách, một phòng ăn, một nhà bếp, một phòng tắm và một nhà vệ sinh riêng biệt.", notes: "\"has got\" = \"has\" (có), thường dùng trong tiếng Anh Anh (British English)." },
    { id: "t2", en: "The bedrooms and the bathroom are upstairs, and the living room, the dining room, the kitchen and the toilet are downstairs.", suggested: "Các phòng ngủ và phòng tắm ở trên tầng, còn phòng khách, phòng ăn, nhà bếp và nhà vệ sinh ở tầng trệt.", notes: "\"upstairs/downstairs\" (trên tầng/tầng trệt) là trạng từ chỉ vị trí, không cần giới từ đi kèm." },
    { id: "t3", en: "Where is the kitchen? It is behind the dining room.", suggested: "Nhà bếp ở đâu? Nó nằm phía sau phòng ăn.", notes: "\"behind\" (phía sau) là giới từ chỉ vị trí tương đối." },
    { id: "t4", en: "There is a garden behind the house, but it is not big.", suggested: "Phía sau nhà có một khu vườn, nhưng nó không lớn.", notes: "\"There is/are + N\" (có...) dùng để giới thiệu sự tồn tại của vật gì đó." },
    { id: "t5", en: "The bedroom on your right is Tom's, and the bathroom is between his bedroom and Mary's.", suggested: "Căn phòng bên phải là của Tom, và phòng tắm nằm giữa phòng của cậu ấy và phòng của Mary.", notes: "\"between + A and B\" (nằm giữa A và B) diễn tả vị trí ở giữa hai vật." }
  ],

  // ---------------------------------------------------------
  // PART 5 — SENTENCE TRANSFORMATION PRACTICE
  // ---------------------------------------------------------
  transformation: [
    {
      id: "tr1", name: "There are + N + in + nơi chốn ⇄ Nơi chốn + has + N",
      formula: "There are + N1, N2, and N3 + in + nơi chốn  →  Nơi chốn + has + N1, N2, and N3",
      example: { before: "There are a sink, a fridge, and a cooker in our kitchen.", after: "Our kitchen has a sink, a fridge, and a cooker." },
      practice: [
        { id: "tr1p1", type: "fillblank", prompt: "There are two sofas and a TV in the living room. → The living room ______________ (has) two sofas and a TV.", accepted: ["has"], correct: "has", explanation: "There are + N + in + nơi chốn → Nơi chốn + has + N." },
        { id: "tr1p2", type: "fillblank", prompt: "Rewrite: 'There are a bed, a wardrobe, and a desk in my bedroom.' → My bedroom ______________ (has) a bed, a wardrobe, and a desk.", accepted: ["has"], correct: "has", explanation: "There are + N + in + nơi chốn → Nơi chốn + has + N." }
      ]
    },
    {
      id: "tr2", name: "isn't/aren't far from ⇄ is/are close to",
      formula: "A + isn't far from + B  →  B + is close to + A",
      example: { before: "The bus station isn't far from the new shopping center.", after: "The new shopping center is close to the bus station." },
      practice: [
        { id: "tr2p1", type: "fillblank", prompt: "The park isn't far from my house. → My house is close ______________ (to) the park.", accepted: ["to"], correct: "to", explanation: "isn't far from → is close to." },
        { id: "tr2p2", type: "fillblank", prompt: "Rewrite: 'The school isn't far from the market.' → The market is close ______________ (to) the school.", accepted: ["to"], correct: "to", explanation: "isn't far from → is close to." }
      ]
    },
    {
      id: "tr3", name: "A is between B and C ⇄ B and C have A between them",
      formula: "A + is between + B and C  →  B and C + have + A + between them",
      example: { before: "My bedroom is between the bathroom and my parents' bedroom.", after: "The bathroom and my parents' bedroom have my bedroom between them." },
      practice: [
        { id: "tr3p1", type: "fillblank", prompt: "The kitchen is between the living room and the garden. → The living room and the garden ______________ (have) the kitchen between them.", accepted: ["have"], correct: "have", explanation: "A is between B and C → B and C have A between them." },
        { id: "tr3p2", type: "fillblank", prompt: "Rewrite: 'The bathroom is between Tom's bedroom and Mary's bedroom.' → Tom's bedroom and Mary's bedroom ______________ (have) the bathroom between them.", accepted: ["have"], correct: "have", explanation: "A is between B and C → B and C have A between them." }
      ]
    },
    {
      id: "tr4", name: "No + N + is + more + adj + than ⇄ the most + adj + N",
      formula: "No + N + in + nơi chốn + is + more + adj + than + X  →  X + is + the most + adj + N + in + nơi chốn",
      example: { before: "No house in the village is more comfortable than my house.", after: "My house is the most comfortable house in the village." },
      practice: [
        { id: "tr4p1", type: "fillblank", prompt: "No garden in the city is more beautiful than this garden. → This garden is ______________ (the most) beautiful garden in the city.", accepted: ["the most"], correct: "the most", explanation: "No + N + is + more + adj + than → the most + adj + N." },
        { id: "tr4p2", type: "fillblank", prompt: "Rewrite: 'No street in the town is busier than this street.' → This street is ______________ (the busiest) street in the town.", accepted: ["the busiest"], correct: "the busiest", explanation: "No + N + is + more + adj + than → the + adj-est + N (tính từ ngắn)." }
      ]
    }
  ],

  // ---------------------------------------------------------
  // PART 6 — QUICK REVIEW (mini test, all skills)
  // ---------------------------------------------------------
  quickReview: [
    { id: "q1", cat: "Vocabulary", type: "mcq", prompt: "'Villa' means:", options: { A: "biệt thự", B: "căn hộ", C: "nhà sàn", D: "lều trại" }, correct: "A", explanation: "villa (n) = biệt thự." },
    { id: "q2", cat: "Vocabulary", type: "mcq", prompt: "'Engineer' means:", options: { A: "kỹ sư", B: "giáo viên", C: "bác sĩ", D: "họa sĩ" }, correct: "A", explanation: "engineer (n) = kỹ sư." },
    { id: "q3", cat: "Vocabulary", type: "fillblank", prompt: "My mother always makes ______________ (ngon tuyệt, dễ chịu) meals.", accepted: ["delightful"], correct: "delightful", explanation: "delightful (adj) = ngon tuyệt, dễ chịu." },
    { id: "q4", cat: "Grammar", type: "mcq", prompt: "There are a sink, a fridge, and a cooker in our kitchen. → Our kitchen ______ a sink, a fridge, and a cooker.", options: { A: "has", B: "have", C: "is", D: "are" }, correct: "A", explanation: "There are + N + in + nơi chốn → Nơi chốn + has + N." },
    { id: "q5", cat: "Grammar", type: "mcq", prompt: "The bus station isn't far from the shopping center. → The shopping center is close ______ the bus station.", options: { A: "from", B: "to", C: "with", D: "of" }, correct: "B", explanation: "\"close to\" là cụm cố định (gần với)." },
    { id: "q6", cat: "Grammar", type: "fillblank", prompt: "My bedroom is between the bathroom and my parents' bedroom. → The bathroom and my parents' bedroom ______________ (have) my bedroom between them.", accepted: ["have"], correct: "have", explanation: "A is between B and C → B and C have A between them." },
    { id: "q7", cat: "Grammar", type: "fillblank", prompt: "No house in the village is more comfortable than my house. → My house is ______________ (the most) comfortable house in the village.", accepted: ["the most"], correct: "the most", explanation: "No + N + is + more + adj + than → the most + adj + N." },
    { id: "q8", cat: "Reading", type: "truefalse", prompt: "There are two toilets in Mr. Brown's house.", correct: "True", explanation: "Đúng theo bài đọc." },
    { id: "q9", cat: "Reading", type: "truefalse", prompt: "Tom's bedroom and Mary's bedroom are next to each other.", correct: "False", explanation: "Sai. Phòng tắm nằm giữa hai phòng." },
    { id: "q10", cat: "Reading", type: "mcq", prompt: "Where is the kitchen located?", options: { A: "Next to the living room.", B: "In front of the toilet.", C: "Behind the dining room.", D: "Upstairs, near the bathroom." }, correct: "C", explanation: "Bài đọc nêu rõ nhà bếp nằm phía sau phòng ăn." },
    { id: "q11", cat: "Writing", type: "fillblank", prompt: "My house is in a small village, so it is very quiet and ______________ (PEACE).", accepted: ["peaceful"], correct: "peaceful", explanation: "peace (n) → peaceful (adj, +ful)." },
    { id: "q12", cat: "Writing", type: "fillblank", prompt: "In conclusion, my house is a place full of love and ______________ (HAPPY).", accepted: ["happiness"], correct: "happiness", explanation: "happy (adj) → happiness (n, +ness)." },
    { id: "q13", cat: "Writing", type: "fillblank", prompt: "There are four ______________ (MEMBER) in my family.", accepted: ["members"], correct: "members", explanation: "member (n) → members (số nhiều)." },
    { id: "q14", cat: "Vocabulary", type: "mcq", prompt: "Which word means 'nằm ở, tọa lạc'?", options: { A: "located", B: "narrow", C: "separate", D: "messy" }, correct: "A", explanation: "located (adj) = nằm ở, tọa lạc." }
  ]
};
